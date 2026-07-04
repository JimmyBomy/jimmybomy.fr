const EMAIL="jimmybomy@icloud.com",PHONE="07 88 02 16 76",TEL="0788021676";
const ICON={
  folder:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M6 14c0-2.2 1.8-4 4-4h9l4 4h15c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V14z" fill="#7cc4ff"/><path d="M6 20h36v18c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V20z" fill="#a9d8ff"/></svg>',
  labs:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M6 14c0-2.2 1.8-4 4-4h9l4 4h15c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V14z" fill="#a78bfa"/><path d="M6 20h36v18c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V20z" fill="#c4b5fd"/><path d="M21.5 25v4.2l-3.6 5.9a2 2 0 0 0 1.7 3h8.8a2 2 0 0 0 1.7-3l-3.6-5.9V25" stroke="#3b2a6e" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M19.8 25h8.4" stroke="#3b2a6e" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="34.5" r="1.6" fill="#c6ff4e"/></svg>',
  user:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><rect x="7" y="6" width="34" height="36" rx="5" fill="#eef0ea"/><circle cx="24" cy="20" r="6" fill="#c6ff4e"/><path d="M14 36c1.5-6 6-8 10-8s8.5 2 10 8" stroke="#0a0b0e" stroke-width="2.4" fill="none"/></svg>',
  doc:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M12 5h16l8 8v30a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="#eef0ea"/><path d="M28 5l8 8h-8V5z" fill="#b9bcc4"/><rect x="16" y="22" width="16" height="2.4" rx="1.2" fill="#71757e"/><rect x="16" y="28" width="16" height="2.4" rx="1.2" fill="#71757e"/><rect x="16" y="34" width="10" height="2.4" rx="1.2" fill="#71757e"/></svg>',
  pdf:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M12 5h16l8 8v30a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="#eef0ea"/><path d="M28 5l8 8h-8V5z" fill="#b9bcc4"/><rect x="8" y="28" width="32" height="12" rx="2" fill="#ff5f57"/><text x="24" y="37" font-family="Archivo" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">PDF</text></svg>',
  terminal:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><rect x="5" y="8" width="38" height="32" rx="5" fill="#0c1016"/><rect x="5" y="8" width="38" height="32" rx="5" stroke="#2b3340" stroke-width="1.5"/><path d="M13 20l6 4-6 4" stroke="#c6ff4e" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="24" y="27" width="10" height="2.4" rx="1.2" fill="#7cc4ff"/></svg>',
  mail:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><rect x="6" y="11" width="36" height="26" rx="6" fill="#eef0ea"/><path d="M8 15l16 12 16-12" stroke="#7cc4ff" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  services:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M8 16l3-8h26l3 8v3a5 5 0 0 1-10 0 5 5 0 0 1-11 0 5 5 0 0 1-11 0v-3z" fill="#c6ff4e"/><path d="M10 24v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V24" stroke="#eef0ea" stroke-width="2.6"/><rect x="20" y="29" width="8" height="11" rx="1" fill="#eef0ea"/></svg>',
  devis:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M8 8h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H20l-9 8v-8H8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#eef0ea"/><text x="24" y="28" font-family="Archivo" font-size="16" font-weight="800" fill="#0a5ce8" text-anchor="middle">€</text></svg>',
  gear:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="19" fill="#8e93a0"/><circle cx="24" cy="24" r="7.5" fill="none" stroke="#eef0ea" stroke-width="3.4"/><g stroke="#eef0ea" stroke-width="3.4" stroke-linecap="round"><path d="M24 9v5M24 34v5M9 24h5M34 24h5M13.4 13.4l3.5 3.5M31.1 31.1l3.5 3.5M34.6 13.4l-3.5 3.5M16.9 31.1l-3.5 3.5"/></g></svg>',
  messages:'<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="10" fill="url(#gmsg)"/><defs><linearGradient id="gmsg" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#6ee97c"/><stop offset="1" stop-color="#21c04b"/></linearGradient></defs><path d="M24 12c-7.7 0-14 4.9-14 11 0 3.5 2 6.6 5.2 8.6-.2 1.7-1 3.3-2.4 4.6 2.5-.2 4.7-1.1 6.4-2.4 1.5.4 3.1.7 4.8.7 7.7 0 14-4.9 14-11.2S31.7 12 24 12z" fill="#fff"/></svg>',
  photos:'<svg width="42" height="42" viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="10" fill="#f5f5f7"/><g transform="translate(24 24)">'+["#ff453a","#ff9f0a","#ffd60a","#30d158","#63e6e2","#0a84ff","#5e5ce6","#bf5af2"].map((c,i)=>`<ellipse rx="4.6" ry="9.5" cy="-8" fill="${c}" opacity=".82" transform="rotate(${i*45})"/>`).join("")+'</g></svg>',
  calc:'<svg width="42" height="42" viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="10" fill="#1c1c1e"/><g fill="#eef0ea"><circle cx="14" cy="15" r="3.4"/><circle cx="24" cy="15" r="3.4"/><circle cx="14" cy="25" r="3.4"/><circle cx="24" cy="25" r="3.4"/><circle cx="14" cy="35" r="3.4"/><circle cx="24" cy="35" r="3.4"/></g><g fill="#ff9f0a"><circle cx="34" cy="15" r="3.4"/><circle cx="34" cy="25" r="3.4"/><circle cx="34" cy="35" r="3.4"/></g></svg>',
  plans:'<svg width="42" height="42" viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="10" fill="#d8ecd2"/><path d="M4 30c8-2 12-10 20-9s12 10 20 6v11a10 10 0 0 1-10 10H14A10 10 0 0 1 4 38v-8z" fill="#a8d5e5"/><path d="M4 14h40M18 4v40" stroke="#f6d56a" stroke-width="3.6"/><circle cx="31" cy="21" r="6.4" fill="#ff453a"/><circle cx="31" cy="21" r="2.4" fill="#fff"/></svg>',
  gh:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#eef0ea"><path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.75c-2.9.63-3.52-1.4-3.52-1.4-.47-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.07-2.8-.1-.26-.46-1.32.1-2.75 0 0 .88-.28 2.88 1.07a10 10 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.56 1.43.2 2.49.1 2.75.67.73 1.07 1.66 1.07 2.8 0 4-2.45 4.9-4.78 5.16.38.32.72.96.72 1.94v2.88c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5z"/></svg>',
  li:'<svg width="22" height="22" viewBox="0 0 24 24" fill="#eef0ea"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.75 2.5 4.75 5.9V21H19v-5.5c0-1.3-.02-3-1.87-3-1.87 0-2.16 1.44-2.16 2.92V21H11V9z"/></svg>',
};
/* ==== VITRINE — les flagships (édite ici) ==== */
const PROJECTS={
  rois:{name:"Rois de France",cat:"Encyclopédie web · PHP/MySQL",img:"assets/shots/rois.jpg",grad:"linear-gradient(135deg,#3a2410,#c8892e 55%,#f2d06b)",role:"Conception, back & front",year:"2025",client:"SAÉ 203 · BUT MMI — noté 18,1/20",tags:["PHP","MySQL","Sécurité XSS/SQL","Lighthouse","VPS"],link:"https://jimmybomy.fr/projets/rois/",desc:"Encyclopédie web sur les monarques de France, de Clovis à Napoléon III : 64 fiches dynamiques, quiz, recherche, sécurisation des formulaires (XSS / injections SQL) et audit Lighthouse. PHP/MySQL, déployé sur mon VPS."},
  lumina:{name:"Lumina Studio",cat:"Agence événementielle · site",img:"assets/shots/lumina.jpg",grad:"linear-gradient(135deg,#0e1a3a,#2563eb 55%,#7cc4ff)",role:"Direction artistique & développement",year:"2025",client:"SAÉ 202 · BUT MMI",tags:["HTML/CSS","JavaScript","Direction artistique"],link:"https://jimmybomy.fr/projets/lumina/",desc:"Site d'une agence créative et événementielle basée à Troyes — « là où la nuit devient expérience ». Design dark élégant, présentation de l'agence et de ses prestations immersives, avec son escape game Backrooms en projet phare."},
  backrooms:{name:"Backrooms",cat:"Escape game · site immersif",img:"assets/shots/backrooms.jpg",grad:"linear-gradient(135deg,#1a1400,#3a3000 60%,#c6a800)",role:"Design & développement",year:"2025",client:"SAÉ 202 · BUT MMI",tags:["HTML/CSS","JavaScript","Ambiance & UX"],link:"https://jimmybomy.fr/projets/backrooms/",desc:"Site de l'escape game de Lumina Studio, inspiré de la légende urbaine des Backrooms : ambiance horreur/liminale, présentation du concept, des salles et réservation. Le pendant immersif du site agence."},
  bomyos:{name:"BomyOS",cat:"Ce site · OS en JS vanilla",img:"assets/shots/bomyos.jpg",grad:"linear-gradient(135deg,#0d1f12,#c6ff4e 60%,#7cc4ff)",role:"Design & développement from scratch",year:"2026",client:"Portfolio personnel",tags:["JS vanilla","WebAudio","Accessibilité","UI/UX"],link:"https://github.com/JimmyBomy/jimmybomy.fr",desc:"Le site sur lequel tu te trouves : un système d'exploitation complet en JavaScript vanilla, sans framework — fenêtres draggables et redimensionnables, sons WebAudio, navigation clavier intégrale, lecteurs d'écran supportés, terminal interactif. La démo tourne sous tes yeux."},
};
/* ==== LABS — les expériences ==== */
const LABS={
  pendule:{name:"Pendule échecs/dames",cat:"Outil · HTML/JS",grad:"linear-gradient(135deg,#1a1a1a,#c6ff4e 65%,#eef0ea)",role:"Développement",year:"2025",client:"Projet personnel",tags:["HTML","JavaScript"],link:"",desc:"Horloge de jeu (pendule) pour parties d'échecs et de dames, jouable directement dans le navigateur — construite à l'origine pour départager la rivalité aux dames avec mon père."},
  sillenbach:{name:"Le Nœud de Sillenbach",cat:"Fiction interactive · Twine",grad:"linear-gradient(135deg,#0f172a,#334155 55%,#94a3b8)",role:"Écriture & conception",year:"2025",client:"Projet personnel",tags:["Twine","Narration non-linéaire","Écriture"],link:"",desc:"Fiction interactive sous Twine : un récit non-linéaire à embranchements, inspiré de la série Dark. Écriture multimédia et narration interactive."},
  cli:{name:"Convertisseur de fichiers",cat:"Outil CLI · Node.js",grad:"linear-gradient(135deg,#0c1016,#22c55e 60%,#a7f3d0)",role:"Développement",year:"2025",client:"Projet personnel",tags:["Node.js","CLI"],link:"",desc:"Outil en ligne de commande Node.js pour convertir des fichiers d'un format à l'autre."},
  sae105:{name:"SAÉ 105",cat:"Site web · S1",grad:"linear-gradient(135deg,#3b1e6e,#7c5cff 60%,#7cc4ff)",role:"Développement",year:"2025",client:"SAÉ 105 · BUT MMI",tags:["HTML/CSS","Web"],link:"",desc:"L'un de mes premiers sites, réalisé au premier semestre du BUT MMI — intégration web et bonnes pratiques."},
  proshop:{name:"Hony Tawk's ProShop",cat:"E-commerce · intégration",img:"assets/shots/proshop.jpg",grad:"linear-gradient(135deg,#111,#333 60%,#c6ff4e)",role:"Intégration HTML/CSS/JS",year:"2025",client:"TP · R2.12",tags:["HTML/CSS","JavaScript","Responsive"],link:"https://jimmybomy.fr/travaux/r212/sequence2/",desc:"Boutique de skateboards fictive (planches, longboards, tee-shirts) : grille produits, filtres et mise en page e-commerce. TP d'intégration web."},
  arboretum:{name:"Arboretum de Loupessac",cat:"Site multi-pages",img:"assets/shots/arboretum.jpg",grad:"linear-gradient(135deg,#0b3d2e,#2f8f6b 60%,#a7f3d0)",role:"Intégration HTML/CSS",year:"2025",client:"TP · R1.12",tags:["HTML/CSS","Multi-pages"],link:"https://jimmybomy.fr/travaux/r112/sequence5/",desc:"Site vitrine d'un arboretum : historique, plan du parc, accès. Structuration multi-pages et mise en page soignée."},
  kingyo:{name:"Kingyo",cat:"Site cuisine · design",img:"assets/shots/kingyo.jpg",grad:"linear-gradient(135deg,#2a2a2a,#8a8a8a 60%,#e26d9a)",role:"Intégration HTML/CSS",year:"2025",client:"TP · R1.12",tags:["HTML/CSS","Design"],link:"https://jimmybomy.fr/travaux/r112/sequence2/",desc:"Site de recettes de cuisine japonaise à l'esthétique épurée (motifs, typographie soignée). TP d'intégration."},
  quizz:{name:"Mon super Quizz",cat:"Quiz interactif · JS",img:"assets/shots/quizz.jpg",grad:"linear-gradient(135deg,#0e1a3a,#2563eb 60%,#7cc4ff)",role:"Développement JavaScript",year:"2025",client:"TP · R2.12",tags:["JavaScript","DOM"],link:"https://jimmybomy.fr/travaux/r212/sequence5/",desc:"Quiz interactif en JavaScript : questions à choix, calcul du score et logique de jeu manipulant le DOM."},
  calculette:{name:"Calculette",cat:"Outil · JS",img:"assets/shots/calculette.jpg",grad:"linear-gradient(135deg,#3a2410,#c8892e 60%,#f2d06b)",role:"Développement JavaScript",year:"2025",client:"TP · R2.12",tags:["JavaScript"],link:"https://jimmybomy.fr/travaux/r212/sequence4/",desc:"Calculatrice fonctionnelle en JavaScript : opérations, gestion des touches et de l'affichage en temps réel."},
  patate:{name:"Monsieur Patate",cat:"Page interactive",img:"assets/shots/patate.jpg",grad:"linear-gradient(135deg,#5a3a1a,#a86b3a 60%,#7cc4ff)",role:"Intégration & JS",year:"2025",client:"TP · R1.12",tags:["HTML/CSS","JavaScript"],link:"https://jimmybomy.fr/travaux/r112/sequence3/",desc:"Page ludique façon Monsieur Patate : composition d'un personnage, ambiance cartoon. Manipulation du DOM."},
};
const ALL={...PROJECTS,...LABS};
const XP=[
  {yr:"2025 — auj.",role:"BUT MMI — Métiers du Multimédia et de l'Internet",co:"IUT de Troyes",desc:"1re année validée — <b style='color:var(--acc)'>18,1/20 de moyenne en développement web</b>."},
  {yr:"En continu",role:"Auto-hébergement & administration système",co:"VPS personnel",desc:"J'héberge et administre tous mes projets sur mon propre VPS Linux : Apache, monitoring GoAccess, déploiements. Également : serveur de jeu Minecraft (Paper) administré via Pterodactyl."},
  {yr:"2022 — 25",role:"Baccalauréat général",co:"Lycée Mabillon",desc:"Développeur autodidacte en parallèle du lycée : développement web et Node.js en autonomie, avant l'entrée en BUT MMI."},
];
const APPS={projets:{title:"Projets",icon:"folder",w:600,h:460},labs:{title:"Labs",icon:"labs",w:600,h:460},services:{title:"Services",icon:"services",w:560,h:620},devis:{title:"Devis express",icon:"devis",w:520,h:480},reglages:{title:"Réglages",icon:"gear",w:540,h:620},terminal:{title:"Terminal",icon:"terminal",w:580,h:430},messages:{title:"Messages",icon:"messages",w:460,h:580},photos:{title:"Photos",icon:"photos",w:640,h:520},calc:{title:"Calculette",icon:"calc",w:340,h:540},plans:{title:"Plans",icon:"plans",w:560,h:540},aide:{title:"Aide — raccourcis",icon:"doc",w:470,h:460},apropos:{title:"À propos.txt",icon:"user",w:520,h:540},parcours:{title:"Parcours.doc",icon:"doc",w:560,h:460},contact:{title:"Contact",icon:"mail",w:520,h:560},cv:{title:"CV.pdf",icon:"pdf",w:540,h:600}};

