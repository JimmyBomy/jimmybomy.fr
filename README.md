# BomyOS — jimmybomy.fr

[![Tests](https://github.com/JimmyBomy/jimmybomy.fr/actions/workflows/tests.yml/badge.svg)](https://github.com/JimmyBomy/jimmybomy.fr/actions/workflows/tests.yml) [![Déploiement VPS](https://github.com/JimmyBomy/jimmybomy.fr/actions/workflows/deploy.yml/badge.svg)](https://github.com/JimmyBomy/jimmybomy.fr/actions/workflows/deploy.yml)

Portfolio interactif de **Jimmy Bomy**, développeur web créatif — étudiant BUT MMI (Troyes), basé à Sedan.

Un système d'exploitation complet dans le navigateur, **en JavaScript vanilla, sans framework** :

- 🪟 Fenêtres draggables, redimensionnables, minimisables, maximisables
- 🖱️ Clic droit → menu contextuel · dock façon macOS · icônes de bureau
- ⌨️ Navigation clavier intégrale (Tab / Entrée / Échap) + lecteurs d'écran supportés
- 🔊 Sons d'interface WebAudio (mutables) · effet CRT optionnel
- 💻 Terminal interactif (`help`, `whoami`, `projets`, `labs`, `contact`, `cv`…)
- 📱 Sur mobile : launcher tactile avec fiches plein écran
- 🖨️ CV imprimable en PDF (`window.print` + feuille de style print)

## Structure

Un seul fichier : [`index.html`](index.html) — HTML, CSS et JS inclus. Zéro dépendance, zéro build.

| Fichier | Rôle |
|---|---|
| `index.html` | Le site entier |
| `og.png` | Aperçu des liens (Open Graph, 1200×630) |
| `apple-touch-icon.png` | Icône iOS |
| `robots.txt` / `sitemap.xml` | SEO |
| `CNAME` | Domaine GitHub Pages → jimmybomy.fr |

## Modifier le contenu

Tout est en haut du `<script>` dans `index.html` :

- `PROJECTS` — la vitrine (4 projets principaux)
- `LABS` — les expériences
- `XP` — le parcours
- `EMAIL` / `PHONE` — coordonnées

## Tests

`node --test tests/*.test.mjs` (Node 22, aucune dépendance) vérifie à chaque push et chaque pull request :
le JavaScript, les fiches projets (champs, images, liens HTTPS, études de cas), la synchro avec le contenu SEO,
les fichiers référencés, les textes alternatifs des images, le service worker et le sitemap.

## Déploiement

Hébergé sur mon VPS Linux (Apache). Chaque fusion sur `main` déclenche la GitHub Action `Déploiement VPS`,
qui se connecte en SSH et fait un `git pull` dans `/var/www/jimmybomy.fr`.
