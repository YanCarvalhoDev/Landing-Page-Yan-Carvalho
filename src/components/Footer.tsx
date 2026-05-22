import React from "react";
import { LINKS } from "../links";

interface FooterProps {
  onNavClick?: (elementId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <a
              href="#hero"
              aria-label="Voltar para o topo da página inicial"
              className="inline-flex items-center gap-2 cursor-pointer group focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-lg p-1"
            >
              <img
                src="/images/Yan-Carvalho-Logo.webp"
                alt="Yan Carvalho Logo"
                className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="text-white text-xs sm:text-sm leading-relaxed max-w-xs font-light">
              Sites que colocam seu negócio no Google e transformam visitas em
              clientes.
            </p>

            {/* Social Icons matching footer bottom left area */}
            <div className="flex gap-3 pt-2">
              <a
                href={LINKS.whatsappDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-zinc-950 border border-zinc-900 flex items-center justify-center hover:border-zinc-800 text-zinc-500 hover:text-white transition-all"
                title="WhatsApp"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  {/* Contorno do balão */}
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />

                  {/* Símbolo do telefone interno */}
                  <path d="M15.05 13c-.45-.22-.93-.45-1.4-.23-.24.12-.41.37-.58.56-.3.34-.63.46-1 .24a4.87 4.87 0 0 1-1.68-1.68c-.22-.4-.1-.73.24-1 .19-.17.44-.34.56-.58.22-.47 0-.95-.23-1.4l-.45-1c-.22-.47-.64-.58-1.12-.36a3.16 3.16 0 0 0-1.28 1.48c-.46.94-.17 2.18.66 3.4a7.92 7.92 0 0 0 4.16 3.4c1 .35 2.14.24 2.87-.44a3.16 3.16 0 0 0 .76-1.84c.04-.5-.15-.81-.62-1.04z" />
                </svg>
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-zinc-950 border border-zinc-900 flex items-center justify-center hover:border-zinc-800 text-zinc-500 hover:text-white transition-all"
                title="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-zinc-950 border border-zinc-900 flex items-center justify-center hover:border-zinc-800 text-zinc-500 hover:text-white transition-all"
                title="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="w-8 h-8 rounded bg-zinc-950 border border-zinc-900 flex items-center justify-center hover:border-zinc-800 text-zinc-500 hover:text-white transition-all"
                title="Email"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div className="col-span-1 sm:col-span-4 md:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-white font-sans">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-500 font-light">
              <li>
                <button
                  onClick={() => handleNavClick("hero")}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("portfolio")}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("cta")}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Serviços */}
          <div className="col-span-1 sm:col-span-4 md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-white font-sans">
              Serviços
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-500 font-light">
              <li className="hover:text-cyan-400 transition-colors cursor-default">
                Desenvolvimento Web
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">
                Sistemas Personalizados
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">
                Otimização SEO
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-default">
                Consultoria Tech
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-default font-light">
                Manutenção de Sistemas
              </li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div className="col-span-1 sm:col-span-4 md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-white font-sans">
              Contato
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-500 font-light">
              <li className="truncate">
                <a
                  href={`mailto:${LINKS.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {LINKS.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${LINKS.phone}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  (74) 98824-4384
                </a>
              </li>
              <li>Irecê, BA</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-zinc-950 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-650">
          <p className="text-zinc-605 text-zinc-600 font-light font-sans">
            © {currentYear} Yan Carvalho. Todos os direitos reservados.
          </p>

          <button
            onClick={() => handleNavClick("hero")}
            className="text-zinc-600 hover:text-cyan-400 transition-colors focus:outline-none cursor-pointer font-sans"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
