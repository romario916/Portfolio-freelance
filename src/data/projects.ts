import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "tendem",
    name: "GAMANTA",
    category: "Restaurant / Fast-food",
    description:
      "Site vitrine moderne conçu pour présenter les produits, le menu et les informations pratiques d'un établissement de restauration.",
    problem:
      "[À compléter] Présenter clairement le menu et permettre aux visiteurs de trouver rapidement les informations importantes.",
    solution:
      "Création d'une interface responsive avec présentation du menu, galerie, informations sur l'établissement et possibilité de contacter l'entreprise via WhatsApp.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "gamanta.webp",
    liveUrl: "https://restaurant-fast-food-frontend.vercel.app/",
    githubUrl: "[LIEN GITHUB]",
  },

  {
    id: "rosa-boutique",
    name: "ROSA Boutique",
    category: "Boutique en ligne",
    description:
      "Boutique web moderne permettant de présenter des produits et de préparer des commandes directement via WhatsApp.",
    problem:
      "[À compléter] Présenter les produits de manière claire et simplifier le parcours jusqu'à la commande.",
    solution:
      "Création d'une boutique responsive avec catalogue, fiches produits, sélection des variantes, panier et préparation de commande via WhatsApp.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "rosa.webp",
    liveUrl: "boutique-en-ligne-frontend.vercel.app",
    githubUrl: "[LIEN GITHUB]",
  },

  {
    id: "vanesa-baute",
    name: "Vanesa Bauté",
    category: "Salon de beauté",
    description:
      "Site vitrine élégant destiné à présenter les services d'un salon de beauté et faciliter la prise de rendez-vous.",
    problem:
      "[À compléter] Présenter les prestations et permettre aux clientes de prendre facilement contact avec le salon.",
    solution:
      "Création d'une interface responsive avec présentation des services, galerie, informations pratiques et prise de contact via WhatsApp.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "vanesa.webp",
    liveUrl: "https://sallon-de-baute.vercel.app/",
    githubUrl: "https://www.facebook.com/mario.santohhr?locale=fr_FR",
  },
];