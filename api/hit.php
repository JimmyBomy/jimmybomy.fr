<?php
declare(strict_types=1);
// Analytics first-party : enregistre une vue / un événement. Aucune IP brute stockée.
require __DIR__ . '/../lib/db.php';

header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$d = json_body();

$clip = fn($v, $n) => mb_substr(trim((string)($v ?? '')), 0, $n);
$event = $clip($d['event'] ?? 'pageview', 64);
$path  = $clip($d['path'] ?? '', 180);
$ref   = $clip($d['ref'] ?? '', 255);

$dev = (string)($d['device'] ?? '');
$device = in_array($dev, ['mobile', 'tablet', 'desktop'], true) ? $dev : 'desktop';

if ($event === '') $event = 'pageview';

// Empreinte visiteur privacy-friendly : hash(secret + ip + ua + jour).
// Non réversible, tourne chaque jour → pas de suivi individuel persistant.
$iph = hash('sha256', cfg('secret') . '|' . client_ip() . '|' .
    ($_SERVER['HTTP_USER_AGENT'] ?? '') . '|' . gmdate('Y-m-d'));

try {
    $st = pdo()->prepare(
        "INSERT INTO hits (event, path, ref, device, iph) VALUES (?, ?, ?, ?, ?)"
    );
    $st->execute([$event, $path, $ref, $device, $iph]);
    http_response_code(204);
} catch (Throwable $e) {
    http_response_code(204); // silencieux : l'analytics ne doit jamais gêner le visiteur
}
