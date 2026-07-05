<?php
declare(strict_types=1);
require __DIR__ . '/../lib/db.php';

/* ---------- En-têtes de sécurité ---------- */
$nonce = base64_encode(random_bytes(12));
define('NONCE', $nonce);
header("Content-Security-Policy: default-src 'self'; script-src 'nonce-$nonce'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; object-src 'none'");
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
header('X-Frame-Options: DENY');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Permissions-Policy: geolocation=(), camera=(), microphone=(), interest-cohort=()');
header('Cache-Control: no-store, max-age=0');

session_set_cookie_params([
    'lifetime' => 0, 'path' => '/admin',
    'secure' => true, 'httponly' => true, 'samesite' => 'Lax',
]);
session_name('bomyadm');
session_start();

/* ---------- Déconnexion auto après 1 h d'inactivité ---------- */
if (!empty($_SESSION['auth'])) {
    if (isset($_SESSION['last']) && (time() - (int)$_SESSION['last']) > 3600) {
        $_SESSION = [];
        session_destroy();
        header('Location: /admin/?expired=1');
        exit;
    }
    $_SESSION['last'] = time();
}

function h($s): string { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function setting(string $k, $def = null) {
    $s = pdo()->prepare('SELECT v FROM settings WHERE k = ?');
    $s->execute([$k]);
    $v = $s->fetchColumn();
    return $v === false ? $def : $v;
}
function setSetting(string $k, string $v): void {
    $s = pdo()->prepare('INSERT INTO settings (k, v) VALUES (?, ?) ON DUPLICATE KEY UPDATE v = VALUES(v)');
    $s->execute([$k, $v]);
}
if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(16));
function csrf_ok(): bool { return isset($_POST['csrf']) && hash_equals($_SESSION['csrf'] ?? '', (string)$_POST['csrf']); }

/* Empreinte IP (anti-brute-force ciblé, ne bloque pas les autres) */
function ipKeySuffix(): string { return substr(hash('sha256', (string)cfg('secret') . '|' . client_ip()), 0, 16); }

/* Temps relatif */
function ago(string $ts): string {
    $s = time() - strtotime($ts);
    if ($s < 60)    return "à l'instant";
    if ($s < 3600)  return 'il y a ' . (int)floor($s / 60) . ' min';
    if ($s < 86400) return 'il y a ' . (int)floor($s / 3600) . ' h';
    $d = (int)floor($s / 86400);
    if ($d < 7)     return "il y a {$d} j";
    return date('d/m/Y', strtotime($ts));
}
/* Email vs téléphone */
function contactKind(string $c): array {
    $c = trim($c);
    if (strpos($c, '@') !== false) {
        return ['email', 'mailto:' . rawurlencode($c) . '?subject=' . rawurlencode('Votre projet de site — Jimmy Bomy')];
    }
    $d = preg_replace('/\D/', '', $c);
    if (strlen($d) === 10 && $d[0] === '0') $d = '33' . substr($d, 1);
    return ['phone', $d];
}
/* Regroupe/nettoie un référent */
function refLabel(string $ref): string {
    $host = parse_url($ref, PHP_URL_HOST);
    $h = strtolower((string)($host ?: $ref));
    if (strpos($h, 'instagram') !== false)  return 'Instagram';
    if (strpos($h, 'linkedin') !== false)   return 'LinkedIn';
    if (strpos($h, 'facebook') !== false || strpos($h, 'fb.') !== false) return 'Facebook';
    if (strpos($h, 'google') !== false)     return 'Google';
    if (strpos($h, 't.co') !== false || strpos($h, 'twitter') !== false || strpos($h, 'x.com') !== false) return 'X (Twitter)';
    if (strpos($h, 'bing') !== false)       return 'Bing';
    if (strpos($h, 'youtu') !== false)      return 'YouTube';
    if (strpos($h, 'tiktok') !== false)     return 'TikTok';
    return preg_replace('/^www\./', '', $h);
}
/* Logo BomyOS (SVG inline) */
function markSvg(int $s = 32): string {
    return '<svg viewBox="0 0 32 32" width="' . $s . '" height="' . $s . '" aria-hidden="true"><defs><linearGradient id="bmg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c6ff4e"/><stop offset="1" stop-color="#7cc4ff"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#bmg)"/><rect x="7" y="9.5" width="18" height="13" rx="2.6" fill="#0d0f14"/><circle cx="10.5" cy="13" r="1.15" fill="#ff5f57"/><circle cx="14" cy="13" r="1.15" fill="#febc2e"/><circle cx="17.5" cy="13" r="1.15" fill="#28c840"/></svg>';
}

