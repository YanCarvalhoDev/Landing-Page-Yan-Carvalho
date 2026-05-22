import React, { useState } from "react";
import { LINKS, getWhatsAppUrl } from "../links";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  gradientFrom: string;
  gradientTo: string;
  patternNo: number;
  image: string;
  beforeText?: string;
  afterText?: string;
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects: ProjectItem[] = [
    {
      id: "nathalie-almeida",
      title: "Dra. Nathalie Almeida",
      description:
        "Advogada sem presença digital relevante. Após o lançamento do site otimizado: destaque na primeira página do Google para buscas de advocacia trabalhista e de família em Irecê, Bahia, em poucos dias. Clientes reais gerados de imediato.",
      tech: ["Destaque no Google", "Super Rápido"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-blue-950/40",
      patternNo: 2,
      image: "./images/Nathalie-website-desktop-image.webp",
      beforeText: "Invisível no Google",
      afterText: "Top 3: novos clientes",
    },
    {
      id: "rainha-pinha",
      title: "Rainha da Pinha 2026",
      description:
        "Site oficial da festa da Prefeitura de Presidente Dutra, Bahia. De evento local sem ponto de contato para uma presença digital consolidada que toda a cidade usou para acompanhar a programação, galeria e candidatas.",
      tech: ["Destaque Visual", "Celular Perfeito"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-cyan-950/40",
      patternNo: 5,
      image: "./images/rainha_da_pinha.webp",
      beforeText: "Sem site oficial",
      afterText: "Referência do evento",
    },
    {
      id: "crarar",
      title: "CRARAR",
      description:
        "Sistema avançado de gestão clínica veterinária desenvolvido sob medida. Centraliza prontuários complexos, carteiras de vacinação digitais e controle operacional clínico de forma ágil e segura.",
      tech: ["React", "Firebase", "Design Moderno"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-cyan-950/30",
      patternNo: 6,
      image: "./images/crarar.webp",
      beforeText: "Processo manual",
      afterText: "Gestão Clínica",
    },
    {
      id: "visconti",
      title: "Visconti",
      description:
        "Restaurante sofisticado que precisava de presença digital à altura de sua culinária. Cardápio digital otimizado e painel de reservas online, gerando uma experiência premium antes mesmo do cliente entrar pela porta.",
      tech: ["React", "Cardápio Rápido", "Reservas Online"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-blue-950/20",
      patternNo: 1,
      image: "./images/visconti.webp",
      beforeText: "Apenas Instagram",
      afterText: "Cardápio & Reservas",
    },
    {
      id: "untamed",
      title: "Untamed",
      description:
        "Clínica médica de excelência que dependia exclusivamente de mídias de rede social e contatos recomendados offline. Desenvolvimento de site institucional de alta conversão para atração de clientes e pacientes particulares.",
      tech: ["Velocidade Máxima", "Destaque Google", "Atrair Clientes"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-cyan-950/30",
      patternNo: 3,
      image: "./images/untamed.webp",
      beforeText: "Indicação offline",
      afterText: "Atração de clientes",
    },
    {
      id: "eventos-formais",
      title: "Eventos formais",
      description:
        "Site-convite especial para casamento com confirmação de presença (RSVP) integrada diretamente no painel. Transformou um fluxo manual confuso em algo elegante, seguro e rastreável.",
      tech: ["React", "Confirmação Direct", "Fácil de Usar"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-purple-950/25",
      patternNo: 4,
      image: "./images/casamento.webp",
      beforeText: "Lista de WhatsApp",
      afterText: "Presença Automática",
    },
    {
      id: "acheirece",
      title: "Achei Irecê",
      description:
        "Portal inteligente de busca local, catálogo integrado e diretório de negócios de Irecê, Bahia. Inicialmente as marcas dependiam de anúncios locais dispersos. Agora contam com plataforma otimizada para aparecer no topo das pesquisas.",
      tech: ["Busca Local", "Banco Digital"],
      gradientFrom: "from-zinc-950",
      gradientTo: "to-emerald-950/20",
      patternNo: 7,
      image: "./images/acheirece.webp",
      beforeText: "Marcas dispersas",
      afterText: "Portal unificado",
    },
  ];

  const handleProjectClick = (project: ProjectItem) => {
    if (project.id === "nathalie-almeida") {
      window.open(LINKS.nathalie, "_blank", "noopener,noreferrer");
    } else if (project.id === "rainia-pinha") {
      window.open(LINKS.rainhaPinha, "_blank", "noopener,noreferrer");
    } else if (project.id === "acheirece") {
      window.open(LINKS.acheiRece, "_blank", "noopener,noreferrer");
    } else {
      const message = `Olá Yan! Acessei seu portfólio, vi o projeto "${project.title}" e gostaria de conversar sobre algo similar para meu negócio.`;
      window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    }
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900"
    >
      {/* Subtle background overlay */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans mt-2">
            Projetos que transformam visitantes em clientes
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light">
            Projetos desenvolvidos com foco em velocidade máxima e excelente
            visibilidade nas buscas reais.
          </p>
        </div>

        {/* Real-looking Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="bg-zinc-900/40 border border-zinc-850 hover:border-cyan-500/85 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:-translate-y-1.5 rounded-2xl overflow-hidden flex flex-col justify-between h-full group cursor-pointer transition-all duration-300 ease-out"
            >
              <div className="flex flex-col flex-grow">
                {/* Screenshot Visual Mockup Image Framed Panel */}
                <div className="h-44 relative flex items-center justify-center overflow-hidden border-b border-zinc-900/60 bg-zinc-950">
                  {/* Real Image of the project */}
                  <img
                    src={project.image}
                    alt={project.title}
                    width="400"
                    height="176"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  />

                  {/* Glowing background bubble */}
                  <div className="absolute w-20 h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>

                  {/* Clean text badge overlays right on the picture */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold bg-zinc-950/80 px-2 py-0.5 rounded-full border border-cyan-500/20 shadow-sm backdrop-blur-sm">
                      {project.patternNo === 2 && "Advocacia Profissional"}
                      {project.patternNo === 5 && "Prefeitura"}
                      {project.patternNo === 1 && "Restaurante Gourmet"}
                      {project.patternNo === 3 && "Clínica Médica"}
                      {project.patternNo === 4 && "Sistema RSVP"}
                      {project.patternNo === 6 && "Gestão Veterinária"}
                      {project.patternNo === 7 && "Diretório Comercial"}
                    </span>
                  </div>
                </div>

                {/* Text Body */}
                <div className="p-6 space-y-3 flex-grow">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Before / After box if available */}
              {project.beforeText && project.afterText && (
                <div className="px-6 pb-6 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-zinc-950/60 border border-zinc-850 rounded-lg p-2.5 flex flex-col justify-between group-hover:border-zinc-800 transition-all duration-200">
                      <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                        Antes
                      </span>
                      <span className="text-xs text-zinc-400 font-light mt-0.5">
                        {project.beforeText}
                      </span>
                    </div>
                    <div className="bg-zinc-950/60 border border-cyan-500/20 rounded-lg p-2.5 flex flex-col justify-between group-hover:border-cyan-500/35 transition-all duration-200">
                      <span className="block text-[9px] font-bold text-cyan-400 uppercase tracking-widest">
                        Depois
                      </span>
                      <span className="text-xs text-cyan-200 font-semibold mt-0.5">
                        {project.afterText}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ver mais projects button */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3.5 rounded-full border border-zinc-800 hover:border-cyan-500/50 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 hover:text-white font-extrabold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(8,145,178,0.25)]"
            >
              <span>Ver mais projetos</span>
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-y-0.5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
