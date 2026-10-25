import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  galleryCategories,
  galleryPhotos,
} from "../data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof galleryPhotos)[number] | null
  >(null);

  const filteredPhotos =
    activeCategory === "Toutes"
      ? galleryPhotos
      : galleryPhotos.filter(
          (photo) => photo.category === activeCategory,
        );

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#060914] px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      {/* Halos et filets lumineux */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-100 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] backdrop-blur-xl">
            <ImageIcon className="h-4 w-4 text-violet-300" />
            Ma galerie personnelle
          </span>

          <h2 className="bl-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mes photos,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              mes souvenirs
            </span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-blue-400 to-violet-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-violet-400/70" />
          </div>

          <p className="mt-6 text-base leading-8 text-slate-300/70 sm:text-lg">
            Quelques instants de ma vie, mes découvertes et mes
            souvenirs préférés réunis dans une galerie.
          </p>
        </motion.div>

        {/* Catégories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060914] ${
                activeCategory === category
                  ? "border-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 font-semibold text-white shadow-[0_10px_35px_-10px_rgba(139,92,246,0.8)]"
                  : "border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur-md hover:border-blue-400/50 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photos */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`Agrandir la photo : ${photo.title}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900 text-left shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dégradés */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060914]/95 via-[#060914]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-violet-600/0 transition-all duration-500 group-hover:from-blue-600/15 group-hover:to-violet-600/20" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent" />

              {/* Bordure lumineuse au survol */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-violet-300/60" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 transition-transform duration-700 group-hover:scale-x-100" />

              {/* Légende */}
              <div className="absolute inset-x-0 bottom-0 p-3 transition-transform duration-500 group-hover:-translate-y-1 sm:p-6">
                <span className="inline-block rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-md sm:text-xs">
                  {photo.category}
                </span>
                <h3 className="bl-display mt-2.5 text-base font-semibold leading-tight text-white sm:text-2xl">
                  {photo.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Agrandissement de la photo */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04060F]/95 p-4 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />
              <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]" />

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Fermer la photo"
                className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:rotate-90 hover:border-violet-300/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <X className="h-5 w-5" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#0B1022] shadow-[0_40px_120px_-20px_rgba(0,0,0,1),0_0_80px_-30px_rgba(139,92,246,0.5)]"
              >
                <div className="pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[78vh] w-full object-contain"
                />

                <div className="border-t border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6">
                  <h3 className="bl-display text-xl font-semibold text-white sm:text-2xl">
                    {selectedPhoto.title}
                  </h3>
                  {selectedPhoto.description && (
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300/70">
                      {selectedPhoto.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}