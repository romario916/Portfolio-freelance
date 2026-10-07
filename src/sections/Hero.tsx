import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white"
    >
      {/* Arrière-plan décoratif */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-violet-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
        {/* ==================== TEXTE ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge disponibilité */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50"
                aria-hidden="true"
              />

              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"
                aria-hidden="true"
              />
            </span>

            {t.hero.eyebrow}
          </div>

          {/* Petit label */}
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-violet-600">
            <Sparkles
              className="h-4 w-4"
              aria-hidden="true"
            />

            <span>
              {language === "fr"
                ? "Développement web professionnel"
                : "Professional web development"}
            </span>
          </div>

          {/* Titre */}
          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t.hero.title}
          </h1>

          {/* Ligne décorative */}
          <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-yellow-400" />

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {t.hero.description}
          </p>

          {/* Points de confiance */}
          <div className="mt-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-blue-600"
                aria-hidden="true"
              />

              <span>
                {language === "fr"
                  ? "Design responsive"
                  : "Responsive design"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-violet-600"
                aria-hidden="true"
              />

              <span>
                {language === "fr"
                  ? "Performance optimisée"
                  : "Optimized performance"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-yellow-500"
                aria-hidden="true"
              />

              <span>
                {language === "fr"
                  ? "Accompagnement humain"
                  : "Personal support"}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {/* CTA principal */}
            <a
              href="#projets"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {t.hero.projectsButton}

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            {/* CTA secondaire */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
            >
              {t.hero.contactButton}
            </a>
          </div>

          {/* Localisation */}
          <p className="mt-6 text-xs font-medium text-gray-500">
            {t.hero.location}
          </p>
        </motion.div>

        {/* ==================== VISUEL ==================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Cercle décoratif */}
          <div
            className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-8 border-yellow-300/70 sm:-right-10 sm:-top-10 sm:h-36 sm:w-36"
            aria-hidden="true"
          />

          {/* Cercle violet */}
          <div
            className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-violet-600/10 blur-xl sm:-bottom-10 sm:-left-10 sm:h-32 sm:w-32"
            aria-hidden="true"
          />

          {/* Carte principale */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-2xl shadow-gray-900/10">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700">
              {/* Motif décoratif */}
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] border-white/10"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[35px] border-yellow-400/10"
                aria-hidden="true"
              />

              {/* Photo */}
              <div className="relative flex min-h-[31rem] items-end justify-center px-5 pt-10 sm:min-h-[35rem]">
                <img
                  src="/profil.webp"
                  alt="Romario, développeur frontend React"
                  className="relative z-10 h-full max-h-[34rem] w-full object-contain object-bottom drop-shadow-2xl"
                  loading="eager"
                />

                {/* Dégradé bas */}
                <div
                  className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-blue-700/80 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Badge technologie */}
              <div className="absolute bottom-5 left-5 z-30 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Code2
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-gray-500">
                      {language === "fr"
                        ? "Spécialité"
                        : "Specialty"}
                    </p>

                    <p className="text-sm font-bold text-gray-950">
                      React + TypeScript
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge remote */}
              <div className="absolute right-5 top-5 z-30 rounded-full border border-white/20 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md sm:right-6 sm:top-6">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-yellow-400"
                    aria-hidden="true"
                  />

                  <span className="text-xs font-bold text-gray-900">
                    {language === "fr"
                      ? "Remote"
                      : "Remote"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Badge flottant inférieur */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-5 right-3 z-40 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-xl sm:-right-5"
          >
            <p className="text-xs font-medium text-gray-500">
              {language === "fr"
                ? "Basé à"
                : "Based in"}
            </p>

            <p className="mt-1 text-sm font-bold text-gray-950">
              Antananarivo, Madagascar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;