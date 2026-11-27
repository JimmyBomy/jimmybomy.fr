/* langue : "en" sur /en/ (/assets/js/i18n-en.js), sinon français */
const LOC=window.BOMY_LANG==="en"?"en-GB":"fr-FR",T=s=>window.bomyTr?window.bomyTr(s):s;
const EMAIL="jimmybomy@icloud.com",PHONE="07 88 02 16 76",TEL="0788021676";
/* ==== VITRINE, les flagships (édite ici) ==== */
const PROJECTS={
  amitie:{name:"Amitié Artisan",cat:"Client · reprise et relance d'une plateforme locale",img:"/assets/shots/amitie.jpg",grad:"linear-gradient(135deg,#1e2a44,#2b3b5e 55%,#c96f5a)",role:"Reprise du projet, remise en ligne, sécurité et nouvelle identité visuelle",year:"2026",client:"Amitié Artisan · client, en ligne",tags:["Client","Reprise de projet","Web, iOS et Android","Sécurité","Multilingue","En ligne"],link:"https://www.amitie-artisan.fr",host:"www.amitie-artisan.fr",
    scenes:[["/assets/shots/amitie-1-accueil.jpg","Accueil du site Amitié Artisan : le titre « Rejoignez le réseau des artisans et des produits du terroir » à côté d'un paysage de campagne dessiné au trait"],["/assets/shots/amitie-2-metiers.jpg","Page d'accueil d'Amitié Artisan : les métiers de bouche en pictogrammes (restaurants, boulangeries, boucheries, épiceries, fromageries, charcuteries) et une photo de mains qui pétrissent une pâte"],["/assets/shots/amitie-3-fonctionnement.jpg","Section « Comment ça marche ? » d'Amitié Artisan : deux cartes en quatre étapes, l'une pour les commerçants, l'autre pour les artisans et producteurs"]],
    phone:["/assets/shots/amitie-4-telephone.jpg","Amitié Artisan sur téléphone : le logo, le choix de la langue et le titre d'accueil sur un écran étroit"],
    desc:"Amitié Artisan met en relation le public avec des artisans, producteurs, commerçants et restaurants, sur le web et sur iOS et Android, en trois langues (FR, EN, DE).",metrics:[["76","fiches publiées"],["2 183","produits"],["100","SEO Lighthouse mobile"],["93","accessibilité Lighthouse mobile"]],study:[{h:"Le contexte",p:"J'ai repris le projet en août 2026, alors qu'il était à l'arrêt."},{h:"Ce que j'ai fait",p:"J'ai remis en ligne et sécurisé le site, l'API et les applications, puis lancé une nouvelle identité visuelle."},{h:"Le résultat",p:"Aujourd'hui : 76 fiches publiées et 2 183 produits, un score Lighthouse mobile de 100 en SEO et 93 en accessibilité."}],quote:["« Les commerçants à qui je l'ai montrée ont adoré. C'est du bon travail, Amitié Artisan reprend vie. »","Christophe, président d'Amitié Artisan"]},
  tonybedja:{name:"DJ Tony Bedja",cat:"Client · DJ à Sedan",img:"/assets/shots/tonybedja.jpg",grad:"linear-gradient(135deg,#1a1714,#b8862b 55%,#efe6d4)",role:"Conception & développement web",year:"2026",client:"DJ Tony (Tony Bedja) · client, en ligne",tags:["Client","Site vitrine","SEO local","En ligne"],link:"https://djtonybedja.fr",desc:"Site de DJ Tony (Tony Bedja), DJ à Sedan dans les Ardennes pour mariages, anniversaires, bars et garden parties : présentation de ses soirées, des mariages, galerie photos et réservation en un clic. Projet client, en ligne sur djtonybedja.fr."},
  fannyspirit:{name:"Fanny Spirit",cat:"Client · Reiki & soins énergétiques",img:"/assets/shots/fannyspirit.jpg",grad:"linear-gradient(135deg,#120f24,#3b2d5c 55%,#f1d79a)",role:"Conception & développement web",year:"2026",client:"Fanny Spirit · client, en ligne",tags:["Client","Site vitrine","Prise de RDV","En ligne"],link:"https://fannyspirit.fr",desc:"Site de Fanny Spirit, praticienne Reiki et LaHoChi à Charleville-Mézières : ambiance douce et étoilée, présentation des soins (au cabinet et à distance), tarifs, chèque cadeau et prise de rendez-vous. Projet client, en ligne sur fannyspirit.fr."},
  boulangerie:{name:"La Fournée de Sedan",cat:"Démo · site de commerce",img:"/assets/shots/boulangerie.jpg?v=2",grad:"linear-gradient(135deg,#8a5a1c,#c8892e 55%,#f2d06b)",role:"Exemple pour commerçants & indépendants",year:"2026",client:"Démonstration",tags:["Site vitrine","Click & Collect","Responsive","Fait main"],link:"https://jimmybomy.fr/projets/demo-boulangerie/",desc:"Le site qu'une boulangerie mérite. Vitrine, carte, click & collect, plan d'accès. Pensé pour donner faim et faire venir en boutique. Ici, c'est une démo, le vôtre serait bien réel, à partir d'une maquette gratuite."},
  rois:{name:"Rois de France",cat:"Encyclopédie web · PHP/MySQL",img:"/assets/shots/rois.jpg",grad:"linear-gradient(135deg,#3a2410,#c8892e 55%,#f2d06b)",role:"Conception, back & front",year:"2025",client:"SAÉ 203 · BUT MMI · noté 18,1/20",tags:["PHP","MySQL","Sécurité XSS/SQL","Lighthouse","VPS"],link:"https://jimmybomy.fr/projets/rois/",desc:"Encyclopédie web sur les monarques de France, de Clovis à Napoléon III : 64 fiches dynamiques, quiz, recherche, sécurisation des formulaires (XSS / injections SQL) et audit Lighthouse. PHP/MySQL, déployé sur mon VPS.",metrics:[["64","fiches dynamiques"],["18,1","note /20"],["0","framework"]],study:[{h:"Le brief",p:"SAÉ 203 du BUT MMI : concevoir de A à Z une encyclopédie web dynamique sur les rois de France, base de données, back PHP, front et mise en ligne réelle. L'exigence : pas une maquette, un site qui tient en production."},{h:"Le défi",p:"Gérer 64 souverains (de Clovis à Napoléon III) sans coder une page par roi, et ouvrir des formulaires au public (recherche, quiz), donc une vraie surface d'attaque à sécuriser."},{h:"Ce que j'ai fait",p:"Un modèle de données MySQL et des pages PHP paramétrées qui génèrent chaque fiche dynamiquement. Autour du catalogue : filtres par dynastie, recherche et tri, une page de statistiques, un comparateur de règnes, un quiz, un mode aléatoire et même un chatbot, plus un espace admin (back-office) pour gérer le contenu. Côté sécurité : requêtes préparées (PDO) contre l'injection SQL, échappement en sortie contre le XSS, validation des entrées."},{h:"Le résultat",p:"Audité avec Lighthouse, déployé et administré sur mon propre VPS (Apache/PHP/MySQL), noté 18,1/20. Ce que ça prouve : je sais modéliser une base, écrire du PHP sécurisé et livrer moi-même en production."}]},
  lumina:{name:"Lumina Studio",cat:"Agence événementielle · site",img:"/assets/shots/lumina.jpg",grad:"linear-gradient(135deg,#0e1a3a,#2563eb 55%,#7cc4ff)",role:"Direction artistique & développement",year:"2025",client:"SAÉ 202 · BUT MMI",tags:["HTML/CSS","JavaScript","Direction artistique"],link:"https://jimmybomy.fr/projets/lumina/",desc:"Site d'une agence créative et événementielle basée à Troyes, « là où la nuit devient expérience ». Design dark élégant, présentation de l'agence et de ses prestations immersives, avec son escape game Backrooms en projet phare."},
  backrooms:{name:"Backrooms",cat:"Escape game · site immersif",img:"/assets/shots/backrooms.jpg",grad:"linear-gradient(135deg,#1a1400,#3a3000 60%,#c6a800)",role:"Design & développement",year:"2025",client:"SAÉ 202 · BUT MMI",tags:["HTML/CSS","JavaScript","Ambiance & UX"],link:"https://jimmybomy.fr/projets/backrooms/",desc:"Site de l'escape game de Lumina Studio, inspiré de la légende urbaine des Backrooms : ambiance horreur/liminale, présentation du concept, des salles et réservation. Le pendant immersif du site agence."},
  turbofilm:{name:"Derrière la porte close",cat:"Court-métrage · Festival Turbofilm 2026",img:"/assets/shots/turbofilm.jpg",grad:"linear-gradient(135deg,#111,#3a2a1a 60%,#c8892e)",role:"Acteur principal · aide à l'écriture (idées)",year:"2026",client:"Festival Turbofilm 2026 · Université de Reims Champagne-Ardenne",tags:["Vidéo","Jeu d'acteur","Écriture","Travail d'équipe","24 h"],link:"https://www.youtube.com/watch?v=B5kp5wc4Rlo",cta:"Voir le film",desc:"Court-métrage écrit, tourné et monté en 24 heures par une équipe d'étudiants MMI pour le Festival Turbofilm 2026. J'y tiens le rôle principal, présent dans presque tous les plans, et j'ai participé à l'écriture des idées. Tournage entièrement en intérieur, dans mon appartement. Le film est diffusé par l'Université de Reims Champagne-Ardenne."},
  mandibules:{name:"Mandibules",cat:"Jeu de stratégie 3D · HTML5",hook:"La guerre des fourmilières, en 3D et en papier découpé. Jouable ici, tout de suite.",img:"/assets/shots/mandibules.jpg",grad:"linear-gradient(135deg,#2a1a0e,#8a5a2b 55%,#e9d8b4)",role:"Game design, direction & tests · développement assisté par IA",year:"2026",client:"Projet personnel",tags:["HTML5","JavaScript","Three.js","Game design","Développement assisté par IA"],made:"Mandibules a été développé avec l'aide de l'IA, et je le dis clairement. Ma part : imaginer le concept et la règle de chaque monde, décider de ce qui fait un bon niveau, équilibrer la difficulté, choisir la direction artistique en papier découpé, tester et corriger le jeu jusqu'à ce qu'il tienne la route, puis l'intégrer et le mettre en ligne sur mon site. Piloter une IA pour livrer un jeu complet et fini, c'est aussi une compétence.",link:"https://jimmybomy.fr/jeux/mandibules/",page:"/projets/mandibules/",game:"/jeux/mandibules/",
    shots:[["/assets/shots/mandibules-1-gameplay.jpg","Mandibules, niveau 10 « Le Jardin » : des fourmilières numérotées reliées par des chemins sur un plateau d'herbe, des colonnes de fourmis partent à l'attaque d'une colonie rivale"],["/assets/shots/mandibules-2-final-boss.jpg","Mandibules, niveau 60 « Boss final » : un plateau volcanique parcouru de lave où quatre colonies de couleurs différentes se disputent les fourmilières"],["/assets/shots/mandibules-3-home.jpg","Mandibules, écran d'accueil : le titre du jeu au-dessus d'une fourmilière couronnée sur un plateau de sable, avec le bouton Jouer, la carte et la colonie"]],
    features:["Campagne de 60 niveaux, avec une règle différente pour chaque monde","Mode Conquête sur une carte de 21 territoires","3 niveaux de difficulté","52 drapeaux de pays","Défis du jour, renouvelés chaque jour","7 langues","Direction artistique en papier découpé, en 3D (Three.js)","Un seul fichier HTML de 570 Ko, sans rien à installer, et la progression est sauvegardée dans le navigateur"],
    desc:"Mandibules est un jeu de stratégie original que j'ai conçu et développé : une guerre de fourmilières en 3D, dans un style papier découpé. On développe sa colonie, on envoie ses fourmis et on prend le contrôle du terrain face à des colonies rivales. Tout le jeu tient dans un seul fichier HTML5 et se lance directement dans le navigateur, sur ordinateur comme sur téléphone."},
  jimmyxesmp:{name:"JimmyxeSMP",cat:"Serveur Minecraft · 12 plugins Java",img:"/assets/shots/jimmyxesmp.jpg",grad:"linear-gradient(135deg,#0f1a0c,#2f5d1e 55%,#c6ff4e)",role:"Conception, développement, infrastructure & exploitation",year:"2026",client:"Projet personnel · bêta publique août 2026",tags:["Java 25","Paper & Velocity","SQL","Node.js","Discord","Architecture"],link:"https://github.com/JimmyBomy/jimmyxesmp",cta:"Voir l'architecture",desc:"Serveur Minecraft LifeSteal francophone, et tout le backend qui le fait tourner : 12 plugins Java écrits de zéro, un proxy Velocity, un bot Discord et une boutique en ligne. Le serveur n'a pas trouvé son public, mais le système est complet, documenté et a été ouvert au public (bêta le 3 août 2026, ouverture officielle le 17 septembre). Le code des plugins est privé ; l'architecture et les choix techniques sont publics sur GitHub.",metrics:[["12","plugins Java"],["≈18 000","lignes de code"],["134","fichiers Java"]],study:[{h:"Le problème",p:"Sur un serveur multijoueur, une vente n'est pas une simple addition : entre le calcul du prix et le retrait des objets, le joueur peut se déconnecter ou vider son inventaire. Une version naïve permet de dupliquer des objets ou de créer de l'argent."},{h:"Ce que j'ai construit",p:"EcoCore traite chaque vente comme une transaction SQL en plusieurs phases, annulable à chaque étape : le joueur n'est crédité qu'une fois le retrait des objets prouvé. La masse monétaire est suivie par source et par destination pour détecter l'inflation. OreGuard détecte la triche au minage par un modèle statistique plutôt qu'un seuil arbitraire. La téléportation aléatoire analyse les chunks hors du thread principal pour ne jamais faire ramer le serveur."},{h:"L'écosystème",p:"Proxy Velocity avec un pont WebSocket vers Discord (chat bidirectionnel, liaison de comptes par code éphémère), bot Discord en Node.js (16 commandes), boutique en ligne, panel de statistiques derrière un tunnel privé, configurations versionnées et sauvegardées avant chaque modification."},{h:"Ce que j'en retiens",p:"Mener un projet comme un lancement de produit (pré-bêta, bêta, ouverture), et que la technique ne suffit pas : sans communauté au départ, un bon serveur reste vide. La prochaine fois, je construirais l'audience avant le produit."}]},
  claudejauge:{name:"claude-jauge",cat:"Outil · widget Windows & CLI",hook:"Une jauge Windows qui affiche en temps réel mes limites Claude (5 h et semaine) et prévoit l'heure où je serai bloqué.",img:"/assets/shots/claudejauge.jpg",grad:"linear-gradient(135deg,#0d1420,#1f6f4a 55%,#8be36b)",role:"Conception & pilotage · développement assisté par IA",year:"2026",client:"Projet personnel · open source (MIT)",tags:["TypeScript","Node 20","Tauri 2","SVG fait main","node:test","GitHub Actions","Développement assisté par IA"],link:"https://github.com/JimmyBomy/claude-jauge",cta:"Voir sur GitHub",more:[["https://github.com/JimmyBomy/claude-jauge/releases/tag/v0.1.0","Télécharger"]],
    desc:"Une jauge Windows qui affiche en temps réel mes limites Claude (5 h et semaine) et prévoit l'heure où je serai bloqué. Un widget toujours visible et un tableau de bord local, sans rien envoyer sur Internet.",
    shots:[["/assets/shots/claudejauge-1-widget-sombre.jpg","Widget claude-jauge en thème sombre : 29 % restant sur la fenêtre de 5 h avec l'alerte « limite vers 23:11 », 38 % restant sur la semaine, 1,3 million de jetons aujourd'hui"],["/assets/shots/claudejauge-2-widget-clair.jpg","Widget claude-jauge en thème clair : 69 % restant sur 5 h et 68 % sur la semaine, état Normal, heures de remise à zéro affichées"],["/assets/shots/claudejauge-3-tableau-de-bord.jpg","Tableau de bord local de claude-jauge en thème clair : deux cartes 63 % et 30 % restants, puis la courbe d'utilisation des limites jour par jour"]],
    metrics:[["1,2 Mo","installeur Windows"],["0","dépendance à l'exécution"],["3","systèmes testés en CI"]],
    study:[{h:"Le problème",p:"L'interface officielle de Claude ne montre pas clairement ce qu'il reste de mes limites, ni à quelle heure je vais être bloqué. Je le découvrais au mauvais moment, en plein travail."},{h:"La solution",p:"Un widget Windows léger (.exe) qui se lance au démarrage et se branche tout seul à Claude Code. À côté, un tableau de bord local avec l'historique et une prévision du type « limite atteinte vers 16 h »."},{h:"Sous le capot",p:"TypeScript et Node 20, Tauri 2 pour le widget, graphiques en SVG faits main. Tests avec node:test, et GitHub Actions lance les tests sur Windows, macOS et Linux puis construit l'installeur .exe automatiquement."},{h:"Points forts",p:"Zéro dépendance à l'exécution. Uniquement des sources officielles et locales : rien n'est envoyé sur Internet. Le contraste AA des couleurs est vérifié par un test, et tout existe en français et en anglais."},{h:"Ma démarche",p:"Projet conçu et piloté par moi, développé avec l'aide de l'IA (Claude), puis testé et validé sur mon PC."}]},
  sillenbach:{name:"Le Nœud de Sillenbach",cat:"Fiction interactive · Twine",img:"/assets/shots/sillenbach.jpg",grad:"linear-gradient(135deg,#0f172a,#334155 55%,#94a3b8)",role:"Écriture & conception",year:"2025",client:"Projet personnel",tags:["Twine","Narration non-linéaire","Écriture"],link:"https://jimmybomy.fr/projets/sillenbach/",desc:"Fiction interactive jouable dans le navigateur, inspirée de la série Dark : un récit non-linéaire en 30 passages, où chaque choix fait bifurquer l'histoire. Écrite et mise en scène sous Twine (Harlowe), avec images et ambiance sonore."},
  bomyos:{name:"BomyOS",cat:"Ce site · OS en JS vanilla",img:"/assets/shots/bomyos.jpg",grad:"linear-gradient(135deg,#0d1f12,#c6ff4e 60%,#7cc4ff)",role:"Design & développement from scratch",year:"2026",client:"Portfolio personnel",tags:["JS vanilla","WebAudio","Accessibilité","Tests & CI"],link:"https://github.com/JimmyBomy/jimmybomy.fr",desc:"Le site sur lequel tu te trouves : un système d'exploitation complet en JavaScript vanilla, sans framework, fenêtres draggables et redimensionnables, sons WebAudio, navigation clavier intégrale, lecteurs d'écran supportés, terminal interactif. Chaque modification passe par des tests automatiques et un déploiement continu (GitHub Actions → mon VPS). La démo tourne sous tes yeux."},
};
/* ==== LABS, les expériences ==== */
const LABS={
  pendule:{name:"Pendule échecs/dames",cat:"Outil · HTML/JS",grad:"linear-gradient(135deg,#1a1a1a,#c6ff4e 65%,#eef0ea)",role:"Développement",year:"2025",client:"Projet personnel",tags:["HTML","JavaScript"],link:"",desc:"Horloge de jeu (pendule) pour parties d'échecs et de dames, jouable directement dans le navigateur, construite à l'origine pour départager la rivalité aux dames avec mon père."},
  cli:{name:"Convertisseur de fichiers",cat:"Outil CLI · Node.js",grad:"linear-gradient(135deg,#0c1016,#22c55e 60%,#a7f3d0)",role:"Développement",year:"2025",client:"Projet personnel",tags:["Node.js","CLI"],link:"",desc:"Outil en ligne de commande Node.js pour convertir des fichiers d'un format à l'autre."},
  sae105:{name:"SAÉ 105",cat:"Site web · S1",grad:"linear-gradient(135deg,#3b1e6e,#7c5cff 60%,#7cc4ff)",role:"Développement",year:"2025",client:"SAÉ 105 · BUT MMI",tags:["HTML/CSS","Web"],link:"",desc:"L'un de mes premiers sites, réalisé au premier semestre du BUT MMI, intégration web et bonnes pratiques."},
  proshop:{name:"Hony Tawk's ProShop",cat:"E-commerce · intégration",img:"/assets/shots/proshop.jpg",grad:"linear-gradient(135deg,#111,#333 60%,#c6ff4e)",role:"Intégration HTML/CSS/JS",year:"2025",client:"TP · R2.12",tags:["HTML/CSS","JavaScript","Responsive"],link:"https://jimmybomy.fr/travaux/r212/sequence2/",desc:"Boutique de skateboards fictive (planches, longboards, tee-shirts) : grille produits, filtres et mise en page e-commerce. TP d'intégration web."},
  arboretum:{name:"Arboretum de Loupessac",cat:"Site multi-pages",img:"/assets/shots/arboretum.jpg",grad:"linear-gradient(135deg,#0b3d2e,#2f8f6b 60%,#a7f3d0)",role:"Intégration HTML/CSS",year:"2025",client:"TP · R1.12",tags:["HTML/CSS","Multi-pages"],link:"https://jimmybomy.fr/travaux/r112/sequence5/",desc:"Site vitrine d'un arboretum : historique, plan du parc, accès. Structuration multi-pages et mise en page soignée."},
  kingyo:{name:"Kingyo",cat:"Site cuisine · design",img:"/assets/shots/kingyo.jpg",grad:"linear-gradient(135deg,#2a2a2a,#8a8a8a 60%,#e26d9a)",role:"Intégration HTML/CSS",year:"2025",client:"TP · R1.12",tags:["HTML/CSS","Design"],link:"https://jimmybomy.fr/travaux/r112/sequence2/",desc:"Site de recettes de cuisine japonaise à l'esthétique épurée (motifs, typographie soignée). TP d'intégration."},
  quizz:{name:"Mon super Quizz",cat:"Quiz interactif · JS",img:"/assets/shots/quizz.jpg",grad:"linear-gradient(135deg,#0e1a3a,#2563eb 60%,#7cc4ff)",role:"Développement JavaScript",year:"2025",client:"TP · R2.12",tags:["JavaScript","DOM"],link:"https://jimmybomy.fr/travaux/r212/sequence5/",desc:"Quiz interactif en JavaScript : questions à choix, calcul du score et logique de jeu manipulant le DOM."},
  calculette:{name:"Calculette",cat:"Outil · JS",img:"/assets/shots/calculette.jpg",grad:"linear-gradient(135deg,#3a2410,#c8892e 60%,#f2d06b)",role:"Développement JavaScript",year:"2025",client:"TP · R2.12",tags:["JavaScript"],link:"https://jimmybomy.fr/travaux/r212/sequence4/",desc:"Calculatrice fonctionnelle en JavaScript : opérations, gestion des touches et de l'affichage en temps réel."},
  patate:{name:"Monsieur Patate",cat:"Page interactive",img:"/assets/shots/patate.jpg",grad:"linear-gradient(135deg,#5a3a1a,#a86b3a 60%,#7cc4ff)",role:"Intégration & JS",year:"2025",client:"TP · R1.12",tags:["HTML/CSS","JavaScript"],link:"https://jimmybomy.fr/travaux/r112/sequence3/",desc:"Page ludique façon Monsieur Patate : composition d'un personnage, ambiance cartoon. Manipulation du DOM."},
};
const ALL={...PROJECTS,...LABS};
const XP=[
  {yr:"2025 · auj.",role:"BUT MMI : Métiers du Multimédia et de l'Internet",co:"IUT de Troyes",desc:"1re année validée, <b style='color:var(--acc)'>18,1/20 de moyenne en développement web</b>."},
  {yr:"En continu",role:"Auto-hébergement & administration système",co:"VPS personnel",desc:"J'héberge et administre tous mes projets sur mon propre VPS Linux : Apache, monitoring GoAccess, déploiements. Également : serveur de jeu Minecraft (Paper) administré via Pterodactyl."},
  {yr:"En continu",role:"Créateur de contenu Twitch",co:"<a href='https://www.twitch.tv/jimmyxetv' target='_blank' rel='noopener' style='color:inherit'>jimmyxetv</a>",desc:"Plus de 26 000 abonnés : je lance, j'anime et je fais vivre une communauté en direct."},
  {yr:"2022-25",role:"Baccalauréat général",co:"Lycée Mabillon",desc:"Développeur autodidacte en parallèle du lycée : développement web et Node.js en autonomie, avant l'entrée en BUT MMI."},
];
const APPS={projets:{title:"Projets",icon:"folder",w:600,h:460},labs:{title:"Labs",icon:"labs",w:600,h:460},services:{title:"Services",icon:"services",w:560,h:620},devis:{title:"Devis express",icon:"devis",w:520,h:480},reglages:{title:"Réglages",icon:"gear",w:540,h:620},terminal:{title:"Terminal",icon:"terminal",w:580,h:430},messages:{title:"Messages",icon:"messages",w:460,h:580},photos:{title:"Photos",icon:"photos",w:640,h:520},calc:{title:"Calculette",icon:"calc",w:340,h:540},plans:{title:"Plans",icon:"plans",w:560,h:540},aide:{title:"Aide · raccourcis",icon:"doc",w:470,h:460},apropos:{title:"À propos.txt",icon:"user",w:520,h:540},parcours:{title:"Parcours.doc",icon:"doc",w:560,h:460},contact:{title:"Contact",icon:"mail",w:520,h:560},cv:{title:"CV.pdf",icon:"pdf",w:540,h:600},mentions:{title:"Mentions légales.txt",icon:"doc",w:620,h:640},confidentialite:{title:"Confidentialité.txt",icon:"doc",w:620,h:640}};
const LEGAL_URL=window.BOMY_LANG==="en"?{mentions:"/en/legal-notice/",confidentialite:"/en/privacy/"}:{mentions:"/mentions-legales/",confidentialite:"/confidentialite/"};

