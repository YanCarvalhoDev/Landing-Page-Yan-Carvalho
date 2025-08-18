import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Roberto Carlos",
      role: "Prefeito de Presidente Dutra-BA",
      image:
        "https://i.ibb.co/GQ13x4KW/Prefeito-Robert-o.jpg?auto=compress&cs=tinysrgb&w=300",
      content:
        "Trabalho excepcional! O site ficou exatamente como imaginei. Profissional dedicado e com excelente comunicação durante todo o projeto.",
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Glauber Cavalcante",
      role: "Veterinário",
      image: "https://i.imgur.com/Nxz7Tqf.png",
      content:
        "Trabalho impecável, o site tem excelente desempenho, carrega rápido e é muito intuitivo. O banco de dados veterinário está claro e prático, facilitando o uso no dia a dia.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ramon Gonçalves",
      role: "Personal Trainer",
      image: "https://i.imgur.com/2AcoJNv.jpeg",
      content:
        "Sistema excelente! Resolveu o problema de envio dos meus treinos personalizados aos meus alunos. Ultrapassou todas as minhas expectativas.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Depoimentos de Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja o que os clientes dizem sobre o meu trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 group-hover:border-cyan-500/50 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div>
                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
