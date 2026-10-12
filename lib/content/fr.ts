import type { Deck } from "./types";

const fr: Deck = {
  locale: "fr",
  dir: "ltr",
  meta: {
    title: "L'IA Pratique : De l'idée au site web personnel",
    description:
      "Présentation interactive de l'atelier de Mahfoudh Arous : planifier, concevoir, développer et publier son portfolio sur GitHub Pages avec Gemini et Antigravity — avec astuces de prompt, design, SEO et accessibilité. Club Tamkeen des Compétences Médiatiques, Chlef.",
    keywords: ["Mahfoudh Arous", "atelier IA pratique", "site web personnel", "portfolio", "GitHub Pages", "Gemini", "Antigravity", "Nano Banana", "prompt engineering", "Chlef", "Algérie", "Club Tamkeen"],
  },
  ui: {
    langName: "Français",
    prev: "Précédent",
    next: "Suivant",
    switchLanguage: "Langue",
    swipeHint: "Glissez pour naviguer",
    keyboardHint: "Utilisez les flèches ← →",
    home: "Accueil",
    fullscreen: "Plein écran",
    exitFullscreen: "Quitter le plein écran",
    scanToOpen: "Scannez pour ouvrir en ligne",
    lightMode: "Passer au thème clair",
    darkMode: "Passer au thème sombre",
    levelBeginner: "Débutant",
    levelAdvanced: "Avancé",
    slide: "Diapositive",
  },
  slides: [
    {
      type: "title",
      title: "L'IA Pratique : De l'idée au site web personnel",
      subtitle:
        "Planifier, concevoir, développer et publier son portfolio sur GitHub Pages sans complexité",
      speaker: "Mahfoudh Arous — Club Tamkeen des Compétences Médiatiques · Chlef",
    },
    {
      type: "content",
      eyebrow: "Notre Objectif",
      title: "Un site web accessible sur votre téléphone",
      lines: [
        {
          marker: "bullet",
          bold: "Un résultat concret :",
          text: "Repartir aujourd'hui avec la méthode pour créer un vrai site personnel d'une page consultable sur smartphone.",
        },
        {
          marker: "bullet",
          bold: "Guidé en langage clair :",
          text: "Piloter les outils d'IA grâce à des consignes structurées sans apprendre par cœur une syntaxe complexe.",
        },
        {
          marker: "bullet",
          bold: "Responsabilité humaine :",
          text: "L'IA produit les textes et le code, mais vous validez chaque information et contrôlez le rendu.",
        },
        {
          marker: "bullet",
          bold: "Pour tous les niveaux :",
          text: "Les diapositives « Débutant » donnent l'essentiel ; les diapositives « Avancé » livrent les techniques de pro.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Feuille de Route",
      title: "Les 4 étapes pratiques",
      lines: [
        {
          marker: "number",
          number: 1,
          bold: "Planification & Contenu :",
          text: "Définir son audience, structurer les sections clés et briefer Gemini avec la méthode RCTFC.",
        },
        {
          marker: "number",
          number: 2,
          bold: "Design visuel :",
          text: "Générer des maquettes avec Nano Banana, puis fixer la hiérarchie, la typographie et les contrastes.",
        },
        {
          marker: "number",
          number: 3,
          bold: "Développement avec Antigravity :",
          text: "Produire du HTML, CSS et JavaScript propre, adaptatif, accessible et optimisé pour le SEO.",
        },
        {
          marker: "number",
          number: 4,
          bold: "Déploiement sur GitHub Pages :",
          text: "Héberger son site gratuitement avec une URL publique, le tester sur mobile et le partager.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "La boîte à outils",
      title: "Quatre outils gratuits, un seul flux",
      level: "beginner",
      lines: [
        {
          marker: "bullet",
          bold: "Gemini :",
          text: "Planifier et rédiger le contenu, créer des Gems réutilisables et concevoir des visuels avec Nano Banana.",
        },
        {
          marker: "bullet",
          bold: "Antigravity :",
          text: "L'agent de code IA de Google : il planifie, écrit les fichiers et prévisualise le site dans un navigateur intégré.",
        },
        {
          marker: "bullet",
          bold: "GitHub + GitHub Pages :",
          text: "Conserve chaque version de votre code et héberge gratuitement votre site à `username.github.io`.",
        },
        {
          marker: "bullet",
          bold: "Chrome DevTools & Lighthouse :",
          text: "Tester les tailles d'écran et obtenir des scores de performance, d'accessibilité et de SEO — déjà dans votre navigateur.",
        },
      ],
    },
    {
      type: "block",
      label: "Étape 1",
      title: "Planification & structuration du contenu",
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Audience & Objectif",
      title: "Le public d'abord : pourquoi créer un site ?",
      lines: [
        {
          marker: "bullet",
          bold: "Qui visite votre site ?",
          text: "Recruteurs potentiels, clients, collaborateurs de projet ou pairs de votre communauté étudiante.",
        },
        {
          marker: "bullet",
          bold: "Quelle action attendez-vous ?",
          text: "Prendre contact directement, découvrir vos réalisations concrètes ou comprendre vos compétences.",
        },
        {
          marker: "bullet",
          bold: "Sections indispensables :",
          text: "Accroche percutante ('Je suis … j'aide …'), bio synthétique, compétences, 2 projets phares et contact.",
        },
        {
          marker: "bullet",
          bold: "La simplicité prime :",
          text: "Une page unique soignée, sobre et authentique a bien plus d'impact qu'un site multi-pages inachevé.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Méthode de prompt",
      title: "La méthode de prompt RCTFC",
      lines: [
        {
          marker: "bullet",
          bold: "R — Rôle :",
          text: "Définir la posture de l'IA (ex. : 'Concepteur de contenu web bienveillant pour débutants').",
        },
        {
          marker: "bullet",
          bold: "C — Contexte :",
          text: "Le cadre et l'objectif (ex. : 'Portfolio d'une page pour un apprenant à Chlef cherchant des collaborations').",
        },
        {
          marker: "bullet",
          bold: "T — Tâche (Task) :",
          text: "L'action précise demandée (ex. : 'Proposer la structure des 5 sections et rédiger des textes concis').",
        },
        {
          marker: "bullet",
          bold: "F — Format :",
          text: "Le format de restitution (ex. : 'Un tableau Markdown : Section, Objectif, Texte provisoire, Faits à vérifier').",
        },
        {
          marker: "bullet",
          bold: "C — Contraintes :",
          text: "Les limites strictes (ex. : 'Faits fournis uniquement ; aucune fausse qualification inventée ; concision absolue').",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Avant / Après",
      title: "D'un souhait vague à un brief précis",
      lines: [
        {
          marker: "quote",
          text: "Fais-moi un site portfolio.",
        },
        {
          marker: "none",
          indent: 1,
          bold: "Résultat :",
          text: "un modèle générique, une biographie inventée, la mauvaise langue — et beaucoup de reprises.",
        },
        {
          marker: "quote",
          text: "Tu es concepteur de contenu. Je suis étudiant en design à Chlef et je cherche des collaborateurs. Rédige 5 sections sous forme de tableau, en arabe. Utilise uniquement les faits ci-dessous et marque les manques par [À CONFIRMER].",
        },
        {
          marker: "none",
          indent: 1,
          bold: "Résultat :",
          text: "un brouillon structuré et honnête, prêt à être relu du premier coup.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Astuces de prompt",
      title: "5 réflexes pour de meilleures réponses",
      level: "beginner",
      lines: [
        {
          marker: "bullet",
          bold: "Une tâche par message :",
          text: "D'abord le plan, puis les textes, puis le code — pas tout dans un seul prompt.",
        },
        {
          marker: "bullet",
          bold: "Laissez l'IA questionner :",
          text: "« Avant de répondre, pose-moi jusqu'à 5 questions sur mes objectifs et mon public. »",
        },
        {
          marker: "bullet",
          bold: "Montrez un exemple :",
          text: "Collez une phrase ou un site que vous aimez — un exemple vaut mieux qu'un paragraphe de description.",
        },
        {
          marker: "bullet",
          bold: "Itérez avec précision :",
          text: "« Garde tout, raccourcis seulement la section À propos à 3 lignes. » Dites quoi garder, pas seulement quoi changer.",
        },
        {
          marker: "bullet",
          bold: "Précisez langue et longueur :",
          text: "« Réponds en arabe, 60 mots maximum par section, vocabulaire simple. »",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Astuces de prompt",
      title: "Techniques de prompt avancées",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Séparer données et consignes :",
          text: "Encadrez le contenu collé avec des balises comme `<profil>…</profil>` pour que le modèle ne confonde jamais votre CV et vos ordres.",
        },
        {
          marker: "bullet",
          bold: "Plan → relecture → exécution :",
          text: "Demandez un plan, corrigez-le, puis seulement validez le travail. Corriger un plan coûte peu, corriger un résultat coûte cher.",
        },
        {
          marker: "bullet",
          bold: "Expliquez le pourquoi :",
          text: "« Reste bref car les visiteurs lisent sur téléphone » se généralise mieux qu'un simple « sois bref ».",
        },
        {
          marker: "bullet",
          bold: "Auto-vérification intégrée :",
          text: "« Avant de terminer, vérifie chaque contrainte et liste celles que tu n'as pas pu respecter. »",
        },
        {
          marker: "bullet",
          bold: "Bibliothèque de prompts :",
          text: "Sauvegardez les prompts qui marchent comme modèles avec des [paramètres] — votre boîte à outils grandit à chaque projet.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Données & Vie privée",
      title: "Des faits fiables, une vie privée protégée",
      lines: [
        {
          marker: "bullet",
          bold: "LinkedIn sans scraping :",
          text: "Sur votre profil : Plus → Enregistrer au format PDF, puis importez ce PDF dans Gemini comme source de faits.",
        },
        {
          marker: "bullet",
          bold: "Vérifiez chaque ligne :",
          text: "L'IA comble les trous avec assurance. Demandez-lui de marquer les inconnues [À CONFIRMER] et vérifiez-les.",
        },
        {
          marker: "bullet",
          bold: "Transparence sur les projets :",
          text: "Indiquez clairement que les exercices d'apprentissage sont des simulations. La sincérité fonde la crédibilité.",
        },
        {
          marker: "bullet",
          bold: "Protection de la vie privée :",
          text: "Ne collez jamais de mots de passe, cartes d'identité, adresses privées ou clés d'API dans les invites d'IA.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Instructions réutilisables",
      title: "Gems & Skills : écrire ses règles une fois",
      lines: [
        {
          marker: "bullet",
          bold: "Gem (dans Gemini) :",
          text: "Un assistant personnalisé avec un nom, des instructions permanentes et des fichiers de référence — ex. votre CV et votre charte de ton.",
        },
        {
          marker: "bullet",
          bold: "Skill (dans les agents de code) :",
          text: "Un dossier avec un fichier `SKILL.md` — nom, description, étapes — que l'agent charge seulement quand la tâche correspond.",
        },
        {
          marker: "bullet",
          bold: "Même principe :",
          text: "Vos règles de qualité vous suivent, au lieu d'être retapées dans chaque nouvelle conversation.",
        },
        {
          marker: "bullet",
          bold: "Où les trouver :",
          text: "Gems : gemini.google.com → Gems. Skills : pris en charge par de plus en plus d'agents — consultez la doc de votre outil.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 1 · Instructions réutilisables",
      title: "Rédiger un excellent Skill ou Gem",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Une mission par skill :",
          text: "« relecteur-textes-portfolio » plutôt que « fais-tout ». Un petit skill se déclenche, se teste et se corrige plus facilement.",
        },
        {
          marker: "bullet",
          bold: "La description sert de déclencheur :",
          text: "Dites ce qu'il fait ET quand l'utiliser — l'agent choisit le skill à charger à partir de cette seule ligne.",
        },
        {
          marker: "bullet",
          bold: "Des étapes, puis une checklist :",
          text: "Une procédure numérotée suivie d'une checklist qualité que l'agent doit valider avant de répondre.",
        },
        {
          marker: "bullet",
          bold: "Montrez un bon résultat :",
          text: "Un court exemple du rendu attendu enseigne plus qu'une page de règles.",
        },
        {
          marker: "bullet",
          bold: "Testez et versionnez :",
          text: "Essayez-le sur 3 vraies demandes, corrigez les dérives et gardez-le dans Git comme du code.",
        },
      ],
    },
    {
      type: "block",
      label: "Étape 2",
      title: "Design visuel & maquette de référence",
    },
    {
      type: "content",
      eyebrow: "Étape 2 · Principes",
      title: "Les fondamentaux d'un design moderne",
      level: "beginner",
      lines: [
        {
          marker: "bullet",
          bold: "Typographie lisible :",
          text: "2 polices maximum, texte courant d'au moins 16px, interligne d'environ 1,6, lignes de 60 à 75 caractères.",
        },
        {
          marker: "bullet",
          bold: "La règle 60-30-10 :",
          text: "60 % de fond neutre, 30 % de couleur principale, 10 % d'accent réservé aux boutons et aux liens.",
        },
        {
          marker: "bullet",
          bold: "Un contraste mesurable :",
          text: "Au moins 4,5:1 pour le texte et 3:1 pour les grands titres et icônes — vérifiez avec un outil de contraste gratuit.",
        },
        {
          marker: "bullet",
          bold: "Espaces & hiérarchie :",
          text: "Une échelle d'espacement cohérente (8, 16, 24, 32px…) et un seul point focal clair par section.",
        },
        {
          marker: "bullet",
          bold: "Sens de lecture :",
          text: "De droite à gauche (RTL) pour l'arabe, de gauche à droite (LTR) pour le français/l'anglais — inversez la mise en page, pas seulement le texte.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 2 · Nano Banana",
      title: "Bien prompter Nano Banana pour des maquettes web",
      lines: [
        {
          marker: "bullet",
          bold: "Suivez une recette :",
          text: "Sujet + mise en page + style + palette + ambiance : « Capture d'une page d'accueil portfolio, desktop 16:9, minimaliste, blanc chaud, texte bleu marine, accent vert ».",
        },
        {
          marker: "bullet",
          bold: "Soyez concret :",
          text: "Codes hexadécimaux (#0F766E), styles de police (« sans-serif géométrique ») et noms de sections valent mieux que « de jolies couleurs ».",
        },
        {
          marker: "bullet",
          bold: "Modifiez, ne recommencez pas :",
          text: "« Garde tout, passe l'en-tête en bleu marine. » Les retouches conversationnelles gardent le design cohérent.",
        },
        {
          marker: "bullet",
          bold: "Utilisez des images de référence :",
          text: "Importez un site que vous admirez, ou votre photo pour obtenir un avatar ou une illustration assortie.",
        },
        {
          marker: "bullet",
          bold: "Générez aussi les visuels :",
          text: "Illustration de profil, fond d'en-tête, favicon — puis compressez-les avant de les utiliser sur le site.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 2 · Référence visuelle",
      title: "De la maquette d'inspiration au code interactif",
      lines: [
        {
          marker: "bullet",
          bold: "Une image n'est pas un site web :",
          text: "L'image générée ne contient aucun lien cliquable, aucun texte sélectionnable et n'est pas indexable par Google.",
        },
        {
          marker: "bullet",
          bold: "Dissocier le texte du visuel :",
          text: "Conservez vos textes validés à part ; le texte rendu dans les images IA contient souvent des fautes.",
        },
        {
          marker: "bullet",
          bold: "Ajuster avant de coder :",
          text: "Affiner les choix visuels ('simplifier la structure', 'renforcer les contrastes') avant de passer à la programmation.",
        },
        {
          marker: "bullet",
          bold: "Transmettre l'image :",
          text: "Joignez la maquette finale à l'agent de code comme référence visuelle, avec vos textes validés.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 2 · Design system",
      title: "Design system, DESIGN.md & modèles",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Un système, pas une image :",
          text: "Jetons de couleur, échelle typographique, espacements, composants et leurs états (survol, focus, désactivé).",
        },
        {
          marker: "bullet",
          bold: "DESIGN.md :",
          text: "Un fichier markdown qui décrit votre système pour que les agents de code le respectent — exemples sur designmd.ai.",
        },
        {
          marker: "bullet",
          bold: "Extrait de votre maquette :",
          text: "« Extrais la palette, les polices et les espacements de cette image en variables CSS et en fichier DESIGN.md. »",
        },
        {
          marker: "bullet",
          bold: "Des modèles, légalement :",
          text: "Partez d'un modèle d'une galerie et personnalisez-le — vérifiez la licence et créditez l'auteur.",
        },
        {
          marker: "bullet",
          bold: "Clair & sombre dès le départ :",
          text: "Définissez les deux palettes en jetons et vérifiez le contraste dans chaque thème, comme ces diapositives.",
        },
      ],
    },
    {
      type: "block",
      label: "Étape 3",
      title: "Développement avec Antigravity",
    },
    {
      type: "content",
      eyebrow: "Étape 3 · Production du code",
      title: "Le trio du Web : HTML, CSS & JavaScript",
      lines: [
        {
          marker: "bullet",
          bold: "Un rôle précis pour chaque fichier :",
          text: "index.html structure le contenu, styles.css assure la mise en forme, script.js ajoute les interactions.",
        },
        {
          marker: "bullet",
          bold: "Une architecture statique légère :",
          text: "Aucun framework lourd, aucun serveur dorsal complexe ; des fichiers simples lisibles par tous les navigateurs.",
        },
        {
          marker: "bullet",
          bold: "Transmettre à Antigravity :",
          text: "Fournir à l'agent le tableau des textes validés + l'image de référence + les contraintes d'adaptation mobile.",
        },
        {
          marker: "bullet",
          bold: "Aperçu local immédiat :",
          text: "Tester le site instantanément dans le navigateur intégré d'Antigravity avant toute mise en ligne.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 3 · Travailler avec un agent",
      title: "Tirer le meilleur d'Antigravity",
      lines: [
        {
          marker: "bullet",
          bold: "Le plan d'abord :",
          text: "Utilisez le mode Planning, lisez le plan d'implémentation et commentez-le avant qu'une ligne de code ne soit écrite.",
        },
        {
          marker: "bullet",
          bold: "Petits pas :",
          text: "Une fonctionnalité par demande, vérifiée dans l'aperçu à chaque fois. Les grosses demandes cachent de gros bugs.",
        },
        {
          marker: "bullet",
          bold: "Points de sauvegarde avec Git :",
          text: "Commitez chaque version qui fonctionne : une mauvaise modification s'annule alors en un clic.",
        },
        {
          marker: "bullet",
          bold: "Règles du projet :",
          text: "Écrivez votre stack, votre style et vos interdits dans un fichier de règles (ex. `AGENTS.md`) que l'agent lit à chaque fois.",
        },
        {
          marker: "bullet",
          bold: "Déboguer avec des preuves :",
          text: "Collez l'erreur exacte, une capture d'écran, et ce que vous attendiez par rapport à ce que vous voyez.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 3 · Responsive design",
      title: "Responsive : un site, tous les écrans",
      lines: [
        {
          marker: "bullet",
          bold: "Mobile d'abord :",
          text: "Stylez d'abord pour un téléphone de 360px, puis ajoutez des règles `@media (min-width: …)` pour les grands écrans.",
        },
        {
          marker: "bullet",
          bold: "La balise viewport :",
          text: "`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` — sans elle, les téléphones dézooment.",
        },
        {
          marker: "bullet",
          bold: "Mise en page fluide :",
          text: "Flexbox et Grid, unités `rem` et `%`, et `clamp()` pour les tailles de police au lieu de pixels fixes.",
        },
        {
          marker: "bullet",
          bold: "Images flexibles :",
          text: "`max-width: 100%` pour que rien ne déborde, et `srcset` pour servir des fichiers plus légers aux téléphones.",
        },
        {
          marker: "bullet",
          bold: "Testez en vrai :",
          text: "Mode appareil des DevTools à 360 / 768 / 1280px, plus un vrai téléphone. Zones tactiles de 44px ou plus.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 3 · Accessibilité",
      title: "Accessible à tous",
      lines: [
        {
          marker: "bullet",
          bold: "HTML sémantique :",
          text: "`header`, `nav`, `main`, `section`, `footer` ; un seul `h1`, des titres dans l'ordre, de vrais éléments `button` et `a`.",
        },
        {
          marker: "bullet",
          bold: "Alternatives textuelles :",
          text: "Un texte `alt` pertinent sur les images informatives ; `alt=\"\"` sur les images décoratives.",
        },
        {
          marker: "bullet",
          bold: "Contraste & couleur :",
          text: "4,5:1 minimum pour le texte, et ne jamais transmettre une information par la couleur seule (ajoutez icône ou libellé).",
        },
        {
          marker: "bullet",
          bold: "Clavier d'abord :",
          text: "Parcourez chaque lien et bouton avec Tab ; le contour de focus doit toujours être visible.",
        },
        {
          marker: "bullet",
          bold: "Langue & préférences :",
          text: "Définissez `lang` et `dir` sur `<html>` ; respectez `prefers-reduced-motion` et `prefers-color-scheme`.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 3 · SEO",
      title: "SEO : aidez les gens à vous trouver",
      lines: [
        {
          marker: "bullet",
          bold: "Titre & description :",
          text: "Un `<title>` unique de moins de 60 caractères (nom + métier) et une meta description d'environ 155 caractères.",
        },
        {
          marker: "bullet",
          bold: "Du vrai texte pertinent :",
          text: "Écrivez ce que les gens recherchent — votre nom, vos compétences, votre ville — en texte, jamais dans une image.",
        },
        {
          marker: "bullet",
          bold: "Aperçus sociaux :",
          text: "Balises Open Graph (`og:title`, `og:description`, `og:image` 1200×630) pour de belles cartes WhatsApp/LinkedIn.",
        },
        {
          marker: "bullet",
          bold: "Données structurées :",
          text: "Un bloc JSON-LD `Person` avec votre nom, votre métier et des liens `sameAs` (LinkedIn, GitHub).",
        },
        {
          marker: "bullet",
          bold: "Être indexé :",
          text: "URL canonique, `sitemap.xml` et `robots.txt`, puis soumettez le site dans Google Search Console.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 3 · Performance",
      title: "Sites rapides & audits par l'IA",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Images légères :",
          text: "WebP/AVIF, redimensionnées à leur taille d'affichage (idéalement moins de 200 Ko), avec `width`/`height` contre les décalages de mise en page.",
        },
        {
          marker: "bullet",
          bold: "Charger seulement le visible :",
          text: "`loading=\"lazy\"` sur les images sous la ligne de flottaison ; aucune bibliothèque lourde pour un site d'une page.",
        },
        {
          marker: "bullet",
          bold: "Polices avec soin :",
          text: "Polices système ou 2 graisses maximum, avec `font-display: swap`.",
        },
        {
          marker: "bullet",
          bold: "Mesurer avec Lighthouse :",
          text: "DevTools → Lighthouse : visez 90+ en Performance, Accessibilité, Bonnes pratiques et SEO.",
        },
        {
          marker: "bullet",
          bold: "L'IA audite l'IA :",
          text: "« Audite ce site selon notre checklist, signale les 3 pires problèmes, puis corrige uniquement ceux-là. »",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 3 · Contrôle qualité",
      title: "Vérifications rigoureuses avant publication",
      lines: [
        {
          marker: "bullet",
          bold: "Adaptation mobile :",
          text: "Tester sur smartphone (360px) : aucun défilement horizontal, texte lisible, zones tactiles confortables.",
        },
        {
          marker: "bullet",
          bold: "Accessibilité & structure :",
          text: "Un seul H1, des titres ordonnés, un focus clavier visible, des textes alt descriptifs, un contraste suffisant.",
        },
        {
          marker: "bullet",
          bold: "Vrais liens, zéro faux formulaire :",
          text: "Utiliser un lien mailto: réel ou votre profil public LinkedIn au lieu de formulaires fictifs sans backend.",
        },
        {
          marker: "bullet",
          bold: "Audit de sécurité :",
          text: "Vérifier l'absence totale de mots de passe ou clés d'API dans les fichiers HTML, CSS ou JS.",
        },
      ],
    },
    {
      type: "block",
      label: "Étape 4",
      title: "Déploiement sur GitHub Pages",
    },
    {
      type: "content",
      eyebrow: "Étape 4 · Gestion de versions",
      title: "Git : suivre et sauvegarder votre travail",
      lines: [
        {
          marker: "bullet",
          bold: "Télécharger Git :",
          text: "Installeur gratuit pour Windows, macOS et Linux sur [git-scm.com/downloads](https://git-scm.com/downloads).",
        },
        {
          marker: "bullet",
          bold: "Démarrer le suivi :",
          text: "`git init` — transforme le dossier du projet en dépôt Git.",
        },
        {
          marker: "bullet",
          bold: "Préparer les fichiers :",
          text: "`git add .` — sélectionne tous les fichiers modifiés pour la prochaine sauvegarde.",
        },
        {
          marker: "bullet",
          bold: "Enregistrer une version :",
          text: "`git commit -m \"première version\"` — enregistre les fichiers préparés avec un court message.",
        },
        {
          marker: "bullet",
          bold: "Envoyer sur GitHub :",
          text: "`git push` — envoie vos commits vers le dépôt en ligne.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 4 · Hébergement gratuit",
      title: "GitHub : publier son site en 4 étapes",
      lines: [
        {
          marker: "number",
          number: 1,
          bold: "Créer le dépôt GitHub :",
          text: "Sur [GitHub](https://github.com), créer un dépôt public nommé `username.github.io` (en remplaçant username par votre identifiant exact).",
        },
        {
          marker: "number",
          number: 2,
          bold: "Déposer les fichiers :",
          text: "Pousser depuis Antigravity ou téléverser index.html, styles.css et script.js à la racine de la branche main.",
        },
        {
          marker: "number",
          number: 3,
          bold: "Activer GitHub Pages :",
          text: "Dans Settings → Pages : choisir « Deploy from a branch », sélectionner main et /(root), puis Save.",
        },
        {
          marker: "number",
          number: 4,
          bold: "Ouvrir le site en ligne :",
          text: "Après une à deux minutes, ouvrez `https://username.github.io` sur votre téléphone !",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 4 · Après la mise en ligne",
      title: "Aller plus loin après le lancement",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Nom de domaine personnalisé :",
          text: "Settings → Pages → Custom domain, un enregistrement DNS CNAME vers `username.github.io`, puis Enforce HTTPS.",
        },
        {
          marker: "bullet",
          bold: "Google Search Console :",
          text: "Validez le site, soumettez votre sitemap et suivez les rapports d'indexation et d'expérience de page.",
        },
        {
          marker: "bullet",
          bold: "Vérifiez l'aperçu du lien :",
          text: "Collez votre URL dans WhatsApp ou LinkedIn pour confirmer que la carte Open Graph s'affiche bien.",
        },
        {
          marker: "bullet",
          bold: "Le README fait partie du portfolio :",
          text: "Expliquez le projet, les outils utilisés et ce que vous avez appris — les recruteurs lisent aussi les dépôts.",
        },
        {
          marker: "bullet",
          bold: "Automatiser plus tard :",
          text: "Quand les fichiers simples ne suffisent plus, GitHub Actions peut construire et déployer à chaque push.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Étape 4 · Responsabilité & Éthique",
      title: "Vous êtes l'auteur et l'éditeur responsable",
      lines: [
        {
          marker: "bullet",
          bold: "Assumer son contenu :",
          text: "L'IA vous assiste pour coder et rédiger, mais vous portez l'entière responsabilité humaine et professionnelle de vos publications.",
        },
        {
          marker: "bullet",
          bold: "Les dépôts publics sont ouverts :",
          text: "Tout le monde peut consulter le code source sur GitHub ; ne commitez jamais de données privées ou de secrets.",
        },
        {
          marker: "bullet",
          bold: "Exactitude et rigueur :",
          text: "Auditez régulièrement votre site pour vérifier que vos liens et coordonnées restent valides et conformes à votre parcours.",
        },
        {
          marker: "bullet",
          bold: "Une démarche d'évolution :",
          text: "Votre portfolio est un projet vivant ; enrichissez-le chaque mois à mesure que vous progressez dans vos projets.",
        },
      ],
    },
    {
      type: "closing",
      title: "Votre prochaine étape : lancez-vous",
      message:
        "L'IA vous offre la rapidité et les outils. Votre authenticité, votre rigueur et votre pratique constante créent la valeur réelle.",
      items: [
        {
          label: "Planifier",
          value: "Briefez Gemini avec RCTFC, en n'utilisant que des faits vérifiés sur vous.",
        },
        {
          label: "Concevoir",
          value: "Une maquette, une palette 60-30-10, un contraste d'au moins 4,5:1.",
        },
        {
          label: "Développer & vérifier",
          value: "Responsive, accessible, prêt pour le SEO — puis un score Lighthouse de 90+.",
        },
        {
          label: "Publier",
          value: "Hébergement gratuit sur GitHub Pages à l'adresse `username.github.io`.",
        },
      ],
    },
    {
      type: "links",
      title: "Restons en contact",
      message: "Continuez à apprendre après l’atelier — scannez un code pour nous suivre.",
      links: [
        {
          label: "مركز التسلية العلمية الغلام محمد",
          kind: "Page Facebook",
          url: "https://www.facebook.com/profile.php?id=100093977586577",
        },
        {
          label: "نادي تمكين للمهارات الإعلامية",
          kind: "Page Facebook",
          url: "https://www.facebook.com/profile.php?id=61587196953545",
        },
        {
          label: "mahfoudh.dev",
          kind: "Site web",
          url: "https://mahfoudh.dev/",
        },
        {
          label: "Mahfoudh Tech",
          kind: "Chaîne YouTube",
          url: "https://www.youtube.com/@mahfoudh-tech-ar",
        },
      ],
    },
  ],
};

export default fr;
