
import {
  Check,
  MessageCircle,
   Landmark,
  CreditCard,
  CalendarCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { maintenancePlan, pricingPlans } from "../data/pricing";
import { useLanguage } from "../context/LanguageContext";

const Pricing = () => {
  const { language, t } = useLanguage();

  // Formatage des montants en euros
  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-GB", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 2,
    }).format(amount);

  // Options de paiement : montants de référence
  const paymentOptions = [
    {
      count: 2,
      price: 200,
      title:
        language === "fr" ? "Paiement en 2 fois" : "2 installments",
      description:
        language === "fr"
          ? "Exemple pour un portfolio à 200 €"
          : "Example for a €200 portfolio",
      icon: Wallet,
      steps: [
        {
          percent: 50,
          label:
            language === "fr" ? "1er versement (1/2) : À la livraison finale du projet." : "1st installment (1/2): Upon final delivery of the project.",
        },
        {
          percent: 50,
          label:
            language === "fr" ? "2ème versement (2/2) : 30 jours après la livraison." : "2nd installment (2/2): 30 days after delivery.",
        },
      ],
    },
    {
      count: 3,
      price: 400,
      title:
        language === "fr" ? "Paiement en 3 fois" : "3 installments",
      description:
        language === "fr"
          ? "Exemple pour un site à 400 €"
          : "Example for a €400 website",
      icon: CalendarCheck,
      steps: [
        {
          percent: 40,
          label:
            language === "fr" ? "1er versement (1/3) : À la livraison finale du projet." : "1st installment (1/3): Upon final delivery of the project.",
        },
        {
          percent: 30,
          label:
            language === "fr"
              ? "2ème versement (1/3) : 30 jours après la livraison."
              : "2nd installment (1/3): 30 days after delivery.",
        },
        {
          percent: 30,
          label:
            language === "fr" ? "3ème versement (1/3) : 60 jours après la livraison." : "3rd installment (1/3): 60 days after delivery.",
        },
      ],
    },
    {
      count: 4,
      price: 700,
      title:
        language === "fr" ? "Paiement en 4 fois" : "4 installments",
      description:
        language === "fr"
          ? "Exemple pour un projet à 700 €"
          : "Example for a €700 project",
      icon: CreditCard,
      steps: [
        {
          percent: 30,
          label:
            language === "fr" ? "1er versement (1/4) : À la livraison finale du projet." : "1st installment (1/4): Upon final delivery of the project.",
        },
        {
          percent: 25,
          label:
            language === "fr"
              ? "2ème versement (2/4) : 1 mois après la livraison."
              : "2nd installment (2/4): 1 months after delivery.",
        },
        {
          percent: 25,
          label:
            language === "fr"
              ? "3ème versement (3/4) : 2 mois après la livraison."
              : "3rd installment (3/4): 2 months after delivery.",
        },
        {
          percent: 20,
          label:
            language === "fr" ? "4ème versement (4/4) : 3 mois après la livraison." : "4th installment (4/4): 3 months after delivery.",
        },
      ],
    },
  ];

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
        {/* En-tête des tarifs */}
        <SectionTitle
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        {/* Cartes des offres */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:items-stretch">
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
              {/* Décoration */}
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

              {/* Badge populaire */}
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-950 shadow-lg shadow-yellow-400/30">
                  {language === "fr" ? "Le plus choisi" : "Most popular"}
                </span>
              )}

              {/* Titre et description */}
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

              {/* Prix */}
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

                <p
                  className={`mt-2 max-w-xs text-xs leading-5 ${
                    plan.popular ? "text-blue-100/70" : "text-gray-500"
                  }`}
                >
                  {language === "fr"
                    ? "Prix indicatif. Le tarif final dépend des fonctionnalités et du périmètre du projet."
                    : "Indicative price. The final rate depends on the project's scope and features."}
                </p>
              </div>

              {/* Séparateur */}
              <div
                className={`relative mt-7 h-px ${
                  plan.popular
                    ? "bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                    : "bg-gradient-to-r from-blue-200 via-violet-200 to-transparent"
                }`}
              />

              {/* Liste des fonctionnalités */}
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

              {/* Bouton */}
              <a
                href="#contact"
                className={`relative mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  plan.popular
                    ? "bg-yellow-400 text-gray-950 shadow-lg shadow-yellow-400/30 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus-visible:ring-yellow-300 focus-visible:ring-offset-blue-950"
                    : "border border-blue-200 bg-white text-blue-700 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-500/25 focus-visible:ring-blue-600"
                }`}
              >
                {language === "fr"
                  ? "Parlons de votre projet"
                  : "Let's discuss your project"}
              </a>
            </motion.article>
          ))}
        </div>

        {/* Facilités de paiement */}
        <div className="mt-20">
          <SectionTitle
            eyebrow={
              language === "fr" ? "Paiement flexible" : "Flexible payment"
            }
            title={
              language === "fr"
                ? "Des facilités de paiement est possible pour adaptées à votre budget"
                : "Payment options tailored to your budget"
            }
            description={
              language === "fr"
                ? "Répartissez le coût de votre site en plusieurs échéances. Voici des exemples de paiement selon le budget du projet."
                : "Spread the cost of your website over several installments. Here are payment examples for different project budgets."
            }
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {paymentOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <motion.article
                  key={option.count}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                    option.count === 3
                      ? "border-violet-300 bg-gradient-to-br from-blue-950 via-blue-900 to-violet-900 text-white shadow-violet-900/15"
                      : "border-blue-100 bg-white text-gray-950 hover:border-violet-300"
                  }`}
                >
                  {/* Icône */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                      option.count === 3
                        ? "bg-white/10 text-yellow-300 ring-1 ring-white/15"
                        : "bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold tracking-tight">
                    {option.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm ${
                      option.count === 3
                        ? "text-blue-100/80"
                        : "text-gray-500"
                    }`}
                  >
                    {option.description}
                  </p>

                  {/* Prix total de référence */}
                  <div
                    className={`mt-5 rounded-2xl p-4 ${
                      option.count === 3 ? "bg-white/10" : "bg-blue-50"
                    }`}
                  >
                    <p
                      className={`text-xs ${
                        option.count === 3
                          ? "text-blue-100/80"
                          : "text-gray-500"
                      }`}
                    >
                      {language === "fr"
                        ? "Budget de référence"
                        : "Reference budget"}
                    </p>

                    <p
                      className={`mt-1 text-2xl font-extrabold ${
                        option.count === 3
                          ? "text-yellow-300"
                          : "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                      }`}
                    >
                      {formatPrice(option.price)}
                    </p>
                  </div>

                  {/* Séparateur */}
                  <div
                    className={`my-6 h-px ${
                      option.count === 3
                        ? "bg-white/15"
                        : "bg-gradient-to-r from-blue-200 via-violet-200 to-transparent"
                    }`}
                  />

                  {/* Échéances et montants */}
                  <ul className="flex-1 space-y-5">
                    {option.steps.map((step, stepIndex) => (
                      <li
                        key={`${option.count}-${stepIndex}`}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            option.count === 3
                              ? "bg-white/10 text-yellow-300"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          <Check
                            className="h-3.5 w-3.5"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>

                        <div>
                          <p className="text-sm font-semibold">
                            {language === "fr"
                              ? `Tranche ${stepIndex + 1}`
                              : `Installment ${stepIndex + 1}`}
                            {" — "}
                            {step.percent}%
                          </p>

                          <p
                            className={`mt-0.5 text-xs ${
                              option.count === 3
                                ? "text-blue-100/80"
                                : "text-gray-500"
                            }`}
                          >
                            {step.label}
                          </p>

                          <p
                            className={`mt-1 text-lg font-extrabold ${
                              option.count === 3
                                ? "text-yellow-300"
                                : "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                            }`}
                          >
                            {formatPrice(
                              (option.price * step.percent) / 100
                            )}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Bouton de contact */}
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      option.count === 3
                        ? "bg-yellow-400 text-gray-950 hover:bg-yellow-300 focus-visible:ring-yellow-300 focus-visible:ring-offset-blue-950"
                        : "border border-blue-200 bg-white text-blue-700 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white focus-visible:ring-blue-600"
                    }`}
                  >
                    <MessageCircle
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    {language === "fr"
                      ? "Choisir cette option"
                      : "Choose this option"}
                  </a>
                </motion.article>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-gray-500">
            {language === "fr"
              ? "Les montants présentés sont des exemples calculés sur les budgets indiqués. Pour chaque projet, le prix total et les dates des échéances sont confirmés ensemble avant le démarrage."
              : "The amounts shown are examples based on the budgets listed. For each project, the total price and installment dates are agreed upon before work begins."}
          </p>
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

        {/* Note tarifaire */}
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          {language === "fr"
            ? "Les tarifs définitifs sont confirmés après analyse du projet, de son contenu et de ses fonctionnalités."
            : "Final prices are confirmed after reviewing the project's scope, content, and features."}
        </p>


        
        {/* Modes de paiement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/5 sm:p-8 lg:p-10"
        >
          {/* Halos décoratifs */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
                {language === "fr"
                  ? "Paiement sécurisé"
                  : "Secure payments"}
              </span>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
                {language === "fr"
                  ? "Des moyens de paiement adaptés à vos besoins"
                  : "Payment methods tailored to your needs"}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {language === "fr"
                  ? "Choisissez le mode de paiement qui vous convient pour régler votre projet, depuis Madagascar ou depuis l'étranger."
                  : "Choose the payment method that suits you to pay for your project, whether you're in Madagascar or abroad."}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {/* Option 1 : Virement bancaire */}
              <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
                  <Landmark
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mt-5 text-lg font-bold text-gray-950">
                  {language === "fr"
                    ? "Virement bancaire international"
                    : "International bank transfer"}
                </h4>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {language === "fr"
                    ? "Paiement transfrontalier"
                    : "Cross-border payments"}
                </div>
              </div>

              {/* Option 2 : Orange Money */}
              <div className="group rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
                  <Smartphone
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mt-5 text-lg font-bold text-gray-950">
                  {language === "fr"
                    ? "Transfert international vers Orange Money"
                    : "International transfer to Orange Money"}
                </h4>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-orange-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {language === "fr"
                    ? "Portefeuille mobile"
                    : "Mobile wallet"}
                </div>
              </div>

              {/* Option 3 : Carte bancaire */}
              <div className="group rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-lg shadow-violet-600/20 transition-transform duration-300 group-hover:scale-105">
                  <CreditCard
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mt-5 text-lg font-bold text-gray-950">
                  {language === "fr"
                    ? "Paiement par carte bancaire"
                    : "Credit or debit card"}
                </h4>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-violet-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {language === "fr"
                    ? "Paiement en ligne"
                    : "Online payments"}
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-center text-xs leading-6 text-gray-500">
              {language === "fr"
                ? "La disponibilité des transferts internationaux et des paiements par carte dépend des prestataires, des pays et des conditions de votre banque. Les frais éventuels sont à vérifier avant chaque transaction."
                : "International transfers and card payments depend on provider availability, supported countries, and your bank's terms. Check any applicable fees before each transaction."}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
