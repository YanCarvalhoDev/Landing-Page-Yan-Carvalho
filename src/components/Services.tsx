import React from "react";
import {
  Monitor,
  Code,
  Zap,
  Puzzle,
  Smartphone,
  Database,
  Shield,
  Search,
  UserRoundCog,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Sites Responsivos",
      description:
        "Websites modernos que funcionam perfeitamente em todos os dispositivos",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Code,
      title: "Sistemas Sob Medida",
      description:
        "Desenvolvimento de sistemas personalizados para suas necessidades específicas",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Otimização de Performance",
      description:
        "Acelero seu site para carregar rapidamente e melhorar a experiência do usuário",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Puzzle,
      title: "Integrações Personalizadas",
      description: "Conecte seu site com APIs e ferramentas externas",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Aplicações web que funcionam como apps nativos no mobile",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description:
        "Modelagem e implementação de bancos de dados eficientes e seguros",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: UserRoundCog,
      title: "Consultoria Tech",
      description:
        "Análise e aplicação de melhorias técnicas para elevar a qualidade e a experiência do seu site",
      color: "from-gray-500 to-slate-500",
    },
    // {
    //   icon: Shield,
    //   title: "Segurança Web",
    //   description:
    //     "Implementação de melhores práticas de segurança para proteger seus dados",
    //   color: "from-gray-500 to-slate-500",
    // },
    {
      icon: Search,
      title: "SEO Técnico",
      description:
        "Otimização para mecanismos de busca e melhor posicionamento no Google",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Serviços Oferecidos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas para levar sua presença digital ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            >
              {/* Icon */}
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
