import {
  ArrowUp,
  Mail,
  MessageCircle,
} from "lucide-react";

import { contactInfo } from "../../data/contact";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const isFrench = language === "fr";

  const navigation = [
    {
      label: isFrench ? "Services" : "Services",
      href: "#services",
    },
    {
      label: isFrench ? "Projets" : "Projects",
      href: "#projets",
    },
    {
      label: isFrench ? "Processus" : "Process",
      href: "#processus",
    },
    {
      label: isFrench ? "Tarifs" : "Pricing",
      href: "#tarifs",
    },
    {
      label: isFrench ? "À propos" : "About",
      href: "#a-propos",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: isFrench ? "Contact" : "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-gray-950 text-white">
      {/* Fond : dégradé profond */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 via-blue-950 to-violet-950"
        aria-hidden="true"
      />

      {/* Grille discrète en filigrane */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Halos lumineux */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-600/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/30 blur-3xl"
        aria-hidden="true"
      />

      {/* Ligne lumineuse en haut */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identité */}
          <div className="lg:col-span-5">
            <a
              href="#accueil"
              className="group inline-flex items-center gap-3 text-xl font-bold tracking-tight"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-xl shadow-blue-600/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                R
              </span>

              Romario
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-blue-100/70">
              {isFrench
                ? "Développeur Frontend React spécialisé dans la création de sites web professionnels pour commerces et entreprises."
                : "React Frontend Developer specialized in creating professional websites for businesses and local companies."}
            </p>

            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-100/80 backdrop-blur-md">
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
              </span>

              {isFrench
                ? "Antananarivo, Madagascar · Remote"
                : "Antananarivo, Madagascar · Remote"}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              {isFrench ? "Navigation" : "Navigation"}
            </h2>

            <span
              className="mt-3 block h-1 w-8 rounded-full bg-yellow-400"
              aria-hidden="true"
            />

            <nav
              aria-label={
                isFrench
                  ? "Navigation du pied de page"
                  : "Footer navigation"
              }
              className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3.5 lg:grid-cols-1"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-blue-100/70 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span
                    className="h-px w-0 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:w-4"
                    aria-hidden="true"
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/40 blur-3xl"
                aria-hidden="true"
              />

              <h2 className="relative text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {isFrench ? "Me contacter" : "Contact me"}
              </h2>

              <span
                className="relative mt-3 block h-1 w-8 rounded-full bg-yellow-400"
                aria-hidden="true"
              />

              <div className="relative mt-6 space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 text-sm text-blue-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-600/30">
                    <Mail
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="break-all">{contactInfo.email}</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(
                    /\D/g,
                    "",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 text-sm text-blue-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-600/30">
                    <MessageCircle
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>

                  WhatsApp
                </a>
              </div>

              
{/* Réseaux sociaux */}
<div className="relative mt-6">
  <div className="flex flex-wrap items-center gap-6">

    {/* LinkedIn */}
    <a
      href={contactInfo.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visiter mon profil LinkedIn"
      className="group flex flex-col items-center gap-3"
    >
      {/* Photo circulaire */}
      <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 via-violet-500 to-blue-600 p-[3px] shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-violet-500/40 sm:h-24 sm:w-24">
        <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
          <img
            src="/profil2.webp"
            alt="Ma photo de profil LinkedIn"
            className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Badge LinkedIn */}
        <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-950 bg-[#0A66C2] text-xs font-bold text-white shadow-md">
          in
        </span>
      </div>

      <span className="text-sm font-medium text-blue-100 transition-colors group-hover:text-blue-400">
        LinkedIn
      </span>
    </a>

    {/* GitHub */}
    <a
      href={contactInfo.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visiter mon profil GitHub"
      className="group flex flex-col items-center gap-3"
    >
      {/* Photo circulaire */}
      <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 via-violet-500 to-blue-600 p-[3px] shadow-lg shadow-violet-500/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-blue-500/40 sm:h-24 sm:w-24">
        <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
          <img
            src="/profil.webp"
            alt="Ma photo de profil GitHub"
            className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Badge GitHub */}
        <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-950 bg-[#24292e] text-white shadow-md">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.6 5.23-5.09 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
        </span>
      </div>

      <span className="text-sm font-medium text-blue-100 transition-colors group-hover:text-violet-400">
        GitHub
      </span>
    </a>

  
{/* Instagram */}
<a
  href={contactInfo.instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visiter mon profil Instagram"
  className="group flex flex-col items-center gap-3"
>
  {/* Photo circulaire */}
  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-[3px] shadow-lg shadow-pink-500/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-pink-500/40 sm:h-24 sm:w-24">
    <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
      <img
        src="/profil2.webp"
        alt="Ma photo de profil Instagram"
        className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Badge Instagram */}
    <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-md">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </span>
  </div>

  <span className="text-sm font-medium text-blue-100 transition-colors group-hover:text-pink-400">
    Instagram
  </span>
</a>


  </div>
</div>

            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="relative mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
            aria-hidden="true"
          />

          <p className="text-xs text-blue-200/50">
            © {currentYear} RAKOTOVAO Henry Romario.{" "}
            {isFrench
              ? "Developpeur Frontend."
              : "Frontend Developper."}
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/mario.santohhr?locale=fr_FR"
              className="text-xs text-blue-200/50 transition-colors hover:text-white"
            >
              {isFrench ? "FACEBOOK" : "FACEBOOK"}
            </a>

            <a
              href="https://www.tiktok.com/@romario24035?is_from_webapp=1&sender_device=pc"
              className="text-xs text-blue-200/50 transition-colors hover:text-white"
            >
              {isFrench ? "TIK TOK" : "TIK TOK"}
            </a>

            <a
              href="#accueil"
              aria-label={
                isFrench
                  ? "Retour en haut"
                  : "Back to top"
              }
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-950 hover:shadow-lg hover:shadow-yellow-400/30"
            >
              <ArrowUp
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Grand mot en filigrane */}
      <div
        className="pointer-events-none mt-6 select-none overflow-hidden text-center"
        aria-hidden="true"
      >
        <span className="block bg-gradient-to-b from-white/20 via-white/5 to-transparent bg-clip-text text-[22vw] font-extrabold leading-[0.8] tracking-tighter text-transparent sm:text-[16vw] lg:text-[13rem]">
         Henry Romario
        </span>
      </div>
    </footer>
  );
};

export default Footer;