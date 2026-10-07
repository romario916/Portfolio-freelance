import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

const FAQ = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems =
    language === "fr"
      ? [
          {
            question: "Combien de temps faut-il pour créer un site ?",
            answer:
              "Le délai dépend du type de site, du nombre de pages et de la quantité de contenu à intégrer. Après notre premier échange, je vous donne une estimation adaptée à votre projet.",
          },
          {
            question: "Comment se passe le paiement ?",
            answer:
              " Les modalités de paiement sont définies avant le début du projet. Elles seront clairement indiquées dans le devis ou la proposition.",
          },
          {
            question:
              "Puis-je demander des modifications pendant le projet ?",
            answer:
              "Oui. Les besoins et les ajustements sont discutés au cours du projet. Le nombre de modifications incluses dépendra de la formule choisie et sera précisé avant le démarrage.",
          },
          {
            question:
              "Qui s'occupe de l'hébergement et du nom de domaine ?",
            answer:
              "Je peux vous accompagner dans le choix et la configuration de votre hébergement et de votre nom de domaine. Les services d'hébergement et le domaine restent sous votre propriété.",
          },
          {
            question: "Est-ce que mon site fonctionnera sur téléphone ?",
            answer:
              "Oui. Les sites sont conçus avec une approche responsive afin de proposer une expérience adaptée aux smartphones, tablettes et ordinateurs.",
          },
          {
            question:
              "Puis-je modifier le contenu de mon site après sa livraison ?",
            answer:
              "Cela dépend de la manière dont le site est conçu. Pour un site vitrine classique, je peux également proposer un accompagnement pour les mises à jour et modifications après la livraison.",
          },
          {
            question: "Travaillez-vous avec des clients à distance ?",
            answer:
              "Oui. Je suis basé à Antananarivo, Madagascar, et je peux travailler à distance avec des entreprises en France, Belgique, Suisse, Canada et dans d'autres pays francophones.",
          },
          {
            question: "Comment commencer mon projet ?",
            answer:
              "Il suffit de me présenter votre activité et votre besoin via le formulaire de contact ou WhatsApp. Nous pourrons ensuite échanger sur le projet et définir la prochaine étape.",
          },
        ]
      : [
          {
            question: "How long does it take to create a website?",
            answer:
              "The timeline depends on the type of website, number of pages and amount of content to integrate. After our first discussion, I will provide an estimate adapted to your project.",
          },
          {
            question: "How does payment work?",
            answer:
              " Payment terms are agreed before the project starts. They will be clearly stated in the quote or proposal.",
          },
          {
            question: "Can I request changes during the project?",
            answer:
              "Yes. Requirements and adjustments are discussed throughout the project. The number of included revisions depends on the selected package and will be defined before starting.",
          },
          {
            question: "Who takes care of hosting and the domain name?",
            answer:
              "I can help you choose and configure your hosting and domain name. The hosting service and domain remain under your ownership.",
          },
          {
            question: "Will my website work on mobile devices?",
            answer:
              "Yes. Websites are designed responsively to provide a suitable experience on smartphones, tablets and computers.",
          },
          {
            question: "Can I update my website content after delivery?",
            answer:
              "It depends on how the website is built. For a classic business website, I can also provide support for content updates and changes after delivery.",
          },
          {
            question: "Do you work with remote clients?",
            answer:
              "Yes. I am based in Antananarivo, Madagascar, and can work remotely with businesses in France, Belgium, Switzerland, Canada and other French-speaking countries.",
          },
          {
            question: "How can I start my project?",
            answer:
              "Simply tell me about your business and your needs through the contact form or WhatsApp. We can then discuss your project and define the next step.",
          },
        ];

  const toggleItem = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/40 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          description={t.faq.description}
          centered
        />

        <div className="mt-12 space-y-3 lg:mt-16">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className={`rounded-2xl p-px transition-all duration-300 ${
                  isOpen
                    ? "bg-gradient-to-br from-blue-500 via-violet-500 to-violet-600 shadow-xl shadow-violet-500/15"
                    : "bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 shadow-sm hover:from-blue-400 hover:via-violet-400 hover:to-violet-500 hover:shadow-lg hover:shadow-violet-500/10"
                }`}
              >
                <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-white">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset sm:px-6"
                  >
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${
                        isOpen
                          ? "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                          : "text-gray-950"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25"
                          : "border border-gray-200 bg-white text-gray-500"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="border-t border-violet-100 bg-gradient-to-b from-violet-50/40 to-white px-5 pb-5 pt-4 sm:px-6"
                    >
                      <p className="text-sm leading-7 text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            {language === "fr"
              ? "Vous avez une autre question ?"
              : "Do you have another question?"}
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          >
            {language === "fr"
              ? "Parlons directement de votre projet →"
              : "Let's discuss your project directly →"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;