// ============================================================
//  SINCÈRE — modules d'éducation
//  Chaque module : id, emoji, titre, sous-titre, sections [{h, p | liste}]
// ============================================================

const MODULES = [
  {
    id: "ethique", emoji: "🤝", titre: "C'est quoi, le porno éthique ?",
    sous: "Les 5 critères pour s'y retrouver",
    sections: [
      { p: "Il n'existe pas de label officiel. On parle de porno « éthique », « féministe » ou « équitable » quand la manière dont il est fabriqué respecte les personnes, et quand ce qu'il montre ne repose pas sur l'humiliation." },
      { h: "1. Le consentement, à chaque étape", p: "Les performeurs discutent avant le tournage de ce qu'ils veulent faire et de ce qu'ils refusent. Ils peuvent arrêter à tout moment. Beaucoup de studios éthiques filment ces discussions ou une interview avant et après la scène." },
      { h: "2. Une vraie rémunération", p: "Les performeurs sont payés correctement, et parfois touchent une part des revenus. C'est pour ça que le porno éthique est presque toujours payant : un site gratuit qui diffuse des milliers de vidéos ne paie en général personne." },
      { h: "3. Des conditions de travail sûres", p: "Tests de dépistage, choix des partenaires, pauses, eau et nourriture sur le plateau, possibilité de revoir et de retirer une scène." },
      { h: "4. La diversité", p: "Des corps de toutes formes, couleurs, âges (adultes) et identités. Des poils, des cicatrices, des rires, des maladresses." },
      { h: "5. Le plaisir de tout le monde", p: "La scène ne s'arrête pas quand un homme a joui. Le plaisir féminin, queer, partagé est au centre, pas un décor." },
      { h: "Et le contenu « hard » ?", p: "Éthique ne veut pas dire forcément doux. Des pratiques intenses (BDSM par exemple) peuvent être éthiques si elles sont négociées, consenties et montrées comme telles. Ce qui n'est jamais éthique : la contrainte, la tromperie, la diffusion sans accord." }
    ]
  },
  {
    id: "mythes", emoji: "🔍", titre: "Porno vs réalité",
    sous: "10 idées reçues démontées",
    sections: [
      { p: "Le porno mainstream est une fiction montée, coupée, éclairée et souvent tournée en plusieurs heures. Le comparer à sa vie sexuelle, c'est comme comparer sa conduite à un film d'action." },
      { h: "« Un rapport doit durer longtemps »", p: "Dans les études, la pénétration dure en moyenne autour de 5 à 6 minutes. Les scènes de 40 minutes sont montées à partir de plusieurs prises." },
      { h: "« La taille, ça compte »", p: "La moyenne d'un pénis en érection tourne autour de 13 cm. Les acteurs sont choisis précisément parce qu'ils sont hors norme. Et la plupart des terminaisons nerveuses du vagin sont près de l'entrée." },
      { h: "« Les femmes jouissent par la pénétration »", p: "Une minorité seulement y arrive par la pénétration seule. La majorité a besoin que le clitoris soit stimulé, avec les doigts, la bouche ou un jouet. Ce n'est pas un problème : c'est l'anatomie." },
      { h: "« Le clitoris, c'est un petit bouton »", p: "C'est un organe d'une dizaine de centimètres, en grande partie interne, qui entoure le vagin. Le petit bout visible n'est que la partie émergée." },
      { h: "« L'érection est automatique et permanente »", p: "Elle va et vient, surtout avec le stress ou la fatigue. Les tournages utilisent pauses, coupes et parfois médicaments." },
      { h: "« Les vrais corps ressemblent à ça »", p: "Épilation intégrale, chirurgie, maquillage, lumière, angles : rien de tout ça n'est la norme. Les vulves ont toutes des formes différentes, les lèvres internes dépassent souvent, et c'est normal." },
      { h: "« Les préliminaires, c'est accessoire »", p: "Pour beaucoup de personnes, c'est le cœur du plaisir. L'excitation prend du temps, chez tout le monde." },
      { h: "« Pas besoin de parler »", p: "Dans la vraie vie, on demande, on rit, on ajuste. Parler n'est pas un « tue-l'amour », c'est souvent ce qui rend le moment meilleur." },
      { h: "« Le lubrifiant, c'est quand il y a un problème »", p: "Non, c'est un confort pour tout le monde. L'humidité varie selon le cycle, le stress, les médicaments, l'âge." },
      { h: "« Le préservatif casse l'ambiance »", p: "Le porno ne les montre presque jamais, mais dans la vraie vie, ils protègent des IST et d'une grossesse non voulue. Ça se met à deux, ça peut faire partie du jeu." }
    ]
  },
  {
    id: "consentement", emoji: "✋", titre: "Le consentement",
    sous: "Simple à comprendre, essentiel à pratiquer",
    sections: [
      { p: "Le consentement, c'est un oui libre et clair. Un moyen facile de s'en souvenir : il doit être LIBRE, RÉVERSIBLE, ÉCLAIRÉ, ENTHOUSIASTE et SPÉCIFIQUE." },
      { h: "Libre", p: "Sans pression, sans chantage, sans menace, sans alcool ou drogue au point de ne plus pouvoir décider." },
      { h: "Réversible", p: "On peut changer d'avis à tout moment, même en plein milieu, même si on a dit oui avant." },
      { h: "Éclairé", p: "On sait à quoi on dit oui : par exemple, si l'autre retire son préservatif sans le dire, le consentement n'est plus valable." },
      { h: "Enthousiaste", p: "On cherche un vrai oui, pas l'absence de non. Un silence, un corps figé, un « bof » ne sont pas un oui." },
      { h: "Spécifique", p: "Dire oui à un baiser n'est pas dire oui à tout le reste. Chaque nouvelle chose se demande." },
      { h: "Comment demander sans casser l'ambiance", liste: ["« Tu aimes quand je fais ça ? »", "« Tu as envie qu'on aille plus loin ? »", "« Plus doucement ou plus fort ? »", "« On fait une pause ? »"] },
      { h: "Et dans le porno ?", p: "Le porno mainstream montre souvent des scènes où le « non » devient « oui » sous la pression. C'est de la fiction, et c'est justement ce que le porno éthique évite de normaliser." }
    ]
  },
  {
    id: "corps", emoji: "🪞", titre: "Image du corps et confiance",
    sous: "Pourquoi on se sent « pas à la hauteur »",
    sections: [
      { p: "Beaucoup de personnes se comparent à ce qu'elles voient : taille, poids, poils, durée, performance. Le problème, c'est que l'étalon est truqué." },
      { h: "D'où vient ce malaise", liste: ["Les acteurs et actrices sont sélectionnés pour être hors norme", "Les scènes sont montées pour ne garder que le « meilleur »", "Les corps sont retouchés (lumière, chirurgie, épilation)", "Les émotions réelles (gêne, rire, tendresse) sont coupées"] },
      { h: "Ce qui aide", liste: ["Regarder ou écouter des contenus avec des corps variés", "Se rappeler que le désir passe surtout par la complicité, pas par la plastique", "Explorer son propre corps sans objectif (la masturbation est saine)", "En parler avec quelqu'un de confiance, ou un·e sexologue"] },
      { h: "Et pour les hommes aussi", p: "La pression de la « performance » (durée, taille, érection) touche énormément d'hommes. L'éjaculation rapide et les pannes d'érection sont très courantes, et se soignent bien quand on en parle à un médecin." }
    ]
  },
  {
    id: "reconnaitre", emoji: "🧐", titre: "Reconnaître un site éthique",
    sous: "Les bons signes et les signaux d'alerte",
    sections: [
      { h: "✅ Les bons signes", liste: ["On sait qui produit et qui réalise", "Les performeurs sont nommés et parfois interviewés", "Il y a une charte de tournage ou une page « éthique »", "C'est payant (abonnement, location, achat)", "Les performeurs peuvent faire retirer leurs scènes", "Il y a une vérification d'âge à l'entrée (obligatoire en France)"] },
      { h: "🚩 Les signaux d'alerte", liste: ["Des milliers de vidéos gratuites sans auteurs identifiés", "Des titres qui insistent sur l'humiliation, la douleur non consentie ou l'âge (« très jeune »)", "Des vidéos visiblement filmées en cachette ou volées", "Aucune information sur la production", "Des publicités agressives et des pop-ups"] },
      { h: "Payer pour son porno", p: "C'est le geste le plus simple. Comme pour la musique ou les films, payer garantit que les personnes qui ont travaillé sont rémunérées. Tu peux aussi soutenir directement des créateurs et créatrices sur leurs propres sites." },
      { h: "Si tu tombes sur un contenu illégal", p: "En France, tu peux le signaler sur la plateforme officielle PHAROS (internet-signalement.gouv.fr). Contenus non consentis, mineurs, violences : signale, ne partage jamais." }
    ]
  },
  {
    id: "habitudes", emoji: "⚖️", titre: "Consommer sainement",
    sous: "Garder le contrôle, sans culpabiliser",
    sections: [
      { p: "Regarder, écouter ou lire des contenus érotiques est normal et peut faire partie d'une sexualité épanouie. Ce qui compte, c'est la place que ça prend." },
      { h: "Des questions à se poser", liste: ["Est-ce que je choisis, ou est-ce que ça devient automatique ?", "Est-ce que j'ai besoin de contenus de plus en plus extrêmes ?", "Est-ce que ça empiète sur mon sommeil, mon travail, mon couple ?", "Est-ce que je me sens bien, ou mal, après ?"] },
      { h: "Quelques idées", liste: ["Varier les formats : l'audio et l'écrit laissent plus de place à l'imagination", "Prendre son temps plutôt que zapper", "Faire des pauses de temps en temps pour voir ce que ça change", "Garder de la place pour le désir sans écran"] },
      { h: "Si ça devient difficile", p: "Si tu as l'impression de ne plus contrôler ta consommation, ce n'est pas une honte. Un médecin, un·e sexologue ou un·e psychologue peut t'aider, sans jugement." }
    ]
  },
  {
    id: "adeux", emoji: "💬", titre: "En parler à deux",
    sous: "Partager ses envies sans gêne",
    sections: [
      { p: "Le porno éthique peut être une belle façon d'ouvrir la discussion sur les envies de chacun. Encore faut-il que les deux en aient envie." },
      { h: "Pour lancer le sujet", liste: ["Choisir un moment calme, pas au lit en plein milieu", "Parler de soi : « j'ai découvert un truc qui me plaît » plutôt que « tu devrais »", "Proposer, pas imposer : l'autre a le droit de ne pas aimer", "Commencer par de l'audio ou de l'écrit, souvent moins intimidant"] },
      { h: "Le jeu des 3 listes", p: "Chacun écrit de son côté trois listes : OUI (j'aime ou j'ai envie), PEUT-ÊTRE (curieux·se), NON (pas pour moi). Ensuite, on compare seulement ce qui est en commun dans OUI et PEUT-ÊTRE. Personne n'a à se justifier pour ses NON." },
      { h: "Si l'autre se sent menacé·e", p: "Certaines personnes vivent le porno comme une comparaison ou une trahison. Écouter ce ressenti est plus important que d'avoir raison. Le but est de se rapprocher, pas de convaincre." }
    ]
  },
  {
    id: "loi", emoji: "⚖️", titre: "Ce que dit la loi en France",
    sous: "Les bases à connaître",
    sections: [
      { h: "Interdit aux mineurs", p: "Les contenus pornographiques sont réservés aux plus de 18 ans. Depuis la loi SREN (2024), les sites doivent vérifier l'âge de leurs visiteurs, sous le contrôle de l'Arcom. Une simple case « j'ai 18 ans » ne suffit plus pour eux." },
      { h: "Partager sans accord = délit", p: "Diffuser une image ou une vidéo intime de quelqu'un sans son accord est puni par la loi, même si la personne avait accepté d'être filmée." },
      { h: "Les deepfakes aussi", p: "Créer ou diffuser un faux contenu sexuel avec le visage de quelqu'un sans son accord est aussi sanctionné." },
      { h: "Où signaler", liste: ["PHAROS : internet-signalement.gouv.fr", "Le 3018 : numéro national contre le cyberharcèlement et les violences numériques (gratuit et anonyme)", "En cas d'urgence : le 17"] }
    ]
  },
  {
    id: "ressources", emoji: "📚", titre: "Pour aller plus loin",
    sous: "Livres, podcasts, sites fiables",
    sections: [
      { h: "Sites", liste: ["OnSEXprime (Santé publique France) : onsexprime.fr", "Le Planning familial : planning-familial.org", "OMGYES : le plaisir féminin expliqué", "Scarleteen (en anglais) : éducation sexuelle inclusive"] },
      { h: "Livres", liste: ["Jouissance Club — Jüne Plã", "Les Joies d'en bas — Nina Brochmann et Ellen Støkken Dahl", "Osez… 20 histoires — collection de La Musardine"] },
      { h: "Podcasts", liste: ["Le Cœur sur la table (Binge Audio)", "Les Couilles sur la table (Binge Audio)", "Voxxx (érotique, en français)"] },
      { h: "Documentaire", p: "« Pornocratie » d'Ovidie, sur les coulisses de l'industrie du porno gratuit en ligne." },
      { h: "Parler à un pro", p: "Sexologues, médecins, centres de santé sexuelle (CeGIDD) et Planning familial sont là sans jugement. Les consultations en CeGIDD sont gratuites." }
    ]
  }
];
