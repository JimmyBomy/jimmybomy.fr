// Tests automatiques du portfolio BomyOS — sans dépendance : `node --test tests/`
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");
const exists = (p) => existsSync(new URL(p.replace(/^\//, "").split("?")[0], root));

const js = read("assets/js/bomyos.js");
const html = read("index.html");

// Extrait un objet/tableau de données (PROJECTS, LABS, XP) du script sans exécuter le reste
function data(name) {
  const start = js.indexOf(`const ${name}=`);
  assert.ok(start >= 0, `${name} introuvable`);
  const open = js[start + name.length + 7];
  const close = open === "{" ? "}" : "]";
  let depth = 0, i = start + name.length + 7, inStr = null;
  for (; i < js.length; i++) {
    const c = js[i];
    if (inStr) { if (c === "\\") i++; else if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") inStr = c;
    else if (c === open) depth++;
    else if (c === close && --depth === 0) break;
  }
  return vm.runInNewContext("(" + js.slice(start + name.length + 7, i + 1) + ")");
}
const PROJECTS = data("PROJECTS"), LABS = data("LABS"), XP = data("XP");

test("le script principal est du JavaScript valide", () => {
  assert.doesNotThrow(() => new vm.Script(js));
});

test("chaque projet a toutes ses informations", () => {
  for (const [id, p] of Object.entries({ ...PROJECTS, ...LABS })) {
    for (const k of ["name", "cat", "role", "year", "client", "desc"]) {
      assert.ok(typeof p[k] === "string" && p[k].trim(), `${id} : champ « ${k} » vide`);
    }
    assert.ok(Array.isArray(p.tags) && p.tags.length > 0, `${id} : aucun tag`);
    assert.match(p.year, /^20\d\d$/, `${id} : année invalide`);
  }
});

test("les images des projets existent dans le dépôt", () => {
  for (const [id, p] of Object.entries({ ...PROJECTS, ...LABS })) {
    if (p.img) assert.ok(exists(p.img), `${id} : image manquante ${p.img}`);
  }
});

test("les liens des projets sont en HTTPS", () => {
  for (const [id, p] of Object.entries({ ...PROJECTS, ...LABS })) {
    if (p.link) assert.match(p.link, /^https:\/\//, `${id} : lien non HTTPS ${p.link}`);
  }
});

test("les études de cas sont complètes", () => {
  for (const [id, p] of Object.entries(PROJECTS)) {
    if (!p.study) continue;
    assert.ok(p.study.length >= 3, `${id} : étude de cas trop courte`);
    for (const s of p.study) assert.ok(s.h && s.p && s.p.length > 40, `${id} : bloc « ${s.h} » vide`);
    if (p.metrics) for (const m of p.metrics) assert.equal(m.length, 2, `${id} : chiffre clé mal formé`);
  }
});

test("chaque projet vitrine est aussi dans le HTML lu par Google et les lecteurs d'écran", () => {
  const seo = html.slice(html.indexOf('<main class="sr-only">'), html.indexOf("</main>"));
  for (const p of Object.values(PROJECTS)) {
    assert.ok(seo.includes(p.name), `« ${p.name} » absent du contenu SEO`);
  }
});

test("les fichiers locaux référencés par index.html existent", () => {
  const refs = [...html.matchAll(/(?:src|href)="(?!https?:|mailto:|tel:|data:|#)([^"]+)"/g)].map((m) => m[1]);
  for (const r of refs) {
    if (r.endsWith("/") || r.startsWith("/#")) continue; // pages servies par Apache
    assert.ok(exists(r), `fichier manquant : ${r}`);
  }
});

test("toutes les images du HTML ont un texte alternatif", () => {
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    assert.match(img, /\salt="[^"]+"/, `image sans alt : ${img.slice(0, 80)}`);
  }
});

test("le parcours est renseigné", () => {
  assert.ok(XP.length >= 3);
  for (const x of XP) assert.ok(x.yr && x.role && x.co && x.desc);
});

test("le cache du service worker est versionné", () => {
  assert.match(read("sw.js"), /const CACHE = "bomyos-v\d+"/);
});

test("le service worker est enregistré avec son numéro de version (contourne le cache Cloudflare)", () => {
  const cache = read("sw.js").match(/const CACHE = "bomyos-v(\d+)"/)[1];
  const js = read("assets/js/bomyos.js");
  assert.equal(js.match(/const SW_V=(\d+);/)[1], cache, "SW_V dans bomyos.js doit égaler le numéro de CACHE de sw.js");
  assert.match(js, /register\("\/sw\.js\?v="\+SW_V/);
});

test("les pages légales ne passent jamais par un cache", () => {
  assert.match(read("assets/js/bomyos.js"), /cache:"no-store"/);
  assert.match(read("sw.js"), /mentions-legales\|confidentialite/);
});

test("le sitemap ne contient que des adresses jimmybomy.fr en HTTPS", () => {
  const locs = [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locs.length > 0);
  for (const l of locs) assert.match(l, /^https:\/\/jimmybomy\.fr\//);
});

test("la version anglaise est la même interface BomyOS, à jour avec index.html", async () => {
  const { buildEn } = await import("../tools/build-en.mjs");
  assert.equal(read("en/index.html"), buildEn(), "en/index.html n'est pas à jour : lancer node tools/build-en.mjs");
  const en = read("en/index.html");
  assert.match(en, /<html lang="en">/);
  assert.match(en, /hreflang="fr" href="https:\/\/jimmybomy\.fr\/"/);
  assert.match(html, /hreflang="en" href="https:\/\/jimmybomy\.fr\/en\/"/);
  assert.match(en, /<script src="\/assets\/js\/i18n-en\.js[^"]*"><\/script>\s*<script src="\/assets\/js\/bomyos\.js/);
  for (const m of en.matchAll(/(?:src|href)="(\/assets\/[^"?]+)/g)) assert.ok(exists(m[1]), `fichier manquant : ${m[1]}`);
});

test("chaque projet est traduit en anglais", () => {
  const ctx = { window: {} };
  vm.runInNewContext(read("assets/js/i18n-en.js"), ctx);
  const D = ctx.window.BOMY_EN;
  for (const [id, p] of Object.entries({ ...PROJECTS, ...LABS })) {
    for (const k of ["cat", "role", "client", "desc"]) assert.ok(p[k] in D, `${id} : « ${k} » sans traduction dans i18n-en.js`);
    for (const s of p.study || []) { assert.ok(s.h in D, `${id} : titre « ${s.h} » sans traduction`); assert.ok(s.p in D, `${id} : étude de cas sans traduction`); }
    for (const m of p.metrics || []) assert.ok(m[1] in D, `${id} : chiffre « ${m[1]} » sans traduction`);
  }
  for (const x of XP) for (const k of ["role", "desc"]) assert.ok(x[k].replace(/<[^>]+>/g, "") in D || x[k] in D || x[k].includes("<"), `parcours : « ${x[k]} » sans traduction`);
});
test("les fiches « page produit » ont leurs images, décrites et traduites", () => {
  const ctx = { window: {} };
  vm.runInNewContext(read("assets/js/i18n-en.js"), ctx);
  const D = ctx.window.BOMY_EN;
  let n = 0;
  for (const [id, p] of Object.entries(PROJECTS)) {
    if (!p.scenes) continue;
    n++;
    assert.ok(p.study && p.study.length >= 3, `${id} : une fiche « page produit » a besoin d'une étude de cas`);
    assert.ok(p.scenes.length >= 1 && p.scenes.length <= p.study.length, `${id} : au plus une image par chapitre`);
    for (const [src, alt] of [...p.scenes, ...(p.phone ? [p.phone] : [])]) {
      assert.ok(exists(src), `${id} : image manquante ${src}`);
      assert.ok(alt && alt.length > 20, `${id} : image sans description ${src}`);
      assert.ok(alt in D, `${id} : description sans traduction ${src}`);
    }
  }
  assert.ok(n >= 1, "aucune fiche « page produit »");
  for (const k of ["En chiffres", "Le mot du client", "Le projet en bref", "Étude de cas"]) assert.ok(k in D, `« ${k} » sans traduction`);
  assert.match(js, /wireStory\(el\.querySelector\("\.win-body"\)\)/);
  assert.match(js, /wireStory\(msBody\)/);
});
test("la visite guidée dure 30 s, n'ouvre que des apps qui existent et est traduite", () => {
  const ctx = { window: {} };
  vm.runInNewContext(read("assets/js/i18n-en.js"), ctx);
  const D = ctx.window.BOMY_EN;
  const STEPS = data("TOUR_STEPS"), APPS = data("APPS");
  assert.equal(STEPS.reduce((a, s) => a + s.ms, 0), 30000, "la visite doit durer 30 secondes");
  for (const s of STEPS) {
    const ok = s.app.startsWith("project:") ? s.app.slice(8) in PROJECTS : s.app in APPS;
    assert.ok(ok, `visite : app inconnue « ${s.app} »`);
    if (s.from) assert.ok(s.from in APPS, `visite : app de départ inconnue « ${s.from} »`);
    assert.ok(s.txt in D, `visite : légende sans traduction « ${s.txt} »`);
    assert.ok(!/[—–]/.test(s.txt), "visite : pas de tiret long dans les légendes");
  }
  for (const k of ["Visite guidée", "Lancer la visite", "Fin de la visite. Le bureau est à vous.", "En pause", "Étape précédente", "Étape suivante", "Mettre en pause", "Reprendre la visite", "Revoir la visite", "Quitter la visite"]) assert.ok(k in D, `« ${k} » sans traduction`);
  assert.ok((html.match(/data-tour/g) || []).length >= 2, "la visite doit pouvoir se lancer depuis le bureau et depuis l'accueil téléphone");
  assert.match(js, /e\.key==="Escape"\)\{e\.preventDefault\(\);e\.stopImmediatePropagation\(\);stop\(\)/, "Échap doit quitter la visite");
});
test("les jeux jouables ont leur fichier, leurs captures avec texte alternatif et une page à partager", () => {
  for (const [id, p] of Object.entries({ ...PROJECTS, ...LABS })) {
    if (!p.game) continue;
    assert.ok(exists(p.game + "index.html"), `${id} : jeu manquant ${p.game}index.html`);
    assert.ok(Array.isArray(p.shots) && p.shots.length >= 3, `${id} : il faut 3 captures`);
    for (const [src, alt] of p.shots) {
      assert.ok(exists(src), `${id} : capture manquante ${src}`);
      assert.ok(alt && alt.length > 10, `${id} : capture sans texte alternatif ${src}`);
    }
    assert.ok(Array.isArray(p.features) && p.features.length > 0, `${id} : aucune fonctionnalité`);
    assert.ok(p.page && exists(p.page + "index.html"), `${id} : page projet manquante`);
    const page = read(p.page.replace(/^\//, "") + "index.html");
    for (const tag of ["og:title", "og:description", "og:image", "twitter:card"]) assert.match(page, new RegExp(`property="${tag}"|name="${tag}"`), `${id} : ${tag} manquant`);
    const og = page.match(/property="og:image" content="https:\/\/jimmybomy\.fr(\/[^"]+)"/);
    assert.ok(og && exists(og[1]), `${id} : image Open Graph manquante`);
    assert.match(page, /allow="fullscreen; autoplay"|"allow","fullscreen; autoplay"/);
    for (const img of page.match(/<img\b[^>]*>/g) || []) assert.match(img, /\salt="[^"]+"/, `${id} : image sans alt`);
    for (const m of page.matchAll(/src="(\/assets\/[^"]+)"/g)) assert.ok(exists(m[1]), `${id} : fichier manquant ${m[1]}`);
  }
});
