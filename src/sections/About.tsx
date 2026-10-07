import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="a-propos"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-violet-50/50 py-20 sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Visuel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Cadre décoratif dégradé décalé */}
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 opacity-20 blur-sm sm:-left-5 sm:-top-5"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-violet-600 p-1 shadow-2xl shadow-violet-500/25">
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(1.5rem-4px)] bg-gray-200">
                <img
                  src="profil2.webp"
                  alt={
                    language === "fr"
                      ? "Romario, développeur frontend React"
                      : "Romario, React frontend developer"
                  }
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl shadow-violet-500/15 backdrop-blur-md sm:-right-6">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400" />
              </span>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  {language === "fr" ? "Disponible" : "Available"}
                </p>

                <p className="mt-0.5 text-sm font-bold text-gray-950">
                  {language === "fr" ? "En remote" : "Remote"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />

            {language === "fr" ? (
              <div className="mt-7 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  Je suis RAKOTOVAO Henry Romario, développeur frontend spécialisé dans la
                  création d'interfaces web avec React et TypeScript.
                </p>

                <p>
                  Je travaille principalement avec les commerces, restaurants,
                  salons et petites entreprises qui souhaitent améliorer leur
                  présence en ligne avec un site professionnel.
                </p>

                <p>
                  Ma façon de travailler est volontairement simple : comprendre
                  votre activité, proposer une solution adaptée et construire
                  une interface claire que vos clients peuvent utiliser
                  facilement.
                </p>

                <p>
                  Basé à Antananarivo, Madagascar, je travaille également avec
                  des clients à distance et je peux m'adapter aux échanges avec
                  des équipes et entreprises internationales.
                </p>
              </div>
            ) : (
              <div className="mt-7 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  I&apos;m Romario, a frontend developer specialized in
                  building web interfaces with React and TypeScript.
                </p>

                <p>
                  I mainly work with shops, restaurants, salons and small
                  businesses that want to improve their online presence with a
                  professional website.
                </p>

                <p>
                  My approach is intentionally simple: understand your
                  business, propose the right solution and build a clear
                  interface that your customers can use easily.
                </p>

                <p>
                  Based in Antananarivo, Madagascar, I also work remotely and
                  can adapt to communication with international teams and
                  businesses.
                </p>
              </div>
            )}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="group flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
                  <CheckCircle2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-950">
                    {language === "fr"
                      ? "Communication claire"
                      : "Clear communication"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {language === "fr"
                      ? "Des échanges simples, sans jargon inutile."
                      : "Simple communication without unnecessary technical jargon."}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
                  <CheckCircle2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-950">
                    {language === "fr"
                      ? "Travail soigné"
                      : "Quality work"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {language === "fr"
                      ? "Une attention portée aux détails et à la qualité du rendu."
                      : "Careful attention to details and overall quality."}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
                  <CheckCircle2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-950">
                    {language === "fr"
                      ? "Approche responsive"
                      : "Responsive approach"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {language === "fr"
                      ? "Le site est pensé pour différents écrans dès sa conception."
                      : "The website is designed for different screen sizes from the start."}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
                  <CheckCircle2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-950">
                    {language === "fr"
                      ? "Collaboration à distance"
                      : "Remote collaboration"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {language === "fr"
                      ? "Un fonctionnement adapté aux projets remote."
                      : "A workflow designed for remote projects."}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
            >
              {language === "fr"
                ? "Échanger sur votre projet"
                : "Discuss your project"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;