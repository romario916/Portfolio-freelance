import { Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { maintenancePlan, pricingPlans } from "../data/pricing";
import { useLanguage } from "../context/LanguageContext";

const Pricing = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="tarifs"
      aria-labelledby="pricing-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch lg:mt-16">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 sm:p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-950 via-blue-900 to-violet-900 text-white shadow-2xl shadow-violet-900/30 ring-1 ring-white/10 lg:-my-3 lg:py-11"
                  : "border border-blue-100 bg-white shadow-sm hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-500/15"
              }`}
            >
              {/* Halos décoratifs */}
              {plan.popular ? (
                <>
                  <div
                    className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-violet-500/40 blur-3xl"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <div
                  className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              )}

              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-950 shadow-lg shadow-yellow-400/30">
                  {language === "fr" ? "Recommandé" : "Recommended"}
                </span>
              )}

              <div className={`relative ${plan.popular ? "pr-24" : ""}`}>
                <h3
                  className={`text-xl font-bold tracking-tight ${
                    plan.popular ? "text-white" : "text-gray-950"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    plan.popular ? "text-blue-100/80" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="relative mt-7">
                <p
                  className={`text-3xl font-extrabold tracking-tight ${
                    plan.popular
                      ? "text-white"
                      : "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                  }`}
                >
                  {plan.price}
                </p>

                {plan.price !== "Sur devis" && (
                  <p
                    className={`mt-1 text-xs ${
                      plan.popular ? "text-blue-100/60" : "text-gray-500"
                    }`}
                  >
                    {language === "fr"
                      ? "Tarif indicatif à confirmer selon le projet"
                      : "Indicative price to be confirmed according to the project"}
                  </p>
                )}
              </div>

              <div
                className={`relative mt-7 h-px ${
                  plan.popular
                    ? "bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                    : "bg-gradient-to-r from-blue-200 via-violet-200 to-transparent"
                }`}
              />

              <ul className="relative mt-7 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-white/10 text-yellow-300 ring-1 ring-white/20"
                          : "bg-gradient-to-br from-blue-600 to-violet-600 text-white"
                      }`}
                    >
                      <Check
                        className="h-3 w-3"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>

                    <span
                      className={
                        plan.popular ? "text-blue-50/90" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`relative mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  plan.popular
                    ? "bg-yellow-400 text-gray-950 shadow-lg shadow-yellow-400/30 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus-visible:ring-yellow-300 focus-visible:ring-offset-blue-950"
                    : "border border-blue-200 bg-white text-blue-700 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-500/25 focus-visible:ring-blue-600"
                }`}
              >
                {language === "fr"
                  ? "Discuter de cette offre"
                  : "Discuss this offer"}
              </a>
            </motion.article>
          ))}
        </div>

        {/* Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 p-px shadow-sm"
        >
          <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-white via-blue-50/50 to-violet-50/60 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            {/* Halo décoratif */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 ring-4 ring-blue-50">
                  <MessageCircle
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-gray-950">
                  {maintenancePlan.name}
                </h3>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                {maintenancePlan.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {maintenancePlan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                      <Check
                        className="h-3 w-3"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>

                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-6 shrink-0 lg:mt-0">
              <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                {maintenancePlan.price}
              </p>

              <a
                href="#contact"
                className="mt-3 inline-flex rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
              >
                {language === "fr"
                  ? "Demander un devis"
                  : "Request a quote"}
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          {language === "fr"
            ? "Les tarifs définitifs seront confirmés après discussion du projet, de son contenu et de ses fonctionnalités."
            : "Final pricing will be confirmed after discussing the project, its content and its features."}
        </p>
      </div>
    </section>
  );
};

export default Pricing;