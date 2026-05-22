import React from "react";
import { getWhatsAppUrl } from "../links";

export default function Services() {
  const handleBotContact = () => {
    const message = "Olá Yan! Acessei seu site de serviços e gostaria de conversar sobre a criação de um bot de IA personalizado para automatizar o atendimento do meu negócio.";
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const deliveries = [
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Seu site carrega antes do cliente duvidar",
      description: "Um site lento faz o visitante duvidar antes de ler uma linha. Código nativo ultra otimizado, sem templates pesados, garantindo que seu site carregue antes do cliente pensar em fechar a aba.",
      hoverClass: "hover:border-cyan-550/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:-translate-y-1.5",
      containerClass: "bg-cyan-950/40 border-cyan-500/30",
      titleHoverClass: "group-hover:text-cyan-400"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "Sua empresa encontrada nas buscas",
      description: "De nada adianta um site impecável que ninguém de fato encontra. Tudo é estruturado para que seus clientes localizem seu negócio de forma simples e natural quando pesquisarem no Google.",
      hoverClass: "hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-1.5",
      containerClass: "bg-emerald-950/40 border-emerald-500/30",
      titleHoverClass: "group-hover:text-emerald-400"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Funciona perfeitamente no celular do seu cliente, sem exceção",
      description: "Seu cliente acessa majoritariamente pelo celular. Se o seu site quebra, some ou distorce no smartphone, você perdeu a venda antes de começar qualquer diálogo.",
      hoverClass: "hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-1.5",
      containerClass: "bg-amber-950/40 border-amber-500/30",
      titleHoverClass: "group-hover:text-amber-400"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-pink-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "Entrega real em até 20 dias",
      description: "Projetos de software intermináveis que duram meses costumam não ser finalizados. Trabalho com prazo limite de 20 dias, com alinhamento e transparência em cada etapa.",
      hoverClass: "hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] hover:-translate-y-1.5",
      containerClass: "bg-pink-950/40 border-pink-500/30",
      titleHoverClass: "group-hover:text-pink-400"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-violet-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Sem surpresa técnica depois da entrega",
      description: "Sem dependência de page builders engessados ou dezenas de plugins genéricos que quebram com atualizações. Seu site cresce livremente sem virar uma bagunça técnica.",
      hoverClass: "hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:-translate-y-1.5",
      containerClass: "bg-violet-950/40 border-violet-500/30",
      titleHoverClass: "group-hover:text-violet-400"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-rose-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.85.85 2.23.85 3.08 0L15 8" />
        </svg>
      ),
      title: "Parceria pós-lançamento",
      description: "Não entrego o projeto e fecho os canais de contato. Dou assistência dedicada, respondendo suas dúvidas e realizando ajustes pontuais diretamente no WhatsApp.",
      hoverClass: "hover:border-rose-500/40 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] hover:-translate-y-1.5",
      containerClass: "bg-rose-950/40 border-rose-500/30",
      titleHoverClass: "group-hover:text-rose-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 border-t border-zinc-900 text-white relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans mt-2">
            O que outros vendem como premium, aqui é o padrão mínimo
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light">
            Um site de carregamento instantâneo é o ponto de partida ideal para prender a atenção do seu cliente.
          </p>
        </div>

        {/* Services Grid (3 col layout for 6 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deliveries.map((item, idx) => (
            <div 
              key={item.title}
              className={`group bg-zinc-900/40 border border-zinc-850 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${item.hoverClass}`}
            >
              <div className="space-y-4">
                {/* Icon container with distinct styles, color always visible */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${item.containerClass}`}>
                  {item.icon}
                </div>
                
                {/* Title and Description */}
                <h3 className={`text-base font-bold text-white tracking-tight transition-colors duration-300 ${item.titleHoverClass}`}>
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 7th Service: AI Bots Highlight Spotlight Card */}
        <div 
          onClick={handleBotContact}
          className="mt-6 bg-zinc-900/40 border border-zinc-850 rounded-2xl p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] max-w-6xl mx-auto cursor-pointer"
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              {/* No header badges, matching font size and layout of other standard cards */}
              <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                Criação de bots de IA para atendimento
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                Tenha um atendente automático treinado especificamente com todo o conhecimento do seu negócio, respondendo seus clientes no WhatsApp, Instagram ou Website. O robô responde dúvidas de forma humana, ajuda a identificar clientes realmente interessados e agenda reuniões ou consultas automaticamente, operando sem parar e capturando oportunidades a qualquer hora do dia ou da noite.
              </p>
            </div>

            {/* Bottom row aligning features and CTA button on the same horizontal row (block-stacked on mobile, inline on desktop) */}
            <div className="mt-4 pt-4 border-t border-zinc-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5 font-light">
                  <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  <span>Automação para WhatsApp e Instagram</span>
                </div>
                <div className="flex items-center gap-1.5 font-light">
                  <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  <span>Integração com Inteligência Artificial (ChatGPT e Gemini)</span>
                </div>
                <div className="flex items-center gap-1.5 font-light">
                  <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  <span>Agendamento Inteligente Automatizado</span>
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleBotContact();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] font-mono tracking-wider font-bold transition-all duration-300 shadow-[0_2px_10px_rgba(6,182,212,0.15)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer shrink-0 self-center md:self-auto"
              >
                <span>Entrar em Contato ➔</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
