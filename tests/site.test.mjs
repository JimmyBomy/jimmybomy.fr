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

test("le sitemap ne contient que des adresses jimmybomy.fr en HTTPS", () => {
  const locs = [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locs.length > 0);
  for (const l of locs) assert.match(l, /^https:\/\/jimmybomy\.fr\//);
});

test("la version anglaise existe, renvoie vers le français et ses fichiers existent", () => {
  const en = read("en/index.html");
  assert.match(en, /<html lang="en">/);
  assert.match(en, /hreflang="fr" href="https:\/\/jimmybomy\.fr\/"/);
  assert.match(html, /hreflang="en" href="https:\/\/jimmybomy\.fr\/en\/"/);
  for (const m of en.matchAll(/src="(\/assets\/[^"]+)"/g)) assert.ok(exists(m[1]), `image manquante : ${m[1]}`);
  for (const img of en.match(/<img\b[^>]*>/g) || []) assert.match(img, /\salt="[^"]+"/);
});
