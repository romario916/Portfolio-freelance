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
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      {/* Trame de points discrète */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Arrière-plan décoratif */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-200/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-violet-200/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-200/50 blur-3xl"
        aria-hidden="true"
      />

      {/* Cercles décoratifs */}
      <div
        className="pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full border border-blue-200/60 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 top-36 hidden h-48 w-48 rounded-full border border-violet-200/60 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
        {/* ==================== TEXTE + IMAGE DE FOND (mobile et tablette) ==================== */}
        <div className="relative isolate -mx-5 overflow-hidden px-5 py-12 sm:-mx-6 sm:px-6 sm:py-16 lg:mx-0 lg:overflow-visible lg:p-0">
          {/* Image d'arrière-plan : téléphone et tablette uniquement */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
          >
            <img
              src="/profil2.webp"
              alt="Romario, développeur frontend React"
              className="absolute inset-0 h-full w-full object-cover object-[78%_top] sm:object-[right_top]"
              loading="eager"
            />

            {/* Voile léger : la photo reste bien visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent sm:from-white/80 sm:via-white/40" />

            {/* Fondu doux en haut et en bas pour fondre l'image dans la page */}
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge disponibilité */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/85 px-5 py-2 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-500/10 ring-4 ring-blue-50 backdrop-blur-md">
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 ring-1 ring-violet-200">
              <Sparkles className="h-4 w-4" aria-hidden="true" />

              <span>
                {language === "fr"
                  ? "Développement web professionnel"
                  : "Professional web development"}
              </span>
            </div>

            {/* Titre : ombre blanche pour rester lisible sur la photo */}
            <h1
              id="hero-title"
              className="max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-tight text-gray-950 [text-shadow:0_2px_18px_rgba(255,255,255,0.95),0_0_6px_rgba(255,255,255,0.8)] sm:text-5xl lg:text-6xl lg:[text-shadow:none] xl:text-7xl"
            >
              {t.hero.title}
            </h1>

            {/* Ligne décorative */}
            <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-yellow-400 shadow-lg shadow-violet-500/30" />

            {/* Description : petit panneau translucide sur mobile et tablette */}
            <p className="mt-8 max-w-2xl rounded-2xl bg-white/60 p-4 text-base leading-7 text-gray-800 backdrop-blur-sm sm:text-lg sm:leading-8 lg:bg-transparent lg:p-0 lg:text-gray-700 lg:backdrop-blur-none">
              {t.hero.description}
            </p>

            {/* Points de confiance */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-800">
              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
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

              <div className="flex items-center gap-2 rounded-full border border-violet-100 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
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

              <div className="flex items-center gap-2 rounded-full border border-yellow-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
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

            {/* Boutons d'action */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* Bouton projets */}
              <a
                href="#projets"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 pl-7 pr-3 text-sm font-bold text-white shadow-xl shadow-blue-600/30 ring-1 ring-blue-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {/* Reflet qui traverse le bouton au survol */}
                <span
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span className="relative">{t.hero.projectsButton}</span>

                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-700 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </span>
              </a>

              {/* Bouton contact */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400 px-8 py-3.5 text-sm font-bold text-gray-950 shadow-xl shadow-yellow-400/30 ring-4 ring-yellow-100 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
              >
                {t.hero.contactButton}
              </a>
            </div>

            {/* Localisation */}
            <p className="mt-7 inline-flex items-center gap-2 rounded-r-full border-l-2 border-yellow-400 bg-white/70 py-1.5 pl-3 pr-4 text-xs font-medium text-gray-700 backdrop-blur-sm lg:bg-transparent lg:py-0 lg:pr-0 lg:backdrop-blur-none">
              {t.hero.location}
            </p>
          </motion.div>
        </div>

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
          {/* Halo derrière la carte */}
          <div
            className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/30 to-violet-500/30 blur-3xl"
            aria-hidden="true"
          />

          {/* Anneaux d'orbite */}
          <div
            className="absolute -inset-6 hidden rounded-[2.75rem] border border-dashed border-blue-300/60 sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-12 hidden rounded-[3.5rem] border border-violet-200/60 lg:block"
            aria-hidden="true"
          />

          {/* Cercle décoratif */}
          <div
            className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-8 border-yellow-300/70 sm:-right-10 sm:-top-10 sm:h-36 sm:w-36"
            aria-hidden="true"
          />

          {/* Cercle violet */}
          <div
            className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-violet-600/20 blur-xl sm:-bottom-10 sm:-left-10 sm:h-32 sm:w-32"
            aria-hidden="true"
          />

          {/* Points décoratifs */}
          <div
            className="absolute -bottom-6 -right-10 hidden h-24 w-24 [background-image:radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:10px_10px] opacity-40 sm:block"
            aria-hidden="true"
          />

          {/* Carte principale avec contour dégradé */}
          <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-400 via-violet-300 to-yellow-300 p-px shadow-2xl shadow-violet-900/20">
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-white p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700">
                {/* Trame interne */}
                <div
                  className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
                  aria-hidden="true"
                />

                {/* Halo interne */}
                <div
                  className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-3xl"
                  aria-hidden="true"
                />

                {/* Motif décoratif */}
                <div
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] border-white/10"
                  aria-hidden="true"
                />

                <div
                  className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[35px] border-yellow-400/10"
                  aria-hidden="true"
                />

                {/* Photo de profil */}
                <div className="relative flex min-h-[31rem] items-end justify-center px-5 pt-10 sm:min-h-[35rem]">
                  <img
                    src="/hero.webp"
                    alt="Romario, développeur frontend React"
                    className="relative z-10 h-full max-h-[34rem] w-full object-contain object-bottom drop-shadow-2xl"
                    loading="eager"
                  />

                  {/* Dégradé inférieur */}
                  <div
                    className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-blue-700/80 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Badge technologie */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-5 left-5 z-30 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-2xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-xl sm:bottom-6 sm:left-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/30">
                      <Code2 className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-[11px] font-medium text-gray-500">
                        {language === "fr" ? "Spécialité" : "Specialty"}
                      </p>

                      <p className="text-sm font-bold text-gray-950">
                        React + TypeScript
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Badge disponibilité à distance */}
                <div className="absolute right-5 top-5 z-30 rounded-full border border-white/40 bg-white/90 px-3.5 py-2 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-xl sm:right-6 sm:top-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                    </span>

                    <span className="text-xs font-bold text-gray-900">
                      Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge localisation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-5 right-3 z-40 rounded-2xl border border-gray-200 bg-white/95 px-5 py-3 shadow-2xl shadow-gray-900/15 ring-1 ring-yellow-200 backdrop-blur-xl sm:-right-5"
          >
            <span
              className="absolute inset-y-3 left-0 w-1 rounded-full bg-gradient-to-b from-blue-500 via-violet-500 to-yellow-400"
              aria-hidden="true"
            />

            <p className="pl-2 text-xs font-medium text-gray-500">
              {language === "fr" ? "Basé à" : "Based in"}
            </p>

            <p className="mt-1 pl-2 text-sm font-bold text-gray-950">
              Antananarivo, Madagascar
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Filet lumineux en bas */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;