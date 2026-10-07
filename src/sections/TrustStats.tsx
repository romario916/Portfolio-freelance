import {
  CheckCircle2,
  Code2,
  MonitorCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: MonitorCheck,
    title: "Sites professionnels",
    description:
      "Des interfaces modernes conçues pour présenter clairement votre activité.",
  },
  {
    icon: Smartphone,
    title: "Pensés pour le mobile",
    description:
      "Une expérience adaptée aux smartphones, tablettes et ordinateurs.",
  },
  {
    icon: Code2,
    title: "Technologies modernes",
    description:
      "React, TypeScript et des outils modernes pour créer des sites fiables.",
  },
  {
    icon: CheckCircle2,
    title: "Accompagnement direct",
    description:
      "Un échange simple et transparent du premier contact jusqu'à la mise en ligne.",
  },
];

const TrustStats = () => {
  return (
    <section
      aria-labelledby="trust-title"
      className="relative overflow-hidden border-y border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-violet-50/70"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="sr-only">
          <h2 id="trust-title">Pourquoi travailler avec moi</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative rounded-2xl bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-blue-500 hover:via-violet-500 hover:to-violet-600 hover:shadow-xl hover:shadow-violet-500/15"
              >
                <div className="relative flex h-full gap-4 overflow-hidden rounded-[calc(1rem-1px)] bg-white p-5">
                  {/* Halo au survol */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 ring-4 ring-blue-50 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="relative">
                    <h3 className="font-semibold tracking-tight text-gray-950">
                      {item.title}
                    </h3>

                    <span
                      className="mt-2 block h-1 w-8 rounded-full bg-yellow-400"
                      aria-hidden="true"
                    />

                    <p className="mt-2.5 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;