$adminHash = setting('admin_hash');
$action = $_POST['action'] ?? $_GET['action'] ?? '';
$err = '';

/* ---- Déconnexion ---- */
if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();
    header('Location: /admin/');
    exit;
}

/* ---- Premier accès : création du mot de passe ---- */
if (!$adminHash) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'setup' && csrf_ok()) {
        $p = (string)($_POST['password'] ?? '');
        if (strlen($p) < 8) {
            $err = 'Mot de passe : 8 caractères minimum.';
        } else {
            setSetting('admin_hash', password_hash($p, PASSWORD_DEFAULT));
            $_SESSION['auth'] = true;
            $_SESSION['last'] = time();
            session_regenerate_id(true);
            header('Location: /admin/');
            exit;
        }
    }
    render_shell('Créer le mot de passe admin', function () use ($err) { ?>
        <form method="post" class="card auth">
            <div class="logo"><?= markSvg(34) ?></div>
            <h1>Espace privé</h1>
            <div class="sub">BomyOS · première connexion</div>
            <p class="muted">Choisis ton mot de passe. Il protège l'accès à tes leads (8 caractères minimum). Personne d'autre ne peut le définir tant qu'il n'existe pas.</p>
            <?php if ($err): ?><div class="alert"><?= h($err) ?></div><?php endif; ?>
            <input type="hidden" name="action" value="setup">
            <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
            <input type="password" name="password" placeholder="Nouveau mot de passe" autofocus required minlength="8">
            <button class="btn" type="submit">Créer mon accès</button>
        </form>
    <?php });
    exit;
}

/* ---- Connexion (anti-brute-force par IP) ---- */
if (empty($_SESSION['auth'])) {
    $sfx = ipKeySuffix();
    $lockUntil = (int)setting("lock_$sfx", 0);
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'login' && csrf_ok()) {
        if (time() < $lockUntil) {
            $err = 'Trop de tentatives. Réessaie dans quelques minutes.';
        } elseif (password_verify((string)($_POST['password'] ?? ''), $adminHash)) {
            $_SESSION['auth'] = true;
            $_SESSION['last'] = time();
            session_regenerate_id(true);
            setSetting("fail_$sfx", '0');
            header('Location: /admin/');
            exit;
        } else {
            $f = (int)setting("fail_$sfx", 0) + 1;
            setSetting("fail_$sfx", (string)$f);
            if ($f >= 5) {
                setSetting("lock_$sfx", (string)(time() + 900));
                setSetting("fail_$sfx", '0');
                $err = '5 échecs — accès bloqué 15 minutes.';
            } else {
                $err = 'Mot de passe incorrect.';
            }
        }
    }
    $expired = isset($_GET['expired']);
    render_shell('Connexion', function () use ($err, $expired) { ?>
        <form method="post" class="card auth">
            <div class="logo"><?= markSvg(34) ?></div>
            <h1>Espace privé</h1>
            <div class="sub">BomyOS · admin</div>
            <?php if ($expired && !$err): ?><div class="alert">Session expirée — reconnecte-toi.</div><?php endif; ?>
            <?php if ($err): ?><div class="alert"><?= h($err) ?></div><?php endif; ?>
            <input type="hidden" name="action" value="login">
            <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
            <input type="password" name="password" placeholder="Mot de passe" autofocus required>
            <button class="btn" type="submit">Entrer</button>
        </form>
    <?php });
    exit;
}