/* ==== DEVIS EXPRESS (configurateur) ==== */
let DEVIS={step:0,a:[]};
const DEVIS_Q=[
  {q:"Avez-vous déjà un site internet ?",opts:["Non, aucun","Oui, mais vieillissant","Oui, assez récent"]},
  {q:"Quelle est votre activité ?",opts:["Restaurant / café","Commerce / boutique","Artisan / service","Autre"]},
  {q:"Vos clients doivent surtout pouvoir…",opts:["Trouver vos infos & horaires","Réserver ou commander en ligne","Vous contacter facilement"]},
];
function devisHTML(){
  if(DEVIS.step<DEVIS_Q.length){const c=DEVIS_Q[DEVIS.step];
    return `<div class="h-eyebrow">Devis express · question ${DEVIS.step+1} / 3</div><div class="h-title" style="font-size:26px">${c.q}</div>
      <div class="chips" style="flex-direction:column;align-items:stretch;gap:10px;margin-top:18px">
      ${c.opts.map((o,i)=>`<button class="chip" data-devis="${i}" style="text-align:left;cursor:pointer;font-size:14px;padding:13px 15px">${o}</button>`).join("")}</div>
      ${DEVIS.step>0?'<button class="btn ghost" data-devis="back" style="margin-top:20px">‹ Question précédente</button>':''}`;}
  const act=["restaurant / café","commerce","activité d'artisan / service","activité"][DEVIS.a[1]];
  const objectif=["créer mon premier site","moderniser mon site","améliorer mon site"][DEVIS.a[0]];
  const need=["un site vitrine clair : présentation, horaires, itinéraire","un site avec réservation / commande en ligne","un site simple avec contact direct (téléphone, WhatsApp)"][DEVIS.a[2]];
  const msg=encodeURIComponent(`Bonjour Jimmy ! J'ai un ${act} et j'aimerais ${objectif} — il me faudrait ${need}. On peut en parler ?`);
  return `<div class="h-eyebrow">Ma recommandation</div><div class="h-title" style="font-size:28px">Voilà ce qu'il<br>vous faut.</div>
    <p class="lede">Pour votre <b>${act}</b> : ${need}. Hébergement et mise en ligne <b>inclus</b>, et on démarre par une <b>maquette gratuite</b>, sans engagement.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
      <a class="btn" href="https://wa.me/33788021676?text=${msg}" target="_blank" rel="noopener">Envoyer sur WhatsApp <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg></a>
      <button class="btn ghost" data-devis="restart">Recommencer</button></div>
    <p class="lede" style="font-size:12.5px;margin-top:16px;color:var(--dim)">Je réponds en général en moins de 2 heures.</p>`;}
function devisAct(v,container){
  if(v==="back"){DEVIS.step=Math.max(0,DEVIS.step-1);DEVIS.a.length=DEVIS.step;}
  else if(v==="restart"){DEVIS={step:0,a:[]};}
  else{DEVIS.a[DEVIS.step]=+v;DEVIS.step++;}
  snd.tap();container.innerHTML=devisHTML();}

/* ==== TERMINAL (easter egg — accessible via Ctrl+K ou #terminal) ==== */
function wireTerminal(root){const out=root.querySelector(".term-out"),inp=root.querySelector(".term-in");if(!inp)return;
  setTimeout(()=>inp.focus(),80);
  inp.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const raw=inp.value.trim();inp.value="";
    const w=document.createElement("div");w.innerHTML=`<span class="p">jimmy@bomyos</span>:<span class="u">~</span>$ ${esc(raw)}`;out.appendChild(w);
    runCmd(raw,out);inp.scrollIntoView({block:"nearest"});});}
