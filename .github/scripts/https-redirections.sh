#!/usr/bin/env bash
# Redirections en https : nginx (derrière Cloudflare) écrivait des adresses
# absolues en http:// quand il ajoute le / final d'un dossier
# (ex. /mentions-legales -> http://jimmybomy.fr/mentions-legales/).
# Avec « absolute_redirect off », il renvoie /mentions-legales/ et le
# navigateur reste en https.
set -euo pipefail
CONF=/etc/nginx/conf.d/zz-redirections-relatives.conf

echo "=== Réglages de redirection déjà présents ==="
nginx -T 2>/dev/null | grep -nE '^\s*(absolute_redirect|port_in_redirect|server_name_in_redirect)\b' || echo "(aucun)"

if [ -f "$CONF" ]; then echo "Déjà en place : $CONF"; cat "$CONF"; exit 0; fi

printf '# Ajouté le %s : redirections relatives, pour rester en https derrière Cloudflare.\nabsolute_redirect off;\n' "$(date +%F)" > "$CONF"

if ! nginx -T 2>/dev/null | grep -q "$CONF"; then
  rm -f "$CONF"; echo "::error::conf.d n'est pas inclus dans la config nginx : rien n'a été changé"; exit 1
fi
if nginx -t; then
  systemctl reload nginx
  echo "OK : $CONF ajouté, nginx rechargé"
else
  rm -f "$CONF"; echo "::error::nginx refuse la config : retour en arrière, rien n'a été changé"; exit 1
fi
