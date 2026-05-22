// import React, { useState } from "react";
// import { LINKS } from "../links";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navLinks = [
//     { label: "Portfólio", target: "portfolio" },
//     { label: "Diferenciais", target: "services" },
//     { label: "Sobre Mim", target: "about" },
//     { label: "Depoimentos", target: "testimonials" },
//     { label: "Como Funciona", target: "how-it-works" },
//   ];

//   const navigateToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const handleWhatsAppRedirect = () => {
//     window.open(LINKS.whatsappDefault, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900/60">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <button
//           onClick={() => {
//             navigateToSection("hero");
//             setMenuOpen(false);
//           }}
//           aria-label="Ir para a página inicial"
//           className="flex items-center gap-2 cursor-pointer group focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-lg p-1"
//         >
//           <img
//             src="/images/apple-touch-icon.png"
//             alt="Yan Carvalho Logo"
//             className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
//             loading="eager"
//             decoding="async"
//           />
//         </button>

//         <nav
//           aria-label="Navegação Principal"
//           className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-300"
//         >
//           {navLinks.map((link) => (
//             <button
//               key={link.target}
//               onClick={() => navigateToSection(link.target)}
//               className="hover:text-cyan-400 transition-colors cursor-pointer focus:outline-none border-none bg-transparent"
//             >
//               {link.label}
//             </button>
//           ))}
//         </nav>

//         <div className="flex items-center gap-3">
//           <a
//             href={LINKS.whatsappDefault}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Fale diretamente com Yan pelo WhatsApp"
//             className="hidden sm:inline-block px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs tracking-wide transition-all cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black text-center no-underline"
//           >
//             Fale Comigo
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               onTouchEnd={(e) => {
//                 e.preventDefault();
//                 setMenuOpen(!menuOpen);
//               }}
//               className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-900 active:scale-95 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500 z-50 relative"
//               aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
//             >
//             {menuOpen ? (
//               <svg
//                 className="w-5 h-5 text-cyan-400"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             ) : (
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="4" y1="12" x2="20" y2="12" />
//                 <line x1="4" y1="6" x2="20" y2="6" />
//                 <line x1="4" y1="18" x2="20" y2="18" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-zinc-950/98 border-t border-b border-zinc-900/80 px-4 py-4 space-y-4 shadow-xl animate-fade-in">
//           <nav className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
//             {navLinks.map((link) => (
//               <button
//                 key={link.target}
//                 onClick={() => {
//                   navigateToSection(link.target);
//                   setMenuOpen(false);
//                 }}
//                 className="flex py-2.5 px-3 rounded-xl hover:bg-zinc-900/60 hover:text-cyan-400 text-left focus:outline-none focus:bg-zinc-900 border-none bg-transparent"
//               >
//                 {link.label}
//               </button>
//             ))}
//             <div className="pt-3 px-3 border-t border-zinc-900/60">
//               <a
//                 href={LINKS.whatsappDefault}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Fale diretamente com Yan pelo WhatsApp"
//                 className="hidden sm:inline-block px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs tracking-wide transition-all cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black text-center no-underline"
//               >
//                 Fale Comigo
//               </a>

//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState } from "react";
import { LINKS } from "../links";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Portfólio", target: "portfolio" },
    { label: "Diferenciais", target: "services" },
    { label: "Sobre Mim", target: "about" },
    { label: "Depoimentos", target: "testimonials" },
    { label: "Como Funciona", target: "how-it-works" },
  ];

  const navigateToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900/60 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-[1000]">
        <button
          onClick={() => {
            navigateToSection("hero");
            setMenuOpen(false);
          }}
          aria-label="Ir para a página inicial"
          className="flex items-center gap-2 cursor-pointer group focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-lg p-1 bg-transparent border-none"
        >
          <img
            src="/images/apple-touch-icon.png"
            alt="Yan Carvalho Logo"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            loading="eager"
            decoding="async"
          />
        </button>

        <nav
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-300"
        >
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => navigateToSection(link.target)}
              className="hover:text-cyan-400 transition-colors cursor-pointer focus:outline-none border-none bg-transparent"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.whatsappDefault}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale diretamente com Yan pelo WhatsApp"
            className="hidden sm:inline-block px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs tracking-wide transition-all cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black text-center no-underline"
          >
            Fale Comigo
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-900 active:scale-95 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500 relative z-[1001]"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Blindado contra Purge do Tailwind e Z-Index Fail */}
      <div 
        className="md:hidden bg-zinc-950 border-t border-zinc-900/85 px-4 py-6 space-y-4 shadow-2xl absolute left-0 right-0 w-full"
        style={{ 
          display: menuOpen ? 'block' : 'none', 
          top: '64px',
          zIndex: 998
        }}
      >
        <nav className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300W">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => {
                navigateToSection(link.target);
                setMenuOpen(false);
              }}
              className="flex w-full py-3 px-4 rounded-xl hover:bg-zinc-900/80 hover:text-cyan-400 text-left focus:outline-none focus:bg-zinc-900 border-none bg-transparent transition-all"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 px-2 border-t border-zinc-900/60 mt-2">
            <a
              href={LINKS.whatsappDefault}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1 focus:outline-none text-center no-underline"
            >
              Fale Comigo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
