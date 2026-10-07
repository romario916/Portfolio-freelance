import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { testimonials } from "../data/testimonials";
import { useLanguage } from "../context/LanguageContext";

const Testimonials = () => {
  const { language, t } = useLanguage();

  const hasTestimonials = testimonials.length > 0;

  return (
    <section
      id="temoignages"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-violet-50/50 py-20 sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        {hasTestimonials ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative rounded-3xl bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-blue-500 hover:via-violet-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-violet-500/20"
              >
                <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-7">
                  {/* Halo au survol */}
                  <div
                    className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 ring-4 ring-blue-50 transition-transform duration-300 group-hover:scale-105">
                      <Quote
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <span
                      className="h-1.5 w-10 rounded-full bg-yellow-400"
                      aria-hidden="true"
                    />
                  </div>

                  <blockquote className="relative mt-5 text-sm leading-7 text-gray-700">
                    “{testimonial.content}”
                  </blockquote>

                  <div className="relative mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt=""
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-violet-200"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-violet-100 text-sm font-bold text-violet-700 ring-2 ring-violet-200"
                        aria-hidden="true"
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        {testimonial.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative mt-12 overflow-hidden rounded-3xl border border-dashed border-violet-300 bg-white/80 px-6 py-12 text-center shadow-xl shadow-violet-500/5 backdrop-blur-sm sm:mt-16 sm:px-10"
          >
            {/* Halo décoratif */}
            <div
              className="pointer-events-none absolute left-1/2 -top-16 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/25 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 ring-4 ring-blue-50">
              <Quote
                className="h-6 w-6"
                aria-hidden="true"
              />
            </div>

            <span
              className="relative mx-auto mt-5 block h-1.5 w-10 rounded-full bg-yellow-400"
              aria-hidden="true"
            />

            <h3 className="relative mt-5 text-lg font-bold tracking-tight text-gray-950">
              {language === "fr"
                ? "Vos retours seront bientôt ici."
                : "Your feedback will be here soon."}
            </h3>

            <p className="relative mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
              {language === "fr"
                ? "Cette section est réservée aux témoignages authentiques de clients ayant travaillé avec moi. Aucun avis fictif ne sera publié."
                : "This section is reserved for genuine testimonials from clients who have worked with me. No fictional reviews will be published."}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;