export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  // Ajoute ici uniquement de vrais témoignages.
  //
  // Exemple de structure :
  //
  // {
  //   id: "client-1",
  //   name: "Nom du client",
  //   role: "Fonction",
  //   company: "Entreprise",
  //   content: "Témoignage réel du client.",
  //   image: "/testimonials/client.webp",
  // },
  {
id:"client-1",
name:"Dr. R. Nadine",
role:"Chirurgien-Dentiste",
company:"Dentaire",
content:"La création de notre site vitrine a totalement fluidifié la communication avec nos patients. Ils trouvent facilement l'accès, nos consignes pré-opératoires et la prise de rendez-vous. Un travail professionnel, moderne et parfaitement conforme à nos exigences médicales.",
image:"nadine.jfif"
  },
   {
id:"client-2",
name:"Ing. J. Romeo",
role:"Entrepreneur",
company:"Génie civil",
content:"Grâce à notre nouveau site vitrine, nous mettons désormais en valeur nos références de chantiers et notre parc matériel de manière professionnelle. Nos prospects trouvent rapidement nos expertises et nous envoient directement leurs appels d'offres.",
image:"romeo.jfif"
  },
];