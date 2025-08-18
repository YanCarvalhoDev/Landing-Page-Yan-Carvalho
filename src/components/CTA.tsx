import React from "react";
import { ArrowRight, Zap, MessageCircle } from "lucide-react";
import logoImg from "../images/yanLogo.png";

const CTA = () => {
  const handleContactClick = () => {
    const phoneNumber = "5574988248384"; // seu número no formato internacional
    const message = encodeURIComponent("Olá, gostaria de mais informações!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-3xl bg-gradient-radial from-cyan-500/20 to-transparent rounded-full animate-pulse delay-7000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-10000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Icon */}
        {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border-2 border-cyan-500/50 mb-8 group hover:scale-110 transition-transform duration-300">
          <Zap className="w-10 h-10 text-cyan-400 group-hover:text-white transition-colors duration-300" />
        </div> */}

        <div className="inline-block mb-8 hover:scale-110 transition-transform duration-300">
          <img
            src={logoImg}
            alt="Logo"
            className="w-40 h-40 object-contain mx-auto "
          />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Pronto para elevar seu site
          <br />
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
            ao próximo nível?
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Vamos criar algo extraordinário juntos. Transforme sua ideia em
          realidade digital.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={handleContactClick}
            className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Entre em Contato
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>

          {/*<button className="group px-12 py-5 border-2 border-cyan-500/50 text-cyan-400 font-bold text-lg rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            <span className="flex items-center gap-3">
              Ver Mais Projetos
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>*/}
        </div>

        {/* Contact Info */}
        <div className="mt-16 p-6 sm:p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 inline-block">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">
                Disponível para novos projetos
              </span>
            </div>
            <div className="text-gray-400 hidden sm:block">•</div>
            <div className="text-cyan-400 font-medium">Resposta em até 24h</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