/* ================= ZONE AUTHENTIFIÉE ================= */
$pdo = pdo();

/* Actions POST */
if ($_SERVER['REQUEST_METHOD'] === 'POST' && csrf_ok()) {
    if ($action === 'seen') {
        $st = $pdo->prepare('UPDATE leads SET seen = 1 WHERE id = ?');
        $st->execute([(int)($_POST['id'] ?? 0)]);
        header('Location: /admin/');
        exit;
    }
    if ($action === 'del') {
        $st = $pdo->prepare('DELETE FROM leads WHERE id = ?');
        $st->execute([(int)($_POST['id'] ?? 0)]);
        header('Location: /admin/');
        exit;
    }
    if ($action === 'chpass') {
        $cur = (string)($_POST['current'] ?? '');
        $new = (string)($_POST['new'] ?? '');
        if (!password_verify($cur, $adminHash)) {
            $err = 'Mot de passe actuel incorrect.';
        } elseif (strlen($new) < 8) {
            $err = 'Nouveau mot de passe : 8 caractères minimum.';
        } else {
            setSetting('admin_hash', password_hash($new, PASSWORD_DEFAULT));
            $err = 'ok';
        }
    }
}

/* Données */
$leads = $pdo->query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 300')->fetchAll();
$newCount = (int)$pdo->query('SELECT COUNT(*) FROM leads WHERE seen = 0')->fetchColumn();

$one = fn(string $sql) => (int)$pdo->query($sql)->fetchColumn();
$pvToday = $one("SELECT COUNT(*) FROM hits WHERE event='pageview' AND created_at >= CURDATE()");
$pv7     = $one("SELECT COUNT(*) FROM hits WHERE event='pageview' AND created_at >= (NOW() - INTERVAL 7 DAY)");
$pv30    = $one("SELECT COUNT(*) FROM hits WHERE event='pageview' AND created_at >= (NOW() - INTERVAL 30 DAY)");
$uniq7   = $one("SELECT COUNT(DISTINCT iph) FROM hits WHERE event='pageview' AND created_at >= (NOW() - INTERVAL 7 DAY)");

/* Série 14 jours */
$dailyRaw = $pdo->query(
    "SELECT DATE(created_at) d, COUNT(*) c FROM hits
     WHERE event='pageview' AND created_at >= (CURDATE() - INTERVAL 13 DAY)
     GROUP BY DATE(created_at)"
)->fetchAll(PDO::FETCH_KEY_PAIR);
$series = [];
for ($i = 13; $i >= 0; $i--) {
    $day = date('Y-m-d', strtotime("-$i day"));
    $series[$day] = (int)($dailyRaw[$day] ?? 0);
}
$chartMax = max(1, max($series));
$pv14 = array_sum($series);

/* Sources (exclut l'auto-référence, regroupe par plateforme) */
$refRows = $pdo->query(
    "SELECT ref, COUNT(*) c FROM hits
     WHERE event='pageview' AND ref <> '' AND ref NOT LIKE '%jimmybomy.fr%'
     AND created_at >= (NOW() - INTERVAL 30 DAY)
     GROUP BY ref"
)->fetchAll();
$refAgg = [];
foreach ($refRows as $r) {
    $lbl = refLabel($r['ref']);
    if ($lbl === '') continue;
    $refAgg[$lbl] = ($refAgg[$lbl] ?? 0) + (int)$r['c'];
}
arsort($refAgg);
$refAgg = array_slice($refAgg, 0, 8, true);
$refMax = $refAgg ? max($refAgg) : 1;

$topApps = $pdo->query(
    "SELECT event, COUNT(*) c FROM hits
     WHERE event LIKE 'open:%' AND created_at >= (NOW() - INTERVAL 30 DAY)
     GROUP BY event ORDER BY c DESC LIMIT 8"
)->fetchAll();
$appMax = $topApps ? max(array_column($topApps, 'c')) : 1;

