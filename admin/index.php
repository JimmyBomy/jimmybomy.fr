<?php
declare(strict_types=1);
require __DIR__ . '/../lib/db.php';

header('X-Frame-Options: DENY');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Cache-Control: no-store, max-age=0');

session_set_cookie_params([
    'lifetime' => 0, 'path' => '/admin',
    'secure' => true, 'httponly' => true, 'samesite' => 'Lax',
]);
session_name('bomyadm');
session_start();

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

/* Temps relatif « il y a 2 h » */
function ago(string $ts): string {
    $s = time() - strtotime($ts);
    if ($s < 60)    return "à l'instant";
    if ($s < 3600)  return 'il y a ' . (int)floor($s / 60) . ' min';
    if ($s < 86400) return 'il y a ' . (int)floor($s / 3600) . ' h';
    $d = (int)floor($s / 86400);
    if ($d < 7)     return "il y a {$d} j";
    return date('d/m/Y', strtotime($ts));
}
/* Détecte email vs téléphone → renvoie [type, valeur exploitable] */
function contactKind(string $c): array {
    $c = trim($c);
    if (strpos($c, '@') !== false) {
        return ['email', 'mailto:' . rawurlencode($c) . '?subject=' . rawurlencode('Votre projet de site — Jimmy Bomy')];
    }
    $d = preg_replace('/\D/', '', $c);
    if (strlen($d) === 10 && $d[0] === '0') $d = '33' . substr($d, 1);
    return ['phone', $d];
}
/* Regroupe/nettoie un référent (l.instagram.com, com.linkedin.android → Instagram, LinkedIn) */
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

/* ---- Premier accès : Jimmy choisit son mot de passe ---- */
if (!$adminHash) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'setup' && csrf_ok()) {
        $p = (string)($_POST['password'] ?? '');
        if (strlen($p) < 8) {
            $err = 'Mot de passe : 8 caractères minimum.';
        } else {
            setSetting('admin_hash', password_hash($p, PASSWORD_DEFAULT));
            $_SESSION['auth'] = true;
            session_regenerate_id(true);
            header('Location: /admin/');
            exit;
        }
    }
    render_shell('Créer le mot de passe admin', function () use ($err) { ?>
        <form method="post" class="card auth">
            <div class="eye">Première connexion</div>
            <h1>Choisis ton mot de passe</h1>
            <p class="muted">Il protège l'accès à tes leads. 8 caractères minimum. Personne d'autre ne peut le définir tant qu'il n'existe pas — fais-le maintenant.</p>
            <?php if ($err): ?><div class="alert"><?= h($err) ?></div><?php endif; ?>
            <input type="hidden" name="action" value="setup">
            <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
            <input type="password" name="password" placeholder="Nouveau mot de passe" autofocus required minlength="8">
            <button class="btn" type="submit">Créer mon accès</button>
        </form>
    <?php });
    exit;
}

