import React from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-2xl font-bold text-white">Yan</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Criando experiências digitais extraordinárias com código limpo e
              design moderno.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center sm:justify-start">
              {[
                {
                  icon: Github,
                  href: "https://github.com/YanCarvalhoDev",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/yan-a-carvalho/",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/yan.carvalho2/profilecard/?igsh=MTJmeXhoa3pkdDdpYQ==",
                  label: "Instagram",
                },
                {
                  icon: Mail,
                  href: "mailto:yancarvalhodev@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Portfólio", href: "#portfolio" },
                { name: "Sobre", href: "#sobre" },
                { name: "Serviços", href: "#servicos" },
                { name: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Desenvolvimento Web",
                "Sistemas Personalizados",
                "Otimização SEO",
                "Consultoria Tech",
                "Manutenção",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <span className="block">yancarvalhodev@gmail.com</span>
              </div>
              <div className="text-gray-400 text-sm">
                <span className="block">(74) 98824-8384</span>
              </div>
              <div className="text-gray-400 text-sm">
                <span className="block">Irecê, BA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Yan Carvalho. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="group mt-4 sm:mt-0 w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
