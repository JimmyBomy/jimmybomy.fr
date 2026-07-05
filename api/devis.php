<?php
declare(strict_types=1);
// Capture d'un lead depuis le « Devis express ». Enregistre en base pour /admin.
require __DIR__ . '/../lib/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

$d = json_body();

// Honeypot anti-bot : champ invisible « website ». Rempli => on fait semblant d'accepter.
if (!empty($d['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$clip = fn($v, $n) => mb_substr(trim((string)($v ?? '')), 0, $n);
$name    = $clip($d['name'] ?? '', 120);
$contact = $clip($d['contact'] ?? '', 160);
$objective = $clip($d['objective'] ?? '', 60);
$kind    = $clip($d['kind'] ?? '', 60);
$need    = $clip($d['need'] ?? '', 160);
$message = $clip($d['message'] ?? '', 2000);
$source  = $clip($d['source'] ?? 'devis', 40);

// Un contact est requis pour que le lead soit exploitable.
if ($contact === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'contact']);
    exit;
}

try {
    $pdo = pdo();
    $ip  = client_ip();

    // Rate-limit : 5 leads / IP / heure.
    $rl = $pdo->prepare("SELECT COUNT(*) FROM leads WHERE ip = ? AND created_at > (NOW() - INTERVAL 1 HOUR)");
    $rl->execute([$ip]);
    if ((int)$rl->fetchColumn() >= 5) {
        http_response_code(429);
        echo json_encode(['ok' => false, 'error' => 'rate']);
        exit;
    }

    $st = $pdo->prepare(
        "INSERT INTO leads (name, contact, objective, kind, need, message, source, ip, ua)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    $st->execute([
        $name, $contact, $objective, $kind, $need, $message, $source, $ip,
        mb_substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255),
    ]);

    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'server']);
}