/* ==== ANALYTICS first-party (privacy-friendly, actif seulement en prod) ==== */
const ANALYTICS_ON=/(^|\.)jimmybomy\.fr$/.test(location.hostname);
function track(event,extra){
  if(!ANALYTICS_ON)return;
  try{
    const body=JSON.stringify(Object.assign({
      event:event||"pageview",
      path:(location.pathname+location.hash).slice(0,180),
      ref:document.referrer||"",
      device:isMob()?"mobile":"desktop"
    },extra||{}));
    if(navigator.sendBeacon)navigator.sendBeacon("/api/hit.php",new Blob([body],{type:"application/json"}));
    else fetch("/api/hit.php",{method:"POST",headers:{"Content-Type":"application/json"},body,keepalive:true}).catch(()=>{});
  }catch(e){}
}

/* ==== DEVIS EXPRESS (configurateur) ==== */
let DEVIS={step:0,a:[]};
const DEVIS_Q=[
  {q:"Avez-vous déjà un site internet ?",opts:["Non, aucun","Oui, mais vieillissant","Oui, assez récent"]},
  {q:"Quelle est votre activité ?",opts:["Restaurant / café","Commerce / boutique","Artisan / service","Autre"]},
  {q:"Vos clients doivent surtout pouvoir…",opts:["Trouver vos infos & horaires","Réserver ou commander en ligne","Vous contacter facilement"]},
];
function devisHTML(){
  if(DEVIS.step<DEVIS_Q.length){const c=DEVIS_Q[DEVIS.step];
    return `<div class="h-eyebrow">Devis express · question ${DEVIS.step+1} / 3</div><h2 class="h-title" style="font-size:26px">${c.q}</h2>
      <div class="chips" style="flex-direction:column;align-items:stretch;gap:10px;margin-top:18px">
      ${c.opts.map((o,i)=>`<button class="chip" data-devis="${i}" style="text-align:left;cursor:pointer;font-size:14px;padding:13px 15px">${o}</button>`).join("")}</div>
      ${DEVIS.step>0?'<button class="btn ghost" data-devis="back" style="margin-top:20px">‹ Question précédente</button>':''}`;}
  const act=["restaurant / café","commerce","activité d'artisan / service","activité"][DEVIS.a[1]];
  const objectif=["créer mon premier site","moderniser mon site","améliorer mon site"][DEVIS.a[0]];
  const need=["un site vitrine clair : présentation, horaires, itinéraire","un site avec réservation / commande en ligne","un site simple avec contact direct (téléphone, WhatsApp)"][DEVIS.a[2]];
  const msg=encodeURIComponent(`Bonjour Jimmy ! J'ai un ${act} et j'aimerais ${objectif}, il me faudrait ${need}. On peut en parler ?`);
  return `<div class="h-eyebrow">Ma recommandation</div><h2 class="h-title" style="font-size:28px">Voilà ce qu'il<br>vous faut.</h2>
    <p class="lede">Pour votre <b>${act}</b> : ${need}. Hébergement et mise en ligne <b>inclus</b>, et on démarre par une <b>maquette gratuite</b>, sans engagement.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
      <a class="btn" href="https://wa.me/33788021676?text=${msg}" target="_blank" rel="noopener">Envoyer sur WhatsApp <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg></a>
      <button class="btn ghost" data-devis="restart">Recommencer</button></div>
    <div class="devis-lead">
      <div class="h-eyebrow">Ou laissez-moi vos coordonnées</div>
      <p class="lede" style="font-size:13px;margin:6px 0 12px">Je vous rappelle, en général en moins de 2 heures.</p>
      <input id="dv-name" class="dv-in" placeholder="Votre nom (optionnel)" autocomplete="name">
      <input id="dv-contact" class="dv-in" placeholder="Email ou téléphone" inputmode="email" autocomplete="email">
      <input id="dv-hp" class="dv-hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn" data-devis="send" style="margin-top:4px">Être rappelé ›</button>
      <div id="dv-status" class="lede" style="font-size:13px;margin-top:8px"></div>
    </div>`;}
function devisAct(v,container){
  if(v==="send"){devisSend(container);return;}
  if(v==="back"){DEVIS.step=Math.max(0,DEVIS.step-1);DEVIS.a.length=DEVIS.step;}
  else if(v==="restart"){DEVIS={step:0,a:[]};}
  else{DEVIS.a[DEVIS.step]=+v;DEVIS.step++;}
  snd.tap();container.innerHTML=devisHTML();}