function tOut(out,html){const d=document.createElement("div");d.className="c";d.innerHTML=html;out.appendChild(d);}
function runCmd(raw,out){const cmd=raw.toLowerCase();if(!cmd)return;
  if(cmd==="clear"){out.innerHTML="";return;}
  const open={projets:"projets",labs:"labs",devis:"devis",services:"services",cv:"cv",parcours:"parcours",contact:"contact"};
  if(open[cmd]){tOut(out,'<span class="muted">Ouverture…</span>');openApp(open[cmd]);return;}
  if(cmd==="sudo embauche-moi"){tOut(out,'Permission accordée ✅ — <a href="mailto:'+EMAIL+'?subject=On%20t%27embauche">envoie le mail d\'embauche</a>');return;}
  if(cmd.startsWith("sudo")){tOut(out,'Nice try 😏 — essaie <span class="acc">sudo embauche-moi</span>');return;}
  const map={help:'commandes : <span class="acc">whoami · projets · labs · services · devis · contact · cv · ls · date · clear</span> — et un sudo bien senti.',
    whoami:"Jimmy Bomy — développeur web créatif · BUT MMI (Troyes) · Sedan.",
    ls:"projets/&nbsp;&nbsp;labs/&nbsp;&nbsp;services&nbsp;&nbsp;devis&nbsp;&nbsp;a-propos.txt&nbsp;&nbsp;cv.pdf&nbsp;&nbsp;reglages",
    contact:`email → <a href="mailto:${EMAIL}">${EMAIL}</a><br>tél&nbsp;&nbsp;&nbsp;→ <a href="tel:${TEL}">${PHONE}</a><br>whatsapp → <a href="https://wa.me/33788021676" target="_blank" rel="noopener">wa.me</a>`,
    date:new Date().toLocaleString("fr-FR")};
  if(map[cmd]){tOut(out,map[cmd]);return;}
  tOut(out,`commande introuvable : ${esc(raw)} — tape <span class="acc">help</span>`);}

/* ==== MESSAGES (iMessage) ==== */
const MSG={
  start:{j:["Salut 👋 Ici Jimmy.","Qu'est-ce qui vous amène ?"],c:[["🏪 Un site pour mon commerce","biz"],["💼 Je recrute / stage","rec"],["👀 Je visite","fun"]]},
  biz:{j:["Parfait, c'est mon métier 👌","Site vitrine, réservation, refonte — et on démarre toujours par une maquette gratuite, sans engagement."],c:[["⚡ Devis express (3 questions)","@devis"],["💬 WhatsApp direct","!wa"],["📁 Voir vos réalisations","@projets"]]},
  rec:{j:["Super !","BUT MMI à Troyes, 18,1/20 en dev web. Le mieux, c'est de juger sur pièces :"],c:[["📁 Mes projets","@projets"],["📄 Mon CV","@cv"],["✉️ M'écrire","!mail"]]},
  fun:{j:["Bienvenue sur BomyOS 😄","Tout est explorable : changez le fond dans Réglages, fouillez le dossier Labs… il y a même des secrets."],c:[["📁 Les projets","@projets"],["🧪 Le dossier Labs","@labs"],["⚙️ Réglages","@reglages"]]},
};
function msgBoot(root){if(!root||root._booted)return;root._booted=true;root._node="start";msgPlay(root);}
function msgPlay(root){const log=root.querySelector(".imsg-log"),chips=root.querySelector(".imsg-chips");chips.innerHTML="";
  const n=MSG[root._node];let i=0;
  const t=document.createElement("div");t.className="bg typing";t.innerHTML="<i></i><i></i><i></i>";log.appendChild(t);scr(root);
  const step=()=>{if(!root.isConnected)return;
    if(i<n.j.length){t.insertAdjacentHTML("beforebegin",`<div class="bg">${n.j[i]}</div>`);i++;scr(root);snd.tap();setTimeout(step,560);}
    else{t.remove();chips.innerHTML=n.c.map(([l,v])=>`<button class="chip mchip" data-msg="${v}">${l}</button>`).join("");scr(root);}};
  setTimeout(step,650);}
function scr(root){const sc=root.closest(".win-body")||root.closest(".msbody");if(sc)sc.scrollTop=9e9;}
function msgAct(v,root){const chips=root.querySelector(".imsg-chips"),log=root.querySelector(".imsg-log");
  const btn=chips.querySelector('[data-msg="'+v+'"]');
  log.insertAdjacentHTML("beforeend",`<div class="bs">${btn?btn.textContent:"…"}</div>`);chips.innerHTML="";snd.tap();scr(root);
  if(v.startsWith("@")){const app=v.slice(1);setTimeout(()=>{innerWidth>720?openApp(app):mopen(app);},380);return;}
  if(v==="!wa"){window.open("https://wa.me/33788021676","_blank","noopener");return;}
  if(v==="!mail"){location.href="mailto:"+EMAIL;return;}
  root._node=v;msgPlay(root);}

/* ==== CALCULETTE ==== */
function calcAct(k,root){const d=root.querySelector("[data-cd]");let s=root._c||(root._c={cur:"0",prev:null,op:null,fresh:true});
  const show=v=>{let t=String(v);if(t.length>9)t=parseFloat(v).toPrecision(8).replace(/\.?0+$/,"");d.textContent=t.replace(".",",");};
  const val=()=>parseFloat(s.cur);
  if(k>="0"&&k<="9"){s.cur=s.fresh||s.cur==="0"?k:s.cur+k;s.fresh=false;}
  else if(k===","){if(s.fresh){s.cur="0.";s.fresh=false;}else if(!s.cur.includes("."))s.cur+=".";}
  else if(k==="C"){s.cur="0";s.prev=null;s.op=null;s.fresh=true;}
  else if(k==="±")s.cur=String(-val());
  else if(k==="%")s.cur=String(val()/100);
  else if(["÷","×","−","+"].includes(k)){if(s.op&&!s.fresh)calcAct("=",root),s=root._c;s.prev=parseFloat(s.cur);s.op=k;s.fresh=true;}
  else if(k==="="&&s.op!==null&&s.prev!==null){const a=s.prev,b=val();let r=s.op==="+"?a+b:s.op==="−"?a-b:s.op==="×"?a*b:(b===0?NaN:a/b);
    s.cur=isNaN(r)?"Erreur":String(Math.round(r*1e10)/1e10);s.prev=null;s.op=null;s.fresh=true;}
  root.querySelectorAll(".ck.op").forEach(b=>b.classList.toggle("hold",s.op===b.textContent&&s.fresh));
  show(s.cur);snd.tap();}

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function finderHTML(title,sub,items){return `<div class="h-eyebrow">Finder · ${Object.keys(items).length} éléments</div><div class="h-title" style="font-size:26px;margin:10px 0 6px">${title}</div>
  ${sub?`<p class="lede" style="font-size:13px;margin-bottom:18px">${sub}</p>`:'<div style="height:14px"></div>'}
  <div class="finder">${Object.entries(items).map(([id,p])=>`<button class="fitem" data-open="project:${id}" aria-label="Ouvrir ${p.name}"><span class="fthumb" style="${p.img?`background-image:url('${p.img}');background-size:cover;background-position:top center`:`background:${p.grad}`}"></span><span class="fname">${p.name}</span><span class="fmeta">${p.cat}</span></button>`).join("")}</div>`;}
