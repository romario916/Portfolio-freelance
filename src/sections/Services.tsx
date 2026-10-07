import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { services } from "../data/services";
import SectionTitle from "../components/common/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { language, t } = useLanguage();

  const serviceTranslations = {
    fr: [
      {
        title: "Site vitrine",
        description:
          "Un site professionnel pour présenter votre activité, vos services et permettre à vos clients de vous contacter facilement.",
        benefits: [
          "Design moderne et responsive",
          "Présentation claire de votre activité",
          "Formulaire et contact WhatsApp",
        ],
      },
      {
        title: "Restaurant & commerce",
        description:
          "Une présence en ligne adaptée aux restaurants, boutiques et commerces pour présenter vos produits et faciliter les demandes.",
        benefits: [
          "Menu ou catalogue en ligne",
          "Informations pratiques facilement accessibles",
          "Parcours simple pour contacter l'entreprise",
        ],
      },
      {
        title: "Refonte de site",
        description:
          "Modernisez un site existant avec une interface plus claire, plus actuelle et mieux adaptée aux smartphones.",
        benefits: [
          "Design modernisé",
          "Meilleure expérience mobile",
          "Structure plus claire pour vos visiteurs",
        ],
      },
      {
        title: "Maintenance mensuelle",
        description:
          "Gardez votre site à jour et professionnel grâce à un accompagnement régulier après sa mise en ligne.",
        benefits: [
          "Mises à jour de contenu",
          "Petites corrections et améliorations",
          "Suivi régulier du site",
        ],
      },
    ],
    en: [
      {
        title: "Business website",
        description:
          "A professional website to showcase your business, services and make it easy for customers to contact you.",
        benefits: [
          "Modern and responsive design",
          "Clear presentation of your business",
          "Contact form and WhatsApp",
        ],
      },
      {
        title: "Restaurant & business",
        description:
          "An online presence designed for restaurants, shops and local businesses to showcase their products and make inquiries easier.",
        benefits: [
          "Online menu or catalog",
          "Easy access to practical information",
          "Simple path to contact your business",
        ],
      },
      {
        title: "Website redesign",
        description:
          "Modernize an existing website with a clearer, more contemporary interface that works better on smartphones.",
        benefits: [
          "Modernized design",
          "Better mobile experience",
          "Clearer structure for visitors",
        ],
      },
      {
        title: "Monthly maintenance",
        description:
          "Keep your website up to date and professional with regular support after launch.",
        benefits: [
          "Content updates",
          "Small fixes and improvements",
          "Regular website monitoring",
        ],
      },
    ],
  };

  const translatedServices = services.map((service, index) => ({
    ...service,
    ...(serviceTranslations[language][index] ?? {}),
  }));

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {translatedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-blue-500 hover:via-violet-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-violet-500/20"
              >
                <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-8">
                  {/* Halo au survol */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 ring-4 ring-blue-50 transition-transform duration-300 group-hover:scale-105">
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-gray-950">
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-bold tracking-tight text-gray-950">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <div className="relative mt-6 h-px bg-gradient-to-r from-blue-200 via-violet-200 to-transparent" />

                  <ul className="relative mt-6 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 ring-4 ring-blue-100"
                          aria-hidden="true"
                        />

                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-violet-900 p-6 text-white shadow-2xl shadow-violet-900/30 ring-1 ring-white/10 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-10">
          {/* Halos décoratifs */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-violet-500/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-lg font-semibold sm:text-xl">
              {language === "fr"
                ? "Vous avez un projet différent ?"
                : "Do you have a different project?"}
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/80">
              {language === "fr"
                ? "Chaque activité a ses propres besoins. Parlons de votre projet pour trouver une solution adaptée."
                : "Every business has different needs. Let's discuss your project and find the right solution for you."}
            </p>
          </div>

          <a
            href="#contact"
            className="relative mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 lg:mt-0"
          >
            {language === "fr"
              ? "Discuter de mon projet"
              : "Discuss my project"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;