function devisSend(container){
  const esc=s=>String(s||"").replace(/[<>&"]/g,"");
  const g=id=>{const el=container.querySelector(id);return el?el.value:"";};
  const name=g("#dv-name").trim(),contact=g("#dv-contact").trim(),hp=g("#dv-hp");
  const status=container.querySelector("#dv-status"),btn=container.querySelector('[data-devis="send"]');
  if(!contact){if(status){status.style.color="#ff5f57";status.textContent="Indiquez un email ou un téléphone.";}return;}
  if(btn){btn.disabled=true;btn.textContent="Envoi…";}
  const objective=["créer un premier site","moderniser un site vieillissant","améliorer un site récent"][DEVIS.a[0]]||"";
  const kind=["Restaurant / café","Commerce / boutique","Artisan / service","Autre"][DEVIS.a[1]]||"";
  const need=["Infos & horaires","Réservation / commande","Contact direct"][DEVIS.a[2]]||"";
  fetch("/api/devis.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,contact,objective,kind,need,website:hp,source:"devis"})})
    .then(r=>r.json()).then(j=>{
      if(!j||!j.ok)throw 0;
      snd.tap();track("lead");
      container.innerHTML=`<div class="h-eyebrow">Merci ${esc(name.split(" ")[0])} !</div><h2 class="h-title" style="font-size:28px">C'est noté.</h2><p class="lede">Je vous recontacte très vite sur <b>${esc(contact)}</b>. À tout de suite 👋</p>`;
    }).catch(()=>{if(status){status.style.color="#ff5f57";status.textContent="Oups, réessayez, ou passez par WhatsApp juste au-dessus.";}if(btn){btn.disabled=false;btn.textContent="Être rappelé ›";}});}

/* ==== TERMINAL (easter egg, accessible via Ctrl+K ou #terminal) ==== */
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
  if(cmd==="sudo embauche-moi"){tOut(out,'Permission accordée ✅, <a href="mailto:'+EMAIL+'?subject=On%20t%27embauche">envoie le mail d\'embauche</a>');return;}
  if(cmd.startsWith("sudo")){tOut(out,'Nice try 😏, essaie <span class="acc">sudo embauche-moi</span>');return;}
  const map={help:'commandes : <span class="acc">whoami · projets · labs · services · devis · contact · cv · ls · date · clear</span>, et un sudo bien senti.',
    whoami:"Jimmy Bomy · développeur web créatif · BUT MMI (Troyes) · Sedan.",
    ls:"projets/&nbsp;&nbsp;labs/&nbsp;&nbsp;services&nbsp;&nbsp;devis&nbsp;&nbsp;a-propos.txt&nbsp;&nbsp;cv.pdf&nbsp;&nbsp;reglages",
    contact:`email → <a href="mailto:${EMAIL}">${EMAIL}</a><br>tél/wa → <a href="tel:${TEL}">${PHONE}</a> · <a href="https://wa.me/33788021676" target="_blank" rel="noopener">WhatsApp</a>`,
    date:new Date().toLocaleString(LOC)};
  if(map[cmd]){tOut(out,map[cmd]);return;}
  tOut(out,`commande introuvable : ${esc(raw)}, tape <span class="acc">help</span>`);}

/* ==== MESSAGES (iMessage) ==== */
const MSG={
  start:{j:["Salut 👋 Ici Jimmy.","Qu'est-ce qui vous amène ?"],c:[["🏪 Un site pour mon commerce","biz"],["💼 Je recrute / stage","rec"],["👀 Je visite","fun"]]},
  biz:{j:["Parfait, c'est mon métier 👌","Site vitrine, réservation, refonte, et on démarre toujours par une maquette gratuite, sans engagement."],c:[["⚡ Devis express (3 questions)","@devis"],["💬 WhatsApp direct","!wa"],["📁 Voir vos réalisations","@projets"]]},
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
  if(v.startsWith("@")){const app=v.slice(1);setTimeout(()=>{!isMob()?openApp(app):mopen(app);},380);return;}
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
/* ==== JEUX jouables dans la fenêtre (Mandibules…) : iframe 16:9, chargée au clic ==== */
const ARROW='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>';
function gameHTML(p){return `<div class="h-eyebrow">${p.cat}</div><h2 class="h-title">${p.name}</h2><p class="lede ghook">${p.hook}</p>
  <div class="gframe" data-game="${p.game}" data-gtitle="${esc(p.name)}"><button class="gposter" data-gplay style="background-image:url('${p.img}')" aria-label="Lancer ${esc(p.name)} ici"><span class="gplay"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>Jouer ici</span></button></div>
  <div class="gacts"><button class="btn" data-gfs>Plein écran <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button><a class="btn ghost" href="${p.game}" target="_blank" rel="noopener">Ouvrir dans un nouvel onglet ${ARROW}</a></div>
  <p class="gnote">Sur téléphone, le nouvel onglet est plus confortable. Le son démarre au premier clic dans le jeu, et ta progression est gardée dans ce navigateur.</p>
  <div class="gshots">${p.shots.map(([src,alt])=>`<img src="${src}" alt="${esc(alt)}" loading="lazy" width="1280" height="720">`).join("")}</div>
  <p class="lede">${p.desc}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
  <div class="kv"><span class="k">Rôle</span><span>${p.role}</span><span class="k">Année</span><span>${p.year}</span><span class="k">Contexte</span><span>${p.client}</span></div>
  <div class="study">${p.made?`<div class="study-b"><div class="study-h">Comment je l'ai fait</div><p>${p.made}</p></div>`:""}<div class="study-b"><div class="study-h">Fonctionnalités</div><ul class="gfeat">${p.features.map(f=>`<li>${f}</li>`).join("")}</ul></div></div>
  ${p.page?`<p class="gnote"><a href="${p.page}" target="_blank" rel="noopener">Page du projet à partager ↗</a></p>`:""}`;}
function gameFrame(box){let f=box.querySelector("iframe");if(f)return f;
  f=document.createElement("iframe");f.src=box.dataset.game;f.title=box.dataset.gtitle+" : jeu jouable";
  f.setAttribute("allow","fullscreen; autoplay");f.setAttribute("allowfullscreen","");box.innerHTML="";box.appendChild(f);
  setTimeout(()=>{try{f.focus()}catch(e){}},300);return f;}
document.addEventListener("click",e=>{
  const pl=e.target.closest("[data-gplay]");if(pl){gameFrame(pl.closest(".gframe"));return;}
  const fs=e.target.closest("[data-gfs]");if(!fs)return;
  const box=(fs.closest(".win-body,#msheetBody")||document).querySelector(".gframe");if(!box)return;
  const f=gameFrame(box),rq=f.requestFullscreen||f.webkitRequestFullscreen;
  if(rq&&(document.fullscreenEnabled||document.webkitFullscreenEnabled)){try{const r=rq.call(f);if(r&&r.catch)r.catch(()=>open(box.dataset.game,"_blank","noopener"));}catch(err){open(box.dataset.game,"_blank","noopener");}}
  else open(box.dataset.game,"_blank","noopener");
});
function finderHTML(title,sub,items){return `<div class="h-eyebrow">Finder · ${Object.keys(items).length} éléments</div><h2 class="h-title" style="font-size:26px;margin:10px 0 6px">${title}</h2>
  ${sub?`<p class="lede" style="font-size:13px;margin-bottom:18px">${sub}</p>`:'<div style="height:14px"></div>'}
  <div class="finder">${Object.entries(items).map(([id,p])=>`<button class="fitem" data-open="project:${id}" aria-label="Ouvrir ${p.name}"><span class="fthumb" style="${p.img?`background-image:url('${p.img}');background-size:cover;background-position:top center`:`background:${p.grad}`}"></span><span class="fname">${p.name}</span><span class="fmeta">${p.cat}</span></button>`).join("")}</div>`;}
/* bouton principal d'une fiche projet : ouvre le site dans une fenêtre s'il est hébergé ici, sinon dans un nouvel onglet */
function projBtn(p){return (p.link?(/jimmybomy\.fr/.test(p.link)||p.link.startsWith("/")?`<button class="btn" data-site="${p.link}" data-title="${esc(p.name)}">Ouvrir le projet ${ARROW}</button>`:`<a class="btn" href="${p.link}" target="_blank" rel="noopener">${p.cta||"Voir le site"} ${ARROW}</a>`):`<span class="btn ghost" style="cursor:default">En développement</span>`)+(p.more||[]).map(([u,l])=>` <a class="btn ghost" href="${u}" target="_blank" rel="noopener">${l} ${ARROW}</a>`).join("");}
/* ==== FICHES « PAGE PRODUIT » : le site reste épinglé pendant que les chapitres défilent, puis les chiffres en grand ==== */
function storyHTML(p){const last=p.study.length-1;
  return `<article class="story">
    <header class="st-head"><div class="h-eyebrow">${p.cat}</div><h2 class="h-title st-title">${p.name}</h2><p class="lede st-lede">${p.desc}</p><div class="st-cta">${projBtn(p)}</div></header>
    <section class="st-scene" aria-label="Étude de cas">
      <div class="st-pin"><div class="st-view"><figure class="st-browser">${p.host?`<div class="st-bar" aria-hidden="true"><span>${p.host}</span></div>`:""}<div class="st-shots">${p.scenes.map(([src,alt],i)=>`<img${i?"":' class="on"'} src="${src}" alt="${esc(alt)}" width="1280" height="800"${i?' loading="lazy"':""}>`).join("")}</div></figure>${p.phone?`<img class="st-phone" src="${p.phone[0]}" alt="${esc(p.phone[1])}" width="468" height="797" loading="lazy">`:""}</div>
        <div class="st-steps" aria-hidden="true">${p.study.map((s,i)=>`<i${i?"":' class="on"'}></i>`).join("")}</div></div>
      <div class="st-chapters">${p.study.map((s,i)=>`<div class="st-ch${i?"":" on"}"><div class="st-k">0${i+1} / 0${last+1}</div><h3 class="st-h">${s.h}</h3><p class="st-p${s.p.length>170?" long":""}">${s.p}</p></div>`).join("")}</div>
    </section>
    ${p.metrics?`<section class="st-figs"><div class="h-eyebrow">En chiffres</div><div class="st-nums n${p.metrics.length}">${p.metrics.map(m=>`<div class="st-fig"><b>${m[0]}</b><span>${m[1]}</span></div>`).join("")}</div></section>`:""}
    ${p.quote?`<figure class="st-quote"><div class="h-eyebrow">Le mot du client</div><blockquote><p>${p.quote[0]}</p></blockquote><figcaption>${p.quote[1]}</figcaption></figure>`:""}
    <section class="st-meta"><div class="h-eyebrow">Le projet en bref</div><div class="kv"><span class="k">Rôle</span><span>${p.role}</span><span class="k">Année</span><span>${p.year}</span><span class="k">Contexte</span><span>${p.client}</span></div><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>${projBtn(p)}</section>
  </article>`;}
/* branche une fiche « page produit » : chapitre actif selon le défilement, image correspondante, chiffres qui comptent une fois visibles */
function wireStory(root){const sc=root&&(root.closest(".msheet")||root);if(sc&&sc._storyOff){sc._storyOff();sc._storyOff=null;}
  const st=root&&root.querySelector(".story");if(!st)return;
  const still=matchMedia("(prefers-reduced-motion:reduce)").matches,nav=sc.querySelector(".mnav");
  const pin=st.querySelector(".st-pin"),chs=[...st.querySelectorAll(".st-ch")],imgs=[...st.querySelectorAll(".st-shots img")],steps=[...st.querySelectorAll(".st-steps i")],nums=st.querySelector(".st-nums");
  let cur=-1,counted=!nums||still,raf=0;
  const blank=el=>{const k=el.children;return k.length?(el.getBoundingClientRect().height-(k[k.length-1].getBoundingClientRect().bottom-k[0].getBoundingClientRect().top))/2:0;};
  const size=()=>{const top=nav?nav.offsetHeight:0;st.style.setProperty("--st-top",top+"px");st.style.setProperty("--st-vh",Math.max(300,sc.clientHeight-top)+"px");
    /* en deux colonnes, la scène remonte sous le titre : pas de grand vide avant ni après */
    st.style.setProperty("--st-lift",(st.clientWidth>640&&chs.length?Math.max(0,Math.min(blank(pin),blank(chs[0]))-34):0)+"px");};
  const show=i=>{if(i===cur)return;cur=i;const im=Math.min(i,imgs.length-1);
    chs.forEach((c,k)=>c.classList.toggle("on",k===i));imgs.forEach((g,k)=>g.classList.toggle("on",k===im));steps.forEach((d,k)=>d.classList.toggle("on",k===i));
    pin.classList.toggle("ph",i===chs.length-1);};
  const count=()=>{counted=true;nums.querySelectorAll("b").forEach(b=>{const txt=b.textContent.trim();if(!/^\d[\d\s]*$/.test(txt))return;
    const end=parseInt(txt.replace(/\D/g,""),10),grp=/\s/.test(txt),t0=performance.now();
    const step=now=>{const k=Math.min(1,(now-t0)/1100),v=Math.round(end*(1-Math.pow(1-k,3)));
      b.textContent=k===1?txt:(grp?String(v).replace(/\B(?=(\d{3})+(?!\d))/g," "):String(v));if(k<1&&b.isConnected)requestAnimationFrame(step);};
    requestAnimationFrame(step);});};
  const update=()=>{raf=0;if(!st.isConnected){off();return;}
    const r=sc.getBoundingClientRect(),top=r.top+(nav?nav.offsetHeight:0),pb=pin.getBoundingClientRect().bottom;
    /* repère : le milieu de la zone libre (sous l'image épinglée en une colonne, toute la hauteur en deux colonnes) */
    const mid=st.clientWidth>640?(top+r.bottom)/2:(Math.max(top,Math.min(pb,r.bottom-80))+r.bottom)/2;
    let best=0,bd=1e9;chs.forEach((c,k)=>{const b=c.getBoundingClientRect(),d=Math.abs((b.top+b.bottom)/2-mid);if(d<bd){bd=d;best=k;}});show(best);
    if(!counted&&nums.getBoundingClientRect().top<r.bottom-60)count();};
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};
  const ro=window.ResizeObserver?new ResizeObserver(()=>{size();onScroll();}):null;
  function off(){sc.removeEventListener("scroll",onScroll);if(ro)ro.disconnect();}
  sc.addEventListener("scroll",onScroll,{passive:true});if(ro)ro.observe(sc);sc._storyOff=off;
  size();update();}
/* ==== PAGES LÉGALES : une seule source (/mentions-legales/, /confidentialite/), chargée dans la fenêtre ==== */
function loadLegal(root){const box=root&&root.querySelector("[data-legal]");if(!box)return;const url=box.getAttribute("data-legal");
  fetch(url+(url.includes("?")?"&":"?")+"t="+Date.now(),{cache:"no-store"}).then(r=>{if(!r.ok)throw 0;return r.text();}).then(t=>{
    const doc=new DOMParser().parseFromString(t,"text/html").querySelector(".legal-doc");if(!doc)throw 0;
    box.innerHTML=doc.innerHTML+`<p class="upd"><a href="${url}" target="_blank" rel="noopener">Ouvrir en pleine page ↗</a></p>`;
    box.querySelectorAll('a[href="/confidentialite/"],a[href="/mentions-legales/"],a[href="/en/privacy/"],a[href="/en/legal-notice/"]').forEach(a=>{const k=/confidentialite|privacy/.test(a.getAttribute("href"))?"confidentialite":"mentions";
      a.addEventListener("click",e=>{e.preventDefault();!isMob()?openApp(k):mopen(k);});});
  }).catch(()=>{box.innerHTML=`<p class="lede">Impossible de charger la page ici. <a class="acc" href="${url}">Ouvrir ${url}</a></p>`;});}
const LEGAL_LINKS=`<p class="legal-mini">En envoyant ce formulaire, vous acceptez que j'utilise ces informations uniquement pour vous répondre. <a href="/confidentialite/" data-open="confidentialite">Politique de confidentialité</a></p>`;
/* après ouverture d'une app, amène un élément (ex. le formulaire de contact) à l'écran */
function focusLater(id){if(!id)return;setTimeout(()=>{const el=document.getElementById(id);if(!el)return;el.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});const f=el.querySelector("input,textarea");if(f)f.focus({preventScroll:true});},380);}
function contactSend(form){
  const g=n=>(form.elements[n]?.value||"").trim();
  const name=g("name"),email=g("email"),message=g("message"),hp=g("website");
  const status=form.querySelector(".cf-status"),btn=form.querySelector("button[type=submit]");
  const err=m=>{status.style.color="#ff5f57";status.textContent=m;};
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err("Indiquez une adresse e-mail valide.");return;}
  if(message.length<5){err("Écrivez-moi quelques mots sur votre projet.");return;}
  btn.disabled=true;btn.textContent="Envoi…";
  fetch("/api/devis.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,contact:email,message,website:hp,source:"contact"})})
    .then(r=>r.json()).then(j=>{if(!j||!j.ok)throw j||{};
      snd.tap();track("lead");
      form.innerHTML=`<div class="h-eyebrow">Merci${name?" "+esc(name.split(" ")[0]):""} !</div><h2 class="h-title" style="font-size:28px">Message envoyé.</h2><p class="lede">Je vous réponds très vite sur <b>${esc(email)}</b>. À tout de suite 👋</p>`;
    }).catch(j=>{err(j&&j.error==="rate"?"Trop d'envois d'un coup, réessayez dans une heure.":"Oups, l'envoi a échoué, réessayez dans un instant.");btn.disabled=false;btn.textContent="Envoyer le message ›";});}
document.addEventListener("submit",e=>{const f=e.target.closest("[data-cform]");if(f){e.preventDefault();contactSend(f);}});
function content(app){
  if(LEGAL_URL[app])return `<div class="legal-doc" data-legal="${LEGAL_URL[app]}"><p class="lede">Chargement…</p></div>`;
  if(app==="projets")return finderHTML("Projets","La vitrine : mes projets principaux.",PROJECTS);
  if(app==="labs")return finderHTML("Labs","Les expériences : petits projets, outils et bidouilles.",LABS);
  if(app.startsWith("project:")){const p=ALL[app.split(":")[1]];
    if(p.game)return gameHTML(p);
    if(p.scenes&&p.study)return storyHTML(p);
    return `<div class="proj-hero" style="${p.img?`background-image:url('${p.img}');background-size:cover;background-position:top center`:`background:${p.grad}`}">${p.img?"":'<div class="mock"></div>'}</div><div class="h-eyebrow">${p.cat}</div><h2 class="h-title">${p.name}</h2>
      <p class="lede">${p.desc}</p>${p.shots?`<div class="gshots">${p.shots.map(([src,alt])=>`<img src="${src}" alt="${esc(alt)}" loading="lazy" width="1280" height="720">`).join("")}</div>`:""}<div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <div class="kv"><span class="k">Rôle</span><span>${p.role}</span><span class="k">Année</span><span>${p.year}</span><span class="k">Contexte</span><span>${p.client}</span></div>
      ${p.metrics?`<div class="pmetrics">${p.metrics.map(m=>`<div class="pm"><b>${m[0]}</b><span>${m[1]}</span></div>`).join("")}</div>`:""}
      ${p.study?`<div class="study">${p.study.map(s=>`<div class="study-b"><div class="study-h">${s.h}</div><p>${s.p}</p></div>`).join("")}</div>`:""}
      ${p.quote?`<figure class="pquote"><blockquote><p>${p.quote[0]}</p></blockquote><figcaption>${p.quote[1]}</figcaption></figure>`:""}
      ${projBtn(p)}`;}
  if(app==="apropos")return `<div style="display:flex;gap:20px;align-items:center;margin-bottom:6px"><img src="/assets/jimmy.jpg?v=2" alt="Jimmy Bomy" style="width:100px;height:126px;object-fit:cover;object-position:top center;border-radius:12px;border:1px solid var(--glass-brd);flex:0 0 auto"><div><div class="h-eyebrow">À propos</div><h2 class="h-title" style="font-size:clamp(30px,4.2vw,46px)">Salut,<br>moi c'est Jimmy.</h2></div></div>
    <div class="pro-note"><b>Développeur web freelance</b>, je crée des sites internet pour les particuliers et les professionnels. Micro-entreprise immatriculée, SIRET 133 309 369 00014.</div>
    <p class="lede">Étudiant en <span class="acc">BUT MMI</span> à Troyes, basé à Sedan. Je développe des sites et des jeux web, du <b>back PHP/MySQL</b> au <b>Canvas HTML5</b>, et j'héberge et administre <b>tous mes projets sur mon propre VPS Linux</b> (Apache, monitoring GoAccess). Autodidacte avant la fac, je code parce que j'aime résoudre des problèmes et voir le résultat tourner.</p>
    <button class="btn ghost" data-tour style="margin-top:16px">${TOUR_ICON} Visite guidée · 30 s</button>
    <div class="stats"><div class="stat"><div class="n"><i>18,1</i></div><div class="l">moyenne dev web</div></div><div class="stat"><div class="n"><i>10</i></div><div class="l">sites en ligne</div></div><div class="stat"><div class="n"><i>15</i></div><div class="l">projets & labs</div></div><div class="stat"><div class="n"><i>VPS</i></div><div class="l">auto-hébergé</div></div></div>
    <div class="divider"></div><div class="h-eyebrow">Boîte à outils</div><div class="chips">${["PHP","MySQL","JavaScript","HTML / CSS","HTML5 Canvas","Node.js","Twine","Linux / Apache","Administration VPS","Pterodactyl","Git"].map(c=>`<span class="chip">${c}</span>`).join("")}</div>
    <div class="divider"></div><div class="h-eyebrow">Ce site, audité Lighthouse</div>
    <div class="lhrow"><div class="lhb"><b>97</b><span>Performance</span></div><div class="lhb"><b>100</b><span>Accessibilité</span></div><div class="lhb"><b>100</b><span>Bonnes pratiques</span></div><div class="lhb"><b>100</b><span>SEO</span></div></div>
    <p class="lede" style="font-size:12px;color:var(--dim);margin-top:8px">Audit Lighthouse sur desktop, accessibilité, bonnes pratiques et SEO à 100/100.</p>`;
  if(app==="parcours")return `<div class="h-eyebrow">Parcours</div><h2 class="h-title" style="font-size:28px;margin-bottom:22px">Parcours</h2>
    <div class="tl">${XP.map(x=>`<div class="row"><div class="yr">${x.yr}</div><div><div class="role">${x.role}</div><div class="co">${x.co}</div><div class="desc">${x.desc}</div></div></div>`).join("")}</div>`;
  if(app==="devis")return devisHTML();
  if(app==="reglages"){const curwp=PREF.get("wp","meandres"),curac=PREF.get("accent","blue"),sndOn=PREF.get("muted","0")!=="1",crtOn=PREF.get("crt","0")==="1",clearOn=PREF.get("clear","0")==="1";
    return `<div class="h-eyebrow">Réglages</div><h2 class="h-title" style="font-size:26px">Personnalisez<br>votre BomyOS.</h2>
    <div class="set-sec">Fond d'écran</div>
    <div class="wpgrid">${[["meandres","Méandres"],["aurora","Aurora"],["sunset","Crépuscule"],["ocean","Océan"],["forest","Forêt"],["mono","Minuit"]].map(([id,l])=>`<button class="wpthumb tw-${id}${curwp===id?' on':''}" data-wp="${id}" aria-label="Fond ${l}"><span>${l}</span></button>`).join("")}</div>
    <div class="set-sec">Couleur d'accentuation</div>
    <div class="acrow">${[["blue","#0a84ff"],["violet","#bf5af2"],["rose","#ff375f"],["orange","#ff9f0a"],["green","#30d158"],["lime","#c6ff4e"]].map(([id,c])=>`<button class="acdot${curac===id?' on':''}" data-accent="${id}" style="background:${c}" aria-label="Accent ${id}"></button>`).join("")}</div>
    <div class="set-sec">Général</div>
    <div class="setrow"><span>Icônes en verre</span><button class="sw${clearOn?' on':''}" data-tgl="clear" role="switch" aria-checked="${clearOn}" aria-label="Icônes en verre"><i></i></button></div>
    <div class="setrow"><span>Sons d'interface</span><button class="sw${sndOn?' on':''}" data-tgl="snd" role="switch" aria-checked="${sndOn}" aria-label="Sons"><i></i></button></div>
    <div class="setrow"><span>Effet CRT (rétro)</span><button class="sw${crtOn?' on':''}" data-tgl="crt" role="switch" aria-checked="${crtOn}" aria-label="CRT"><i></i></button></div>
    ${isMob()?"":`<div class="setrow"><span>Ordre du Dock et des icônes</span><button class="btn ghost" data-orderreset style="padding:6px 14px;font-size:13px;margin:0">Remettre par défaut</button></div>`}
    <p class="lede" style="font-size:12px;margin-top:16px;color:var(--dim)">Vos réglages sont mémorisés sur cet appareil.</p>
    <button class="btn ghost" data-setreset style="margin-top:8px">Réinitialiser</button>`;}
  if(app==="aide")return `<div class="h-eyebrow">Aide</div><h2 class="h-title" style="font-size:24px">Trucs & astuces<br>de BomyOS.</h2>
    <div class="chips" style="flex-direction:column;align-items:stretch;gap:9px;margin-top:16px">
      <span class="chip"><b>Ctrl + K</b> : rechercher et ouvrir n'importe quoi</span>
      <span class="chip"><b>Échap</b> : fermer la fenêtre active</span>
      <span class="chip"><b>Clic droit</b> sur le bureau : menu contextuel</span>
      <span class="chip"><b>Glisser</b> les icônes : réorganisez le bureau</span>
      <span class="chip"><b>Glisser</b> une icône du Dock : changez l'ordre (Alt + ← → au clavier)</span>
      <span class="chip"><b>Double-clic</b> sur une barre de titre : agrandir</span>
      <span class="chip"><b>Coin bas-droit</b> d'une fenêtre : redimensionner</span>
      <span class="chip"><b>⚙️ Réglages</b> : fond d'écran & couleurs, mémorisés</span>
      <span class="chip">👀 Il paraît qu'un <b>terminal</b> se cache quelque part…</span>
    </div>`;
  if(app==="messages")return `<div class="imsg"><div class="imsg-log"></div><div class="imsg-chips"></div></div>`;
  if(app==="photos"){const ph=[["/assets/shots/rois.jpg","Rois de France","project:rois"],["/assets/shots/lumina.jpg","Lumina Studio","project:lumina"],["/assets/shots/backrooms.jpg","Backrooms","project:backrooms"],["/assets/shots/bomyos.jpg","BomyOS","project:bomyos"]];
    return `<div class="h-eyebrow">Photothèque · ${ph.length} éléments</div><h2 class="h-title" style="font-size:24px;margin-bottom:16px">Mes réalisations.</h2>
    <div class="phgrid">${ph.map(([src,cap,go])=>`<button class="phitem" data-open="${go}" style="background-image:url('${src}')" aria-label="${cap}"><span>${cap}</span></button>`).join("")}</div>
    <p class="lede" style="font-size:12.5px;margin-top:14px;color:var(--dim)">Touchez une photo pour ouvrir le projet.</p>`;}
  if(app==="calc")return `<div class="calc"><div class="calc-d" data-cd>0</div><div class="calc-g">${["C","±","%","÷","7","8","9","×","4","5","6","−","1","2","3","+","0",",","="].map(k=>`<button data-calc="${k}" class="ck${["÷","×","−","+","="].includes(k)?" op":""}${["C","±","%"].includes(k)?" fn":""}${k==="0"?" z":""}" aria-label="${k}">${k}</button>`).join("")}</div></div>`;
  if(app==="plans")return `<div class="h-eyebrow">Zone d'intervention</div><h2 class="h-title" style="font-size:26px">Sedan, Troyes<br>& partout à distance.</h2>
    <div class="mapwrap"><svg viewBox="0 0 520 300" width="100%" style="display:block;background:#0d1420">
      <path d="M0 210 C90 180 150 240 260 215 S430 250 520 205 V300 H0 Z" fill="#0f2436"/>
      <path d="M-10 120 C120 90 240 150 380 110 S480 140 530 120" stroke="#233246" stroke-width="3" fill="none"/>
      <path d="M60 0 C90 90 70 200 110 300 M300 0 C280 110 330 210 310 300" stroke="#233246" stroke-width="3" fill="none"/>
      <circle cx="150" cy="90" r="34" style="fill:var(--acc);fill-opacity:.16" class="pin-pulse"/><circle cx="150" cy="90" r="7" style="fill:var(--acc)"/>
      <text x="150" y="62" text-anchor="middle" fill="#eef0ea" font-family="-apple-system,Inter,Arial" font-size="15" font-weight="600">Sedan</text>
      <circle cx="360" cy="205" r="34" fill="rgba(124,196,255,.12)" class="pin-pulse"/><circle cx="360" cy="205" r="7" fill="#7cc4ff"/>
      <text x="360" y="178" text-anchor="middle" fill="#eef0ea" font-family="-apple-system,Inter,Arial" font-size="15" font-weight="600">Troyes</text>
      <text x="152" y="132" text-anchor="middle" fill="#71757e" font-family="-apple-system,Inter,Arial" font-size="11">Charleville-Mézières à côté</text>
    </svg></div>
    <p class="lede">Basé à <b>Sedan</b>, en études à <b>Troyes</b>, je me déplace dans les Ardennes et l'Aube, et je travaille <b>à distance partout en France</b>.</p>
    <a class="btn" href="https://wa.me/33788021676" target="_blank" rel="noopener" style="margin-top:16px">Discuter de votre projet</a>`;
  if(app==="terminal")return `<div class="term"><div class="term-out" id="termOut">
      <div class="muted">BomyOS terminal · tape <span class="acc">help</span>.</div>
      <div><span class="p">jimmy@bomyos</span>:<span class="u">~</span>$ whoami</div>
      <div class="c">Jimmy Bomy · développeur web créatif (Sedan / Troyes)</div></div>
    <div class="term-line"><span class="p">jimmy@bomyos</span>:<span class="u">~</span>$&nbsp;<input class="term-in" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal"/></div></div>`;
  if(app==="services")return `<div class="h-eyebrow">Pour les commerces & indépendants</div><h2 class="h-title">Un site pro,<br>sans prise de tête.</h2>
    <p class="lede">Votre établissement mérite mieux qu'une page Facebook. Je crée des sites <b>simples, rapides et beaux</b>, et je m'occupe de tout.</p>
    <button class="btn" data-site="https://jimmybomy.fr/projets/demo-boulangerie/" data-title="Exemple · La Fournée de Sedan" style="margin-top:18px">Voir un exemple de site →</button>
    <div class="divider"></div><div class="h-eyebrow">Ce que je propose</div>
    <div class="chips" style="flex-direction:column;align-items:stretch;gap:10px;margin:14px 0 6px">
      <span class="chip"><b>Création de sites vitrines</b> : présentation, horaires, photos, itinéraire ; réservation ou click & collect en option</span>
      <span class="chip"><b>Refonte</b> : votre site vieillissant remis au goût du jour</span>
      <span class="chip"><b>Maintenance</b> : mises à jour, sauvegardes, petites modifications : votre site reste à jour et en sécurité</span>
      <span class="chip"><b>Hébergement</b> : mise en ligne et hébergement pris en charge, zéro technique pour vous</span>
    </div>
    <button class="btn" data-open="contact" data-focus="cf">Demander un devis gratuit</button>
    <div class="divider"></div><div class="h-eyebrow">Comment ça se passe</div>
    <div class="tl" style="margin-top:6px">
      <div class="row"><div class="yr">1</div><div><div class="role">On échange 15 minutes</div><div class="desc">Vous me dites ce qu'il vous faut, par téléphone, WhatsApp ou autour d'un café.</div></div></div>
      <div class="row"><div class="yr">2</div><div><div class="role">Maquette gratuite</div><div class="desc">Je vous montre à quoi ressemblerait VOTRE site. Sans engagement.</div></div></div>
      <div class="row"><div class="yr">3</div><div><div class="role">Ajustements & mise en ligne</div><div class="desc">On affine ensemble, puis je mets en ligne. Le nom de domaine est à votre nom : il vous appartient.</div></div></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a class="btn" href="https://wa.me/33788021676" target="_blank" rel="noopener">WhatsApp <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg></a>
      <a class="btn ghost" href="tel:${TEL}">${PHONE}</a></div>`;
  if(app==="contact")return `<div class="h-eyebrow">Contact</div><h2 class="h-title">Travaillons<br>ensemble.</h2>
    <p class="lede">Un projet, une question, une demande de devis gratuit ? Je réponds vite.</p>
    <form class="cform" id="cf" data-cform novalidate>
      <label class="cf-l" for="cf-name">Nom</label><input id="cf-name" name="name" class="dv-in" autocomplete="name" maxlength="120" placeholder="Votre nom">
      <label class="cf-l" for="cf-email">E-mail *</label><input id="cf-email" name="email" type="email" class="dv-in" autocomplete="email" maxlength="160" required placeholder="vous@exemple.fr">
      <label class="cf-l" for="cf-msg">Message *</label><textarea id="cf-msg" name="message" class="dv-in" rows="4" maxlength="2000" required placeholder="Votre projet en quelques mots : activité, besoin, délai…"></textarea>
      <input name="website" class="dv-hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      ${LEGAL_LINKS}
      <button class="btn" type="submit" style="margin-top:10px">Envoyer le message ›</button>
      <div class="cf-status lede" role="status" style="font-size:13px;margin-top:8px"></div>
    </form>
    <div class="divider"></div><div class="h-eyebrow">Ou directement</div>
    <div class="chips" style="flex-direction:column;align-items:stretch;gap:10px;margin:14px 0 6px">
      <a class="chip" href="mailto:${EMAIL}" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">Email</span><span>${EMAIL}</span></a>
      <span class="chip" style="display:flex;justify-content:space-between;align-items:center;gap:10px"><span style="color:var(--dim)">Tél. / WhatsApp</span><span><a href="tel:${TEL}" style="color:inherit">${PHONE}</a> · <a href="https://wa.me/33788021676" target="_blank" rel="noopener" style="color:inherit">WhatsApp</a></span></span>
      <span class="chip" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">Localisation</span><span>Sedan / Troyes</span></span>
      <a class="chip" href="https://github.com/JimmyBomy" target="_blank" rel="noopener" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">GitHub</span><span>@JimmyBomy</span></a>
      <a class="chip" href="https://www.linkedin.com/in/jimmy-bomy-1037453a8/" target="_blank" rel="noopener" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">LinkedIn</span><span>Jimmy Bomy</span></a>
      <a class="chip" href="https://www.twitch.tv/jimmyxetv" target="_blank" rel="noopener" style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--dim)">Twitch</span><span>jimmyxetv · 26 000+ abonnés</span></a>
    </div>
    <a class="btn" href="mailto:${EMAIL}">Écrire un mail <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>`;
  if(app==="cv")return `<div class="pdf"><h1>Jimmy Bomy</h1><div class="role">Développeur web créatif · BUT MMI (Troyes) · Sedan</div>
    <div class="sec">Formation</div><div class="li"><span><b>BUT MMI</b> : IUT de Troyes · <span class="muted">18,1/20 en développement web</span></span><span class="muted">depuis 2025</span></div><div class="li"><span><b>Baccalauréat général</b> : Lycée Mabillon</span><span class="muted">2022-25</span></div>
    <div class="sec">Projets</div>${Object.values(PROJECTS).map(p=>`<div class="li"><span><b>${p.name}</b> : ${p.cat}</span><span class="muted">${p.year}</span></div>`).join("")}
    <div class="sec">Compétences</div><div class="li"><span>Back</span><span class="muted">PHP · MySQL · Node.js · Linux/Apache (VPS)</span></div><div class="li"><span>Front</span><span class="muted">JavaScript · HTML/CSS · HTML5 Canvas</span></div>
    <div class="sec">Contact</div><div class="li"><span>${EMAIL} · ${PHONE}</span><span class="muted">Sedan / Troyes</span></div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn" href="/cv-jimmy-bomy.pdf" target="_blank" rel="noopener">Télécharger le CV (PDF) ↓</a>
    <button class="btn ghost" onclick="window.print()" style="margin-top:24px">Imprimer</button></div>`;
  return "";
}
const titleFor=a=>a.startsWith("project:")?ALL[a.split(":")[1]].name:(APPS[a]?.title||a);

/* print CV */
document.getElementById("printCV").innerHTML=`<div class="cvp"><h1>Jimmy Bomy</h1>
  <div class="role">Développeur web créatif · Étudiant BUT MMI (Troyes) · Sedan</div>
  <div class="contact">${EMAIL} · ${PHONE} · jimmybomy.fr</div>
  <h2>Formation</h2><p><b>BUT MMI</b> : IUT de Troyes (depuis 2025). 1re année validée, 18,1/20 de moyenne en développement web. Baccalauréat général, Lycée Mabillon (2022-2025).</p>
  <h2>Projets</h2><ul>${Object.values(PROJECTS).map(p=>`<li><b>${p.name}</b> : ${p.desc.replace(/<[^>]+>/g,'')}</li>`).join("")}</ul>
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
  track("open:"+app);
  const hint=document.getElementById("hint");if(hint)hint.style.display="none";
  const st=wins[app];
  if(st){if(st.min){st.el.classList.remove("min");st.min=false;}bringFront(st.el);st.el.focus();snd.tap();return;}
  const pj=app.startsWith("project:")?ALL[app.slice(8)]:null;
  const meta=APPS[app]||(pj&&pj.game?{w:860,h:680}:pj&&pj.scenes?{w:960,h:720}:{w:560,h:460});
  const el=document.createElement("div");el.className="win";el.dataset.app=app;el.setAttribute("role","dialog");el.setAttribute("aria-label",titleFor(app));el.tabIndex=-1;
  const w=Math.min(meta.w||560,innerWidth-40),h=Math.min(meta.h||460,innerHeight-160);
  const n=Object.keys(wins).length;
  const left=Math.max(20,Math.min(innerWidth-w-20,innerWidth/2-w/2+(n*30-60)));
  const top=Math.max(56,innerHeight/2-h/2+(n*26-40));
  el.style.width=w+"px";el.style.height=h+"px";el.style.left=left+"px";el.style.top=top+"px";
  el.innerHTML=`<div class="win-bar"><div class="lights">
      <button class="c" data-act="close" aria-label="Fermer ${titleFor(app)}"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2l6 6M8 2l-6 6"/></svg></button>
      <button class="mi" data-act="min" aria-label="Réduire ${titleFor(app)}"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h6"/></svg></button>
      <button class="fu" data-act="max" aria-label="Agrandir ${titleFor(app)}"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 1.8h2.4v2.4M4.2 8.2H1.8V5.8M8 2 5.7 4.3M2 8l2.3-2.3"/></svg></button></div>
      <div class="wtitle">${titleIcon(app)}${titleFor(app)}</div></div>
    <div class="win-body" tabindex="0">${content(app)}</div><div class="rz" aria-hidden="true"></div>`;
  desktop.appendChild(el);wins[app]={el,min:false,max:false,prev:null};
  requestAnimationFrame(()=>{el.classList.add("open");bringFront(el);el.focus();});
  markDock(app,true);snd.open();
  el.addEventListener("mousedown",()=>bringFront(el));
  el.querySelector('[data-act="close"]').addEventListener("click",e=>{e.stopPropagation();closeApp(app);});
  el.querySelector('[data-act="min"]').addEventListener("click",e=>{e.stopPropagation();minApp(app);});
  el.querySelector('[data-act="max"]').addEventListener("click",e=>{e.stopPropagation();maxApp(app);});
  el.querySelector(".win-body").addEventListener("click",e=>{const t=e.target.closest("[data-open]");if(t){e.preventDefault();openApp(t.getAttribute("data-open"));focusLater(t.dataset.focus);return;}const s=e.target.closest("[data-site]");if(s){openSite(s.getAttribute("data-site"),s.getAttribute("data-title"));return;}const dv=e.target.closest("[data-devis]");if(dv){devisAct(dv.getAttribute("data-devis"),el.querySelector(".win-body"));return;}
    const mg=e.target.closest("[data-msg]");if(mg){msgAct(mg.getAttribute("data-msg"),el.querySelector(".imsg"));return;}
    const ck=e.target.closest("[data-calc]");if(ck){calcAct(ck.getAttribute("data-calc"),el.querySelector(".calc"));return;}
    settingsAct(e.target,el.querySelector(".win-body"));});
  if(app==="messages")setTimeout(()=>msgBoot(el.querySelector(".imsg")),150);
  if(app==="terminal")wireTerminal(el);
  if(LEGAL_URL[app])loadLegal(el);
  wireStory(el.querySelector(".win-body"));
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
  const menh=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menh'))||36;
  // taille "fenêtrée" mémorisée (pour le bouton restaurer), mais on ouvre maximisé
  const w=Math.min(1200,innerWidth-30),h=Math.min(820,innerHeight-100);
  const prev={l:((innerWidth-w)/2)+"px",t:"46px",w:w+"px",h:h+"px"};
  el.style.left="12px";el.style.top=(menh+8)+"px";el.style.width=(innerWidth-24)+"px";el.style.height=(innerHeight-menh-8-90)+"px";
  el.classList.add("max");
  el.innerHTML='<div class="win-bar"><div class="lights">'
    +'<button class="c" data-act="close" aria-label="Fermer"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2l6 6M8 2l-6 6"/></svg></button>'
    +'<button class="mi" data-act="min" aria-label="Réduire"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h6"/></svg></button>'
    +'<button class="fu" data-act="max" aria-label="Agrandir"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 1.8h2.4v2.4M4.2 8.2H1.8V5.8M8 2 5.7 4.3M2 8l2.3-2.3"/></svg></button></div>'
    +'<div class="wtitle"><span style="font-family:JetBrains Mono,monospace;font-size:11.5px;color:var(--acc2);background:rgba(255,255,255,.07);border:1px solid var(--glass-brd);padding:3px 11px;border-radius:100px">bomy://'+title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+'</span></div>'
    +'<button class="fsbtn" data-act="full" title="Plein écran" aria-label="Plein écran"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4"/></svg>Plein écran</button>'
    +'<button class="backportf" data-act="close">‹ Retour au portfolio</button></div>'
    +'<iframe class="win-iframe" src="'+url+'" title="'+title+'" loading="lazy"></iframe><div class="rz" aria-hidden="true"></div>';
  desktop.appendChild(el);wins[key]={el,min:false,max:true,prev:prev};
  requestAnimationFrame(()=>{el.classList.add("open");bringFront(el);el.focus();});snd.open();
  el.addEventListener("mousedown",()=>bringFront(el));
  el.querySelectorAll('[data-act="close"]').forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();if(document.fullscreenElement)document.exitFullscreen();closeApp(key);}));
  el.querySelector('[data-act="min"]').addEventListener("click",e=>{e.stopPropagation();minApp(key);});
  el.querySelector('[data-act="max"]').addEventListener("click",e=>{e.stopPropagation();maxApp(key);});
  el.querySelector('[data-act="full"]').addEventListener("click",e=>{e.stopPropagation();toggleFull(el);});
  makeDraggable(el,key);makeResizable(el,key);
  // ouverture directe en vrai plein écran (déclenché par le clic utilisateur)
  if(!isMob()){try{const rq=el.requestFullscreen||el.webkitRequestFullscreen;if(rq){const pr=rq.call(el);if(pr&&pr.catch)pr.catch(()=>{});}}catch(e){}}
}
function toggleFull(el){
  if(document.fullscreenElement){document.exitFullscreen&&document.exitFullscreen();return;}
  const req=el.requestFullscreen||el.webkitRequestFullscreen;
  if(req)req.call(el);snd.tap();
}
addEventListener("fullscreenchange",()=>{
  const on=!!document.fullscreenElement;const b=document.querySelector('.fsbtn');
  document.querySelectorAll('.fsbtn').forEach(x=>x.classList.toggle('on',on&&document.fullscreenElement.contains(x)));
});

/* ICONS + DOCK */
/* icônes « Méandres », partagées par le bureau, le Dock, le mobile et les barres de titre :
   un pictogramme au trait (.w) avec une courbe en couleur (.h), sur une tuile sombre traversée de courbes de niveau */
const MHUE={projets:"#4d94ff",labs:"#a57bff",services:"#ffc857",devis:"#2ed3e6",messages:"#b9ef4f",photos:"#ff8274",contact:"#2ed3e6",cv:"#ff8274",reglages:"#aeb7dc",gh:"#e8ebff",li:"#4d94ff",plans:"#b9ef4f",calc:"#a57bff",apropos:"#4d94ff",parcours:"#ffc857",doc:"#aeb7dc",terminal:"#b9ef4f"};
const MGLYPH={
  projets:'<path class="w" d="M3.5 8.2V7a2 2 0 0 1 2-2h3.6l2 2.2h7.4a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V8.2z"/><path class="h" d="M7 14.2c1.6-1.6 3.4-1.6 5 0s3.4 1.6 5 0"/>',
  labs:'<path class="w" d="M9.5 3.5h5M10.3 3.5v5.3L5.6 16.6a2.6 2.6 0 0 0 2.2 3.9h8.4a2.6 2.6 0 0 0 2.2-3.9l-4.7-7.8V3.5"/><path class="h" d="M7.6 15.4c1.5-1.2 2.9-1.2 4.4 0s2.9 1.2 4.4 0"/>',
  services:'<path class="w" d="M5.2 12.4V19h13.6v-6.6M10 19v-4h4v4M4.2 8.2 5.6 5h12.8l1.4 3.2"/><path class="h" d="M4.2 8.2c0 1.6 1.2 2.6 2.6 2.6s2.6-1 2.6-2.6c0 1.6 1.2 2.6 2.6 2.6s2.6-1 2.6-2.6c0 1.6 1.2 2.6 2.6 2.6s2.6-1 2.6-2.6"/>',
  devis:'<path class="w" d="M6.5 19.6V4.5h11v15.1M14.4 8.7a3 3 0 1 0 0 4.9M9.2 10.3h3.3M9.2 12h3.3"/><path class="h" d="M6.5 19.6c.9-1.3 1.8-1.3 2.75 0s1.85 1.3 2.75 0 1.8-1.3 2.75 0 1.85 1.3 2.75 0"/>',
  messages:'<path class="w" d="M12 4.5c4.7 0 8.5 3.1 8.5 7s-3.8 7-8.5 7c-1 0-2-.1-2.9-.4L5 19.8l1-3.3c-1.6-1.2-2.5-3-2.5-5 0-3.9 3.8-7 8.5-7z"/><path class="h" d="M8 11.6c1.3-1.4 2.7-1.4 4 0s2.7 1.4 4 0"/>',
  photos:'<path class="w" d="M5.5 5h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><circle class="f" cx="8.4" cy="9.2" r="1.35"/><path class="h" d="M3.9 16.2c2.1-3.6 3.9-4.4 5.5-2.6 1.4 1.6 2.4 1.4 3.6-.4 1.8-2.6 4-2.4 7.1 1.3"/>',
  contact:'<path class="w" d="M5.5 5.5h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/><path class="h" d="M4.3 7.8c2.4 2.4 4.9 5 7.7 5s5.3-2.6 7.7-5"/>',
  cv:'<path class="w" d="M7.5 3.5H14l4 4v11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5zM14 3.5v4h4M9 11h6M9 13.8h3.6"/><path class="h" d="M9 17.3c1-1.3 2-1.3 3 0s2 1.3 3 0"/>',
  reglages:'<path class="w" d="M4 8h8.8M18.2 8H20M4 16h1.8M11.2 16H20"/><circle class="w" cx="15.5" cy="8" r="2.5"/><circle class="h" cx="8.5" cy="16" r="2.5"/>',
  gh:'<path class="f" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.75c-2.9.63-3.52-1.4-3.52-1.4-.47-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.07-2.8-.1-.26-.46-1.32.1-2.75 0 0 .88-.28 2.88 1.07a10 10 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.56 1.43.2 2.49.1 2.75.67.73 1.07 1.66 1.07 2.8 0 4-2.45 4.9-4.78 5.16.38.32.72.96.72 1.94v2.88c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5z"/>',
  li:'<path class="f" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.75 2.5 4.75 5.9V21H19v-5.5c0-1.3-.02-3-1.87-3-1.87 0-2.16 1.44-2.16 2.92V21H11V9z"/>',
  plans:'<path class="w" d="M12 14.6s4.2-3.7 4.2-6.9a4.2 4.2 0 0 0-8.4 0c0 3.2 4.2 6.9 4.2 6.9z"/><circle class="f" cx="12" cy="7.7" r="1.3"/><path class="h" d="M7.6 15.3c-1.9.5-3.1 1.3-3.1 2.3 0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3c0-1-1.2-1.8-3.1-2.3"/>',
  calc:'<path class="w" d="M7 3.5h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z"/><path class="h" d="M8.3 7.7c1.2-1.1 2.5-1.1 3.7 0s2.5 1.1 3.7 0"/><circle class="f" cx="8.8" cy="12.3" r="1.05"/><circle class="f" cx="12" cy="12.3" r="1.05"/><circle class="f" cx="15.2" cy="12.3" r="1.05"/><circle class="f" cx="8.8" cy="16.3" r="1.05"/><circle class="f" cx="12" cy="16.3" r="1.05"/><circle class="f" cx="15.2" cy="16.3" r="1.05"/>',
  apropos:'<circle class="w" cx="12" cy="8.3" r="3.5"/><path class="h" d="M4.8 19.6c1.2-3.6 4-5.4 7.2-5.4s6 1.8 7.2 5.4"/>',
  parcours:'<circle class="w" cx="5.9" cy="18" r="1.9"/><circle class="w" cx="18.1" cy="4.8" r="1.9"/><path class="h" d="M7.9 18h6.3a3.3 3.3 0 0 0 0-6.6H9.8a3.3 3.3 0 0 1 0-6.6h6.3"/>',
  doc:'<path class="w" d="M7.5 3.5H14l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5zM14 3.5v4h4M9 16.5h4"/><path class="h" d="M9 12.3c1-1.3 2-1.3 3 0s2 1.3 3 0"/>',
  terminal:'<path class="w" d="M5.5 5h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM7.3 9.5l2.7 2.5-2.7 2.5"/><path class="h" d="M12 15c.8-.9 1.7-.9 2.5 0s1.7.9 2.5 0"/>'};
const MTOPO='<svg class="topo" viewBox="0 0 54 54" aria-hidden="true"><path d="M54 20c-11-2-21 5-25 15s-3 13-3 19"/><path d="M54 31c-7-1-13 3-16 9s-2 9-2 14"/><path d="M54 42c-4 0-6 2-8 5s-1 5-1 7"/><path d="M0 15c6 2 11-2 14-8s5-7 8-7"/></svg>';
const MIDS=Object.keys(MGLYPH);
function appIcon(id){return `<span class="ic sq mk" style="--h:${MHUE[id]};--r:${MIDS.indexOf(id)%4*90}deg">${MTOPO}<svg class="g" viewBox="0 0 24 24" aria-hidden="true">${MGLYPH[id]}</svg></span>`;}
function titleIcon(app){const id=app.startsWith("project:")?"projets":MGLYPH[app]?app:APPS[app]&&APPS[app].icon==="terminal"?"terminal":"doc";
  return `<svg class="g tg" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style="--h:${MHUE[id]}">${MGLYPH[id]}</svg>`;}
const DESK_ICONS=[["projets","Projets"],["labs","Labs"],["photos","Photos"],["messages","Messages"],["services","Services"],["devis","Devis express"],["plans","Plans"],["calc","Calculette"],["apropos","À propos"],["parcours","Parcours"],["cv","CV"],["reglages","Réglages"]];
document.getElementById("dicons").innerHTML=DESK_ICONS.map(([id,l])=>`<button class="dicon" data-app="${id}" aria-label="Ouvrir ${l}">${appIcon(id)}<span class="lbl">${l}</span></button>`).join("");
/* icônes du bureau : on les déplace librement, elles se posent sur la case libre la plus proche (jamais deux par case) */
const deskGrid={
  icons:()=>[...document.querySelectorAll(".dicon")],free:false,
  cell(){const ic=this.icons()[0],menh=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--menh"))||36;
    const pw=ic.offsetWidth+6,ph=ic.offsetHeight+6,x0=16,y0=menh+18;
    return{pw,ph,x0,y0,cols:Math.max(1,Math.floor((innerWidth-x0)/pw)),rows:Math.max(1,Math.floor((innerHeight-y0-104)/ph))};},
  freeze(){if(this.free)return;const rects=this.icons().map(ic=>ic.getBoundingClientRect());
    this.icons().forEach((ic,i)=>{ic.style.position="fixed";ic.style.margin=0;ic.style.left=rects[i].left+"px";ic.style.top=rects[i].top+"px";});this.free=true;},
  reset(){this.icons().forEach(ic=>{["position","margin","left","top","zIndex","transition"].forEach(p=>ic.style[p]="");});this.free=false;},
  drop(ic){const g=this.cell(),at=el=>[Math.round((parseFloat(el.style.left)-g.x0)/g.pw),Math.round((parseFloat(el.style.top)-g.y0)/g.ph)];
    const taken=new Set(this.icons().filter(o=>o!==ic).map(o=>at(o).join(","))),x=parseFloat(ic.style.left),y=parseFloat(ic.style.top);
    let best=null,bd=Infinity;
    for(let c=0;c<g.cols;c++)for(let r=0;r<g.rows;r++){if(taken.has(c+","+r))continue;
      const d=Math.hypot(g.x0+c*g.pw-x,g.y0+r*g.ph-y);if(d<bd){bd=d;best=[c,r];}}
    if(!best){this.reset();return;}
    ic.style.transition="left .2s cubic-bezier(.2,.9,.3,1),top .2s cubic-bezier(.2,.9,.3,1)";
    ic.style.left=g.x0+best[0]*g.pw+"px";ic.style.top=g.y0+best[1]*g.ph+"px";
    setTimeout(()=>{ic.style.transition="";ic.style.zIndex="";},220);}};
addEventListener("resize",()=>deskGrid.reset());
document.querySelectorAll(".dicon").forEach(ic=>{
  let sx,sy,ox,oy,drag=false,moved=false;
  ic.addEventListener("pointerdown",e=>{drag=true;moved=false;sx=e.clientX;sy=e.clientY;});
  ic.addEventListener("pointermove",e=>{if(!drag)return;
    if(!moved&&Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy)>7){moved=true;deskGrid.freeze();ic.setPointerCapture(e.pointerId);
      ox=parseFloat(ic.style.left);oy=parseFloat(ic.style.top);ic.style.transition="none";ic.style.zIndex=60;}
    if(moved){ic.style.left=Math.max(0,Math.min(innerWidth-ic.offsetWidth,ox+e.clientX-sx))+"px";ic.style.top=Math.max(38,Math.min(innerHeight-ic.offsetHeight,oy+e.clientY-sy))+"px";}});
  const up=()=>{if(drag&&moved)deskGrid.drop(ic);drag=false;};
  ic.addEventListener("pointerup",up);ic.addEventListener("pointercancel",up);
  ic.addEventListener("click",()=>{if(moved){moved=false;return;}
    document.querySelectorAll(".dicon").forEach(x=>x.classList.remove("sel"));ic.classList.add("sel");openApp(ic.dataset.app);});
  ic.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openApp(ic.dataset.app);}});});
const DOCK=[["projets","Projets","folder"],["labs","Labs","labs"],["services","Services","services"],["devis","Devis express","devis"],["messages","Messages","messages"],["photos","Photos","photos"],["contact","Contact","mail"],["cv","CV","pdf"],["--","",""],["reglages","Réglages","gear"],["gh","GitHub","gh","https://github.com/JimmyBomy"],["li","LinkedIn","li","https://www.linkedin.com/in/jimmy-bomy-1037453a8/"]];
const dock=document.getElementById("dock");
dock.innerHTML=DOCK.map(d=>{if(d[0]==="--")return '<div class="sep"></div>';const link=d[3]&&d[3].startsWith("http");
  return `<button data-id="${d[0]}" data-app="${link?"":d[0]}" ${link?`data-link="${d[3]}"`:""} aria-label="${d[1]}" aria-keyshortcuts="Alt+ArrowLeft Alt+ArrowRight"><span class="tip">${d[1]}</span>${appIcon(d[0])}<span class="run" data-run="${d[0]}"></span></button>`;}).join("");
dock.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{if(dockOrder.justDragged){dockOrder.justDragged=false;return;}if(b.dataset.link){window.open(b.dataset.link,"_blank","noopener");return;}if(b.dataset.app)openApp(b.dataset.app);}));
function markDock(app,on){const r=dock.querySelector(`[data-run="${app}"]`);if(r)r.parentElement.classList.toggle("running",on);}
/* Dock réorganisable : on glisse une icône (ou Alt + flèches au clavier), l'ordre est gardé sur l'appareil */
const dockOrder={
  ids:DOCK.filter(d=>d[0]!=="--").map(d=>d[0]),sepAt:DOCK.findIndex(d=>d[0]==="--"),dragging:false,justDragged:false,
  btns:()=>[...dock.querySelectorAll("button")],
  place(list,keep){const sep=dock.querySelector(".sep"),full=list.slice();if(sep)full.splice(this.sepAt,0,sep);
    const k=keep?full.indexOf(keep):-1;
    full.forEach((x,i)=>{if(i<k)dock.insertBefore(x,keep);else if(i>k)dock.appendChild(x);});},
  move(el,to){const list=this.btns(),before=new Map(list.map(b=>[b,b.offsetLeft]));
    list.splice(list.indexOf(el),1);list.splice(to,0,el);this.place(list,el);
    list.forEach(b=>{if(b===el)return;const d=before.get(b)-b.offsetLeft;if(!d||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
      b.style.transition="none";b.style.transform=`translateX(${d}px)`;b.offsetWidth;b.style.transition="";b.style.transform="";});},
  save(){try{localStorage.setItem("bomyos-dock",this.btns().map(b=>b.dataset.id).join(","))}catch(e){}},
  load(){let saved=[];try{saved=(localStorage.getItem("bomyos-dock")||"").split(",").filter(Boolean)}catch(e){}
    if(saved.length!==this.ids.length||!this.ids.every(id=>saved.includes(id)))return;
    this.place(saved.map(id=>dock.querySelector(`button[data-id="${id}"]`)));},
  reset(){try{localStorage.removeItem("bomyos-dock")}catch(e){}this.place(this.ids.map(id=>dock.querySelector(`button[data-id="${id}"]`)));},
  say(el){const live=document.getElementById("dockLive"),list=this.btns();if(live)live.textContent=el.getAttribute("aria-label")+", "+T("position")+" "+(list.indexOf(el)+1)+" / "+list.length;}};
dockOrder.load();
dock.insertAdjacentHTML("afterend",'<div id="dockLive" class="sr-only" role="status" aria-live="polite"></div>');
dockOrder.btns().forEach(b=>{
  let sx=0,sl=0,down=false,moved=false;
  b.addEventListener("pointerdown",e=>{if(e.button)return;down=true;moved=false;sx=e.clientX;sl=b.offsetLeft;});
  b.addEventListener("pointermove",e=>{if(!down)return;
    if(!moved){if(Math.abs(e.clientX-sx)<8)return;moved=true;dockOrder.dragging=true;b.setPointerCapture(e.pointerId);dock.classList.add("sorting");b.classList.add("drag");
      dockOrder.btns().forEach(x=>{if(x!==b)x.style.transform="";});}
    const tx=()=>e.clientX-sx+sl-b.offsetLeft,mid=b.offsetLeft+tx()+b.offsetWidth/2;
    const others=dockOrder.btns().filter(x=>x!==b),to=others.filter(x=>x.offsetLeft+x.offsetWidth/2<mid).length;
    if(to!==dockOrder.btns().indexOf(b))dockOrder.move(b,to);
    b.style.transform=`translate(${tx()}px,-10px) scale(1.12)`;});
  const up=()=>{if(!down)return;down=false;if(!moved)return;
    dockOrder.dragging=false;dockOrder.justDragged=true;setTimeout(()=>{dockOrder.justDragged=false;},0);
    dock.classList.remove("sorting");b.classList.remove("drag");b.style.transform="";dockOrder.save();dockOrder.say(b);snd.tap();};
  b.addEventListener("pointerup",up);b.addEventListener("pointercancel",up);
  b.addEventListener("keydown",e=>{if(!e.altKey||(e.key!=="ArrowLeft"&&e.key!=="ArrowRight"))return;e.preventDefault();
    const list=dockOrder.btns(),i=list.indexOf(b),to=Math.max(0,Math.min(list.length-1,i+(e.key==="ArrowLeft"?-1:1)));
    if(to===i)return;dockOrder.move(b,to);b.focus();dockOrder.save();dockOrder.say(b);snd.tap();});});
/* Dock façon macOS : magnification des icônes sous le curseur */
(function dockMagnify(){
  if(matchMedia("(pointer:coarse)").matches)return;      // pas sur tactile
  const RANGE=115,MAX=0.6;const items=()=>[...dock.querySelectorAll("button")];let raf=0,mx=0;
  dock.addEventListener("pointermove",e=>{if(dockOrder.dragging)return;mx=e.clientX;if(raf)return;raf=requestAnimationFrame(()=>{raf=0;
    items().forEach(b=>{const r=b.getBoundingClientRect(),cx=r.left+r.width/2,d=Math.abs(mx-cx);
      const k=d>=RANGE?0:(1-d/RANGE);const s=1+MAX*k*k;
      b.style.transform=`translateY(${(-(s-1)*26).toFixed(1)}px) scale(${s.toFixed(3)})`;});});});
  dock.addEventListener("pointerleave",()=>{if(dockOrder.dragging)return;items().forEach(b=>b.style.transform="");});
})();

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
  Fichier:[["Nouveau devis express","devis"],["Rechercher…  (Ctrl+K)","_cmdk"],["Imprimer le CV","_print"],["--"],["Verrouiller l'écran","_lock"],["Tout fermer","_close"]],
  Projets:[["Rois de France","project:rois"],["Lumina Studio","project:lumina"],["Backrooms","project:backrooms"],["Mandibules (jeu)","project:mandibules"],["claude-jauge","project:claudejauge"],["Le Nœud de Sillenbach","project:sillenbach"],["BomyOS (ce site)","project:bomyos"],["--"],["Dossier Labs","labs"],["Photothèque","photos"]],
  Aide:[["Visite guidée · 30 s","_tour"],["Raccourcis & astuces","aide"],["Me contacter","contact"],["Mentions légales","mentions"],["Politique de confidentialité","confidentialite"],["GitHub, @JimmyBomy","_gh"],["LinkedIn · Jimmy Bomy","_li"]]};
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
  if(v==="_lock"){showLock();return;}
  if(v==="_close"){Object.keys(wins).forEach(closeApp);return;}
  if(v==="_tour"){tour.start();return;}
  if(v==="_gh"){window.open("https://github.com/JimmyBomy","_blank","noopener");return;}
  if(v==="_li"){window.open("https://www.linkedin.com/in/jimmy-bomy-1037453a8/","_blank","noopener");return;}
  openApp(v);});
/* liens « Mentions légales / Confidentialité » du pied de page : fenêtre si JS, vraie page sinon */
document.querySelectorAll("[data-legal-open]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();const k=a.dataset.legalOpen;!isMob()?openApp(k):mopen(k,a);}));
/* CTA widgets bureau */
document.querySelectorAll("[data-wopen]").forEach(b=>b.addEventListener("click",()=>openApp(b.dataset.wopen)));
addEventListener("keydown",e=>{if(e.key==="Escape"){if(ctx.classList.contains("on")){hideCtx();return;}if(activeWin&&wins[activeWin]&&!wins[activeWin].min)closeApp(activeWin);}});

/* interface mobile : écran étroit, ou téléphone couché (peu de hauteur et écran tactile) */
const MOBQ=matchMedia("(max-width:720px),(max-height:500px) and (max-width:960px) and (pointer:coarse)");
function isMob(){return MOBQ.matches;}
/* MENUBAR buttons */
document.getElementById("year").textContent=new Date().getFullYear();
const sndBtn=document.getElementById("sndBtn"),sndIcon=document.getElementById("sndIcon"),crtBtn=document.getElementById("crtBtn");
/* préférences persistantes (Réglages) */
const PREF={get:(k,d)=>{try{return localStorage.getItem("bomyos-"+k)??d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem("bomyos-"+k,v)}catch(e){}}};
let wallSync=null;
function applyPrefs(){
  document.body.classList.remove("wp-meandres","wp-aurora","wp-sunset","wp-ocean","wp-forest","wp-mono","ac-cyan","ac-violet","ac-rose","ac-orange","ac-green","ac-lime");
  const wp=PREF.get("wp","meandres");document.body.classList.add("wp-"+wp);if(wallSync)wallSync();
  const ac=PREF.get("accent","blue");if(ac!=="blue")document.body.classList.add("ac-"+ac);
  muted=PREF.get("muted","0")==="1";
  sndBtn.setAttribute("aria-pressed",String(!muted));
  sndIcon.innerHTML=muted?'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l4 6M21 9l-4 6"/>':'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a3 3 0 0 1 0 6"/>';
  const crt=PREF.get("crt","0")==="1";document.body.classList.toggle("crt",crt);document.body.classList.toggle("icons-clear",PREF.get("clear","0")==="1");crtBtn.setAttribute("aria-pressed",String(crt));}
function settingsAct(t,container){
  const wp=t.closest("[data-wp]");if(wp){PREF.set("wp",wp.dataset.wp);applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  const ac=t.closest("[data-accent]");if(ac){PREF.set("accent",ac.dataset.accent);applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  const tg=t.closest("[data-tgl]");if(tg){if(tg.dataset.tgl==="snd")PREF.set("muted",muted?"0":"1");else if(tg.dataset.tgl==="clear")PREF.set("clear",PREF.get("clear","0")==="1"?"0":"1");else PREF.set("crt",PREF.get("crt","0")==="1"?"0":"1");
    applyPrefs();container.innerHTML=content("reglages");snd.tap();return true;}
  if(t.closest("[data-orderreset]")){dockOrder.reset();deskGrid.reset();snd.tap();return true;}
  if(t.closest("[data-setreset]")){["wp","accent","muted","crt","clear"].forEach(k=>{try{localStorage.removeItem("bomyos-"+k)}catch(e){}});applyPrefs();dockOrder.reset();deskGrid.reset();container.innerHTML=content("reglages");snd.tap();return true;}
  return false;}
applyPrefs();
sndBtn.addEventListener("click",()=>{PREF.set("muted",muted?"0":"1");applyPrefs();if(!muted)snd.tap();});
crtBtn.addEventListener("click",()=>{PREF.set("crt",PREF.get("crt","0")==="1"?"0":"1");applyPrefs();snd.tap();});
document.getElementById("contactBtn").addEventListener("click",()=>{if(isMob())mopen("contact");else openApp("contact");});
document.getElementById("skip").addEventListener("click",e=>{e.preventDefault();const t=[...document.querySelectorAll(".dicon,.mtile")].find(x=>x.offsetParent!==null);t?.focus();});

/* MOBILE, écran d'accueil iOS */
const MTILES=[["projets","Projets"],["labs","Labs"],["photos","Photos"],["messages","Messages"],["services","Services"],["devis","Devis"],["plans","Plans"],["calc","Calculette"],["apropos","À propos"],["parcours","Parcours"],["cv","CV"],["reglages","Réglages"]];
document.getElementById("mlaunch").innerHTML=MTILES.map(([id,l])=>`<button class="mtile" data-app="${id}" aria-label="Ouvrir ${l}">${appIcon(id)}<span class="lbl">${l}</span></button>`).join("");
document.getElementById("mdock").innerHTML=["projets","labs","contact","cv"].map(id=>`<button class="mtile" data-app="${id}" aria-label="Ouvrir ${titleFor(id)}">${appIcon(id)}</button>`).join("");
const msheet=document.getElementById("msheet"),msBody=document.getElementById("msheetBody");
const mobileEl=document.getElementById("mobile"),msTitle=document.getElementById("msheetTitle");
if(mobileEl)mobileEl.addEventListener("scroll",()=>document.body.classList.toggle("mscrolled",mobileEl.scrollTop>6),{passive:true});
function mopen(app,origin){
  track("open:"+app);
  msBody.innerHTML=content(app);msBody.scrollTop=0;msheet.scrollTop=0;msheet.dataset.app=app;
  msTitle.textContent=titleFor(app);
  // zoom depuis l'icône touchée
  if(origin&&origin.getBoundingClientRect){const r=origin.getBoundingClientRect();msheet.style.transformOrigin=`${r.left+r.width/2}px ${r.top+r.height/2}px`;}
  else msheet.style.transformOrigin="50% 42%";
  msheet.classList.add("on");mobileEl.classList.add("behind");snd.open();
  msBody.querySelectorAll("[data-open]").forEach(o=>o.addEventListener("click",e=>{e.preventDefault();mopen(o.getAttribute("data-open"),o);focusLater(o.dataset.focus);}));
  msBody.querySelectorAll("[data-site]").forEach(o=>o.addEventListener("click",()=>msite(o.getAttribute("data-site"),o.getAttribute("data-title"))));
  if(app==="devis")msBody.addEventListener("click",e=>{const dv=e.target.closest("[data-devis]");if(dv)devisAct(dv.getAttribute("data-devis"),msBody);});
  if(app==="reglages")msBody.addEventListener("click",e=>settingsAct(e.target,msBody));
  if(app==="messages"){setTimeout(()=>msgBoot(msBody.querySelector(".imsg")),200);
    msBody.addEventListener("click",e=>{const mg=e.target.closest("[data-msg]");if(mg)msgAct(mg.getAttribute("data-msg"),msBody.querySelector(".imsg"));});}
  if(app==="calc")msBody.addEventListener("click",e=>{const ck=e.target.closest("[data-calc]");if(ck)calcAct(ck.getAttribute("data-calc"),msBody.querySelector(".calc"));});
  if(LEGAL_URL[app])loadLegal(msBody);
  wireStory(msBody);
}
function msite(url,title){msheet.dataset.app="";msTitle.textContent=title;msBody.innerHTML='<iframe src="'+url+'" title="'+title+'" style="width:100%;height:calc(100vh - 96px);border:0;border-radius:12px;background:#fff"></iframe>';msheet.scrollTop=0;}
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
  document.getElementById("clock").textContent=d.toLocaleDateString(LOC,{weekday:"short",day:"2-digit",month:"short"})+"  "+d.toLocaleTimeString(LOC,{hour:"2-digit",minute:"2-digit"});
  const mc=document.getElementById("mclock");if(mc)mc.textContent=d.toLocaleTimeString(LOC,{hour:"numeric",minute:"2-digit"});
  /* l-time reste figé sur 9:41 (clin d'œil Apple) ; on n'actualise que la date */
  const ld=document.getElementById("ldate");if(ld)ld.textContent=d.toLocaleDateString(LOC,{weekday:"long",day:"numeric",month:"long"});
  const wh=document.getElementById("wgh");if(wh){const hh=(d.getHours()%12+d.getMinutes()/60)*30,mm=d.getMinutes()*6;
    wh.setAttribute("transform",`rotate(${hh} 50 50)`);document.getElementById("wgm").setAttribute("transform",`rotate(${mm} 50 50)`);
    document.getElementById("wgdate").textContent=d.toLocaleDateString(LOC,{weekday:"long",day:"numeric",month:"short"});}}
tick();setInterval(tick,10000);

/* BOOT */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* fond d'écran vivant « Méandres » : une carte de relief dessinée en WebGL, qui dérive lentement et se soulève sous le pointeur */
const wallfx=(function(){
  const cv=document.createElement("canvas");cv.id="wallfx";cv.setAttribute("aria-hidden","true");document.getElementById("desktop").prepend(cv);
  const FS=`#extension GL_OES_standard_derivatives : enable
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 r;uniform float t;uniform vec2 m;uniform float k;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*noise(p);p=p*2.02+vec2(17.1,9.2);a*=.5;}return s;}
vec3 ramp(float h){
  vec3 c0=vec3(.04,.04,.19),c1=vec3(.21,.12,.60),c2=vec3(.10,.38,.95),c3=vec3(.12,.74,.88),c4=vec3(.70,.96,.36);
  vec3 c=mix(c0,c1,smoothstep(.0,.36,h));
  c=mix(c,c2,smoothstep(.3,.58,h));
  c=mix(c,c3,smoothstep(.56,.8,h));
  c=mix(c,c4,smoothstep(.8,1.05,h));
  return c;}
