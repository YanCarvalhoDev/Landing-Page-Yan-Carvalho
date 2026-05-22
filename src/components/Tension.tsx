import React from "react";

export default function Tension() {
  return (
    <section
      id="tension"
      className="py-20 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Background soft slate/cyan details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-950/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white max-w-2xl mx-auto font-sans leading-tight">
            Seu site provavelmente está afastando clientes antes da primeira
            conversa.
          </h2>
        </div>

        {/* Tension Paragraph Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-colors">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Hoje, a confiança é decidida em segundos. Se o seu site parece
              amador, o cliente assume que o seu serviço também é e vai embora
              sem falar nada.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-colors">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Não é sobre ter um site bonito. É sobre não perder clientes para
              um concorrente com presença digital melhor do que a sua.
            </p>
          </div>
        </div>

        {/* Before vs After Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto border-t border-zinc-900 pt-10">
          {/* Card: Sem site strategic */}
          <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-6 relative group hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-500 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono">
                Sem site estratégico
              </span>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
              Visitante chega, não confia na estrutura lenta ou amadora e fecha
              a aba. Você nem fica sabendo que perdeu aquele cliente
              qualificado.
            </p>
          </div>

          {/* Card: Com site strategic */}
          <div className="bg-cyan-950/10 border border-cyan-500/20 rounded-2xl p-6 relative group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-cyan-400 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono font-sans font-medium">
                Com site estratégico
              </span>
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
              Visitante chega, vê forte percepção de autoridade e entra em
              contato imediato. O site trabalha por você, gerando novos contatos
              de forma automática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
