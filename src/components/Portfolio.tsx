import React from "react";
import { ExternalLink, Github, X } from "lucide-react";

// Importações das imagens completas
import advImg from "../images/adv.png";
import casamentoImg from "../images/casamento.png";
import codeMasterImg from "../images/codeMaster.png";
import rainhaDaPinhaImg from "../images/rainhaDaPinha.png";
import untamedImg from "../images/Untamed2x.png";
import viscontiImg from "../images/visconti.png";

// Importações dos thumbnails
import advThumb from "../images/adv_thumb.png";
import casamentoThumb from "../images/casamento_thumb.png";
import codeMasterThumb from "../images/codeMaster_thumb.png";
import rainhaDaPinhaThumb from "../images/rainhaDaPinha_thumb.png";
import untamedThumb from "../images/Untamed2x_thumb.png";
import viscontiThumb from "../images/visconti_thumb.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(
    null
  );

  const projects = [
    {
      id: 1,
      title: "Visconti",
      description:
        "Site exclusivo para restaurantes com foco em experiências gastronômicas sofisticadas",
      image: viscontiThumb,
      fullImage: viscontiImg,
      tech: ["React", "Tailwind", "PostgreSQL"],
    },
    {
      id: 2,
      title: "Dr. Ricardo Landing Page",
      description: "Landing page jurídica excepcional e de alta conversão",
      image: advThumb,
      fullImage: advImg,
      tech: ["React", "Tailwind", "Ts"],
    },
    {
      id: 3,
      title: "Untamed",
      description:
        "Site feito sob medida para clínicas e hospitais com atendimento premium",
      image: untamedThumb,
      fullImage: untamedImg,
      tech: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 4,
      title: "Eventos formais",
      description:
        "Site convite especial para casamento com confirmação de presença",
      image: casamentoThumb,
      fullImage: casamentoImg,
      tech: ["React", "Tailwind", "Figma"],
    },
    {
      id: 5,
      title: "Festa Rainha da Pinha 2025",
      description:
        "Site desenvolvido para a divulgação da festa da cidade de Presidente Dutra - BA",
      image: rainhaDaPinhaThumb,
      fullImage: rainhaDaPinhaImg,
      tech: ["React", "Figma", "Tailwind"],
    },
    {
      id: 6,
      title: "Code Master Generator",
      description:
        "Sistema de geração de códigos escanáveis para controle interno",
      image: codeMasterThumb,
      fullImage: codeMasterImg,
      tech: ["React", "Tailwind", "API"],
    },
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="portfolio"
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Portfólio de Projetos
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi com tecnologias modernas e
              design inovador
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] cursor-pointer"
                onClick={() => openModal(project.id)}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                  {/* Hover Actions 
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/30 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/30 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>*/}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && selectedProjectData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative w-[95vw] h-[85vh] sm:w-[90vw] sm:h-[85vh] md:w-[80vw] md:h-[80vh] max-w-7xl flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-8 sm:-top-12 right-0 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-white hover:text-cyan-400"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Project Info - Above image on mobile */}
            <div className="block sm:absolute sm:-top-16 sm:left-0 sm:z-10 max-w-full sm:max-w-none mb-3 sm:mb-0 px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                {selectedProjectData.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-sm">
                {selectedProjectData.description}
              </p>
            </div>

            {/* Image Container */}
            <div
              className="w-full flex-1 bg-gray-900 rounded-xl overflow-y-auto border border-gray-700/50 shadow-2xl mb-3 sm:mb-0"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProjectData.fullImage}
                alt={selectedProjectData.title}
                className="w-full min-h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Tech Stack */}
            <div className="block sm:absolute sm:-bottom-12 sm:left-0 flex flex-wrap gap-1 sm:gap-2 max-w-full px-2 sm:px-0">
              {selectedProjectData.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 sm:px-3 text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