void main(){
  vec2 p=(gl_FragCoord.xy-.5*r)/r.y;
  vec2 q=p*1.15+vec2(t*.012,-t*.008);
  vec2 w=vec2(fbm(q+vec2(0.,t*.02)),fbm(q+vec2(5.2,1.3)-vec2(t*.016,0.)));
  float h=fbm(q+1.6*w);
  vec2 d=p-m;h+=.16*exp(-dot(d,d)*7.);
  h=(h-.3)*2.3;
  float rev=smoothstep(0.,1.,k*2.4-length(p)*.9);
  h*=mix(.25,1.,rev);
  vec3 c=ramp(h);
  float n=h*14.;float f=abs(fract(n-.5)-.5)/max(fwidth(n),1e-4);
  float idx=mod(floor(n+.5),4.);
  float line=1.-smoothstep(0.,1.3,f);
  float major=step(idx,.5);
  vec3 lc=mix(vec3(.55,.80,1.),vec3(.78,1.,.31),smoothstep(.25,.7,h));
  c+=lc*line*mix(.16,.42,major)*rev;
  c*=1.-.32*dot(p,p)*.6;
  c*=mix(.0,1.,smoothstep(0.,.5,k));
  gl_FragColor=vec4(c,1.);}`;
  let gl=null,U={},ok=false,on=false,raf=0,last=0,tt=60,k=1,k0=0,kd=0,mx=9,my=9,px=9,py=9,seen=performance.now(),slow=0,frames=0,still=reduce;
  function init(){
    try{gl=cv.getContext("webgl",{antialias:false,alpha:false,powerPreference:"low-power"});}catch(e){gl=null;}
    if(!gl||!gl.getExtension("OES_standard_derivatives"))return false;
    const sh=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return gl.getShaderParameter(s,gl.COMPILE_STATUS)?s:null;};
    const vs=sh(gl.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}"),fs=sh(gl.FRAGMENT_SHADER,FS);
    if(!vs||!fs)return false;
    const pr=gl.createProgram();gl.attachShader(pr,vs);gl.attachShader(pr,fs);gl.linkProgram(pr);
    if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return false;
    gl.useProgram(pr);gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    const loc=gl.getAttribLocation(pr,"a");gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
    ["r","t","m","k"].forEach(n=>U[n]=gl.getUniformLocation(pr,n));
    cv.addEventListener("webglcontextlost",e=>{e.preventDefault();ok=false;stop();cv.classList.remove("on");});
    return true;}
  function size(){const w=innerWidth,h=innerHeight;let f=Math.min(devicePixelRatio||1,1.5);if(w*h*f*f>2.4e6)f=Math.sqrt(2.4e6/(w*h));
    cv.width=Math.max(2,Math.round(w*f));cv.height=Math.max(2,Math.round(h*f));gl.viewport(0,0,cv.width,cv.height);gl.uniform2f(U.r,cv.width,cv.height);}
  function draw(){gl.uniform1f(U.t,tt);gl.uniform2f(U.m,mx,my);gl.uniform1f(U.k,k);gl.drawArrays(gl.TRIANGLES,0,3);}
  function frame(now){raf=0;if(!on)return;
    const dt=now-last;
    if(dt>=30){last=now;tt+=Math.min(dt,100)/1000;mx+=(px-mx)*.07;my+=(py-my)*.07;
      if(kd){const u=Math.min(1,(now-k0)/kd);k=1-Math.pow(1-u,3);if(u>=1)kd=0;}
      draw();
      if(++frames>60){if(dt>80)slow++;if(frames>150){if(slow>30){still=true;k=1;kd=0;draw();stop();return;}frames=61;slow=0;}}}
    if(!kd&&now-seen>40000){stop();return;}
    raf=requestAnimationFrame(frame);}
  function start(){if(!ok||on||still)return;on=true;last=performance.now();frames=0;slow=0;raf=requestAnimationFrame(frame);}
  function stop(){on=false;if(raf)cancelAnimationFrame(raf);raf=0;}
  function sync(){const want=document.body.classList.contains("wp-meandres");
    if(want&&!gl)ok=init();
    cv.classList.toggle("on",want&&ok);
    if(want&&ok){size();draw();start();}else stop();}
  addEventListener("resize",()=>{if(ok&&cv.classList.contains("on")){size();draw();}});
  const wake=()=>{seen=performance.now();if(ok&&!on&&cv.classList.contains("on"))start();};
  addEventListener("pointermove",e=>{px=(e.clientX-innerWidth/2)/innerHeight;py=(innerHeight/2-e.clientY)/innerHeight;wake();},{passive:true});
  ["keydown","pointerdown","wheel"].forEach(ev=>addEventListener(ev,wake,{passive:true}));
  return{sync,dark(){if(still)return;k=0;kd=0;if(ok&&cv.classList.contains("on"))draw();},
    ignite(ms){if(still||!ok||!cv.classList.contains("on")){k=1;return;}k0=performance.now();kd=ms;seen=k0;start();},
    full(){k=1;kd=0;if(ok&&cv.classList.contains("on"))draw();}};
})();
wallSync=wallfx.sync;wallfx.sync();

/* ==== VISITE GUIDÉE : 30 secondes pendant lesquelles le vrai bureau se présente tout seul ==== */
const TOUR_ICON='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="18" r="2"/><circle cx="18" cy="4.5" r="2"/><path d="M7.2 18H14a3.4 3.4 0 0 0 0-6.8h-4a3.4 3.4 0 0 1 0-6.7h5.8"/></svg>';
const TOUR_STEPS=[
  {app:"apropos",ms:4000,txt:"Moi, c'est Jimmy : développeur web freelance et étudiant en BUT MMI à Troyes."},
  {app:"projets",ms:4000,txt:"Mes projets sont rangés ici : sites clients, jeux et outils, chacun avec sa fiche."},
  {app:"project:amitie",from:"projets",scroll:true,ms:9000,txt:"Un projet client : Amitié Artisan, une plateforme reprise à l'arrêt et remise en ligne."},
  {app:"services",ms:4500,txt:"Pour les commerces et les indépendants : je crée leur site et je m'occupe de tout."},
  {app:"cv",ms:4000,txt:"Le CV : formation, projets et compétences sur une seule page."},
  {app:"contact",ms:4500,txt:"Un projet ou une alternance à proposer ? Écrivez-moi, je réponds en moins de 2 h."}];
const tour=(()=>{
  const N=TOUR_STEPS.length,TOTAL=TOUR_STEPS.reduce((a,s)=>a+s.ms,0),AIM_AT=reduce?0:260,OPEN_AT=reduce?300:900;
  const starts=[];TOUR_STEPS.reduce((a,s)=>{starts.push(a/TOTAL);return a+s.ms;},0);
  const svg=d=>`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const IC={prev:svg('<path d="M15 5l-7 7 7 7"/>'),next:svg('<path d="M9 5l7 7-7 7"/>'),pause:svg('<path d="M8.5 5v14M15.5 5v14"/>'),play:svg('<path d="M8 5l11 7-11 7z" fill="currentColor"/>'),again:svg('<path d="M4 12a8 8 0 1 0 2.6-5.9"/><path d="M4 4v4.6h4.6"/>'),quit:svg('<path d="M6 6l12 12M18 6 6 18"/>')};
  /* le tracé : un méandre par étape, plus long quand l'étape dure plus longtemps */
  const route=()=>{let d="M0 7";starts.forEach((f,k)=>{const x0=f*600,x1=(k<N-1?starts[k+1]:1)*600,n=Math.max(1,Math.round((x1-x0)/90)),w=(x1-x0)/n;
    for(let j=0;j<n;j++){const a=x0+j*w;d+=` Q${(a+w/4).toFixed(1)} -3 ${(a+w/2).toFixed(1)} 7 T${(a+w).toFixed(1)} 7`;}});return d;};
  let on=false,paused=false,done=false,i=0,t=0,last=0,raf=0,aimed=false,opened=false,sc=null,bar=null,cur=null,target=null,endT=0,cx=0,cy=0;
  const q=s=>bar.querySelector(s);
  const inBar=()=>bar&&bar.contains(document.activeElement)?document.activeElement:null;
  const refocus=(f,ms)=>{if(f)setTimeout(()=>{if(on&&bar.contains(f))f.focus({preventScroll:true});},ms||0);};
  const shown=app=>!isMob()?!!(wins[app]&&!wins[app].min&&!wins[app].el.classList.contains("closing")):msheet.classList.contains("on")&&msheet.dataset.app===app;
  const moveCur=(x,y)=>{cx=x;cy=y;cur.style.transform=`translate(${x}px,${y}px)`;};
  function find(s,keep){let el;
    if(keep)el=(!isMob()?wins[keep].el:msBody).querySelector(`[data-open="${s.app}"]`);
    else if(!isMob())el=s.app==="contact"?document.getElementById("contactBtn"):document.querySelector(`.dicon[data-app="${s.app}"]`);
    else el=s.app==="contact"?document.getElementById("mContact"):document.querySelector(`#mlaunch .mtile[data-app="${s.app}"]`);
    if(!el||!el.getClientRects().length)return null;
    if(keep||isMob())el.scrollIntoView({block:"center",behavior:"instant"});
    const r=el.getBoundingClientRect();
    return r.bottom<0||r.top>innerHeight||r.right<0||r.left>innerWidth?null:el;}
  function aim(s){aimed=true;const keep=s.from&&shown(s.from)?s.from:null;target=reduce?null:find(s,keep);
    if(!target){cur.classList.remove("on");return;}
    const r=target.getBoundingClientRect();
    if(!cur.classList.contains("on")){const b=bar.getBoundingClientRect();cur.style.transition="none";moveCur(cx||b.left+b.width/2,cy||b.top);cur.offsetWidth;cur.style.transition="";cur.classList.add("on");}
    moveCur(r.left+r.width/2,r.top+Math.min(r.height/2,60));}
  function open(s){opened=true;const f=inBar();
    if(target){cur.classList.add("tap");setTimeout(()=>{if(cur)cur.classList.remove("tap","on");},520);
      if(target.classList.contains("dicon")){document.querySelectorAll(".dicon").forEach(x=>x.classList.remove("sel"));target.classList.add("sel");}}
    if(!isMob()){openApp(s.app);if(s.from&&shown(s.from))closeApp(s.from);}else mopen(s.app,target||undefined);
    target=null;refocus(f,90);}
  function scrollIt(s){
    if(!sc){const root=!isMob()?wins[s.app]&&wins[s.app].el.querySelector(".win-body"):msheet;if(!root)return;
      const figs=root.querySelector(".st-figs"),max=root.scrollHeight-root.clientHeight;
      const end=figs?figs.getBoundingClientRect().top-root.getBoundingClientRect().top+root.scrollTop-root.clientHeight*.3:max;
      sc={el:root,end:Math.max(0,Math.min(max,end))};}
    const a=OPEN_AT+1700,b=s.ms-900,p=Math.max(0,Math.min(1,(t-a)/(b-a)));
    sc.el.scrollTop=sc.end*(reduce?Math.floor(p*3.999)/3:p*p*(3-2*p));}
  function draw(){const p=done?1:(starts[i]*TOTAL+Math.min(t,TOUR_STEPS[i].ms))/TOTAL;
    q(".r1").style.clipPath=`inset(-6px ${((1-p)*100).toFixed(2)}% -6px 0)`;
    bar.querySelectorAll(".tour-route i").forEach((d,k)=>{d.className=done||k<i?"ok":k===i?"at":"";});}
  function label(){q(".tour-n").textContent=done?"":(paused?"En pause · ":"")+(i+1)+" / "+N;
    const b=q('[data-t="play"]');b.innerHTML=done?IC.again:paused?IC.play:IC.pause;
    b.setAttribute("aria-label",done?"Revoir la visite":paused?"Reprendre la visite":"Mettre en pause");
    bar.classList.toggle("paused",paused);bar.classList.toggle("done",done);}
  function go(k){clearTimeout(endT);i=k;t=0;aimed=opened=done=false;sc=null;target=null;
    const s=TOUR_STEPS[i],keep=s.from&&shown(s.from)?s.from:null,f=inBar();
    q(".tour-txt").textContent=s.txt;label();
    if(!isMob())Object.keys(wins).forEach(a=>{if(a!==keep&&!wins[a].el.classList.contains("closing"))closeApp(a);});
    else if(!keep&&msheet.classList.contains("on"))mclose();
    refocus(f);draw();}
  function finish(){done=true;paused=false;q(".tour-txt").textContent="Fin de la visite. Le bureau est à vous.";label();draw();cur.classList.remove("on");
    track("tour:fin");endT=setTimeout(stop,9000);}
  function frame(now){raf=requestAnimationFrame(frame);const dt=Math.min(now-last,250);last=now;if(paused||done)return;
    t+=dt;const s=TOUR_STEPS[i];
    if(!aimed&&t>=AIM_AT)aim(s);
    if(!opened&&t>=OPEN_AT)open(s);
    if(s.scroll&&opened)scrollIt(s);
    draw();
    if(t>=s.ms){i<N-1?go(i+1):finish();}}
  function pause(){if(!on||paused||done)return;paused=true;cur.classList.remove("on");label();}
  function resume(){if(!paused)return;paused=false;if(opened&&!shown(TOUR_STEPS[i].app))go(i);else label();}
  function onDown(e){if(!bar.contains(e.target))pause();}
  function onKey(e){
    if(e.key==="Escape"){e.preventDefault();e.stopImmediatePropagation();stop();return;}
    if(bar.contains(e.target)){if(done)return;if(e.key==="ArrowRight"){e.preventDefault();act("next");}else if(e.key==="ArrowLeft"){e.preventDefault();act("prev");}return;}
    if(!["Tab","Shift","Control","Alt","Meta"].includes(e.key))pause();}
  function act(a){
    if(a==="quit")stop();
    else if(a==="play"){done?go(0):paused?resume():pause();}
    else if(a==="next"){paused=false;i<N-1?go(i+1):finish();}
    else if(a==="prev"){paused=false;go(Math.max(0,i-1));}}
  function start(){if(on)return;on=true;track("tour:debut");hideCtx();
    const n=document.getElementById("bnotif");if(n)n.remove();
    bar=document.createElement("div");bar.className="tour glass";bar.setAttribute("role","region");bar.setAttribute("aria-label","Visite guidée");
    bar.innerHTML=`<div class="tour-main"><div class="tour-k"><b>Visite guidée</b><span class="tour-n"></span></div>
      <p class="tour-txt" aria-live="polite"></p>
      <div class="tour-route" aria-hidden="true"><svg viewBox="0 0 600 14" preserveAspectRatio="none"><path class="r0" d="${route()}"/><path class="r1" d="${route()}"/></svg>${starts.map(f=>`<i style="left:${(f*100).toFixed(2)}%"></i>`).join("")}</div></div>
      <div class="tour-ctl"><button data-t="prev" aria-label="Étape précédente">${IC.prev}</button><button data-t="play"></button><button data-t="next" aria-label="Étape suivante">${IC.next}</button><button data-t="quit" aria-label="Quitter la visite">${IC.quit}</button></div>`;
    cur=document.createElement("div");cur.className="tour-cur";cur.setAttribute("aria-hidden","true");cx=cy=0;
    document.body.append(bar,cur);document.body.classList.add("touring");
    bar.addEventListener("click",e=>{const b=e.target.closest("[data-t]");if(b)act(b.dataset.t);});
    document.addEventListener("pointerdown",onDown,true);document.addEventListener("wheel",onDown,{capture:true,passive:true});addEventListener("keydown",onKey,true);
    paused=false;go(0);requestAnimationFrame(()=>{if(!on)return;bar.classList.add("on");q('[data-t="play"]').focus({preventScroll:true});});
    last=performance.now();raf=requestAnimationFrame(frame);}
  function stop(){if(!on)return;on=false;cancelAnimationFrame(raf);clearTimeout(endT);
    document.removeEventListener("pointerdown",onDown,true);document.removeEventListener("wheel",onDown,{capture:true});removeEventListener("keydown",onKey,true);
    document.body.classList.remove("touring");document.querySelectorAll(".dicon.sel").forEach(x=>x.classList.remove("sel"));const b=bar,c=cur;bar=cur=null;c.remove();b.classList.remove("on");setTimeout(()=>b.remove(),reduce?0:450);}
  MOBQ.addEventListener("change",stop);
  document.addEventListener("click",e=>{if(e.target.closest("[data-tour]")){e.preventDefault();start();}});
  return {start,stop};
})();

