<?php
declare(strict_types=1);
// Connexion partagée — lit les secrets HORS docroot (/etc/portfolio/config.php).
// Sans effet si le fichier est appelé directement (ne produit aucune sortie).

function cfg(string $k) {
    static $c = null;
    if ($c === null) $c = require '/etc/portfolio/config.php';
    return $c[$k] ?? null;
}

function pdo(): PDO {
    static $p = null;
    if ($p instanceof PDO) return $p;
    $p = new PDO(
        "mysql:unix_socket=" . cfg('db_socket') . ";dbname=" . cfg('db_name') . ";charset=utf8mb4",
        cfg('db_user'), cfg('db_pass'),
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );
    return $p;
}

// IP réelle du visiteur (le site est derrière Cloudflare).
function client_ip(): string {
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
    return substr((string)$ip, 0, 45);
}

function json_body(): array {
    $raw = file_get_contents('php://input');
    $d = json_decode((string)$raw, true);
    return is_array($d) ? $d : [];
}
