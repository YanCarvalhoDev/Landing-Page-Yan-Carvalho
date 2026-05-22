import { LINKS } from "../links"; 

interface InlineCTAProps {
  text?: string; 
  subtitle?: string; 
  className?: string; 
  isSpace?: boolean; 
}

export default function InlineCTA({
  text = "Fazer orçamento grátis", 
  subtitle,
  className = "",
  isSpace = false,
}: InlineCTAProps) {
  const href = LINKS.whatsappCTA;

  return (
    <div
      className={`py-12 bg-zinc-950 flex flex-col items-center justify-center text-center px-4 overflow-hidden relative border-y border-zinc-900/40 ${className}`}
    >
      <div className="absolute inset-0 bg-radial-gradient from-cyan-950/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl">
        {isSpace ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-space group select-none active:scale-95 inline-block cursor-pointer"
          >
            <span className="btn-space-strong flex items-center justify-center gap-2">
              <span>{text}</span>
              <svg
                className="w-4.5 h-4.5 text-white transition-transform group-hover:translate-x-1 shrink-0"
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
            </span>
            <div className="btn-space-container-stars">
              <div className="btn-space-stars"></div>
            </div>
            <div className="btn-space-glow">
              <div className="btn-space-circle"></div>
              <div className="btn-space-circle"></div>
            </div>
          </a>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto py-4 px-8 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-[0_0_25px_rgba(8,145,178,0.15)] hover:shadow-[0_0_35px_rgba(8,145,178,0.4)] active:scale-95 cursor-pointer flex inline-flex items-center justify-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>{text}</span>
            <svg
              className="w-4.5 h-4.5 text-white transition-transform group-hover:translate-x-1 shrink-0"
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
          </a>
        )}

        {subtitle && (
          <p className="mt-4 text-xs text-zinc-500 font-mono tracking-wider flex items-center justify-center gap-1.5 leading-relaxed text-center flex-wrap px-4">
            <span className="w-1 h-1 rounded-full bg-cyan-500 block shrink-0 animate-pulse"></span>
            <span>{subtitle}</span>
          </p>
        )}
      </div>
    </div>
  );
}