/* OUVERTURE : le nom en grand, le fond s'allume, puis le nom rejoint la barre pendant que le bureau se construit */
(function boot(){const b=document.getElementById("boot"),B=document.body;
    const skip=reduce||!!location.hash||(()=>{try{return sessionStorage.getItem("bintro")==="1"}catch(e){return false}})();
  if(skip){b.style.display="none";afterBoot();return;}
  try{sessionStorage.setItem("bintro","1")}catch(e){}
  const timers=[];let fin=false,started=false;
  const at=(ms,fn)=>timers.push(setTimeout(fn,ms));
  const words=[...b.querySelectorAll(".bi-name span")];
  B.classList.add("intro");wallfx.dark();
  document.querySelectorAll(".dicon,.dock>*,.dwidget,#mlaunch .mtile,.mdock .mtile").forEach(el=>{
    const sib=[...el.parentNode.children];el.style.setProperty("--i",sib.indexOf(el));});
  function end(){if(fin)return;fin=true;timers.forEach(clearTimeout);
    b.style.display="none";B.classList.remove("intro");wallfx.full();
    if(!started){started=true;afterBoot();}
    setTimeout(()=>B.classList.remove("intro-out"),1700);}
  function fly(){
    const target=document.getElementById(isMob()?"msigName":"sigName"),tw=[...target.children];
    const tfs=parseFloat(getComputedStyle(target).fontSize),sfs=parseFloat(getComputedStyle(words[0]).fontSize);
    const moves=words.map((w,i)=>{const s=w.getBoundingClientRect(),t=tw[i].getBoundingClientRect();
      return `translate(${t.left+t.width/2-s.left-s.width/2}px,${t.top+t.height/2-s.top-s.height/2}px) scale(${tfs/sfs})`;});
    B.classList.remove("intro");B.classList.add("intro-out","intro-fly");b.classList.add("fly");
    words.forEach((w,i)=>{w.style.transform=moves[i];});
    at(420,()=>{if(!started){started=true;afterBoot();}});
    at(800,()=>{B.classList.remove("intro-fly");end();});}
  function play(){if(fin)return;
    b.classList.add("in");
    at(1000,()=>{b.classList.add("lit");wallfx.ignite(1900);});
    at(1750,fly);}
  b.addEventListener("click",end);
  addEventListener("keydown",function key(){removeEventListener("keydown",key);end();});
  const ready=document.fonts&&document.fonts.load?document.fonts.load('800 80px "Bricolage Grotesque"',"Jimmy Bomy"):Promise.resolve();
  Promise.race([ready,new Promise(r=>setTimeout(r,700))]).then(()=>requestAnimationFrame(play),()=>play());})();
