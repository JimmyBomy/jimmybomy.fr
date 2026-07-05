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

$topRefs = $pdo->query(
    "SELECT ref, COUNT(*) c FROM hits
     WHERE event='pageview' AND ref <> '' AND created_at >= (NOW() - INTERVAL 30 DAY)
     GROUP BY ref ORDER BY c DESC LIMIT 8"
)->fetchAll();
$topApps = $pdo->query(
    "SELECT event, COUNT(*) c FROM hits
     WHERE event LIKE 'open:%' AND created_at >= (NOW() - INTERVAL 30 DAY)
     GROUP BY event ORDER BY c DESC LIMIT 10"
)->fetchAll();

render_shell('Dashboard', function () use ($leads, $newCount, $pvToday, $pv7, $pv30, $uniq7, $topRefs, $topApps, $err) { ?>
    <div class="bar">
        <div class="brand"><span class="dot"></span> BomyOS · admin</div>
        <form method="post" style="margin:0">
            <input type="hidden" name="action" value="logout">
            <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
            <button class="link">Déconnexion</button>
        </form>
    </div>

    <div class="stats">
        <div class="stat"><b><?= $newCount ?></b><span>leads non lus</span></div>
        <div class="stat"><b><?= $pvToday ?></b><span>vues aujourd'hui</span></div>
        <div class="stat"><b><?= $uniq7 ?></b><span>visiteurs uniques · 7j</span></div>
        <div class="stat"><b><?= $pv7 ?></b><span>vues · 7j</span></div>
        <div class="stat"><b><?= $pv30 ?></b><span>vues · 30j</span></div>
    </div>

    <h2>Leads <span class="muted">(<?= count($leads) ?>)</span></h2>
    <?php if (!$leads): ?>
        <p class="muted">Aucun lead pour l'instant. Ils apparaîtront ici dès qu'un visiteur laisse ses coordonnées via le Devis express.</p>
    <?php else: ?>
    <div class="scroll">
    <table>
        <thead><tr><th>Date</th><th>Nom</th><th>Contact</th><th>Projet</th><th>Message</th><th></th></tr></thead>
        <tbody>
        <?php foreach ($leads as $l): ?>
            <tr class="<?= $l['seen'] ? '' : 'unseen' ?>">
                <td class="nowrap"><?= h(date('d/m H:i', strtotime($l['created_at']))) ?></td>
                <td><?= h($l['name']) ?: '<span class="muted">—</span>' ?></td>
                <td class="strong"><?= h($l['contact']) ?></td>
                <td class="muted small"><?= h(trim(($l['kind'] ? $l['kind'] . ' · ' : '') . $l['objective'])) ?><?= $l['need'] ? '<br>' . h($l['need']) : '' ?></td>
                <td class="small"><?= nl2br(h($l['message'])) ?: '<span class="muted">—</span>' ?></td>
                <td class="nowrap">
                    <?php if (!$l['seen']): ?>
                    <form method="post" style="display:inline;margin:0"><input type="hidden" name="action" value="seen"><input type="hidden" name="id" value="<?= (int)$l['id'] ?>"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>"><button class="mini">Lu</button></form>
                    <?php endif; ?>
                    <form method="post" style="display:inline;margin:0" onsubmit="return confirm('Supprimer ce lead ?')"><input type="hidden" name="action" value="del"><input type="hidden" name="id" value="<?= (int)$l['id'] ?>"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>"><button class="mini danger">✕</button></form>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
    </div>
    <?php endif; ?>

    <div class="two">
        <div>
            <h2>Sources · 30j</h2>
            <?php if (!$topRefs): ?><p class="muted small">Pas encore de source externe.</p><?php else: ?>
            <table class="mini-t"><tbody>
                <?php foreach ($topRefs as $r): ?><tr><td><?= h($r['ref']) ?></td><td class="strong nowrap"><?= (int)$r['c'] ?></td></tr><?php endforeach; ?>
            </tbody></table>
            <?php endif; ?>
        </div>
        <div>
            <h2>Apps ouvertes · 30j</h2>
            <?php if (!$topApps): ?><p class="muted small">Pas encore d'événement.</p><?php else: ?>
            <table class="mini-t"><tbody>
                <?php foreach ($topApps as $a): ?><tr><td><?= h(str_replace('open:', '', $a['event'])) ?></td><td class="strong nowrap"><?= (int)$a['c'] ?></td></tr><?php endforeach; ?>
            </tbody></table>
            <?php endif; ?>
        </div>
    </div>

    <h2>Mot de passe</h2>
    <?php if ($err === 'ok'): ?><div class="alert ok">Mot de passe mis à jour.</div><?php elseif ($err): ?><div class="alert"><?= h($err) ?></div><?php endif; ?>
    <form method="post" class="chpass">
        <input type="hidden" name="action" value="chpass">
        <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
        <input type="password" name="current" placeholder="Mot de passe actuel" required>
        <input type="password" name="new" placeholder="Nouveau (8+ car.)" required minlength="8">
        <button class="btn small">Changer</button>
    </form>
<?php });