function content(app){
  if(app==="projets")return finderHTML("Projets","La vitrine — mes projets principaux.",PROJECTS);
  if(app==="labs")return finderHTML("Labs","Les expériences — petits projets, outils et bidouilles.",LABS);
  if(app.startsWith("project:")){const p=ALL[app.split(":")[1]];
    return `<div class="proj-hero" style="${p.img?`background-image:url('${p.img}');background-size:cover;background-position:top center`:`background:${p.grad}`}">${p.img?"":'<div class="mock"></div>'}</div><div class="h-eyebrow">${p.cat}</div><div class="h-title">${p.name}</div>
      <p class="lede">${p.desc}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <div class="kv"><span class="k">Rôle</span><span>${p.role}</span><span class="k">Année</span><span>${p.year}</span><span class="k">Contexte</span><span>${p.client}</span></div>
      ${p.link?`<button class="btn" data-site="${p.link}" data-title="${esc(p.name)}">Ouvrir le projet <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg></button>`:`<span class="btn ghost" style="cursor:default">En développement</span>`}`;}
  if(app==="apropos")return `<div class="h-eyebrow">À propos</div><div class="h-title">Salut,<br>moi c'est Jimmy.</div>
    <p class="lede">Étudiant en <span class="acc">BUT MMI</span> à Troyes, basé à Sedan. Je développe des sites et des jeux web — du <b>back PHP/MySQL</b> au <b>Canvas HTML5</b> — et j'héberge et administre <b>tous mes projets sur mon propre VPS Linux</b> (Apache, monitoring GoAccess). Autodidacte avant la fac, je code parce que j'aime résoudre des problèmes et voir le résultat tourner.</p>
    <div class="stats"><div class="stat"><div class="n"><i>18,1</i></div><div class="l">moyenne dev web</div></div><div class="stat"><div class="n"><i>10</i></div><div class="l">sites en ligne</div></div><div class="stat"><div class="n"><i>14</i></div><div class="l">projets & labs</div></div><div class="stat"><div class="n"><i>VPS</i></div><div class="l">auto-hébergé</div></div></div>
    <div class="divider"></div><div class="h-eyebrow">Boîte à outils</div><div class="chips">${["PHP","MySQL","JavaScript","HTML / CSS","HTML5 Canvas","Node.js","Twine","Linux / Apache","Administration VPS","Pterodactyl","Git"].map(c=>`<span class="chip">${c}</span>`).join("")}</div>`;
  if(app==="parcours")return `<div class="h-eyebrow">Parcours</div><div class="h-title" style="font-size:28px;margin-bottom:22px">Parcours</div>
    <div class="tl">${XP.map(x=>`<div class="row"><div class="yr">${x.yr}</div><div><div class="role">${x.role}</div><div class="co">${x.co}</div><div class="desc">${x.desc}</div></div></div>`).join("")}</div>`;
  if(app==="devis")return devisHTML();
  if(app==="reglages"){const curwp=PREF.get("wp","aurora"),curac=PREF.get("accent","lime"),sndOn=PREF.get("muted","0")!=="1",crtOn=PREF.get("crt","0")==="1";
    return `<div class="h-eyebrow">Réglages</div><div class="h-title" style="font-size:26px">Personnalisez<br>votre BomyOS.</div>
    <div class="set-sec">Fond d'écran</div>
    <div class="wpgrid">${[["aurora","Aurora"],["sunset","Crépuscule"],["ocean","Océan"],["forest","Forêt"],["mono","Minuit"]].map(([id,l])=>`<button class="wpthumb tw-${id}${curwp===id?' on':''}" data-wp="${id}" aria-label="Fond ${l}"><span>${l}</span></button>`).join("")}</div>
    <div class="set-sec">Couleur d'accentuation</div>
    <div class="acrow">${[["lime","#c6ff4e"],["cyan","#22d3ee"],["violet","#b26bff"],["rose","#ff6b9d"]].map(([id,c])=>`<button class="acdot${curac===id?' on':''}" data-accent="${id}" style="background:${c}" aria-label="Accent ${id}"></button>`).join("")}</div>
    <div class="set-sec">Général</div>
    <div class="setrow"><span>Sons d'interface</span><button class="sw${sndOn?' on':''}" data-tgl="snd" role="switch" aria-checked="${sndOn}" aria-label="Sons"><i></i></button></div>
    <div class="setrow"><span>Effet CRT (rétro)</span><button class="sw${crtOn?' on':''}" data-tgl="crt" role="switch" aria-checked="${crtOn}" aria-label="CRT"><i></i></button></div>
    <p class="lede" style="font-size:12px;margin-top:16px;color:var(--dim)">Vos réglages sont mémorisés sur cet appareil.</p>
    <button class="btn ghost" data-setreset style="margin-top:8px">Réinitialiser</button>`;}
  if(app==="aide")return `<div class="h-eyebrow">Aide</div><div class="h-title" style="font-size:24px">Trucs & astuces<br>de BomyOS.</div>
    <div class="chips" style="flex-direction:column;align-items:stretch;gap:9px;margin-top:16px">
      <span class="chip"><b>Ctrl + K</b> — rechercher et ouvrir n'importe quoi</span>
      <span class="chip"><b>Échap</b> — fermer la fenêtre active</span>
      <span class="chip"><b>Clic droit</b> sur le bureau — menu contextuel</span>
      <span class="chip"><b>Glisser</b> les icônes — réorganisez le bureau</span>
      <span class="chip"><b>Double-clic</b> sur une barre de titre — agrandir</span>
      <span class="chip"><b>Coin bas-droit</b> d'une fenêtre — redimensionner</span>
      <span class="chip"><b>⚙️ Réglages</b> — fond d'écran & couleurs, mémorisés</span>
      <span class="chip">👀 Il paraît qu'un <b>terminal</b> se cache quelque part…</span>
    </div>`;
  if(app==="messages")return `<div class="imsg"><div class="imsg-log"></div><div class="imsg-chips"></div></div>`;
  if(app==="photos"){const ph=[["assets/shots/rois.jpg","Rois de France","project:rois"],["assets/shots/lumina.jpg","Lumina Studio","project:lumina"],["assets/shots/backrooms.jpg","Backrooms","project:backrooms"],["assets/shots/bomyos.jpg","BomyOS","project:bomyos"]];
    return `<div class="h-eyebrow">Photothèque · ${ph.length} éléments</div><div class="h-title" style="font-size:24px;margin-bottom:16px">Mes réalisations.</div>
    <div class="phgrid">${ph.map(([src,cap,go])=>`<button class="phitem" data-open="${go}" style="background-image:url('${src}')" aria-label="${cap}"><span>${cap}</span></button>`).join("")}</div>
    <p class="lede" style="font-size:12.5px;margin-top:14px;color:var(--dim)">Touchez une photo pour ouvrir le projet.</p>`;}
  if(app==="calc")return `<div class="calc"><div class="calc-d" data-cd>0</div><div class="calc-g">${["C","±","%","÷","7","8","9","×","4","5","6","−","1","2","3","+","0",",","="].map(k=>`<button data-calc="${k}" class="ck${["÷","×","−","+","="].includes(k)?" op":""}${["C","±","%"].includes(k)?" fn":""}${k==="0"?" z":""}" aria-label="${k}">${k}</button>`).join("")}</div></div>`;
  if(app==="plans")return `<div class="h-eyebrow">Zone d'intervention</div><div class="h-title" style="font-size:26px">Sedan, Troyes<br>& partout à distance.</div>
    <div class="mapwrap"><svg viewBox="0 0 520 300" width="100%" style="display:block;background:#0d1420">
      <path d="M0 210 C90 180 150 240 260 215 S430 250 520 205 V300 H0 Z" fill="#0f2436"/>
      <path d="M-10 120 C120 90 240 150 380 110 S480 140 530 120" stroke="#233246" stroke-width="3" fill="none"/>
      <path d="M60 0 C90 90 70 200 110 300 M300 0 C280 110 330 210 310 300" stroke="#233246" stroke-width="3" fill="none"/>
      <circle cx="150" cy="90" r="34" fill="rgba(198,255,78,.12)" class="pin-pulse"/><circle cx="150" cy="90" r="7" fill="#c6ff4e"/>
      <text x="150" y="62" text-anchor="middle" fill="#eef0ea" font-family="Space Grotesk" font-size="15" font-weight="600">Sedan</text>
      <circle cx="360" cy="205" r="34" fill="rgba(124,196,255,.12)" class="pin-pulse"/><circle cx="360" cy="205" r="7" fill="#7cc4ff"/>
      <text x="360" y="178" text-anchor="middle" fill="#eef0ea" font-family="Space Grotesk" font-size="15" font-weight="600">Troyes</text>
      <text x="152" y="132" text-anchor="middle" fill="#71757e" font-family="Space Grotesk" font-size="11">Charleville-Mézières à côté</text>
    </svg></div>
    <p class="lede">Basé à <b>Sedan</b>, en études à <b>Troyes</b> — je me déplace dans les Ardennes et l'Aube, et je travaille <b>à distance partout en France</b>.</p>
    <a class="btn" href="https://wa.me/33788021676" target="_blank" rel="noopener" style="margin-top:16px">Discuter de votre projet</a>`;
  if(app==="terminal")return `<div class="term"><div class="term-out" id="termOut">
      <div class="muted">BomyOS terminal — tape <span class="acc">help</span>.</div>
      <div><span class="p">jimmy@bomyos</span>:<span class="u">~</span>$ whoami</div>
      <div class="c">Jimmy Bomy — développeur web créatif (Sedan / Troyes)</div></div>
    <div class="term-line"><span class="p">jimmy@bomyos</span>:<span class="u">~</span>$&nbsp;<input class="term-in" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal"/></div></div>`;
  if(app==="services")return `<div class="h-eyebrow">Pour les commerces & indépendants</div><div class="h-title">Un site pro,<br>sans prise de tête.</div>
    <p class="lede">Votre établissement mérite mieux qu'une page Facebook. Je crée des sites <b>simples, rapides et beaux</b> — et je m'occupe de tout.</p>
    <div class="divider"></div><div class="h-eyebrow">Ce que je propose</div>
    <div class="chips" style="flex-direction:column;align-items:stretch;gap:10px;margin:14px 0 6px">
      <span class="chip"><b>Site vitrine</b> — présentation, horaires, photos, itinéraire Google Maps</span>
      <span class="chip"><b>Réservation / click & collect</b> — vos clients commandent en ligne</span>
      <span class="chip"><b>Refonte</b> — votre site vieillissant remis au goût du jour</span>
      <span class="chip"><b>Hébergement & mise en ligne inclus</b> — zéro technique pour vous</span>
    </div>
    <div class="divider"></div><div class="h-eyebrow">Comment ça se passe</div>
    <div class="tl" style="margin-top:6px">
      <div class="row"><div class="yr">1</div><div><div class="role">On échange 15 minutes</div><div class="desc">Vous me dites ce qu'il vous faut — par téléphone, WhatsApp ou autour d'un café.</div></div></div>
      <div class="row"><div class="yr">2</div><div><div class="role">Maquette gratuite</div><div class="desc">Je vous montre à quoi ressemblerait VOTRE site. Sans engagement.</div></div></div>
      <div class="row"><div class="yr">3</div><div><div class="role">Ajustements & mise en ligne</div><div class="desc">On affine ensemble, puis je mets en ligne. Le nom de domaine est à votre nom : il vous appartient.</div></div></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a class="btn" href="https://wa.me/33788021676" target="_blank" rel="noopener">WhatsApp <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg></a>
      <a class="btn ghost" href="tel:${TEL}">${PHONE}</a></div>`;
  if(app==="contact")return `<div class="h-eyebrow">Contact</div><div class="h-title">Travaillons<br>ensemble.</div>
    <p class="lede">Un projet, une question, une opportunité ? Je réponds vite.</p>
    <div class="chips" style="flex-direction:column;align-items:stretch;gap:10px;margin:24px 0 6px">
      <a class="chip" href="mailto:${EMAIL}" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">Email</span><span>${EMAIL}</span></a>
      <a class="chip" href="tel:${TEL}" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">Téléphone</span><span>${PHONE}</span></a>
      <a class="chip" href="https://wa.me/33788021676" target="_blank" rel="noopener" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">WhatsApp</span><span>message direct</span></a>
      <span class="chip" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">Localisation</span><span>Sedan / Troyes</span></span>
      <a class="chip" href="https://github.com/JimmyBomy" target="_blank" rel="noopener" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">GitHub</span><span>@JimmyBomy</span></a>
    </div>
    <a class="btn" href="mailto:${EMAIL}">Écrire un mail <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>`;
  if(app==="cv")return `<div class="pdf"><h1>Jimmy Bomy</h1><div class="role">Développeur web créatif — BUT MMI (Troyes) · Sedan</div>
    <div class="sec">Formation</div><div class="li"><span><b>BUT MMI</b> — IUT de Troyes · <span class="muted">18,1/20 en développement web</span></span><span class="muted">depuis 2025</span></div><div class="li"><span><b>Baccalauréat général</b> — Lycée Mabillon</span><span class="muted">2022–25</span></div>
    <div class="sec">Projets</div>${Object.values(PROJECTS).map(p=>`<div class="li"><span><b>${p.name}</b> — ${p.cat}</span><span class="muted">${p.year}</span></div>`).join("")}
    <div class="sec">Compétences</div><div class="li"><span>Back</span><span class="muted">PHP · MySQL · Node.js · Linux/Apache (VPS)</span></div><div class="li"><span>Front</span><span class="muted">JavaScript · HTML/CSS · HTML5 Canvas</span></div>
    <div class="sec">Contact</div><div class="li"><span>${EMAIL} · ${PHONE}</span><span class="muted">Sedan / Troyes</span></div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn" href="/cv-jimmy-bomy.pdf" target="_blank" rel="noopener">Télécharger le CV (PDF) ↓</a>
    <button class="btn ghost" onclick="window.print()" style="margin-top:24px">Imprimer</button></div>`;
  return "";
}
const titleFor=a=>a.startsWith("project:")?ALL[a.split(":")[1]].name:(APPS[a]?.title||a);
const iconFor=a=>a.startsWith("project:")?"folder":(APPS[a]?.icon||"doc");