/* ---- Connexion ---- */
if (empty($_SESSION['auth'])) {
    $lockUntil = (int)setting('lock_until', 0);
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'login' && csrf_ok()) {
        if (time() < $lockUntil) {
            $err = 'Trop de tentatives. Réessaie dans quelques minutes.';
        } elseif (password_verify((string)($_POST['password'] ?? ''), $adminHash)) {
            $_SESSION['auth'] = true;
            session_regenerate_id(true);
            setSetting('fails', '0');
            header('Location: /admin/');
            exit;
        } else {
            $f = (int)setting('fails', 0) + 1;
            setSetting('fails', (string)$f);
            if ($f >= 5) {
                setSetting('lock_until', (string)(time() + 900));
                setSetting('fails', '0');
                $err = '5 échecs — accès bloqué 15 minutes.';
            } else {
                $err = 'Mot de passe incorrect.';
            }
        }
    }
    render_shell('Connexion', function () use ($err) { ?>
        <form method="post" class="card auth">
            <div class="eye">BomyOS · admin</div>
            <h1>Connexion</h1>
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

/* Série 14 jours pour le graphique */
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

/* Sources externes : on exclut l'auto-référence (jimmybomy.fr) puis on regroupe par plateforme */
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

/* En-tête convivial */
$greet = ((int)date('G') < 18) ? 'Bonjour' : 'Bonsoir';
$JD = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
$JM = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
$today = $JD[(int)date('w')] . ' ' . (int)date('j') . ' ' . $JM[(int)date('n') - 1];

render_shell('Dashboard', function () use (
    $leads, $newCount, $pvToday, $pv7, $pv30, $uniq7, $refAgg, $topApps,
    $refMax, $appMax, $series, $chartMax, $pv14, $err, $greet, $today
) { ?>
    <div class="bar">
        <div class="brand"><span class="dot"></span> BomyOS · admin</div>
        <form method="post" style="margin:0">
            <input type="hidden" name="action" value="logout">
            <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
            <button class="link">Déconnexion</button>
        </form>
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
                <form method="post" style="margin:0 0 0 auto" onsubmit="return confirm('Supprimer ce lead ?')"><input type="hidden" name="action" value="del"><input type="hidden" name="id" value="<?= (int)$l['id'] ?>"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>"><button class="act danger">Supprimer</button></form>
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

/* ---------- Gabarit HTML commun ---------- */
function render_shell(string $title, callable $body): void { ?>
<!doctype html><html lang="fr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title><?= h($title) ?> · BomyOS admin</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&display=swap" rel="stylesheet">
<style>
:root{--bg:#090b11;--card:#12151d;--card2:#151925;--ink:#eef0ea;--muted:#8a8e99;--dim:#5f636e;--brd:#242a38;--acc:#c6ff4e;--blue:#7cc4ff;--red:#ff5f57}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(1100px 560px at 82% -12%,rgba(124,196,255,.13),transparent 60%),radial-gradient(900px 600px at 0% 110%,rgba(150,110,255,.12),transparent 55%),var(--bg);color:var(--ink);font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:26px}
.wrap{max-width:1060px;margin:0 auto}
.muted{color:var(--muted)}.small{font-size:13px}
h1{font-size:26px;margin:.2em 0 .3em}
h2{font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:700;margin:30px 0 12px}
h2 .c{color:var(--dim)}
.eye{text-transform:uppercase;letter-spacing:.18em;font-size:11px;color:var(--acc);font-weight:700;margin-bottom:6px}
.card{background:var(--card);border:1px solid var(--brd);border-radius:16px;padding:20px}
/* auth */
.auth{max-width:390px;margin:11vh auto 0}
.auth h1{font-family:"Archivo";font-size:26px;margin:2px 0 6px}
.auth input{width:100%;margin-top:12px}
input[type=password],input[type=text]{background:#0c0f16;border:1px solid var(--brd);color:var(--ink);border-radius:10px;padding:11px 13px;font-size:15px;outline:none}
input:focus{border-color:var(--acc)}
.btn{margin-top:0;background:var(--acc);color:#0a0b0e;border:0;border-radius:10px;padding:11px 20px;font-weight:700;font-size:15px;cursor:pointer}
.auth .btn{margin-top:14px}
.link{background:none;border:1px solid var(--brd);color:var(--muted);cursor:pointer;font-size:13px;padding:8px 14px;border-radius:9px;text-decoration:none}
.link:hover{color:var(--ink);border-color:var(--muted)}
.alert{background:rgba(255,95,87,.12);border:1px solid rgba(255,95,87,.4);color:#ffb4af;border-radius:10px;padding:9px 12px;margin-top:12px;font-size:14px}
.alert.ok{background:rgba(198,255,78,.12);border-color:rgba(198,255,78,.4);color:var(--acc)}
/* topbar + greeting */
.bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:26px}
.brand{font-weight:700;display:flex;align-items:center;gap:9px;font-size:15px}
.dot{width:9px;height:9px;border-radius:50%;background:var(--acc);box-shadow:0 0 12px var(--acc)}
.hello{margin-bottom:22px}
.hello h1{font-family:"Archivo";font-weight:800;font-size:30px;margin:0 0 4px;letter-spacing:-.02em}
.hello p{margin:0;color:var(--muted)}
.hello .hot{color:var(--acc);font-weight:600}
/* stats */
.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.stat{background:var(--card);border:1px solid var(--brd);border-radius:14px;padding:16px 16px 14px}
.stat b{font-family:"Archivo";display:block;font-size:30px;font-weight:800;line-height:1;letter-spacing:-.02em}
.stat span{font-size:12px;color:var(--muted);display:block;margin-top:6px}
.stat.hi{background:linear-gradient(160deg,rgba(198,255,78,.14),rgba(198,255,78,.03));border-color:rgba(198,255,78,.35)}
.stat.hi b{color:var(--acc)}
/* chart */
.chart{display:flex;align-items:flex-end;gap:8px;height:120px;margin-top:2px}
.col{flex:1;display:flex;flex-direction:column;align-items:center;gap:7px;height:100%;justify-content:flex-end}
.col .bar{width:100%;max-width:34px;border-radius:6px 6px 3px 3px;background:linear-gradient(180deg,var(--acc),rgba(198,255,78,.35));min-height:3px}
.col .bar.zero{background:var(--brd)}
.col .d{font-size:10px;color:var(--dim)}
.chart-legend{display:flex;justify-content:space-between;margin-top:14px;font-size:12px;color:var(--muted)}
.chart-legend b{color:var(--ink);font-weight:700}
/* leads */
.leads{display:flex;flex-direction:column;gap:12px}
.lead{background:var(--card);border:1px solid var(--brd);border-radius:14px;padding:16px 18px}
.lead.unseen{border-color:rgba(198,255,78,.3);background:linear-gradient(180deg,rgba(198,255,78,.045),transparent)}
.lead-top{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.lead-name{font-weight:700;font-size:16px}
.badge{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0a0b0e;background:var(--acc);padding:2px 8px;border-radius:20px}
.lead-time{margin-left:auto;color:var(--dim);font-size:12.5px;white-space:nowrap}
.contact{font-size:15px;font-weight:600;color:var(--blue);text-decoration:none}
.contact:hover{text-decoration:underline}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}
.tag{font-size:12px;color:var(--muted);background:var(--card2);border:1px solid var(--brd);padding:3px 10px;border-radius:20px}
.msg{font-size:14px;color:#c4c8d0;background:var(--card2);border-radius:10px;padding:10px 13px;margin-top:4px}
.actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:14px}
.act{font-size:13px;font-weight:600;padding:8px 14px;border-radius:9px;border:1px solid var(--brd);background:var(--card2);color:var(--ink);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px}
.act:hover{border-color:var(--muted)}
.act.primary{background:var(--acc);color:#0a0b0e;border-color:var(--acc)}
.act.wa{background:rgba(37,211,102,.14);border-color:rgba(37,211,102,.4);color:#7ff0a8}
.act.ghost{color:var(--muted)}
.act.danger{color:var(--red);border-color:rgba(255,95,87,.25)}
/* two cols */
.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.row{display:flex;align-items:center;gap:12px;padding:9px 2px;border-bottom:1px solid var(--brd)}
.row:last-child{border-bottom:0}
.row .lbl{flex:0 0 auto;font-size:13.5px;min-width:110px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.row .track{flex:1;height:7px;background:var(--card2);border-radius:6px;overflow:hidden}
.row .fill{display:block;height:100%;background:linear-gradient(90deg,var(--blue),var(--acc));border-radius:6px}
.row .n{flex:0 0 auto;font-weight:700;font-size:13.5px;width:30px;text-align:right}
/* pw */
.pw{display:flex;gap:10px;flex-wrap:wrap;margin:0}
.pw input{flex:1;min-width:170px;margin:0}
@media(max-width:760px){.stats{grid-template-columns:repeat(2,1fr)}.two{grid-template-columns:1fr}.col .d{display:none}body{padding:14px}.act.danger{margin-left:0}}
</style></head><body><div class="wrap"><?php $body(); ?></div></body></html>
<?php }