/* En-tête */
$greet = ((int)date('G') < 18) ? 'Bonjour' : 'Bonsoir';
$JD = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
$JM = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
$today = $JD[(int)date('w')] . ' ' . (int)date('j') . ' ' . $JM[(int)date('n') - 1];

render_shell('Dashboard', function () use (
    $leads, $newCount, $pvToday, $pv7, $pv30, $uniq7, $refAgg, $topApps,
    $refMax, $appMax, $series, $chartMax, $pv14, $err, $greet, $today
) { ?>
    <div class="bar">
        <div class="brand"><?= markSvg(26) ?> BomyOS · admin</div>
        <div class="topright">
            <a class="link" href="https://jimmybomy.fr" target="_blank" rel="noopener">Voir le site</a>
            <form method="post" style="margin:0">
                <input type="hidden" name="action" value="logout">
                <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
                <button class="link">Déconnexion</button>
            </form>
        </div>
    </div>

    <div class="hello">
        <h1><?= $greet ?> Jimmy</h1>
        <p><?= h($today) ?> ·
            <?php if ($newCount > 0): ?>
                <span class="hot"><?= $newCount ?> nouveau<?= $newCount > 1 ? 'x' : '' ?> lead<?= $newCount > 1 ? 's' : '' ?></span> à traiter
            <?php else: ?>
                tout est à jour
            <?php endif; ?>
        </p>
    </div>

    <div class="stats">
        <div class="stat <?= $newCount > 0 ? 'hi' : '' ?>"><b><?= $newCount ?></b><span>leads non lus</span></div>
        <div class="stat"><b><?= $pvToday ?></b><span>vues aujourd'hui</span></div>
        <div class="stat"><b><?= $uniq7 ?></b><span>visiteurs uniques · 7j</span></div>
        <div class="stat"><b><?= $pv7 ?></b><span>vues · 7j</span></div>
        <div class="stat"><b><?= $pv30 ?></b><span>vues · 30j</span></div>
    </div>

    <h2>Visites · 14 derniers jours</h2>
    <div class="card">
        <div class="chart">
            <?php foreach ($series as $day => $c):
                $hpct = max(3, (int)round($c / $chartMax * 100)); ?>
                <div class="col" title="<?= (int)$c ?> vues le <?= h(date('d/m', strtotime($day))) ?>">
                    <div class="bar <?= $c === 0 ? 'zero' : '' ?>" style="height:<?= $hpct ?>%"></div>
                    <div class="d"><?= (int)date('j', strtotime($day)) ?></div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="chart-legend"><span>Il y a 14 jours</span><span><b><?= $pv14 ?></b> vues sur la période</span><span>Aujourd'hui</span></div>
    </div>

    <h2>Leads <span class="c">(<?= count($leads) ?>)</span></h2>
    <?php if (!$leads): ?>
        <div class="card"><p class="muted" style="margin:0">Aucun lead pour l'instant. Ils apparaîtront ici dès qu'un visiteur laisse ses coordonnées via le Devis express.</p></div>
    <?php else: ?>
    <div class="leads">
        <?php foreach ($leads as $l):
            [$ck, $cv] = contactKind($l['contact']);
            $tel = preg_replace('/\s/', '', $l['contact']);
            $tags = array_filter([$l['kind'], $l['objective'], $l['need']]); ?>
        <div class="lead <?= $l['seen'] ? '' : 'unseen' ?>">
            <div class="lead-top">
                <span class="lead-name"><?= $l['name'] ? h($l['name']) : 'Sans nom' ?></span>
                <?php if (!$l['seen']): ?><span class="badge">nouveau</span><?php endif; ?>
                <span class="lead-time"><?= h(ago($l['created_at'])) ?></span>
            </div>
            <?php if ($ck === 'email'): ?>
                <a class="contact" href="<?= h($cv) ?>"><?= h($l['contact']) ?></a>
            <?php else: ?>
                <a class="contact" href="tel:<?= h($tel) ?>"><?= h($l['contact']) ?></a>
            <?php endif; ?>
            <?php if ($tags): ?><div class="tags"><?php foreach ($tags as $t): ?><span class="tag"><?= h($t) ?></span><?php endforeach; ?></div><?php endif; ?>
            <?php if (trim((string)$l['message']) !== ''): ?><div class="msg"><?= nl2br(h($l['message'])) ?></div><?php endif; ?>
            <div class="actions">
                <?php if ($ck === 'email'): ?>
                    <a class="act primary" href="<?= h($cv) ?>">Répondre par mail</a>
                <?php else: ?>
                    <a class="act wa" href="https://wa.me/<?= h($cv) ?>" target="_blank" rel="noopener">WhatsApp</a>
                    <a class="act" href="tel:<?= h($tel) ?>">Appeler</a>
                <?php endif; ?>
                <?php if (!$l['seen']): ?>
                <form method="post" style="margin:0"><input type="hidden" name="action" value="seen"><input type="hidden" name="id" value="<?= (int)$l['id'] ?>"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>"><button class="act ghost">Marquer lu</button></form>
                <?php endif; ?>
                <form method="post" data-confirm="Supprimer ce lead ?" style="margin:0 0 0 auto"><input type="hidden" name="action" value="del"><input type="hidden" name="id" value="<?= (int)$l['id'] ?>"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>"><button class="act danger">Supprimer</button></form>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>

    <div class="two" style="margin-top:24px">
        <div>
            <h2>D'où viennent les visiteurs · 30j</h2>
            <div class="card">
                <?php if (!$refAgg): ?><p class="muted small" style="margin:0">Pas encore de source externe.</p>
                <?php else: foreach ($refAgg as $lbl => $cnt): ?>
                    <div class="row"><span class="lbl"><?= h($lbl) ?></span><span class="track"><span class="fill" style="width:<?= (int)round($cnt / $refMax * 100) ?>%"></span></span><span class="n"><?= (int)$cnt ?></span></div>
                <?php endforeach; endif; ?>
            </div>
        </div>
        <div>
            <h2>Apps les plus ouvertes · 30j</h2>
            <div class="card">
                <?php if (!$topApps): ?><p class="muted small" style="margin:0">Pas encore d'événement.</p>
                <?php else: foreach ($topApps as $a): ?>
                    <div class="row"><span class="lbl"><?= h(str_replace(['open:', 'project:'], ['', ''], $a['event'])) ?></span><span class="track"><span class="fill" style="width:<?= (int)round($a['c'] / $appMax * 100) ?>%"></span></span><span class="n"><?= (int)$a['c'] ?></span></div>
                <?php endforeach; endif; ?>
            </div>
        </div>
    </div>

    <h2>Mot de passe</h2>
    <?php if ($err === 'ok'): ?><div class="alert ok">Mot de passe mis à jour.</div><?php elseif ($err): ?><div class="alert"><?= h($err) ?></div><?php endif; ?>
    <div class="card">
        <form method="post" class="pw">
            <input type="hidden" name="action" value="chpass">
            <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
            <input type="password" name="current" placeholder="Mot de passe actuel" required>
            <input type="password" name="new" placeholder="Nouveau (8+ car.)" required minlength="8">
            <button class="btn" type="submit">Changer</button>
        </form>
    </div>
<?php });

