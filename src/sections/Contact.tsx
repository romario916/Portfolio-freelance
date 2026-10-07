import { type FormEvent, useState } from "react";
import {
  Code2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle";
import { contactInfo } from "../data/contact";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.projectType ||
      !formData.message.trim()
    ) {
      return;
    }

    const whatsappMessage = `Bonjour Romario,

Je souhaite discuter d'un projet web.

Nom : ${formData.name}
Email : ${formData.email}
Type de projet : ${formData.projectType}

Mon projet :
${formData.message}`;

    const whatsappUrl = `https://wa.me/${
      contactInfo.whatsapp
    }?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-violet-950 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/30 blur-3xl"
        aria-hidden="true"
      />

      {/* Motif de points discret */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Parlons de votre projet."
          description="Présentez-moi votre activité et ce que vous souhaitez créer. Je vous répondrai avec une première orientation adaptée à votre besoin."
          light
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-105">
                  <Mail
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-200/70">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-105">
                  <MessageCircle
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-200/70">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    +261 38 45 20 234
                  </p>
                </div>
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white">
                Retrouvez-moi également
              </p>

              <div className="mt-4 flex gap-3">
                {/* LinkedIn */}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-500/30"
                >
                  <Code2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>

                {/* GitHub */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-500/30"
                >
                  <Code2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Message rassurant */}
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <span
                className="absolute inset-y-5 left-0 w-1 rounded-full bg-yellow-400"
                aria-hidden="true"
              />

              <p className="text-sm font-semibold text-white">
                Vous ne savez pas exactement ce qu'il vous faut ?
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-100/70">
                Aucun problème. Expliquez simplement votre activité et votre
                objectif. Nous définirons ensemble la solution la plus adaptée.
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-blue-400 via-violet-500 to-violet-600 p-px shadow-2xl shadow-violet-900/40"
          >
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-6 text-gray-950 sm:p-8">
              {/* Halo décoratif */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/20 blur-3xl"
                aria-hidden="true"
              />

              <form
                onSubmit={handleSubmit}
                className="relative"
              >
                {/* Nom + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-900"
                    >
                      Nom
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Votre nom"
                      className="mt-2 w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-900"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="vous@exemple.com"
                      className="mt-2 w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>
                </div>

                {/* Type de projet */}
                <div className="mt-5">
                  <label
                    htmlFor="projectType"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Type de projet
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  >
                    <option value="">
                      Sélectionnez un type de projet
                    </option>

                    <option value="Site vitrine">
                      Site vitrine
                    </option>

                    <option value="Restaurant / commerce">
                      Restaurant / commerce
                    </option>

                    <option value="Refonte de site">
                      Refonte de site
                    </option>

                    <option value="Maintenance">
                      Maintenance
                    </option>

                    <option value="Autre">
                      Autre
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Votre projet
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Parlez-moi de votre activité, de votre besoin et de ce que vous souhaitez obtenir..."
                    className="mt-2 w-full resize-none rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                >
                  Continuer sur WhatsApp

                  <MessageCircle
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                  Votre message sera préparé automatiquement dans WhatsApp.
                </p>
              </form>

              {/* Contact direct */}
              <div className="relative mt-6 border-t border-violet-100 pt-6 text-center">
                <p className="text-sm text-gray-500">
                  Vous préférez nous contacter directement ?
                </p>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-violet-600"
                >
                  <MessageCircle
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;