/* print CV */
document.getElementById("printCV").innerHTML=`<div class="cvp"><h1>Jimmy Bomy</h1>
  <div class="role">Développeur web créatif — Étudiant BUT MMI (Troyes) · Sedan</div>
  <div class="contact">${EMAIL} · ${PHONE} · jimmybomy.fr</div>
  <h2>Formation</h2><p><b>BUT MMI</b> — IUT de Troyes (depuis 2025). 1re année validée — 18,1/20 de moyenne en développement web. Baccalauréat général, Lycée Mabillon (2022–2025).</p>
  <h2>Projets</h2><ul>${Object.values(PROJECTS).map(p=>`<li><b>${p.name}</b> — ${p.desc.replace(/<[^>]+>/g,'')}</li>`).join("")}</ul>
  <h2>Compétences</h2><p>PHP · MySQL · JavaScript · HTML/CSS · HTML5 Canvas · Node.js · Administration Linux/Apache (VPS) · Git</p></div>`;

/* SOUND */
let AC,muted=false;
function ac(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}return AC}
function beep(f1,f2,dur,vol){if(muted)return;const a=ac();if(!a)return;if(a.state==="suspended")a.resume();
  try{const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.setValueAtTime(f1,a.currentTime);
  if(f2)o.frequency.exponentialRampToValueAtTime(f2,a.currentTime+dur);
  g.gain.setValueAtTime(0,a.currentTime);g.gain.linearRampToValueAtTime(vol||.05,a.currentTime+.012);
  g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+dur);o.connect(g).connect(a.destination);o.start();o.stop(a.currentTime+dur);}catch(e){}}
const vib=v=>{try{if(!muted&&navigator.vibrate)navigator.vibrate(v||8)}catch(e){}};
const snd={open:()=>{beep(420,780,.14,.05);vib(10)},close:()=>{beep(520,230,.13,.045);vib(8)},tap:()=>{beep(660,null,.045,.03);vib(5)},min:()=>{beep(600,200,.16,.04);vib(8)}};

/* WINDOW MANAGER */
const desktop=document.getElementById("desktop");
let zTop=100,activeWin=null;const wins={};
function bringFront(el){zTop++;el.style.zIndex=zTop;document.querySelectorAll(".win").forEach(w=>w.classList.remove("active"));el.classList.add("active");activeWin=el.dataset.app;}
function openApp(app){
  const hint=document.getElementById("hint");if(hint)hint.style.display="none";
  const st=wins[app];
  if(st){if(st.min){st.el.classList.remove("min");st.min=false;}bringFront(st.el);st.el.focus();snd.tap();return;}
  const meta=APPS[app]||{w:560,h:460};
  const el=document.createElement("div");el.className="win";el.dataset.app=app;el.setAttribute("role","dialog");el.setAttribute("aria-label",titleFor(app));el.tabIndex=-1;
  const w=Math.min(meta.w||560,innerWidth-40),h=Math.min(meta.h||460,innerHeight-160);
  const n=Object.keys(wins).length;
  const left=Math.max(20,Math.min(innerWidth-w-20,innerWidth/2-w/2+(n*30-60)));
  const top=Math.max(56,innerHeight/2-h/2+(n*26-40));
  el.style.width=w+"px";el.style.height=h+"px";el.style.left=left+"px";el.style.top=top+"px";
  el.innerHTML=`<div class="win-bar"><div class="lights">
      <button class="c" data-act="close" aria-label="Fermer ${titleFor(app)}"><svg viewBox="0 0 10 10" stroke="#4a0002" stroke-width="1.5"><path d="M2 2l6 6M8 2l-6 6"/></svg></button>
      <button class="mi" data-act="min" aria-label="Réduire ${titleFor(app)}"><svg viewBox="0 0 10 10" stroke="#7a4a00" stroke-width="1.5"><path d="M2 5h6"/></svg></button>
      <button class="fu" data-act="max" aria-label="Agrandir ${titleFor(app)}"><svg viewBox="0 0 10 10" stroke="#0a4a00" stroke-width="1.5"><path d="M2.5 2.5h5v5h-5z"/></svg></button></div>
      <div class="wtitle">${ICON[iconFor(app)].replace('width="42" height="42"','width="15" height="15"')}${titleFor(app)}</div></div>
    <div class="win-body">${content(app)}</div><div class="rz" aria-hidden="true"></div>`;
  desktop.appendChild(el);wins[app]={el,min:false,max:false,prev:null};
  requestAnimationFrame(()=>{el.classList.add("open");bringFront(el);el.focus();});
  markDock(app,true);snd.open();
  el.addEventListener("mousedown",()=>bringFront(el));
  el.querySelector('[data-act="close"]').addEventListener("click",e=>{e.stopPropagation();closeApp(app);});
  el.querySelector('[data-act="min"]').addEventListener("click",e=>{e.stopPropagation();minApp(app);});
  el.querySelector('[data-act="max"]').addEventListener("click",e=>{e.stopPropagation();maxApp(app);});
  el.querySelector(".win-body").addEventListener("click",e=>{const t=e.target.closest("[data-open]");if(t){openApp(t.getAttribute("data-open"));return;}const s=e.target.closest("[data-site]");if(s){openSite(s.getAttribute("data-site"),s.getAttribute("data-title"));return;}const dv=e.target.closest("[data-devis]");if(dv){devisAct(dv.getAttribute("data-devis"),el.querySelector(".win-body"));return;}
    const mg=e.target.closest("[data-msg]");if(mg){msgAct(mg.getAttribute("data-msg"),el.querySelector(".imsg"));return;}
    const ck=e.target.closest("[data-calc]");if(ck){calcAct(ck.getAttribute("data-calc"),el.querySelector(".calc"));return;}
    settingsAct(e.target,el.querySelector(".win-body"));});
  if(app==="messages")setTimeout(()=>msgBoot(el.querySelector(".imsg")),150);
  if(app==="terminal")wireTerminal(el);
  makeDraggable(el,app);makeResizable(el,app);
}
function closeApp(app){const st=wins[app];if(!st)return;st.el.classList.add("closing");markDock(app,false);snd.close();
  setTimeout(()=>{st.el.remove();delete wins[app];
    if(!Object.keys(wins).length){const h=document.getElementById("hint");if(h)h.style.display="";}
  },220);const db=dock.querySelector(`[data-app="${app}"]`);if(db)db.focus();}
