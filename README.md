# BomyOS — jimmybomy.fr

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

## Déploiement

Hébergé sur GitHub Pages avec domaine custom `jimmybomy.fr` (fichier `CNAME`).
Chaque push sur `main` déploie automatiquement.
