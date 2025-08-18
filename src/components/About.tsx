import React from "react";
import { Award, Users, Clock } from "lucide-react";
import ProfileCard from "./ProfileCard";

const About = () => {
  const handleContactClick = () => {
    const phoneNumber = "5574988248384"; // seu número no formato internacional
    const message = encodeURIComponent("Olá, gostaria de mais informações!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section id="sobre" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor web apaixonado por criar experiências digitais
            excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* About Text */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou um Engenheiro da Computação e desenvolvolvedor web full-stack
              com mais de 3 anos de experiência na criação de sites e sistemas
              modernos. Especializado em tecnologias como React, Node.js, e
              bancos de dados relacionais e não-relacionais.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Minha paixão é transformar ideias complexas em soluções digitais
              simples, elegantes e funcionais. Trabalho com foco na experiência
              do usuário, performance otimizada e código limpo e escalável.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-500/50 text-cyan-400 mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projetos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-500/50 text-cyan-400 mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-500/50 text-cyan-400 mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-xs sm:text-sm text-gray-400">Anos</div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative flex justify-center lg:justify-end">
            <ProfileCard
              name="Yan"
              title="Full-Stack Developer"
              handle="Yan Carvalho"
              status="Disponível"
              contactText="Contato"
              avatarUrl="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
