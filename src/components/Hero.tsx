import { LINKS } from "../links";

interface HeroProps {
  onBudgetClick?: () => void;
  onProjectsClick?: () => void;
}

export default function Hero({ onBudgetClick, onProjectsClick }: HeroProps) {
  const handleBudgetClick = () => {
    if (onBudgetClick) {
      onBudgetClick();
    } else {
      window.open(LINKS.whatsappDefault, "_blank", "noopener,noreferrer");
    }
  };

  const handleProjectsClick = () => {
    if (onProjectsClick) {
      onProjectsClick();
    } else {
      const el = document.getElementById("portfolio");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-zinc-950 text-white flex flex-col items-center justify-center min-h-[95vh]"
    >
      {/* Background glow effects matching the subtle premium dark ambiance of the screenshot */}
      <div className="absolute inset-x-0 top-0 h-[550px] bg-gradient-to-b from-cyan-950/15 via-zinc-950/0 to-zinc-950 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Compact, responsive split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Main Content */}
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Shorter, highly-focused header text as requested to fit perfectly */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] text-white">
                Sites rápidos e estratégicos para quem precisa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-400 to-blue-500">
                  gerar confiança e clientes.
                </span>
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
                Carregamento instantâneo, design limpo de alto padrão e
                estrutura planejada para atrair contatos locais, sem travamentos
                ou códigos pesados.
              </p>

              <p className="text-zinc-500 text-xs sm:text-sm font-light italic">
                Foco em clínicas, escritórios, consultórios, restaurantes e
                negócios locais.
              </p>
            </div>

            {/* Core Action CTAs matching review design - stacked on mobile, inline on tablet+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full">
              <button
                onClick={handleBudgetClick}
                className="px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 tracking-wide font-sans focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
              >
                Agendar Diagnóstico Gratuito{" "}
                <span className="font-semibold text-cyan-200">›</span>
              </button>

              <button
                onClick={handleProjectsClick}
                className="px-5 py-3 rounded-full bg-zinc-950 hover:bg-zinc-900 text-zinc-300 font-bold text-xs sm:text-sm border border-zinc-850 transition-all hover:border-zinc-800 active:scale-95 cursor-pointer flex items-center justify-center gap-2 tracking-wide font-sans w-full sm:w-auto"
              >
                Ver projetos
              </button>
            </div>

            {/* Bottom Proof Bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-zinc-900/60 text-xs sm:text-sm text-zinc-500">
              <div className="flex items-center gap-2 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>
                  <strong className="text-zinc-300 font-medium">
                    Muito rápido
                  </strong>{" "}
                  no celular
                </span>
              </div>
              <div className="flex items-center gap-2 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>
                  <strong className="text-zinc-300 font-medium">
                    Fácil de achar
                  </strong>{" "}
                  no Google
                </span>
              </div>
              <div className="flex items-center gap-2 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>
                  Destaque e{" "}
                  <strong className="text-zinc-300 font-medium">
                    presença de confiança
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Metrics Panel - structured safely as 1 col stack on phone, 3 cols index on tablet, 1 col stack sidebar on desktop */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full">
            <div className="bg-zinc-950/70 border border-zinc-900 rounded-2xl p-5 text-center lg:w-48 xl:w-56 mx-auto w-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Rápido
              </div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mt-1">
                Carrega no Celular
              </div>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-900 rounded-2xl p-5 text-center lg:w-48 xl:w-56 mx-auto w-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Visível
              </div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mt-1">
                Destaque no Google
              </div>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-900 rounded-2xl p-5 text-center lg:w-48 xl:w-56 mx-auto w-full">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                20d
              </div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mt-1">
                Entrega Garantida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