function minApp(app){const st=wins[app];if(!st)return;st.min=true;st.el.classList.add("min");snd.min();const db=dock.querySelector(`[data-app="${app}"]`);if(db)db.focus();}
function maxApp(app){const st=wins[app];if(!st)return;const el=st.el;snd.tap();
  if(st.max){el.style.left=st.prev.l;el.style.top=st.prev.t;el.style.width=st.prev.w;el.style.height=st.prev.h;st.max=false;el.classList.remove("max");}
  else{st.prev={l:el.style.left,t:el.style.top,w:el.style.width,h:el.style.height};el.style.left="12px";el.style.top=(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menh'))+8)+"px";el.style.width=(innerWidth-24)+"px";el.style.height=(innerHeight-52-90)+"px";st.max=true;el.classList.add("max");bringFront(el);}}
function makeDraggable(el,app){const bar=el.querySelector(".win-bar");let sx,sy,ox,oy,drag=false;
  bar.addEventListener("dblclick",e=>{if(!e.target.closest("button"))maxApp(app);});
  bar.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;if(wins[app]&&wins[app].max)return;drag=true;bar.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;ox=el.offsetLeft;oy=el.offsetTop;bringFront(el);el.style.transition="none";});
  bar.addEventListener("pointermove",e=>{if(!drag)return;let nl=ox+(e.clientX-sx),nt=oy+(e.clientY-sy);nl=Math.max(-el.offsetWidth+120,Math.min(innerWidth-60,nl));nt=Math.max(38,Math.min(innerHeight-52,nt));el.style.left=nl+"px";el.style.top=nt+"px";});
  const end=()=>{drag=false;el.style.transition="";};bar.addEventListener("pointerup",end);bar.addEventListener("pointercancel",end);}
function makeResizable(el,app){const h=el.querySelector(".rz");let sx,sy,sw,sh,rz=false;
  h.addEventListener("pointerdown",e=>{e.stopPropagation();if(wins[app]&&wins[app].max)return;rz=true;h.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;sw=el.offsetWidth;sh=el.offsetHeight;bringFront(el);el.style.transition="none";});
  h.addEventListener("pointermove",e=>{if(!rz)return;el.style.width=Math.max(300,Math.min(innerWidth-30,sw+e.clientX-sx))+"px";el.style.height=Math.max(220,Math.min(innerHeight-60,sh+e.clientY-sy))+"px";});
  const end=()=>{rz=false;el.style.transition="";};h.addEventListener("pointerup",end);h.addEventListener("pointercancel",end);}
function openSite(url,title){
  const key="site:"+url;
  if(wins[key]){const st=wins[key];if(st.min){st.el.classList.remove("min");st.min=false;}bringFront(st.el);return;}
  const el=document.createElement("div");el.className="win";el.dataset.app=key;el.setAttribute("role","dialog");el.setAttribute("aria-label",title);el.tabIndex=-1;
  const w=Math.min(1200,innerWidth-30),h=Math.min(820,innerHeight-100);
  el.style.width=w+"px";el.style.height=h+"px";el.style.left=((innerWidth-w)/2)+"px";el.style.top="46px";
  el.innerHTML='<div class="win-bar"><div class="lights">'
    +'<button class="c" data-act="close" aria-label="Fermer"><svg viewBox="0 0 10 10" stroke="#4a0002" stroke-width="1.5"><path d="M2 2l6 6M8 2l-6 6"/></svg></button>'
    +'<button class="mi" data-act="min" aria-label="Réduire"><svg viewBox="0 0 10 10" stroke="#7a4a00" stroke-width="1.5"><path d="M2 5h6"/></svg></button>'
    +'<button class="fu" data-act="max" aria-label="Agrandir"><svg viewBox="0 0 10 10" stroke="#0a4a00" stroke-width="1.5"><path d="M2.5 2.5h5v5h-5z"/></svg></button></div>'
    +'<div class="wtitle"><span style="font-family:JetBrains Mono,monospace;font-size:11.5px;color:var(--acc2);background:rgba(255,255,255,.07);border:1px solid var(--glass-brd);padding:3px 11px;border-radius:100px">bomy://'+title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+'</span></div><button class="backportf" data-act="close">‹ Retour au portfolio</button></div>'
    +'<iframe class="win-iframe" src="'+url+'" title="'+title+'" loading="lazy"></iframe><div class="rz" aria-hidden="true"></div>';
  desktop.appendChild(el);wins[key]={el,min:false,max:false,prev:null};
  requestAnimationFrame(()=>{el.classList.add("open");bringFront(el);el.focus();});snd.open();
  el.addEventListener("mousedown",()=>bringFront(el));
  el.querySelectorAll('[data-act="close"]').forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();closeApp(key);}));
  el.querySelector('[data-act="min"]').addEventListener("click",e=>{e.stopPropagation();minApp(key);});
  el.querySelector('[data-act="max"]').addEventListener("click",e=>{e.stopPropagation();maxApp(key);});
  makeDraggable(el,key);makeResizable(el,key);
}

/* ICONS + DOCK */
const DESK_ICONS=[["projets","Projets"],["labs","Labs"],["photos","Photos"],["messages","Messages"],["services","Services"],["devis","Devis express"],["plans","Plans"],["calc","Calculette"],["apropos","À propos"],["parcours","Parcours"],["cv","CV"],["reglages","Réglages"]];
document.getElementById("dicons").innerHTML=DESK_ICONS.map(([id,l])=>`<button class="dicon" data-app="${id}" aria-label="Ouvrir ${l}"><span class="ic">${ICON[iconFor(id)]}</span><span class="lbl">${l}</span></button>`).join("");
document.querySelectorAll(".dicon").forEach(ic=>{
  let sx,sy,ox,oy,drag=false,moved=false;
  ic.addEventListener("pointerdown",e=>{drag=true;moved=false;sx=e.clientX;sy=e.clientY;const r=ic.getBoundingClientRect();ox=r.left;oy=r.top;});
  ic.addEventListener("pointermove",e=>{if(!drag)return;
    if(!moved&&Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy)>7){moved=true;ic.setPointerCapture(e.pointerId);ic.style.position="fixed";ic.style.zIndex=60;ic.style.margin=0;}
    if(moved){ic.style.left=Math.max(0,Math.min(innerWidth-96,ox+e.clientX-sx))+"px";ic.style.top=Math.max(38,Math.min(innerHeight-90,oy+e.clientY-sy))+"px";}});
  const up=()=>{drag=false;};
  ic.addEventListener("pointerup",up);ic.addEventListener("pointercancel",up);
  ic.addEventListener("click",()=>{if(moved){moved=false;return;}
    document.querySelectorAll(".dicon").forEach(x=>x.classList.remove("sel"));ic.classList.add("sel");openApp(ic.dataset.app);});
  ic.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openApp(ic.dataset.app);}});});
const DOCK=[["projets","Projets","folder"],["labs","Labs","labs"],["services","Services","services"],["devis","Devis express","devis"],["messages","Messages","messages"],["photos","Photos","photos"],["contact","Contact","mail"],["cv","CV","pdf"],["--","",""],["reglages","Réglages","gear"],["gh","GitHub","gh","https://github.com/JimmyBomy"]];
const dock=document.getElementById("dock");
dock.innerHTML=DOCK.map(d=>{if(d[0]==="--")return '<div class="sep"></div>';const link=d[3]&&d[3].startsWith("http");
  return `<button data-app="${link?"":d[0]}" ${link?`data-link="${d[3]}"`:""} aria-label="${d[1]}"><span class="tip">${d[1]}</span>${ICON[d[2]]}<span class="run" data-run="${d[0]}"></span></button>`;}).join("");
dock.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.link){window.open(b.dataset.link,"_blank","noopener");return;}if(b.dataset.app)openApp(b.dataset.app);}));
function markDock(app,on){const r=dock.querySelector(`[data-run="${app}"]`);if(r)r.parentElement.classList.toggle("running",on);}

/* CONTEXT MENU */
const ctx=document.getElementById("ctx");
const CTX=[["projets","Ouvrir Projets"],["labs","Ouvrir Labs"],["services","Services"],["devis","Devis express"],["apropos","À propos"],["parcours","Parcours"],["contact","Contact"],["cv","CV.pdf"],["--",""],["_close","Tout fermer"]];
ctx.innerHTML=CTX.map(c=>c[0]==="--"?'<div class="sep"></div>':`<button role="menuitem" data-ctx="${c[0]}">${c[1]}</button>`).join("");
function showCtx(x,y){ctx.style.left=Math.min(x,innerWidth-230)+"px";ctx.style.top=Math.min(y,innerHeight-260)+"px";ctx.classList.add("on");}
function hideCtx(){ctx.classList.remove("on");}
desktop.addEventListener("contextmenu",e=>{e.preventDefault();showCtx(e.clientX,e.clientY);});
ctx.addEventListener("click",e=>{const b=e.target.closest("[data-ctx]");if(!b)return;const v=b.dataset.ctx;if(v==="_close")Object.keys(wins).forEach(closeApp);else openApp(v);hideCtx();});
addEventListener("click",e=>{if(!ctx.contains(e.target)&&!e.target.closest("button.menu")){hideCtx();document.querySelectorAll("button.menu.open").forEach(b=>b.classList.remove("open"));}});
/* menus de la barre */
const MENUS={
  Fichier:[["⚡ Nouveau devis express","devis"],["🔍 Rechercher…  (Ctrl+K)","_cmdk"],["🖨️ Imprimer le CV","_print"],["--"],["Tout fermer","_close"]],
  Projets:[["Rois de France","project:rois"],["Lumina Studio","project:lumina"],["Backrooms","project:backrooms"],["BomyOS (ce site)","project:bomyos"],["--"],["🧪 Dossier Labs","labs"],["🌸 Photothèque","photos"]],
  Aide:[["💡 Raccourcis & astuces","aide"],["✉️ Me contacter","contact"],["GitHub — @JimmyBomy","_gh"]]};
let curMenu=null;
document.querySelectorAll("button.menu").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();
  document.querySelectorAll("button.menu.open").forEach(x=>{if(x!==b)x.classList.remove("open");});
  if(b.classList.contains("open")){b.classList.remove("open");hideCtx();return;}
  b.classList.add("open");curMenu=MENUS[b.dataset.menu];
  ctx.innerHTML=curMenu.map((it,i)=>it[0]==="--"?'<div class="sep"></div>':`<button role="menuitem" data-mi="${i}">${it[0]}</button>`).join("");
  const r=b.getBoundingClientRect();ctx.style.left=r.left+"px";ctx.style.top=(r.bottom+6)+"px";ctx.classList.add("on");snd.tap();}));
ctx.addEventListener("click",e=>{const b=e.target.closest("[data-mi]");if(!b||!curMenu)return;
  const v=curMenu[+b.dataset.mi][1];hideCtx();document.querySelectorAll("button.menu.open").forEach(x=>x.classList.remove("open"));curMenu=null;
  if(v==="_cmdk"){const w=document.querySelector(".cmdk");if(w){w.classList.add("on");w.querySelector("input").focus();w.querySelector("input").dispatchEvent(new Event("input"));}return;}
  if(v==="_print"){window.print();return;}
  if(v==="_close"){Object.keys(wins).forEach(closeApp);return;}
  if(v==="_gh"){window.open("https://github.com/JimmyBomy","_blank","noopener");return;}
  openApp(v);});
/* CTA widgets bureau */
document.querySelectorAll("[data-wopen]").forEach(b=>b.addEventListener("click",()=>openApp(b.dataset.wopen)));
addEventListener("keydown",e=>{if(e.key==="Escape"){if(ctx.classList.contains("on")){hideCtx();return;}if(activeWin&&wins[activeWin]&&!wins[activeWin].min)closeApp(activeWin);}});

