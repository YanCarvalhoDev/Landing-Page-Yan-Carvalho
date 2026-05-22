import React from "react";
import { LINKS } from "../links";

export default function CTA() {
  const handleContactClick = () => {
    window.open(LINKS.whatsappCTA, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="cta"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background soft slate/teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10 flex flex-col items-center relative">
        {/* Subtle, highly realistic and professional icon instead of AI stars */}
        <div className="w-[196px] h-[196px] flex items-center justify-center p-4 mb-2">
          <img
            src="/images/Yan-Carvalho-Logo.webp"
            alt="Yan Carvalho Logo"
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Heading & Subtitle of the review */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2">
            Pronto para parar de perder clientes para quem tem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              presença digital melhor?
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Trabalho com poucos projetos de forma simultânea para manter a
            velocidade, a qualidade máxima e um acompanhamento próximo em cada
            etapa. Por isso, normalmente abro apenas 3 vagas por mês para novos
            clientes.
          </p>
          <p className="text-zinc-500 text-xs sm:text-sm italic max-w-md mx-auto">
            Primeira conversa sem compromisso. Orçamento planejado. Respondo
            diretamente pelo WhatsApp.
          </p>
        </div>
        {/* Center CTA Button */}
        <div className="pt-4">
          <button
            onClick={handleContactClick}
            className="px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] flex items-center gap-2 cursor-pointer active:scale-95 tracking-wide uppercase font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Garantir minha vaga{" "}
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
        {/* Center Pill Subtitle Metadata - adapted with collapsible padding & wrap for mobile device safety */}
        <div className="pt-8 w-full max-w-full px-2">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 px-5 py-3 sm:py-2 rounded-2xl sm:rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 text-xs font-mono font-medium select-none text-center">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 block animate-pulse shrink-0"></span>
              <span>Disponível agora</span>
            </div>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 block shrink-0"></span>
              <span>Conversa direta</span>
            </div>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 block shrink-0"></span>
              <span>3 vagas/mês</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
