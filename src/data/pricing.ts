export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Paiement en 3 tranches (Facilité de paiement)",
    description:
      "1er versement (1/3) : À la livraison finale du projet. 2ème versement (1/3) : 30 jours après la livraison. 3ème versement (1/3) : 60 jours après la livraison.",
    price: "60 € par tranche",
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Site vitrine professionnel et premium responsive",
      "Analyse personnalisée du projet",
      "Estimation selon les besoins",
      "Design adapté à votre activité",
      "Jusqu'à [3] à [7] pages",
      "Intégration WhatsApp ou autre",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
       "localisation sur google maps",
      "Optimisation mobile",
      "Optimisation SEO de base professionnel",
      "Nom de domaine inclus (1 an)",
    ],
  },

  {
    name: "Paiement en une fois ",
    description:
      "Règlement de 100 % du montant global à la livraison finale du projet. ",
    price: "160 €",
    popular: true,
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Site vitrine professionnel et premium responsive",
      "Analyse personnalisée du projet",
      "Estimation selon les besoins",
      "Design adapté à votre activité",
      "Jusqu'à [3] à [7] pages",
      "Intégration WhatsApp ou autre",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
       "localisation sur google maps",
      "Optimisation mobile",
      "Optimisation SEO de base professionnel",
      "Nom de domaine inclus (1 an)",
    ],
  },

  {
    name: "Paiement en 5 tranches (Facilité de paiement)",
    description:
      "1er versement (1/5) : À la livraison finale du projet. 2ème versement (2/5) : 1 mois après la livraison. 3ème versement (3/5) : 2 mois après la livraison. 4ème versement (4/5) : 3 mois après la livraison. 5ème versement (5/5) : 4 mois après la livraison.",
    price: "39 € par tranche",
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Site vitrine professionnel et premium responsive",
      "Analyse personnalisée du projet",
      "Estimation selon les besoins",
      "Design adapté à votre activité",
      "Jusqu'à [3] à [7] pages",
      "Intégration WhatsApp ou autre",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
      "localisation sur google maps",
      "Optimisation mobile",
      "Optimisation SEO de base professionnel",
      "Nom de domaine inclus (1 an)",
    ],
  },
];

export const maintenancePlan = {
  name: "Maintenance mensuelle est gratuit",
  price: "0 € / mois",
  description:
    "Un accompagnement continu pour garder votre site à jour et faire évoluer son contenu.",
  features: [
    "Mises à jour du contenu",
    "Corrections de petits problèmes",
    "Petites améliorations",
    "Suivi du site",
  ],
};