/* MENUBAR buttons */
document.getElementById("year").textContent=new Date().getFullYear();
const sndBtn=document.getElementById("sndBtn"),sndIcon=document.getElementById("sndIcon"),crtBtn=document.getElementById("crtBtn");
/* préférences persistantes (Réglages) */
const PREF={get:(k,d)=>{try{return localStorage.getItem("bomyos-"+k)??d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem("bomyos-"+k,v)}catch(e){}}};
function applyPrefs(){
  document.body.classList.remove("wp-sunset","wp-ocean","wp-forest","wp-mono","ac-cyan","ac-violet","ac-rose");
  const wp=PREF.get("wp","aurora");if(wp!=="aurora")document.body.classList.add("wp-"+wp);
  const ac=PREF.get("accent","lime");if(ac!=="lime")document.body.classList.add("ac-"+ac);
  muted=PREF.get("muted","0")==="1";
  sndBtn.setAttribute("aria-pressed",String(!muted));
  sndIcon.innerHTML=muted?'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l4 6M21 9l-4 6"/>':'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a3 3 0 0 1 0 6"/>';
  const crt=PREF.get("crt","0")==="1";document.body.classList.toggle("crt",crt);crtBtn.setAttribute("aria-pressed",String(crt));}
function settingsAct(t,container){
  const wp=t.closest("[data-wp]");if(wp){PREF.set("wp",wp.dataset.wp);applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  const ac=t.closest("[data-accent]");if(ac){PREF.set("accent",ac.dataset.accent);applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  const tg=t.closest("[data-tgl]");if(tg){if(tg.dataset.tgl==="snd")PREF.set("muted",muted?"0":"1");else PREF.set("crt",PREF.get("crt","0")==="1"?"0":"1");
    applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  if(t.closest("[data-setreset]")){["wp","accent","muted","crt"].forEach(k=>{try{localStorage.removeItem("bomyos-"+k)}catch(e){}});applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  return false;}
applyPrefs();
sndBtn.addEventListener("click",()=>{PREF.set("muted",muted?"0":"1");applyPrefs();if(!muted)snd.tap();});
crtBtn.addEventListener("click",()=>{PREF.set("crt",PREF.get("crt","0")==="1"?"0":"1");applyPrefs();snd.tap();});
document.getElementById("contactBtn").addEventListener("click",()=>{if(innerWidth<=720)mopen("contact");else openApp("contact");});
document.getElementById("skip").addEventListener("click",e=>{e.preventDefault();document.querySelector(".dicon")?.focus();});

/* MOBILE — écran d'accueil iOS */
const IOSGLYPH={
  projets:'<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M3 7c0-1.1.9-2 2-2h4.6l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>',
  labs:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3h5M10.5 3v5.2L5.8 16a3 3 0 0 0 2.6 4.5h7.2A3 3 0 0 0 18.2 16l-4.7-7.8V3"/><circle cx="12" cy="16.5" r="1.4" fill="#fff" stroke="none"/></svg>',
  apropos:'<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="8.2" r="4"/><path d="M4 20c1.2-4.2 4.4-6 8-6s6.8 1.8 8 6H4z"/></svg>',
  parcours:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.5h7l4 4V20.5H7z"/><path d="M14 3.5v4h4M10 13h5M10 16.5h5"/></svg>',
  contact:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>',
  cv:'<svg width="30" height="30" viewBox="0 0 24 24"><path d="M6 2.5h8l5 5V21.5H6z" fill="#fff"/><rect x="4" y="12" width="16" height="7" rx="1.6" fill="#a41f2e"/><text x="12" y="17.3" font-family="Archivo,Arial" font-size="5.4" font-weight="800" fill="#fff" text-anchor="middle">PDF</text></svg>',
};
const IOSBG={projets:"g-blue",labs:"g-purple",services:"g-lime",devis:"g-cyan",apropos:"g-green",parcours:"g-orange",contact:"g-dark",cv:"g-red"};
IOSGLYPH.devis='<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#fff"/><text x="12" y="14.5" font-family="Archivo,Arial" font-size="9" font-weight="800" fill="#0a9396" text-anchor="middle">€</text></svg>';
IOSBG.reglages="g-grey";IOSBG.messages="g-msg";IOSBG.photos="g-light";IOSBG.calc="g-black";IOSBG.plans="g-map";
IOSGLYPH.messages='<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 4c-4.9 0-9 3.1-9 7 0 2.2 1.3 4.2 3.3 5.5-.1 1.1-.6 2.1-1.5 2.9 1.6-.1 3-.7 4.1-1.5 1 .3 2 .4 3.1.4 4.9 0 9-3.1 9-7.1S16.9 4 12 4z"/></svg>';
IOSGLYPH.photos='<svg width="30" height="30" viewBox="0 0 24 24"><g transform="translate(12 12)">'+["#ff453a","#ff9f0a","#ffd60a","#30d158","#63e6e2","#0a84ff","#5e5ce6","#bf5af2"].map((c,i)=>`<ellipse rx="2.5" ry="5.2" cy="-4.4" fill="${c}" opacity=".85" transform="rotate(${i*45})"/>`).join("")+'</g></svg>';
IOSGLYPH.calc='<svg width="30" height="30" viewBox="0 0 24 24"><g fill="#fff"><circle cx="7" cy="7" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="7" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="7" cy="17" r="2"/><circle cx="12" cy="17" r="2"/></g><g fill="#ff9f0a"><circle cx="17" cy="7" r="2"/><circle cx="17" cy="12" r="2"/><circle cx="17" cy="17" r="2"/></g></svg>';
IOSGLYPH.plans='<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 21s-6.5-6.2-6.5-10.6A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.4C18.5 14.8 12 21 12 21z" fill="#fff"/><circle cx="12" cy="10.4" r="2.6" fill="#2f9e44"/></svg>';
IOSGLYPH.reglages='<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M18.4 5.6l-1.9 1.9M7.5 16.5l-1.9 1.9"/></svg>';
IOSGLYPH.services='<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0a0b0e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l1.5-4h13L20 8v1.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5.5 0 2.5 2.5 0 0 1-5.5 0V8z" fill="#0a0b0e" stroke="none"/><path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7M10 20v-5h4v5"/></svg>';
const MTILES=[["projets","Projets"],["labs","Labs"],["photos","Photos"],["messages","Messages"],["services","Services"],["devis","Devis"],["plans","Plans"],["calc","Calculette"],["apropos","À propos"],["parcours","Parcours"],["cv","CV"],["reglages","Réglages"]];
document.getElementById("mlaunch").innerHTML=MTILES.map(([id,l])=>`<button class="mtile" data-app="${id}" aria-label="Ouvrir ${l}"><span class="ic ${IOSBG[id]}">${IOSGLYPH[id]}</span><span class="lbl">${l}</span></button>`).join("");
document.getElementById("mdock").innerHTML=["projets","labs","contact","cv"].map(id=>`<button class="mtile" data-app="${id}" aria-label="Ouvrir ${titleFor(id)}"><span class="ic ${IOSBG[id]}">${IOSGLYPH[id]}</span></button>`).join("");
const msheet=document.getElementById("msheet"),msBody=document.getElementById("msheetBody");
const mobileEl=document.getElementById("mobile"),msTitle=document.getElementById("msheetTitle");
function mopen(app,origin){
  msBody.innerHTML=content(app);msBody.scrollTop=0;msheet.scrollTop=0;
  msTitle.textContent=titleFor(app);
  // zoom depuis l'icône touchée
  if(origin&&origin.getBoundingClientRect){const r=origin.getBoundingClientRect();msheet.style.transformOrigin=`${r.left+r.width/2}px ${r.top+r.height/2}px`;}
  else msheet.style.transformOrigin="50% 42%";
  msheet.classList.add("on");mobileEl.classList.add("behind");snd.open();
  msBody.querySelectorAll("[data-open]").forEach(o=>o.addEventListener("click",()=>mopen(o.getAttribute("data-open"),o)));
  msBody.querySelectorAll("[data-site]").forEach(o=>o.addEventListener("click",()=>msite(o.getAttribute("data-site"),o.getAttribute("data-title"))));
  if(app==="devis")msBody.addEventListener("click",e=>{const dv=e.target.closest("[data-devis]");if(dv)devisAct(dv.getAttribute("data-devis"),msBody);});
  if(app==="reglages")msBody.addEventListener("click",e=>settingsAct(e.target,msBody));
  if(app==="messages"){setTimeout(()=>msgBoot(msBody.querySelector(".imsg")),200);
    msBody.addEventListener("click",e=>{const mg=e.target.closest("[data-msg]");if(mg)msgAct(mg.getAttribute("data-msg"),msBody.querySelector(".imsg"));});}
  if(app==="calc")msBody.addEventListener("click",e=>{const ck=e.target.closest("[data-calc]");if(ck)calcAct(ck.getAttribute("data-calc"),msBody.querySelector(".calc"));});
}
function msite(url,title){msTitle.textContent=title;msBody.innerHTML='<iframe src="'+url+'" title="'+title+'" style="width:100%;height:calc(100vh - 96px);border:0;border-radius:12px;background:#fff"></iframe>';msheet.scrollTop=0;}
function mclose(){msheet.classList.remove("on");mobileEl.classList.remove("behind");snd.close();}
document.querySelectorAll(".mtile").forEach(t=>t.addEventListener("click",()=>mopen(t.dataset.app,t)));
/* recherche Spotlight (accueil mobile) */
const msi=document.getElementById("msearchi");
if(msi)msi.addEventListener("input",()=>{const q=msi.value.trim().toLowerCase();
  document.querySelectorAll("#mlaunch .mtile").forEach(t=>{const l=(t.querySelector(".lbl")?.textContent||"").toLowerCase();t.classList.toggle("hide",q&&!l.includes(q));});});
document.getElementById("mback").addEventListener("click",e=>{e.preventDefault();mclose();});
document.getElementById("mContact").addEventListener("click",e=>mopen("contact",e.currentTarget));
const myearEl=document.getElementById("myear");if(myearEl)myearEl.textContent=new Date().getFullYear();

/* CLOCK */
function tick(){const d=new Date();
  document.getElementById("clock").textContent=d.toLocaleDateString("fr-FR",{weekday:"short",day:"2-digit",month:"short"})+"  "+d.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});
  const mc=document.getElementById("mclock");if(mc)mc.textContent=d.toLocaleTimeString("fr-FR",{hour:"numeric",minute:"2-digit"});
  const lt=document.getElementById("ltime");if(lt){lt.textContent=d.toLocaleTimeString("fr-FR",{hour:"numeric",minute:"2-digit"});
    document.getElementById("ldate").textContent=d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"});}
  const wh=document.getElementById("wgh");if(wh){const hh=(d.getHours()%12+d.getMinutes()/60)*30,mm=d.getMinutes()*6;
    wh.setAttribute("transform",`rotate(${hh} 50 50)`);document.getElementById("wgm").setAttribute("transform",`rotate(${mm} 50 50)`);
    document.getElementById("wgdate").textContent=d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"short"});}}
tick();setInterval(tick,10000);

/* BOOT */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
(function boot(){const b=document.getElementById("boot"),bar=document.getElementById("bbar"),tip=document.getElementById("btip");
  const steps=["initialisation du noyau…","montage de /projets…","chargement des polices…","démarrage du bureau…"];
  if(reduce){b.style.display="none";afterBoot();return;}
  let fin=false;const done=()=>{if(fin)return;fin=true;b.classList.add("done");setTimeout(()=>{b.style.display="none";afterBoot();},600);};
  b.addEventListener("click",()=>{clearInterval(iv);done();});
  let v=0,si=0;const iv=setInterval(()=>{v+=Math.random()*18+7;if(v>100)v=100;bar.style.width=v+"%";
    const ns=Math.min(steps.length-1,Math.floor(v/26));if(ns!==si){si=ns;tip.textContent=steps[si];}
    if(v>=100){clearInterval(iv);setTimeout(done,250);}},160);})();
/* deep links : jimmybomy.fr/#services, #devis, #projet-rois… */
function handleHash(){
  const h=decodeURIComponent(location.hash.slice(1)).toLowerCase();if(!h)return false;
  const alias={"a-propos":"apropos","demo":"projets"};let app=alias[h]||( APPS[h]?h:null );
  if(!app&&h.startsWith("projet-")){const id=h.slice(7);if(ALL[id])app="project:"+id;}
  if(!app)return false;
  if(innerWidth>720)openApp(app);else mopen(app);return true;}
addEventListener("hashchange",handleHash);
function afterBoot(){
  const deep=handleHash();
  if(!deep)showLock();
  /* notification de conversion après 25 s (1 fois par session) */
  if(!sessionStorage.getItem("bnotif")){setTimeout(()=>{
    if(document.getElementById("bnotif"))return;sessionStorage.setItem("bnotif","1");
    const n=document.createElement("div");n.id="bnotif";n.className="osnotif";n.setAttribute("role","status");
    n.innerHTML='<span class="ni">💬</span><div><b>Jimmy répond en moins de 2 h</b><br><span>Un projet de site ? Parlons-en.</span></div><button class="nx" aria-label="Fermer">✕</button>';
    document.body.appendChild(n);requestAnimationFrame(()=>n.classList.add("on"));snd.tap();
    n.addEventListener("click",e=>{if(e.target.closest(".nx")){n.remove();return;}n.remove();innerWidth>720?openApp("contact"):mopen("contact");});
    setTimeout(()=>{n.classList.remove("on");setTimeout(()=>n.remove(),400);},12000);
  },25000);}
}
/* palette de commandes Ctrl+K (desktop) */
function initCmdk(){
  if(innerWidth<=720)return;
  const wrap=document.createElement("div");wrap.className="cmdk";wrap.innerHTML='<div class="cmdk-box"><input placeholder="Ouvrir une app, un projet…" aria-label="Recherche"/><div class="cmdk-list"></div></div>';
  document.body.appendChild(wrap);
  const inp=wrap.querySelector("input"),list=wrap.querySelector(".cmdk-list");
  const items=[...Object.entries(APPS).map(([id,a])=>({t:a.title,go:()=>openApp(id)})),
    ...Object.entries(ALL).map(([id,p])=>({t:p.name+" — "+p.cat,go:()=>openApp("project:"+id)})),
    {t:"GitHub — @JimmyBomy",go:()=>window.open("https://github.com/JimmyBomy","_blank","noopener")}];
  function render(q){const f=items.filter(i=>i.t.toLowerCase().includes(q.toLowerCase())).slice(0,8);
    list.innerHTML=f.map((i,x)=>`<button data-x="${x}" class="${x===0?'sel':''}">${i.t}</button>`).join("")||'<div style="padding:12px 14px;color:var(--dim);font-size:13px">Aucun résultat</div>';
    list._f=f;}
  function close(){wrap.classList.remove("on");inp.value="";}
  addEventListener("keydown",e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();wrap.classList.toggle("on");if(wrap.classList.contains("on")){render("");inp.focus();}}
    else if(e.key==="Escape"&&wrap.classList.contains("on"))close();});
  inp.addEventListener("input",()=>render(inp.value));
  inp.addEventListener("keydown",e=>{if(e.key==="Enter"&&list._f&&list._f[0]){list._f[0].go();close();}});
  list.addEventListener("click",e=>{const b=e.target.closest("[data-x]");if(b){list._f[+b.dataset.x].go();close();}});
  wrap.addEventListener("click",e=>{if(e.target===wrap)close();});
}
initCmdk();
/* parallaxe du fond (desktop) */
if(matchMedia("(hover:hover)").matches&&!reduce){const wm=document.querySelector(".wm-watermark");
  addEventListener("mousemove",e=>{if(wm)wm.style.transform=`translate(${(e.clientX/innerWidth-.5)*-20}px,${(e.clientY/innerHeight-.5)*-14}px)`;});}
