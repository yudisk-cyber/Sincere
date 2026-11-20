// ============================================================
//  SINCÈRE — catalogue des plateformes et contenus
//  Pour ajouter une plateforme : copie un bloc { ... } et modifie-le.
//  Dernière vérification des noms : novembre 2026.
//  Les liens peuvent changer : vérifie-les de temps en temps.
// ============================================================

// Dictionnaire des filtres (clé -> libellé affiché)
const FILTRES = {
  format: {
    titre: "Format",
    options: { video: "🎬 Vidéo", audio: "🎧 Audio", ecrit: "📖 Écrit", guide: "🧭 Guide / éducatif" }
  },
  public: {
    titre: "Qui on voit / entend",
    options: {
      hetero: "Femme & homme", lesbien: "Entre femmes", gay: "Entre hommes",
      queer: "Queer / non-binaire", trans: "Personnes trans", couple: "Vrais couples", solo: "Solo"
    }
  },
  ambiance: {
    titre: "Ambiance",
    options: {
      tendre: "💞 Tendre / romantique", sensuel: "🌙 Sensuel / lent", artistique: "🎨 Artistique",
      realiste: "🌿 Réaliste / naturel", ludique: "😄 Ludique / drôle", scenario: "🎭 Avec une histoire",
      intense: "🔥 Intense (kink consenti)", fantasme: "✨ Fantasmes"
    }
  },
  focus: {
    titre: "Ce qui compte pour toi",
    options: {
      plaisirF: "Plaisir féminin", corps: "Diversité des corps", parRealisatrices: "Réalisé par des femmes",
      parQueer: "Réalisé par des personnes queer", voix: "Voix / ASMR", coulisses: "Coulisses & consentement visibles",
      debutant: "Idéal pour débuter", deux: "À partager à deux"
    }
  },
  langue: { titre: "Langue", options: { fr: "🇫🇷 Français", en: "🇬🇧 Anglais", sans: "Sans paroles" } },
  prix: { titre: "Prix", options: { gratuit: "Gratuit", essai: "Essai gratuit", payant: "Payant / abonnement" } }
};

// Critères éthiques affichés sur chaque fiche
const CRITERES = {
  consentement: "Consentement documenté",
  remuneration: "Performeurs rémunérés",
  diversite: "Diversité des corps et identités",
  transparence: "Coulisses / chartes publiques",
  payant: "Modèle payant (pas de contenu volé)"
};

