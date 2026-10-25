export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export const galleryCategories = [
  "Toutes",
  "Portraits",
  "Voyages",
  "Lifestyle",
  "Autres",
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "Portrait",
    category: "Portraits",
    image: "/photo1.webp",
    description: "Un portrait personnel.",
  },
  {
    id: 2,
    title: "Voyage",
    category: "Voyages",
    image: "/photo2.webp",
    description: "Un souvenir de voyage.",
  },
  {
    id: 3,
    title: "Lifestyle",
    category: "Lifestyle",
    image: "/photo5.webp",
    description: "Un moment de vie.",
  },
  {
    id: 4,
    title: "Souvenir",
    category: "Autres",
    image: "/photo4.webp",
  },
  {
    id: 5,
    title: "Portrait personnel",
    category: "Portraits",
    image: "/photo3.webp",
  },
  {
    id: 6,
    title: "Découverte",
    category: "Voyages",
    image: "/photo6.webp",
  },
];