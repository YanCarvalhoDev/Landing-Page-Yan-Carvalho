import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Conversa de 15 minutos",
      desc: "Entendo o seu negócio, seu público e o que você quer que o site faça por você. Sem formulário longo: fazemos apenas uma conversa direta pelo WhatsApp ou videochamada."
    },
    {
      num: 2,
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
      title: "Proposta e escopo fechados",
      desc: "Você recebe uma proposta clara com escopo, prazo e valor, sem surpresas no meio do desenvolvimento ou qualquer tipo de cobrança oculta."
    },
    {
      num: 3,
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 16l4-4-4-4" />
          <path d="M6 8l-4 4 4 4" />
          <path d="M14.5 4l-5 16" />
        </svg>
      ),
      title: "Desenvolvimento em até 20 dias",
      desc: "Você acompanha todo o progresso de forma transparente. O site é projetado e configurado para carregar instantaneamente, garantindo ótima velocidade em qualquer aparelho."
    },
    {
      num: 4,
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
          <path d="M12 2C12 2 11 5 8 9l-4 4c-1.25 1.25-1 3.5.25 4.75s3.5 1.5 4.75.25l4-4c4-3 7-4 7-4s-1-3-4-7z" />
          <circle cx="9.5" cy="9.5" r="1.5" />
        </svg>
      ),
      title: "No ar e aparecendo no Google",
      desc: "Site publicado, indexado e configurado para aparecer nas buscas que importam para o seu negócio. Suporte pós-lançamento incluso."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-950/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Do contato à primeira página do Google
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light">
            Processo claro, sem surpresas. Você sabe o que acontece em cada etapa e quando vai receber.
          </p>
        </div>

        {/* Vertical/Horizontal step layout (Highlighted cards, no circle borders around numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={step.num}
              className="bg-zinc-900/60 border border-zinc-800/90 hover:border-cyan-500/40 hover:shadow-[0_8px_24px_rgba(6,182,212,0.12)] hover:bg-zinc-900/75 hover:-translate-y-1 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex gap-5 items-start group"
            >
              {/* Highlight step beautiful flat number (No circular border background as requested) */}
              <div className="text-3xl font-black font-sans text-cyan-400/90 select-none shrink-0 leading-none pt-0.5 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                0{step.num}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
