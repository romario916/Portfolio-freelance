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
name:"Romario",
role:"Entrepreneur",
company:"Gamanta",
content:"Témoignage réel du client.",
image:"photo.jpg"
  },
   {
id:"client-1",
name:"Romario",
role:"Entrepreneur",
company:"Gamanta",
content:"Témoignage réel du client.",
image:"photo.jpg"
  },
];