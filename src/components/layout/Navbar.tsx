import { Menu, X } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    {
      label: t.nav.home,
      href: "#accueil",
    },
    {
      label: t.nav.services,
      href: "#services",
    },
    {
      label: t.nav.projects,
      href: "#projets",
    },
    {
      label: t.nav.process,
      href: "#processus",
    },
    {
      label: t.nav.pricing,
      href: "#tarifs",
    },
    {
      label: t.nav.about,
      href: "#a-propos",
    },
    {
      label: t.nav.faq,
      href: "#faq",
    },
  ];

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm shadow-violet-500/5 backdrop-blur-xl">
      {/* Fine ligne dégradée en bas */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent"
        aria-hidden="true"
      />

      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a
          href="#accueil"
          className="group flex items-center gap-2.5"
          onClick={handleNavigation}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
            R
          </span>

          <span className="text-lg font-bold tracking-tight text-gray-950">
            Romario
          </span>
        </a>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50/70 hover:text-blue-700"
            >
              {item.label}

              <span
                className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Actions desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Switch langue */}
          <div className="flex items-center gap-1 rounded-full border border-blue-100 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              aria-label="Passer le site en français"
              aria-pressed={language === "fr"}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                language === "fr"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/25"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              FR
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch website to English"
              aria-pressed={language === "en"}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/25"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              EN
            </button>
          </div>

          {/* Bouton contact */}
          <a
            href="#contact"
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          >
            {t.nav.contactButton}
          </a>
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
            isOpen
              ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25"
              : "border border-blue-100 bg-white text-gray-950 hover:bg-blue-50"
          }`}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="border-t border-violet-100 bg-gradient-to-b from-white to-violet-50/50 shadow-xl shadow-violet-500/10 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:text-blue-700 hover:shadow-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Langue mobile */}
            <div className="mt-4 border-t border-violet-100 pt-4">
              <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
                Language
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  aria-label="Passer le site en français"
                  aria-pressed={language === "fr"}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    language === "fr"
                      ? "border-transparent bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/25"
                      : "border-blue-100 bg-white text-gray-600 hover:border-violet-300"
                  }`}
                >
                  Français
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  aria-label="Switch website to English"
                  aria-pressed={language === "en"}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    language === "en"
                      ? "border-transparent bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/25"
                      : "border-blue-100 bg-white text-gray-600 hover:border-violet-300"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Contact mobile */}
            <a
              href="#contact"
              onClick={handleNavigation}
              className="mt-5 flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:bg-yellow-300"
            >
              {t.nav.contactButton}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;