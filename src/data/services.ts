import {
  Building2,
  RefreshCw,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    icon: Building2,
    title: "Site vitrine",
    description:
      "Un site professionnel pour présenter votre entreprise, vos services et vos coordonnées.",
    benefits: [
      "Présentation claire de votre activité",
      "Design adapté à votre image",
      "Formulaire et moyens de contact",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Restaurant & commerce",
    description:
      "Un site pensé pour mettre vos produits, menus ou services en valeur et faciliter la prise de contact.",
    benefits: [
      "Menu ou catalogue facile à consulter",
      "Informations pratiques bien visibles",
      "Contact rapide via WhatsApp",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refonte de site",
    description:
      "Modernisez un site existant pour améliorer son apparence, son expérience mobile et sa clarté.",
    benefits: [
      "Interface plus moderne",
      "Meilleure expérience utilisateur",
      "Structure plus claire et responsive",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Un accompagnement après la mise en ligne pour garder votre site à jour et fiable.",
    benefits: [
      "Mise à jour du contenu",
      "Corrections et améliorations",
      "Suivi selon vos besoins",
    ],
  },
];