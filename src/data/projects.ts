import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "tendem",
    name: "Cabinet dentaire",
    category: "Dentiste",
    description:
      "Site vitrine haut de gamme dédié aux chirurgiens-dentistes, idéal pour valoriser l'expertise du cabinet, présenter l'éventail des soins et rassurer la patientèle.",
    problem:
      "Présenter clairement l'ensemble des traitements et permettre aux visiteurs d'accéder facilement aux informations essentielles et aux coordonnées.",
    solution:
      "Création d'une interface responsive avec présentation de la carte des soins, galerie photos du cabinet, informations pratiques de l'établissement et possibilité de contacter l'équipe via WhatsApp.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "dentaire.png",
    liveUrl: "https://dentiste-professionnelle.vercel.app/",
    githubUrl: "[LIEN GITHUB]",
  },

  {
    id: "rosa-genie-civil",
    name: "BTP Pro",
    category: "Génie civil",
    description:
      "Site vitrine moderne conçu pour présenter les expertises techniques, les réalisations de chantiers et les informations pratiques d’une entreprise de génie civil.",
    problem:
      "Structurer l'offre de services de manière claire et faciliter le parcours client jusqu'à l'envoi d'une demande d'étude ou de chiffrage.",
    solution:
      "Présenter clairement l’éventail des prestations et savoir-faire tout en permettant aux prospects et partenaires d'accéder rapidement aux informations clés et aux références du cabinet.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "civil.png",
    liveUrl: "https://site-pour-genie-civil.vercel.app/",
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