/* ---------- Gabarit HTML commun (glass / Apple) ---------- */
function render_shell(string $title, callable $body): void { ?>
<!doctype html><html lang="fr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#06070c">
<title><?= h($title) ?> · BomyOS admin</title>
<link rel="icon" href="/apple-touch-icon.png">
<style>
:root{--ink:#f2f4f0;--muted:#9aa0ab;--dim:#6b7180;--acc:#c6ff4e;--blue:#7cc4ff;--red:#ff6961;--green:#7ee2a8;
--glass:rgba(255,255,255,.055);--brd:rgba(255,255,255,.10);--brd2:rgba(255,255,255,.07);--radius:20px}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;color:var(--ink);font:15px/1.55 -apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",Roboto,Helvetica,Arial,sans-serif;
background:radial-gradient(1200px 720px at 80% -10%,rgba(124,196,255,.16),transparent 60%),radial-gradient(1000px 820px at 5% 112%,rgba(150,110,255,.17),transparent 55%),radial-gradient(760px 520px at 96% 104%,rgba(198,255,78,.08),transparent 55%),linear-gradient(160deg,#0a0d14,#06070c 76%);
background-attachment:fixed;padding:26px;-webkit-font-smoothing:antialiased}
.wrap{max-width:1060px;margin:0 auto}
.muted{color:var(--muted)}.small{font-size:13px}
h1{font-weight:700;letter-spacing:-.02em;margin:.2em 0 .3em}
h2{font-size:12.5px;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);font-weight:600;margin:32px 0 13px}
h2 .c{color:var(--dim)}
.card,.stat,.lead{background:var(--glass);-webkit-backdrop-filter:blur(30px) saturate(1.7);backdrop-filter:blur(30px) saturate(1.7);border:1px solid var(--brd);border-radius:var(--radius);box-shadow:0 22px 60px -26px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.07)}
.card{padding:22px}
/* auth */
.auth{max-width:400px;margin:11vh auto 0;padding:36px 32px;text-align:center}
.auth .logo{width:64px;height:64px;margin:0 auto 18px;border-radius:19px;display:grid;place-items:center;background:rgba(255,255,255,.05);border:1px solid var(--brd);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
.auth h1{font-size:23px;margin:0 0 3px;font-weight:700}
.auth .sub{color:var(--muted);font-size:14px;margin-bottom:22px}
.auth p.muted{font-size:13.5px;margin:0}
.auth input{width:100%;margin-top:14px;text-align:center}
.auth .btn{width:100%;margin-top:16px}
input[type=password],input[type=text]{background:rgba(255,255,255,.05);border:1px solid var(--brd);color:var(--ink);border-radius:13px;padding:13px 15px;font-size:15px;outline:none;font-family:inherit;transition:border-color .15s,background .15s}
input::placeholder{color:var(--dim)}
input:focus{border-color:rgba(198,255,78,.55);background:rgba(255,255,255,.07)}
.btn{background:var(--acc);color:#0a1005;border:0;border-radius:13px;padding:13px 22px;font-weight:700;font-size:15px;cursor:pointer;font-family:inherit;box-shadow:0 8px 24px -8px rgba(198,255,78,.5);transition:transform .12s,filter .12s}
.btn:hover{filter:brightness(1.05)}.btn:active{transform:scale(.98)}
.link{background:var(--glass);border:1px solid var(--brd);color:var(--muted);cursor:pointer;font-size:13px;padding:8px 14px;border-radius:11px;text-decoration:none;transition:.15s}
.link:hover{color:var(--ink);border-color:rgba(255,255,255,.22)}
.alert{background:rgba(255,105,97,.14);border:1px solid rgba(255,105,97,.4);color:#ffc2bd;border-radius:12px;padding:10px 13px;margin-top:14px;font-size:14px}
.alert.ok{background:rgba(198,255,78,.13);border-color:rgba(198,255,78,.4);color:var(--acc)}
/* topbar + greeting */
.bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:26px;gap:12px}
.brand{font-weight:600;display:flex;align-items:center;gap:10px;font-size:15px}
.brand svg{border-radius:8px;display:block}
.topright{display:flex;gap:9px;align-items:center}
.dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green)}
.hello{margin-bottom:22px}
.hello h1{font-weight:800;font-size:32px;margin:0 0 4px;letter-spacing:-.025em}
.hello p{margin:0;color:var(--muted)}
.hello .hot{color:var(--acc);font-weight:600}
/* stats */
.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.stat{padding:17px 17px 15px}
.stat b{display:block;font-size:30px;font-weight:700;line-height:1;letter-spacing:-.02em}
.stat span{font-size:12px;color:var(--muted);display:block;margin-top:7px}
.stat.hi{background:linear-gradient(160deg,rgba(198,255,78,.16),var(--glass));border-color:rgba(198,255,78,.4)}
.stat.hi b{color:var(--acc)}
/* chart */
.chart{display:flex;align-items:flex-end;gap:8px;height:118px}
.col{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;height:100%;justify-content:flex-end}
.col .bar{width:100%;max-width:32px;border-radius:7px 7px 4px 4px;background:linear-gradient(180deg,var(--acc),rgba(198,255,78,.3));min-height:3px;box-shadow:0 0 12px -2px rgba(198,255,78,.4)}
.col .bar.zero{background:rgba(255,255,255,.08);box-shadow:none}
.col .d{font-size:10px;color:var(--dim)}
.chart-legend{display:flex;justify-content:space-between;margin-top:15px;font-size:12px;color:var(--muted)}
.chart-legend b{color:var(--ink);font-weight:600}
/* leads */
.leads{display:flex;flex-direction:column;gap:12px}
.lead{padding:17px 19px}
.lead.unseen{border-color:rgba(198,255,78,.35);box-shadow:0 22px 60px -26px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.07),inset 3px 0 0 var(--acc)}
.lead-top{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.lead-name{font-weight:700;font-size:16px}
.badge{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0a1005;background:var(--acc);padding:2px 9px;border-radius:20px}
.lead-time{margin-left:auto;color:var(--dim);font-size:12.5px;white-space:nowrap}
.contact{font-size:15px;font-weight:600;color:var(--blue);text-decoration:none}
.contact:hover{text-decoration:underline}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin:11px 0}
.tag{font-size:12px;color:var(--muted);background:rgba(255,255,255,.05);border:1px solid var(--brd2);padding:3px 11px;border-radius:20px}
.msg{font-size:14px;color:#d0d4dc;background:rgba(255,255,255,.04);border:1px solid var(--brd2);border-radius:12px;padding:11px 14px;margin-top:4px}
.actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:15px}
.act{font-size:13px;font-weight:600;padding:9px 15px;border-radius:11px;border:1px solid var(--brd);background:rgba(255,255,255,.05);color:var(--ink);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:.15s}
.act:hover{border-color:rgba(255,255,255,.22)}
.act.primary{background:var(--acc);color:#0a1005;border-color:transparent}
.act.wa{background:rgba(37,211,102,.16);border-color:rgba(37,211,102,.4);color:var(--green)}
.act.ghost{color:var(--muted)}
.act.danger{color:var(--red);border-color:rgba(255,105,97,.3)}
/* two cols */
.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.row{display:flex;align-items:center;gap:12px;padding:10px 2px;border-bottom:1px solid var(--brd2)}
.row:last-child{border-bottom:0}
.row .lbl{flex:0 0 auto;font-size:13.5px;min-width:100px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.row .track{flex:1;height:7px;background:rgba(255,255,255,.06);border-radius:6px;overflow:hidden}
.row .fill{display:block;height:100%;background:linear-gradient(90deg,var(--blue),var(--acc));border-radius:6px}
.row .n{flex:0 0 auto;font-weight:700;font-size:13.5px;width:30px;text-align:right}
/* pw */
.pw{display:flex;gap:10px;flex-wrap:wrap;margin:0}
.pw input{flex:1;min-width:170px;margin:0}
@media(max-width:760px){.stats{grid-template-columns:repeat(2,1fr)}.two{grid-template-columns:1fr}.col .d{display:none}body{padding:15px}}
</style></head><body><div class="wrap"><?php $body(); ?></div>
<script nonce="<?= h(NONCE) ?>">
document.querySelectorAll('form[data-confirm]').forEach(function(f){f.addEventListener('submit',function(e){if(!confirm(f.getAttribute('data-confirm')))e.preventDefault();});});
</script>
</body></html>
<?php }