/* ---------- Gabarit HTML commun ---------- */
function render_shell(string $title, callable $body): void { ?>
<!doctype html><html lang="fr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title><?= h($title) ?> · BomyOS admin</title>
<style>
:root{--bg:#0a0c12;--card:#11141c;--ink:#eef0ea;--muted:#8a8e99;--brd:#232838;--acc:#c6ff4e;--red:#ff5f57}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(900px 500px at 80% -10%,rgba(124,196,255,.12),transparent 60%),var(--bg);color:var(--ink);font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:24px}
.wrap{max-width:1040px;margin:0 auto}
h1{font-size:26px;margin:.2em 0 .3em}h2{font-size:16px;margin:28px 0 12px;letter-spacing:-.01em}
.muted{color:var(--muted)}.small{font-size:13px}.strong{font-weight:600}.nowrap{white-space:nowrap}
.eye{text-transform:uppercase;letter-spacing:.18em;font-size:11px;color:var(--acc);font-weight:700;margin-bottom:6px}
.card{background:var(--card);border:1px solid var(--brd);border-radius:16px;padding:26px}
.auth{max-width:380px;margin:12vh auto 0}
.auth input{width:100%;margin-top:12px}
input[type=password],input[type=text]{background:#0c0f16;border:1px solid var(--brd);color:var(--ink);border-radius:10px;padding:11px 13px;font-size:15px;outline:none}
input:focus{border-color:var(--acc)}
.btn{margin-top:14px;background:var(--acc);color:#0a0b0e;border:0;border-radius:10px;padding:11px 18px;font-weight:700;font-size:15px;cursor:pointer}
.btn.small{margin-top:0}
.link{background:none;border:0;color:var(--muted);cursor:pointer;font-size:14px;text-decoration:underline}
.alert{background:rgba(255,95,87,.12);border:1px solid rgba(255,95,87,.4);color:#ffb4af;border-radius:10px;padding:9px 12px;margin-top:12px;font-size:14px}
.alert.ok{background:rgba(198,255,78,.12);border-color:rgba(198,255,78,.4);color:var(--acc)}
.bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
.brand{font-weight:700;display:flex;align-items:center;gap:9px}
.dot{width:9px;height:9px;border-radius:50%;background:var(--acc);box-shadow:0 0 10px var(--acc)}
.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.stat{background:var(--card);border:1px solid var(--brd);border-radius:14px;padding:16px}
.stat b{display:block;font-size:26px;font-weight:800}
.stat span{font-size:12px;color:var(--muted)}
.scroll{overflow-x:auto;border:1px solid var(--brd);border-radius:14px}
table{width:100%;border-collapse:collapse;font-size:14px}
th{text-align:left;color:var(--muted);font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em;padding:11px 13px;border-bottom:1px solid var(--brd)}
td{padding:11px 13px;border-bottom:1px solid var(--brd);vertical-align:top}
tr:last-child td{border-bottom:0}
tr.unseen{background:rgba(198,255,78,.05)}
tr.unseen td:first-child{box-shadow:inset 3px 0 0 var(--acc)}
.mini{background:#0c0f16;border:1px solid var(--brd);color:var(--ink);border-radius:8px;padding:5px 9px;font-size:12px;cursor:pointer}
.mini.danger{color:var(--red);border-color:rgba(255,95,87,.3)}
.mini-t td{font-size:13px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.chpass{display:flex;gap:10px;flex-wrap:wrap}
.chpass input{flex:1;min-width:160px}
@media(max-width:720px){.stats{grid-template-columns:repeat(2,1fr)}.two{grid-template-columns:1fr}body{padding:14px}}
</style></head><body><div class="wrap"><?php $body(); ?></div></body></html>
<?php }
