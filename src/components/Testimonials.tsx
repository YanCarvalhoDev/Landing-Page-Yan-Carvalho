import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "roberto",
      name: "Roberto Carlos",
      role: "Prefeito de Presidente Dutra, Bahia",
      text: "Profissional dedicado e com excelente comunicação durante todo o projeto. Ficou exatamente como eu imaginei.",
      image: "./images/robertao.webp",
    },
    {
      id: "glauber",
      name: "Dr. Glauber Cavalcante",
      role: "Médico veterinário",
      text: "O site tem excelente desempenho, carrega rápido e é muito intuitivo. Facilitou muito o controle da clínica no dia a dia.",
      image: "./images/glauber.webp",
    },
    {
      id: "ramon",
      name: "Ramon Gonçalves",
      role: "Personal trainer",
      text: "Resolveu o problema de envio dos treinos personalizados para meus alunos. Ultrapassou todas as minhas expectativas.",
      image: "./images/ramon.webp",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-zinc-950 text-white border-t border-zinc-900 relative"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans mt-2">
            O que os clientes dizem depois de ver o resultado
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light">
            Não elogios genéricos, mas relatos reais sobre o que mudou de
            verdade em seus negócios.
          </p>
        </div>

        {/* 3 testimonial cards side by side with entrance & hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-zinc-900/40 border border-zinc-850 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:-translate-y-1.5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div className="space-y-4 pt-2">
                {/* 5 stars score */}
                <div className="flex gap-0.5 text-cyan-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-cyan-400 stroke-cyan-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quotation text */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light italic relative z-10">
                  "{item.text}"
                </p>
              </div>

              {/* Avatar, name and role */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-900 mt-6 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="48"
                    height="48"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-bold text-white text-xs sm:text-sm">
                    {item.name}
                  </h3>
                  <p className="text-zinc-500 text-[10px] sm:text-xs font-light">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nathalie Almeida Detailed Highlight Spotlight Card with motion as well */}
        <div className="mt-12 bg-zinc-900/40 border-l-4 border-l-cyan-500 border border-zinc-900 rounded-r-2xl p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]">
          <div className="absolute top-0 right-0 w-[200px] h-full bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-cyan-500/30 shrink-0">
                  <img
                    src="./images/Nathalie_Carvalho_Advogada.webp"
                    alt="Dra. Nathalie Almeida"
                    width="56"
                    height="56"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    Dra. Nathalie Almeida
                  </h3>
                  <p className="text-zinc-500 text-xs font-light">
                    Direito do Trabalho e Sucessões, Irecê, BA
                  </p>
                </div>
              </div>
              <a
                href="https://pagespeed.web.dev/analysis/https-nathaliecarvalho-adv-br/7ietagn4r2?form_factor=mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 text-[11px] font-mono tracking-wider font-bold transition-all duration-300 self-start sm:self-center shadow-[0_2px_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer group/btn"
              >
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                </span>
                <span>Resultado de Velocidade Oficial ➔</span>
              </a>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light mb-6 relative z-10">
              "Em menos de uma semana comecei a receber ligações de clientes que
              me encontraram pelo Google. Isso nunca tinha acontecido antes. O
              site é muito rápido, funciona perfeitamente no celular e se pagou
              no primeiro contrato fechado."
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-zinc-900/60 text-xs text-zinc-500 relative z-10">
              <div className="flex items-center gap-1.5 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Destaque na primeira página do Google</span>
              </div>
              <div className="flex items-center gap-1.5 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Contatos qualificados de clientes</span>
              </div>
              <div className="flex items-center gap-1.5 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Velocidade máxima no celular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
