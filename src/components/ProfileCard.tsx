import React from "react";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div
      id="profile-card"
      className="relative w-full max-w-[290px] sm:max-w-[340px] aspect-[3/4.2] rounded-[30px] overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-zinc-700/80 group"
    >
      {/* Background Image that covers the entire card */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="./images/Yan_ac_ai.webp"
          alt="Yan Carvalho"
          width="340"
          height="476"
          loading="lazy"
          className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Ambient Overlay Gradients to protect typography readability */}
        {/* Top gradient for location badge */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-950/80 to-transparent pointer-events-none"></div>
        {/* Bottom solid-to-transparent dark gradient covering text overlay and the footer card */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none"></div>
      </div>

      {/* Decorative location microelements on corner */}
      <div className="absolute top-4 right-6 text-[9px] font-mono text-zinc-300 select-none z-10 uppercase tracking-widest bg-zinc-950/50 backdrop-blur-sm px-2 py-0.5 rounded-full border border-zinc-800/40">
        Irecê, Bahia
      </div>

      {/* Center/Lower name info overlaid on the photo */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center pb-5">
        <h3 className="text-4xl font-extrabold text-white tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] select-none group-hover:scale-105 transition-transform duration-300 font-sans">
          Yan
        </h3>
        <p className="text-zinc-300 text-[11px] font-mono tracking-widest mt-1.5 uppercase select-none font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          Desenvolvedor Web
        </p>
      </div>

      {/* Footer Meta Area of Keycard */}
      <div className="relative z-10 bg-zinc-950/80 border border-zinc-850 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md">
        <div className="space-y-1">
          <div className="text-xs font-bold text-zinc-100 font-sans">
            @yancarvalhodev
          </div>

          {/* Status signal with ping animation */}
          <div className="flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] text-zinc-300 font-mono">
              Disponível
            </span>
          </div>
        </div>

        {/* Mini CTA button inside card */}
        <button
          onClick={() => {
            const el = document.getElementById("cta");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-[10px] font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-95"
        >
          Contato
        </button>
      </div>
    </div>
  );
}
