// Génère en/index.html (version anglaise de BomyOS) à partir de index.html.
// Usage : node tools/build-en.mjs   — à relancer après chaque modification de index.html.
// Les textes de l'interface sont traduits avec le dictionnaire de assets/js/i18n-en.js ;
// le bloc SEO (lu par Google et les lecteurs d'écran) vient de tools/en-seo.html.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");

export function buildEn() {
  const ctx = { window: {} };
  vm.runInNewContext(read("assets/js/i18n-en.js"), ctx);
  const tr = ctx.window.bomyTr;
  let h = read("index.html");

  // 1. Bloc SEO en anglais
  const a = h.indexOf('<main class="sr-only">'), b = h.indexOf("</main>") + 7;
  h = h.slice(0, a) + read("tools/en-seo.html").trim() + h.slice(b);

  // 2. <head> : langue, titre, descriptions, URL canonique
  const rep = (from, to) => { if (!h.includes(from)) throw new Error("introuvable dans index.html : " + from); h = h.split(from).join(to); };
  rep('<html lang="fr">', '<html lang="en">');
  rep("<title>Jimmy Bomy · Développeur web créatif · Sedan / Troyes</title>", "<title>Jimmy Bomy · Creative web developer · Sedan / Troyes, France</title>");
  h = h.replace(/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="Jimmy Bomy, freelance web developer and BUT MMI student in Troyes, France. Client web apps, PHP/MySQL, vanilla JavaScript. Interactive portfolio that works like an operating system." />');
  rep('<link rel="canonical" href="https://jimmybomy.fr/" />', '<link rel="canonical" href="https://jimmybomy.fr/en/" />');
  rep('<meta property="og:url" content="https://jimmybomy.fr/" />', '<meta property="og:url" content="https://jimmybomy.fr/en/" />');
  h = h.replace(/<meta property="og:title" content="[^"]*" \/>/, '<meta property="og:title" content="Jimmy Bomy · Creative web developer · Sedan / Troyes" />');
  h = h.replace(/<meta property="og:description" content="[^"]*" \/>/, '<meta property="og:description" content="Client web apps and websites. An interactive portfolio that works like an operating system." />');
  rep('<meta property="og:locale" content="fr_FR" />', '<meta property="og:locale" content="en_GB" />');
  h = h.replace(/<meta name="twitter:title" content="[^"]*" \/>/, '<meta name="twitter:title" content="Jimmy Bomy · Creative web developer" />');
  h = h.replace(/<meta name="twitter:description" content="[^"]*" \/>/, '<meta name="twitter:description" content="An interactive portfolio that works like an OS · Sedan / Troyes." />');
  rep('"jobTitle": "Développeur web créatif"', '"jobTitle": "Creative web developer"');

  // 3. Lien de langue : EN → FR
  rep('<a href="/en/" hreflang="en" lang="en" class="icb" title="English version" aria-label="English version"', '<a href="/" hreflang="fr" lang="fr" class="icb" title="Version française" aria-label="Version française"');
  h = h.replace(/(class="icb" title="Version française"[^>]*>)EN</, "$1FR<");
  rep('<a href="/en/" hreflang="en" lang="en">English</a>', '<a href="/" hreflang="fr" lang="fr">Français</a>');

  // 3 bis. Pages légales en anglais
  h = h.split('href="/mentions-legales/"').join('href="/en/legal-notice/"').split('href="/confidentialite/"').join('href="/en/privacy/"');

  // 4. Chemins absolus (la page est servie depuis /en/) + dictionnaire avant le script principal
  h = h.replace(/(src|href)="(?!\/|https?:|data:|mailto:|tel:|#)([^"]+)"/g, '$1="/$2"');
  h = h.replace(/(<script src="\/assets\/js\/bomyos\.js\?v=\d+"><\/script>)/, '<script src="/assets/js/i18n-en.js?v=6"></script>\n$1');

  // 5. Textes visibles et attributs (hors scripts et styles)
  const parts = h.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->)/);
  for (let i = 0; i < parts.length; i += 2) {
    if (parts[i].includes('<main class="sr-only">')) {
      const s = parts[i].indexOf('<main class="sr-only">'), e = parts[i].indexOf("</main>") + 7;
      parts[i] = tx(parts[i].slice(0, s)) + parts[i].slice(s, e) + tx(parts[i].slice(e));
    } else parts[i] = tx(parts[i]);
  }
  function tx(x) {
    return x
      .replace(/>([^<>]+)</g, (m, t) => ">" + tr(t) + "<")
      .replace(/\b(aria-label|title|placeholder|alt)="([^"]*)"/g, (m, k, v) => `${k}="${tr(v)}"`);
  }
  h = parts.join("");
  return h.replace("<!DOCTYPE html>\n", "<!DOCTYPE html>\n<!-- Généré par tools/build-en.mjs à partir de index.html, ne pas modifier à la main. -->\n");
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop())) {
  mkdirSync(new URL("en/", root), { recursive: true });
  writeFileSync(new URL("en/index.html", root), buildEn());
  console.log("en/index.html généré.");
}
