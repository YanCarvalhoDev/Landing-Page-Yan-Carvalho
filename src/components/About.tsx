import React from "react";
import ProfileCard from "./ProfileCard";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title centered at top */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans mt-2">
            Engenheiro que entrega sites que trabalham por você
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light">
            Mesmo quando você não está trabalhando.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Left Column: Bio Content & Key Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Sou <strong className="text-white font-medium">Yan Carvalho</strong>, desenvolvedor focado em soluções digitais em Irecê, Bahia. Trabalho com foco exclusivo no desenvolvimento para negócios locais, profissionais liberais e sites institucionais.
              </p>
              <p>
                Ajudei o consultório jurídico da Dra. Nathalie Almeida a alcançar grande visibilidade na primeira página do Google em poucos dias. Desenvolvi o portal oficial do evento anual de Presidente Dutra, Bahia. Cada projeto que entrego é otimizado para carregar instantaneamente, proporcionando excelente experiência aos visitantes.
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm italic">
                Engenheiro de Computação. Especialista em criação de sites rápidos e visibilidade orgânica no Google.
              </p>
            </div>

            {/* Comprehensive Metrics Info (No borders/background metrics cards as requested) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-zinc-900/60">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-white font-sans">20+</div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono mt-1">Clientes Satisfeitos</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-white font-sans">5+</div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono mt-1">Anos Atuando</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-cyan-400 font-sans">Máxima</div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono mt-1">Velocidade</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-cyan-400 font-sans">Destaque</div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono mt-1">Buscas no Google</p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Identification Keycard (Removed Resultado em Foco) */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
}
