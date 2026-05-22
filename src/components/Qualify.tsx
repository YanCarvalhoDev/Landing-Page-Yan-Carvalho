import React from "react";

export default function Qualify() {
  const forWhom = [
    "Você tem um negócio real e quer ser encontrado no Google",
    "Entende que um site profissional faz parte do crescimento da empresa",
    "Busca resultados além de um visual bonito",
    "Valoriza prazo, estratégia e comunicação clara",
    "Quer transmitir a qualidade que seu negócio realmente entrega",
  ];

  const notForWhom = [
    "Busca apenas a opção mais barata possível",
    "Precisa apenas de uma página simples sem foco em estratégia",
    "Ainda está definindo o posicionamento ou objetivos do negócio",
    "Espera resultados orgânicos imediatos no Google",
  ];

  return (
    <section
      id="qualify"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Subtle layout light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-950/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple & elegant title */}
        <div className="text-center md:text-left mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Este serviço é para você se...
          </h2>
          <p className="text-zinc-500 text-sm mt-2 max-w-xl">
            Transparência desde o início. O foco é atuar em projetos com total
            dedicação para entregar resultados consistentes e profissionais.
          </p>
        </div>

        {/* Binary Choice Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Positive Match (Para Quem é) */}
          <div className="bg-zinc-900/40 border border-cyan-950/40 rounded-3xl p-6 sm:p-8 relative group overflow-hidden transition-all duration-300">
            {/* Soft decorative glow on hover */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-300"></div>

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              Para quem é:
            </h3>

            <ul className="space-y-4">
              {forWhom.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 text-zinc-300 text-sm sm:text-base font-light leading-relaxed"
                >
                  <span className="mt-1 w-5 h-5 rounded-md bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Negative Match (Para Quem não é) */}
          <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-6 sm:p-8 relative group transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-400 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-650"></span>
              Para quem NÃO é:
            </h3>

            <ul className="space-y-4">
              {notForWhom.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 text-zinc-500 text-sm sm:text-base font-light leading-relaxed"
                >
                  <span className="mt-1 w-5 h-5 rounded-md bg-zinc-950/60 border border-zinc-850 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-zinc-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
