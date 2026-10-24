export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Portfolio professionnel",
    description:
      "Photographe, ingénieur, assistant virtuel, coach, artiste, consultant… Pour présenter le profil, les compétences, les projets, les services et les coordonnées.",
    price: "200 € ",
    features: [
      "Site vitrine portfolio professionnel ",
      "Design adapté à votre activité",
      "Animations légères et navigation fluide.",
      "Le Scroll Fluid Classique professionnel (One-Page)",
      "Intégration WhatsApp ou autre",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
      "Optimisation mobile",
      "Optimisation SEO de base professionnel",
      "Nom de domaine inclus (1 an)",
      "Deadline : 5 à 7 jours ouvrés",
    ],
  },

  {
    name: "Site vitrine professionnel pour cabinet et établissement ",
    description:
      "Dentiste, barber, salon de beauté, studio, centre de formation, salle de sport, école… Pour présenter les prestations, l'équipe, les horaires, les coordonnées et les moyens de contact. ",
    price: "400 €",
    popular: true,
    features: [
      "Site vitrine professionnel et premium responsive",
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
      "Deadline : 5 à 15 jours ouvrés",
    ],
  },

  {
    name: "Site vitrine professionnel ou premium pour entreprise",
    description:
      "Génie civil, agriculture, immobilier, entreprises de services et PME… Pour présenter l'entreprise, ses projets, ses équipes, ses domaines d'activité et ses références.",
    price: "À partir de 700 €",
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Site vitrine professionnel et premium responsive",
      "Analyse personnalisée du projet",
      "Estimation selon les besoins",
      "Design adapté à votre activité",
      "Plusieurs pages",
      "Intégration WhatsApp ou autre",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
      "localisation sur google maps",
      "Optimisation mobile",
      "Optimisation SEO de base professionnel",
      "Nom de domaine inclus (1 an)",
      "Deadline : 7 à plusieus jours",
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