const PLATEFORMES = [
  // ---------------- VIDÉO ----------------
  {
    id: "lust", nom: "Erika Lust Films / Lust Cinema", url: "https://lustcinema.com",
    resume: "La pionnière du cinéma adulte féministe. Des courts-métrages soignés, scénarisés, tournés avec une vraie direction artistique.",
    details: "Erika Lust, réalisatrice suédoise basée à Barcelone, produit depuis 2004 des films où le plaisir de chacun compte. Équipes majoritairement féminines, chartes de tournage publiques, performeurs qui choisissent leurs partenaires.",
    format: ["video"], public: ["hetero", "lesbien", "queer", "couple"], ambiance: ["scenario", "artistique", "sensuel", "fantasme"],
    focus: ["plaisirF", "parRealisatrices", "coulisses", "deux"], langue: ["en", "sans"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "transparence", "payant"]
  },
  {
    id: "xconf", nom: "XConfessions", url: "https://xconfessions.com",
    resume: "Le public envoie ses fantasmes de façon anonyme, des réalisatrices et réalisateurs en font des films.",
    details: "Projet d'Erika Lust. Chaque mois, des confessions anonymes deviennent des courts-métrages. Très varié : humour, romance, fantasmes plus audacieux. Pratique pour trouver quelque chose qui ressemble à ses propres envies.",
    format: ["video", "ecrit"], public: ["hetero", "lesbien", "gay", "queer"], ambiance: ["scenario", "fantasme", "ludique", "artistique"],
    focus: ["parRealisatrices", "plaisirF", "coulisses"], langue: ["en"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "transparence", "payant"]
  },
  {
    id: "lustery", nom: "Lustery", url: "https://lustery.com",
    resume: "De vrais couples filment leur propre intimité, chez eux. Zéro acteur, zéro script.",
    details: "Les couples gardent le contrôle de ce qu'ils publient et sont rémunérés. On les présente avec une courte interview, ce qui donne une vraie complicité à l'écran. Parfait si tu cherches du réaliste.",
    format: ["video"], public: ["couple", "hetero", "lesbien", "gay", "queer"], ambiance: ["realiste", "tendre", "sensuel"],
    focus: ["corps", "coulisses", "deux", "debutant"], langue: ["en", "sans"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "transparence", "payant"]
  },
  {
    id: "mlnp", nom: "Make Love Not Porn", url: "https://makelovenotporn.tv",
    resume: "« Social sex » : des gens ordinaires partagent du sexe réel, le message est de montrer la différence avec le porno.",
    details: "Fondée par Cindy Gallop. Chaque vidéo est vérifiée par une équipe, les participants touchent la moitié des revenus. Sexe réel, maladresses et rires compris.",
    format: ["video"], public: ["couple", "hetero", "queer", "solo"], ambiance: ["realiste", "tendre", "ludique"],
    focus: ["corps", "coulisses", "debutant", "deux"], langue: ["en"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "transparence", "payant"]
  },
  {
    id: "crashpad", nom: "CrashPad Series", url: "https://crashpadseries.com",
    resume: "Studio queer féministe culte, en ligne depuis le début des années 2000. Énorme diversité de corps, de genres et de pratiques.",
    details: "Créé par Shine Louise Houston (Pink & White Productions). Les performeurs choisissent leurs partenaires et ce qu'ils font. Contenus parfois intenses, toujours négociés.",
    format: ["video"], public: ["queer", "lesbien", "trans", "gay"], ambiance: ["realiste", "intense", "ludique"],
    focus: ["corps", "parQueer", "parRealisatrices", "coulisses"], langue: ["en"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "transparence", "payant"]
  },
  {
    id: "fourch", nom: "Four Chambers", url: "https://fourchambers.org",
    resume: "Du porno pensé comme de l'art vidéo. Images très léchées, ambiance contemplative.",
    details: "Collectif fondé par Vex Ashley et financé par ses abonnés. Chaque épisode est accompagné d'un texte sur le tournage. Pour celles et ceux qui aiment l'esthétique avant tout.",
    format: ["video"], public: ["queer", "hetero", "lesbien"], ambiance: ["artistique", "sensuel", "intense"],
    focus: ["parRealisatrices", "parQueer", "coulisses"], langue: ["sans", "en"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "transparence", "payant"]
  },
  {
    id: "pinklabel", nom: "PinkLabel.TV", url: "https://pinklabel.tv",
    resume: "Plateforme de streaming qui rassemble des films de dizaines de studios indépendants, féministes et queer.",
    details: "Également lancée par Shine Louise Houston. Location ou achat de films à l'unité : l'argent va aux réalisateurs indépendants. Bon moyen de découvrir plein de styles différents.",
    format: ["video"], public: ["queer", "lesbien", "gay", "trans", "hetero"], ambiance: ["artistique", "scenario", "realiste", "intense"],
    focus: ["parQueer", "parRealisatrices", "corps"], langue: ["en"], prix: ["payant"],
    criteres: ["remuneration", "diversite", "payant"]
  },
  {
    id: "sssh", nom: "Sssh.com", url: "https://www.sssh.com",
    resume: "Un des plus anciens sites de porno pensé pour les femmes, avec des histoires romantiques et des chartes de tournage détaillées.",
    details: "Charte publique : rien n'est demandé qui n'ait été discuté avant, les performeurs choisissent leurs partenaires, tout le monde a au moins 21 ans. Ton souvent romantique.",
    format: ["video"], public: ["hetero", "couple"], ambiance: ["tendre", "scenario", "sensuel"],
    focus: ["plaisirF", "debutant", "deux", "coulisses"], langue: ["en"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "transparence", "payant"]
  },
  {
    id: "bellesa", nom: "Bellesa Films", url: "https://www.bellesa.co",
    resume: "Productions centrées sur le plaisir féminin, avec des scènes non scénarisées.",
    details: "⚠️ À savoir : Bellesa a été critiquée dans le passé pour avoir hébergé des vidéos d'autres studios sans autorisation. Privilégie leurs productions maison (Bellesa Films) plutôt que la partie gratuite.",
    format: ["video", "ecrit"], public: ["hetero", "lesbien"], ambiance: ["sensuel", "realiste", "tendre"],
    focus: ["plaisirF", "debutant"], langue: ["en"], prix: ["gratuit", "payant"],
    criteres: ["remuneration"]
  },

  // ---------------- AUDIO ----------------
  {
    id: "voxxx", nom: "Voxxx", url: "https://www.google.com/search?q=Voxxx+podcast+Olympe+de+G",
    resume: "Série sonore française dédiée au plaisir solo : méditations sensuelles, fictions, ASMR.",
    details: "Créée par Olympe de G. (ancienne réalisatrice pour Erika Lust) et Lélé O. Idéal pour découvrir le porno audio en français, en douceur. Disponible sur les plateformes de podcast.",
    format: ["audio"], public: ["solo", "hetero", "lesbien", "queer"], ambiance: ["sensuel", "fantasme", "tendre"],
    focus: ["voix", "plaisirF", "parRealisatrices", "debutant"], langue: ["fr"], prix: ["gratuit"],
    criteres: ["diversite"]
  },
  {
    id: "coxxx", nom: "Coxxx", url: "https://www.google.com/search?q=Coxxx+podcast+Olympe+de+G",
    resume: "Le pendant de Voxxx pensé pour les personnes qui ont un pénis : guider sans clichés, en prenant son temps.",
    details: "Également signé Olympe de G. Une belle façon de sortir du réflexe « vidéo rapide ». En français.",
    format: ["audio"], public: ["solo", "hetero", "gay", "queer"], ambiance: ["sensuel", "fantasme"],
    focus: ["voix", "debutant"], langue: ["fr"], prix: ["gratuit"],
    criteres: ["diversite"]
  },
  {
    id: "dipsea", nom: "Dipsea", url: "https://www.dipseastories.com",
    resume: "L'appli d'histoires audio érotiques la plus connue : des centaines d'histoires courtes, très bien produites.",
    details: "Fondée par des femmes. Un petit quiz te propose des histoires selon tes goûts, il y a aussi une partie bien-être. En anglais uniquement.",
    format: ["audio"], public: ["hetero", "lesbien", "gay", "queer"], ambiance: ["tendre", "fantasme", "scenario", "sensuel"],
    focus: ["voix", "plaisirF", "parRealisatrices", "debutant", "deux"], langue: ["en"], prix: ["essai", "payant"],
    criteres: ["remuneration", "diversite", "payant"]
  },
  {
    id: "quinn", nom: "Quinn", url: "https://www.tryquinn.com",
    resume: "Bibliothèque d'audio érotique alimentée par des créatrices et créateurs, très variée.",
    details: "Fondée par une femme. Beaucoup de voix et de styles différents, des plus doux aux plus audacieux.",
    format: ["audio"], public: ["hetero", "lesbien", "gay", "queer", "trans"], ambiance: ["fantasme", "sensuel", "intense", "ludique"],
    focus: ["voix", "plaisirF", "parRealisatrices"], langue: ["en"], prix: ["essai", "payant"],
    criteres: ["remuneration", "diversite", "payant"]
  },
  {
    id: "ferly", nom: "Ferly", url: "https://www.ferly.com",
    resume: "Appli de bien-être sexuel : guides audio, exercices de pleine conscience et histoires érotiques.",
    details: "Moins « porno », plus « mieux se connaître ». Idéal si tu veux reprendre confiance ou retrouver l'envie. En anglais.",
    format: ["audio", "guide"], public: ["solo", "couple", "hetero", "lesbien"], ambiance: ["tendre", "sensuel"],
    focus: ["plaisirF", "debutant", "deux", "voix"], langue: ["en"], prix: ["essai", "payant"],
    criteres: ["payant"]
  },
  {
    id: "emjoy", nom: "Emjoy", url: "https://www.emjoy.app",
    resume: "Bien-être intime : sessions guidées, image du corps, histoires audio.",
    details: "Approche douce, axée sur l'acceptation de soi et le plaisir féminin. En anglais.",
    format: ["audio", "guide"], public: ["solo", "hetero", "lesbien"], ambiance: ["tendre", "sensuel"],
    focus: ["plaisirF", "debutant", "voix", "corps"], langue: ["en"], prix: ["essai", "payant"],
    criteres: ["payant"]
  },

  // ---------------- ÉCRIT ----------------
  {
    id: "musardine", nom: "La Musardine", url: "https://www.lamusardine.com",
    resume: "Éditeur et librairie parisienne spécialisés dans l'érotisme : romans, nouvelles, guides pratiques.",
    details: "Les recueils « Osez… 20 histoires » sont une super porte d'entrée : chaque livre explore un thème avec des nouvelles d'auteurs variés. Il y a aussi des guides d'éducation sexuelle.",
    format: ["ecrit", "guide"], public: ["hetero", "lesbien", "gay", "queer"], ambiance: ["fantasme", "scenario", "sensuel", "ludique"],
    focus: ["debutant", "deux"], langue: ["fr"], prix: ["payant"],
    criteres: ["remuneration", "payant"]
  },
  {
    id: "nin", nom: "Anaïs Nin — Vénus Erotica", url: "https://www.google.com/search?q=Ana%C3%AFs+Nin+V%C3%A9nus+Erotica+livre",
    resume: "Un classique de la littérature érotique écrite par une femme. Trouvable en poche et en bibliothèque.",
    details: "Des nouvelles sensuelles, très littéraires. Parfait pour lire à voix haute à deux. Certaines nouvelles datent des années 1940 et contiennent des passages qui choquent aujourd'hui : lis avec ce recul.",
    format: ["ecrit"], public: ["hetero", "lesbien"], ambiance: ["sensuel", "fantasme", "artistique"],
    focus: ["parRealisatrices", "deux"], langue: ["fr"], prix: ["payant"],
    criteres: []
  },

  // ---------------- GUIDES / ÉDUCATION ----------------
  {
    id: "omgyes", nom: "OMGYES", url: "https://www.omgyes.com",
    resume: "Le plaisir féminin expliqué à partir d'études scientifiques et de témoignages de vraies femmes.",
    details: "Vidéos non pornographiques et modules interactifs pour comprendre les techniques de caresses. Existe en français. Super à découvrir seul·e ou à deux.",
    format: ["guide", "video"], public: ["solo", "couple"], ambiance: ["realiste"],
    focus: ["plaisirF", "corps", "debutant", "deux"], langue: ["fr", "en"], prix: ["payant"],
    criteres: ["consentement", "remuneration", "diversite", "payant"]
  },
  {
    id: "onsexprime", nom: "OnSEXprime", url: "https://www.onsexprime.fr",
    resume: "Le site de Santé publique France sur la sexualité, sans tabou, avec un dossier sur le porno.",
    details: "Gratuit et fiable : consentement, corps, plaisir, contraception, et comment prendre du recul sur ce qu'on voit dans le porno.",
    format: ["guide"], public: ["solo", "couple"], ambiance: ["realiste"],
    focus: ["debutant", "corps"], langue: ["fr"], prix: ["gratuit"],
    criteres: []
  },
  {
    id: "jouissance", nom: "Jouissance Club", url: "https://www.google.com/search?q=Jouissance+Club+J%C3%BCne+Pl%C3%A3",
    resume: "Le livre (et compte Instagram) de Jüne Plã : une cartographie illustrée du plaisir, au-delà de la pénétration.",
    details: "Dessins non pornographiques, très clairs. Des dizaines de caresses expliquées pas à pas. Un best-seller en France.",
    format: ["guide", "ecrit"], public: ["couple", "solo", "hetero", "lesbien", "gay"], ambiance: ["ludique", "tendre"],
    focus: ["plaisirF", "debutant", "deux", "parRealisatrices"], langue: ["fr"], prix: ["gratuit", "payant"],
    criteres: []
  },
  {
    id: "cdlt", nom: "Le Cœur sur la table (Binge Audio)", url: "https://www.binge.audio",
    resume: "Podcast français de Victoire Tuaillon sur l'amour, le couple et l'intimité.",
    details: "Pas érotique : éducatif et réflexif. Aussi chez Binge Audio : « Les Couilles sur la table » sur les masculinités, avec des épisodes sur le porno.",
    format: ["audio", "guide"], public: ["couple", "solo"], ambiance: ["realiste"],
    focus: ["deux", "debutant"], langue: ["fr"], prix: ["gratuit"],
    criteres: []
  }
];