/* écran de veille façon DVD après 90 s d'inactivité */
(function saver(){if(reduce)return;
  const sv=document.createElement("div");sv.className="saver";sv.setAttribute("aria-hidden","true");
  sv.innerHTML='<div class="dvd"><span class="m"></span>BomyOS</div>';document.body.appendChild(sv);
  const dvd=sv.querySelector(".dvd");let idle,x=80,y=80,vx=2.2,vy=1.8,run=false,raf;
  function arm(){clearTimeout(idle);if(run)stop();idle=setTimeout(start,90000);}
  function start(){run=true;sv.classList.add("on");loop();}
  function stop(){run=false;sv.classList.remove("on");cancelAnimationFrame(raf);}
  function loop(){if(!run)return;const W=innerWidth-dvd.offsetWidth,H=innerHeight-dvd.offsetHeight;
    x+=vx;y+=vy;if(x<=0||x>=W)vx=-vx;if(y<=0||y>=H)vy=-vy;
    x=Math.max(0,Math.min(W,x));y=Math.max(0,Math.min(H,y));
    dvd.style.transform=`translate(${x}px,${y}px)`;raf=requestAnimationFrame(loop);}
  ["pointerdown","pointermove","keydown","touchstart","wheel"].forEach(ev=>addEventListener(ev,arm,{passive:true}));
  arm();})();
/* ==== ÉCRAN VERROUILLÉ + CENTRE DE CONTRÔLE (mobile) ==== */
const lock=document.getElementById("lock"),cc=document.getElementById("cc"),dim=document.getElementById("dim");
function showLock(){if(location.hash)return;
  tick();
  document.getElementById("lhint").textContent=innerWidth>720?"Cliquez ou appuyez sur une touche pour déverrouiller":"Glisser vers le haut pour déverrouiller";
  lock.classList.remove("off");
  if(!lock._wired){lock._wired=true;let sy=null;
    lock.addEventListener("touchstart",e=>{sy=e.touches[0].clientY;},{passive:true});
    lock.addEventListener("touchmove",e=>{if(sy!==null&&sy-e.touches[0].clientY>60)unlock();},{passive:true});
    lock.addEventListener("click",unlock);
    addEventListener("keydown",e=>{if(!lock.classList.contains("off"))unlock();});}}
function unlock(){if(lock.classList.contains("off"))return;lock.classList.add("off");snd.open();
  if(innerWidth>720&&!Object.keys(wins).length)setTimeout(()=>openApp("apropos"),420);}
/* centre de contrôle : balayage vers le bas depuis le haut-droit de l'accueil */
(function initCC(){if(!cc)return;
  const mob=document.getElementById("mobile");let sy=null,sx=null;
  mob.addEventListener("touchstart",e=>{const t=e.touches[0];sy=(t.clientY<90&&t.clientX>innerWidth*.45)?t.clientY:null;sx=t.clientX;},{passive:true});
  mob.addEventListener("touchmove",e=>{if(sy!==null&&e.touches[0].clientY-sy>55){ccSync();cc.classList.add("on");snd.tap();sy=null;}},{passive:true});
  cc.addEventListener("click",e=>{
    const t=e.target.closest("[data-cc]");
    if(!t){if(e.target===cc)cc.classList.remove("on");return;}
    const k=t.dataset.cc;
    if(k==="close"){cc.classList.remove("on");return;}
    if(k==="wifi"){t.classList.toggle("on");snd.tap();return;}
    if(k==="snd"){PREF.set("muted",muted?"0":"1");applyPrefs();ccSync();snd.tap();return;}
    if(k==="crt"){PREF.set("crt",PREF.get("crt","0")==="1"?"0":"1");applyPrefs();ccSync();snd.tap();return;}
    if(k==="wp"){const seq=["aurora","sunset","ocean","forest","mono"];const cur=PREF.get("wp","aurora");PREF.set("wp",seq[(seq.indexOf(cur)+1)%seq.length]);applyPrefs();snd.tap();return;}
    if(k==="contact"){cc.classList.remove("on");innerWidth>720?openApp("contact"):mopen("contact");return;}});
  const ccBtn=document.getElementById("ccBtn");
  if(ccBtn)ccBtn.addEventListener("click",()=>{ccSync();cc.classList.toggle("on");snd.tap();});
  cc.querySelector("[data-ccb]").addEventListener("input",e=>{dim.style.opacity=String(1-e.target.value/100);});
  function ccSync(){cc.querySelector('[data-cc="snd"]').classList.toggle("on",!muted);cc.querySelector('[data-cc="crt"]').classList.toggle("on",PREF.get("crt","0")==="1");}
})();
/* PWA */
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("/sw.js").catch(()=>{});
