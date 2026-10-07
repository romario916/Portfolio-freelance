import {
  ArrowRight,
  CheckCircle2,
  Code2,
  MessageCircle,
  Rocket,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

const Process = () => {
  const { language, t } = useLanguage();

  const steps =
    language === "fr"
      ? [
          {
            number: "01",
            icon: MessageCircle,
            title: "Échange",
            description:
              "Nous échangeons sur votre activité, vos besoins, vos objectifs et les fonctionnalités réellement utiles pour votre projet.",
          },
          {
            number: "02",
            icon: Search,
            title: "Cadrage",
            description:
              "Nous définissons la structure du site, les contenus nécessaires et les priorités avant de commencer le développement.",
          },
          {
            number: "03",
            icon: Code2,
            title: "Développement",
            description:
              "Je transforme le projet en une interface moderne, responsive et adaptée aux smartphones, tablettes et ordinateurs.",
          },
          {
            number: "04",
            icon: Rocket,
            title: "Mise en ligne",
            description:
              "Une fois le site validé, je prépare son déploiement et vous accompagne jusqu'à sa mise en ligne.",
          },
          {
            number: "05",
            icon: CheckCircle2,
            title: "Suivi",
            description:
              "Après la livraison, vous pouvez continuer à bénéficier d'un accompagnement pour les corrections et évolutions.",
          },
        ]
      : [
          {
            number: "01",
            icon: MessageCircle,
            title: "Discussion",
            description:
              "We discuss your business, needs, goals and the features that are actually useful for your project.",
          },
          {
            number: "02",
            icon: Search,
            title: "Planning",
            description:
              "We define the website structure, required content and priorities before development begins.",
          },
          {
            number: "03",
            icon: Code2,
            title: "Development",
            description:
              "I turn the project into a modern, responsive interface adapted to smartphones, tablets and computers.",
          },
          {
            number: "04",
            icon: Rocket,
            title: "Launch",
            description:
              "Once the website is approved, I prepare the deployment and support you through the launch.",
          },
          {
            number: "05",
            icon: CheckCircle2,
            title: "Support",
            description:
              "After delivery, you can continue to receive support for fixes, updates and future improvements.",
          },
        ];

  return (
    <section
      id="processus"
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/40 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div className="h-full rounded-3xl bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 p-px shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:from-blue-500 group-hover:via-violet-500 group-hover:to-violet-600 group-hover:shadow-2xl group-hover:shadow-violet-500/20">
                  <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-6">
                    {/* Halo au survol */}
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center justify-between">
                      <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                        {step.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 ring-4 ring-blue-50 transition-transform duration-300 group-hover:scale-105">
                        <Icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="relative mt-5 h-px bg-gradient-to-r from-blue-200 via-violet-200 to-transparent" />

                    <h3 className="relative mt-5 text-lg font-bold tracking-tight text-gray-950">
                      {step.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-500 shadow-sm">
                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-violet-900 p-7 text-white shadow-2xl shadow-violet-900/30 ring-1 ring-white/10 sm:p-9 lg:mt-16 lg:p-10">
          {/* Halos décoratifs */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-violet-500/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xl font-bold sm:text-2xl">
                {language === "fr"
                  ? "Vous avez déjà une idée de votre site ?"
                  : "Already have an idea for your website?"}
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/80 sm:text-base">
                {language === "fr"
                  ? "Expliquez-moi simplement votre projet. Vous n'avez pas besoin de connaître les termes techniques : je vous aiderai à définir la meilleure approche."
                  : "Simply tell me about your project. You don't need to know technical terms: I'll help you define the right approach."}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 lg:mt-0"
            >
              {language === "fr"
                ? "Parlons de votre projet"
                : "Let's discuss your project"}

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;