// ---------------- QUIZ « Trouve ce qui te parle » ----------------
const QUIZ = [
  {
    q: "Tu as plutôt envie de…",
    r: [
      { t: "Regarder", f: { format: "video" } },
      { t: "Écouter, les yeux fermés", f: { format: "audio" } },
      { t: "Lire, à mon rythme", f: { format: "ecrit" } },
      { t: "Apprendre des choses", f: { format: "guide" } }
    ]
  },
  {
    q: "Quelle ambiance te tente ce soir ?",
    r: [
      { t: "Douce et romantique", f: { ambiance: "tendre" } },
      { t: "Lente et sensuelle", f: { ambiance: "sensuel" } },
      { t: "Vraie, sans mise en scène", f: { ambiance: "realiste" } },
      { t: "Belle, comme un film d'auteur", f: { ambiance: "artistique" } },
      { t: "Une histoire, des fantasmes", f: { ambiance: "fantasme" } },
      { t: "Plus intense", f: { ambiance: "intense" } }
    ]
  },
  {
    q: "Tu veux voir ou entendre…",
    r: [
      { t: "Une femme et un homme", f: { public: "hetero" } },
      { t: "Deux femmes", f: { public: "lesbien" } },
      { t: "Deux hommes", f: { public: "gay" } },
      { t: "Des personnes queer ou trans", f: { public: "queer" } },
      { t: "De vrais couples", f: { public: "couple" } },
      { t: "Peu importe", f: {} }
    ]
  },
  {
    q: "Ce qui compte le plus pour toi ?",
    r: [
      { t: "Le plaisir féminin", f: { focus: "plaisirF" } },
      { t: "Des corps qui me ressemblent", f: { focus: "corps" } },
      { t: "Quelque chose à partager à deux", f: { focus: "deux" } },
      { t: "Commencer en douceur", f: { focus: "debutant" } }
    ]
  },
  {
    q: "La langue ?",
    r: [
      { t: "En français si possible", f: { langue: "fr" } },
      { t: "L'anglais ne me gêne pas", f: {} }
    ]
  }
];
