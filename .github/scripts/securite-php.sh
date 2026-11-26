#!/usr/bin/env bash
# Mise à jour de sécurité du VPS (PHP2Shell CVE-2026-109618 / CVE-2026-109619,
# failles nginx HTTP/2) + recherche de traces d'intrusion.
# Lancé en root par .github/workflows/securite.yml (bash -s via SSH).
# Le dépôt est PUBLIC : les journaux de l'Action le sont aussi. On n'y écrit donc
# que des résumés ; le détail va dans un fichier lisible par root seulement.
set -u
umask 077
OUT="/root/audit-securite-$(date +%F-%H%M).txt"
: > "$OUT"
pub() { echo "$*"; echo "$*" >> "$OUT"; }
log() { echo "$*" >> "$OUT"; }
SINCE="2026-10-17"   # début de l'exploitation observée

command -v apt-get >/dev/null || { pub "ERREUR : ce serveur n'utilise pas apt, mise à jour à faire à la main."; exit 1; }

# --- État des correctifs PHP pour chaque branche installée --------------------
ver_ge() { [ "$(printf '%s\n%s\n' "$2" "$1" | sort -V | head -n1)" = "$2" ]; }
fixed_for() { case "$1" in 8.2) echo 8.2.35;; 8.3) echo 8.3.36;; 8.4) echo 8.4.27;; 8.5) echo 8.5.12;; *) echo "";; esac; }
php_state() { # $1 = étiquette ; écrit l'état, renvoie 1 si une branche reste vulnérable
  local bad=0 any=0 v up fx cl
  for d in /etc/php/*/; do
    v=$(basename "$d"); command -v "php$v" >/dev/null || continue; any=1
    up=$("php$v" -r 'echo PHP_VERSION;' 2>/dev/null)
    fx=$(fixed_for "$v")
    cl=$(ls /usr/share/doc/php"$v"-common/changelog.Debian.gz 2>/dev/null | head -n1)
    if { [ -n "$fx" ] && ver_ge "$up" "$fx"; } || { [ -n "$cl" ] && zgrep -qs 'CVE-2026-109618' "$cl" && zgrep -qs 'CVE-2026-109619' "$cl"; }; then
      log "$1 PHP $v ($up) : corrigé"; echo "$v:ok"
    else
      log "$1 PHP $v ($up) : VULNÉRABLE"; echo "$v:bad"; bad=1
    fi
  done
  [ "$any" = 1 ] || echo "none"
  return $bad
}

BEFORE=$(php_state "[avant]")

# --- Mise à jour ciblée (PHP, Apache, nginx) ----------------------------------
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq >> "$OUT" 2>&1 || pub "Attention : apt-get update a signalé une erreur."
PKGS=$(dpkg-query -W -f='${db:Status-Abbrev} ${Package}\n' 2>/dev/null \
  | awk '$1=="ii" && $2 ~ /^(php|libapache2-mod-php|apache2|nginx|libnginx)/ {print $2}')
if [ -n "$PKGS" ]; then
  # shellcheck disable=SC2086
  apt-get -y -qq -o Dpkg::Options::=--force-confold -o Dpkg::Options::=--force-confdef \
    install --only-upgrade $PKGS >> "$OUT" 2>&1 && pub "Paquets PHP / serveur web mis à jour." \
    || pub "Attention : la mise à jour des paquets a échoué (détail dans le rapport)."
fi

# --- Mesure de protection supplémentaire conseillée par PHP (CVE-2026-109619) --
for d in /etc/php/*/fpm/conf.d /etc/php/*/apache2/conf.d /etc/php/*/cgi/conf.d; do
  [ -d "$d" ] && printf '; Protection PHP2Shell (CVE-2026-109619), ajoutée le %s\nsession.upload_progress.enabled = 0\n' "$(date +%F)" > "$d/99-securite.ini"
done

# --- Redémarrage : les anciens processus PHP gardent le code vulnérable -------
for u in $(systemctl list-units --type=service --state=running --no-legend 'php*-fpm*' 2>/dev/null | awk '{print $1}'); do
  systemctl restart "$u" && log "redémarré : $u"
done
if systemctl is-active --quiet apache2; then
  apache2ctl configtest >> "$OUT" 2>&1 && systemctl restart apache2 && log "redémarré : apache2"
fi
if systemctl is-active --quiet nginx; then
  nginx -t >> "$OUT" 2>&1 && systemctl reload nginx && log "rechargé : nginx"
fi

AFTER=$(php_state "[après]"); OKAFTER=$?
pub ""
pub "=== PHP ==="
for e in $BEFORE; do pub "Avant la mise à jour : PHP ${e%%:*} $( [ "${e#*:}" = ok ] && echo 'déjà corrigé' || echo 'VULNÉRABLE')"; done
for e in $AFTER;  do pub "Après la mise à jour : PHP ${e%%:*} $( [ "${e#*:}" = ok ] && echo 'corrigé' || echo 'TOUJOURS VULNÉRABLE (pas de correctif disponible dans les dépôts)')"; done

# --- nginx : failles RCE HTTP/2 (CVE-2026-123633, -123007…), corrigées en 1.30.7 / 1.31.9 ---
if command -v nginx >/dev/null; then
  nv=$(nginx -v 2>&1 | sed -n 's#.*nginx/\([0-9.]*\).*#\1#p')
  ncl=$(ls /usr/share/doc/nginx*/changelog.Debian.gz 2>/dev/null | head -n1)
  nfix=no
  case "$nv" in
    1.30.*) ver_ge "$nv" 1.30.7 && nfix=yes ;;
    *) ver_ge "$nv" 1.31.9 && nfix=yes ;;
  esac
  [ -n "$ncl" ] && zgrep -qs 'CVE-2026-123007' "$ncl" && zgrep -qs 'CVE-2026-123633' "$ncl" && nfix=yes
  log "nginx $nv, corrigé : $nfix"
  h2=$(nginx -T 2>/dev/null | grep -Ev '^\s*#' | grep -Ec '(listen[^;]*\bhttp2\b|^\s*http2\s+on)' || true)
  pub ""
  pub "=== nginx ==="
  if [ "$nfix" = yes ]; then
    pub "nginx : corrigé"
  else
    pub "nginx : pas encore de correctif dans les dépôts installés"
    if [ "${h2:-0}" -gt 0 ]; then
      pub "HTTP/2 activé sur nginx : oui -> les failles RCE sont exploitables"
      if ver_ge "$nv" 1.25.1; then
        printf '# Protection CVE-2026-123633 / CVE-2026-123007, ajoutée le %s. À retirer après mise à jour de nginx.\nhttp2 off;\n' "$(date +%F)" > /etc/nginx/conf.d/99-securite-http2-off.conf
        if nginx -t >> "$OUT" 2>&1; then systemctl reload nginx; pub "Protection appliquée : HTTP/2 désactivé sur nginx (Cloudflare continue de servir le site en HTTP/2 aux visiteurs)."
        else rm -f /etc/nginx/conf.d/99-securite-http2-off.conf; pub "Protection automatique impossible (config nginx refusée) : à faire à la main."; fi
      else
        pub "nginx trop ancien pour la directive http2 off : retirer « http2 » des lignes listen à la main."
      fi
    else
      pub "HTTP/2 activé sur nginx : non -> les deux failles RCE HTTP/2 ne sont pas exploitables"
    fi
  fi
  h2b=$(nginx -T 2>/dev/null | grep -Ec '(^\s*listen[^;]*\bhttp2\b|^\s*http2\s+on)' || true)
  log "lignes qui activent encore http2 : $h2b"
  [ "$nfix" = no ] && [ "${h2b:-0}" -gt 0 ] && pub "Attention : $h2b ligne(s) de config activent encore HTTP/2 (détail dans le rapport)."
fi

# --- Recherche de traces d'intrusion (détail privé, chiffres publics) ---------
log ""; log "=== Traces ==="
SITE=/var/www/jimmybomy.fr
n_git=0; n_new=0; n_other=0; n_tmp=0; n_proc=0
if [ -d "$SITE/.git" ]; then
  chg=$(git -C "$SITE" status --porcelain --untracked-files=all 2>/dev/null)
  n_git=$(printf '%s' "$chg" | grep -c . || true)
  log "[git status du site]"; log "$chg"
fi
while IFS= read -r f; do
  [ -z "$f" ] && continue
  case "$f" in
    "$SITE"/*) git -C "$SITE" ls-files --error-unmatch "${f#$SITE/}" >/dev/null 2>&1 || { n_new=$((n_new+1)); log "PHP hors git modifié depuis $SINCE : $f"; } ;;
    *) n_other=$((n_other+1)); log "PHP (autre dossier) modifié depuis $SINCE : $f" ;;
  esac
done < <(find /var/www -type f \( -name '*.php' -o -name '*.phtml' -o -name '*.php[0-9]' \) -newermt "$SINCE" 2>/dev/null)
while IFS= read -r f; do [ -n "$f" ] && { n_tmp=$((n_tmp+1)); log "Fichier suspect dans un dossier temporaire : $f"; }; done \
  < <(find /tmp /var/tmp /dev/shm -type f \( -name '*.php*' -o -perm -u+x \) -newermt "$SINCE" 2>/dev/null)
procs=$(ps -u www-data -o pid=,args= 2>/dev/null | grep -Ev 'php-fpm|apache2|nginx' || true)
n_proc=$(printf '%s' "$procs" | grep -c . || true)
log "[processus www-data inhabituels]"; log "$procs"
cron_www=$(crontab -l -u www-data 2>/dev/null | grep -v '^#' | grep -c . || true); cron_www=${cron_www:-0}
log "[crontab www-data]"; crontab -l -u www-data >> "$OUT" 2>&1
log "[clés SSH root]"; ls -l --time-style=+%F /root/.ssh/authorized_keys >> "$OUT" 2>&1; awk '{print $1, $NF}' /root/.ssh/authorized_keys >> "$OUT" 2>/dev/null

pub ""
pub "=== Traces d'intrusion (depuis le $SINCE) ==="
pub "Fichiers du site modifiés ou ajoutés par rapport à GitHub : $n_git"
pub "Fichiers PHP inconnus de GitHub dans le site : $n_new"
pub "Fichiers PHP récents dans d'autres dossiers de /var/www : $n_other (à examiner, peut être normal)"
pub "Fichiers suspects dans /tmp, /var/tmp, /dev/shm : $n_tmp"
pub "Processus inhabituels lancés par le serveur web : $n_proc"
pub "Tâches planifiées du serveur web : $cron_www"
pub "Clés SSH root : $(grep -c . /root/.ssh/authorized_keys 2>/dev/null || echo 0)"
pub ""
pub "Rapport détaillé (root uniquement) sur le VPS : $OUT"
exit $OKAFTER
