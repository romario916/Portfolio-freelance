export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essentiel",
    description:
      "Pour une petite activité qui souhaite avoir une présence professionnelle en ligne.",
    price: "150 €",
    features: [
      "Site vitrine responsive",
      "Présentation de l'activité",
      "Jusqu'à [4] pages",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
      "Optimisation mobile",
    ],
  },

  {
    name: "Professionnel",
    description:
      "Pour une entreprise qui souhaite présenter son activité de manière plus complète.",
    price: "300 €",
    popular: true,
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Design personnalisé",
      "Pages et sections supplémentaires",
      "Galerie ou catalogue",
      "Intégration WhatsApp",
      "Optimisation SEO de base",
    ],
  },

  {
    name: "Sur mesure",
    description:
      "Pour un projet avec des besoins spécifiques ou une structure plus avancée.",
    price: "A partir de 400 €",
    features: [
      "Analyse personnalisée du projet",
      "Fonctionnalités spécifiques",
      "Design adapté à votre activité",
      "Architecture évolutive",
      "Accompagnement au déploiement",
      "Estimation selon les besoins",
    ],
  },
];

export const maintenancePlan = {
  name: "Maintenance mensuelle",
  price: "17 € / mois",
  description:
    "Un accompagnement continu pour garder votre site à jour et faire évoluer son contenu.",
  features: [
    "Mises à jour du contenu",
    "Corrections de petits problèmes",
    "Petites améliorations",
    "Suivi du site",
  ],
};