/* deep links : jimmybomy.fr/#services, #devis, #projet-rois… */
function handleHash(){
  const h=decodeURIComponent(location.hash.slice(1)).toLowerCase();if(!h)return false;
  if(h==="visite"||h==="tour"){tour.start();return true;}
  const alias={"a-propos":"apropos","demo":"projets","mentions-legales":"mentions"};let app=alias[h]||( APPS[h]?h:null );
  if(!app&&h.startsWith("projet-")){const id=h.slice(7);if(ALL[id])app="project:"+id;}
  if(!app)return false;
  if(!isMob())openApp(app);else mopen(app);return true;}
addEventListener("hashchange",handleHash);
function afterBoot(){
  const deep=handleHash();
  if(!deep&&!isMob()&&!Object.keys(wins).length)setTimeout(()=>openApp("apropos"),reduce?0:260);
  /* notification de conversion après 25 s (1 fois par session) */
  if(!sessionStorage.getItem("bnotif")){setTimeout(()=>{
    if(document.getElementById("bnotif")||document.body.classList.contains("touring"))return;sessionStorage.setItem("bnotif","1");
    const n=document.createElement("div");n.id="bnotif";n.className="osnotif";n.setAttribute("role","status");
    n.innerHTML='<span class="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg></span><div><b>Jimmy répond en moins de 2 h</b><br><span>Un projet de site ? Parlons-en.</span></div><button class="nx" aria-label="Fermer"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>';
    document.body.appendChild(n);requestAnimationFrame(()=>n.classList.add("on"));snd.tap();
    n.addEventListener("click",e=>{if(e.target.closest(".nx")){n.remove();return;}n.remove();!isMob()?openApp("contact"):mopen("contact");});
    setTimeout(()=>{n.classList.remove("on");setTimeout(()=>n.remove(),400);},12000);
  },25000);}
}
/* palette de commandes Ctrl+K (desktop) */
function initCmdk(){
  if(isMob())return;
  const wrap=document.createElement("div");wrap.className="cmdk";wrap.innerHTML='<div class="cmdk-box"><input placeholder="Ouvrir une app, un projet…" aria-label="Recherche"/><div class="cmdk-list"></div></div>';
  document.body.appendChild(wrap);
  const inp=wrap.querySelector("input"),list=wrap.querySelector(".cmdk-list");
  const items=[...Object.entries(APPS).map(([id,a])=>({t:T(a.title),go:()=>openApp(id)})),
    ...Object.entries(ALL).map(([id,p])=>({t:p.name+", "+T(p.cat),go:()=>openApp("project:"+id)})),
    {t:"Visite guidée · 30 s",go:()=>tour.start()},
    {t:"GitHub, @JimmyBomy",go:()=>window.open("https://github.com/JimmyBomy","_blank","noopener")},
    {t:"LinkedIn · Jimmy Bomy",go:()=>window.open("https://www.linkedin.com/in/jimmy-bomy-1037453a8/","_blank","noopener")}];
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
function showLock(){
  tour.stop();tick();
  document.getElementById("lhint").textContent=!isMob()?"Cliquez pour découvrir mon travail":"Glissez vers le haut pour découvrir mon travail";
  lock.classList.remove("off");
  if(!lock._wired){lock._wired=true;let sy=null;
    lock.addEventListener("touchstart",e=>{sy=e.touches[0].clientY;},{passive:true});
    lock.addEventListener("touchmove",e=>{if(sy!==null&&sy-e.touches[0].clientY>60)unlock();},{passive:true});
    lock.addEventListener("click",unlock);
    addEventListener("keydown",e=>{if(!lock.classList.contains("off"))unlock();});
    const notif=lock.querySelector(".l-notif");
    if(notif){notif.style.cursor="pointer";notif.setAttribute("role","button");notif.setAttribute("tabindex","0");
      notif.addEventListener("click",e=>{e.stopPropagation();unlock("contact");});}}}
function unlock(app){if(lock.classList.contains("off"))return;lock.classList.add("off");snd.open();
  if(app==="contact"){setTimeout(()=>{!isMob()?openApp("contact"):mopen("contact");},380);return;}
}
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
    if(k==="wp"){const seq=["meandres","aurora","sunset","ocean","forest","mono"];const cur=PREF.get("wp","meandres");PREF.set("wp",seq[(seq.indexOf(cur)+1)%seq.length]);applyPrefs();snd.tap();return;}
    if(k==="contact"){cc.classList.remove("on");!isMob()?openApp("contact"):mopen("contact");return;}});
  const ccBtn=document.getElementById("ccBtn");
  if(ccBtn)ccBtn.addEventListener("click",()=>{ccSync();cc.classList.toggle("on");snd.tap();});
  cc.querySelector("[data-ccb]").addEventListener("input",e=>{dim.style.opacity=String(1-e.target.value/100);});
  function ccSync(){cc.querySelector('[data-cc="snd"]').classList.toggle("on",!muted);cc.querySelector('[data-cc="crt"]').classList.toggle("on",PREF.get("crt","0")==="1");}
})();
/* PWA */
/* SW_V = numéro de CACHE dans sw.js : une nouvelle adresse contourne le cache de Cloudflare */
const SW_V=46;
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("/sw.js?v="+SW_V,{updateViaCache:"none"}).catch(()=>{});
/* Analytics : une vue par chargement */
track("pageview");
