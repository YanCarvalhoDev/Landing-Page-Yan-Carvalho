export const getWhatsAppUrl = (messageText: string) => {
  return `https://wa.me/5574988248384?text=${encodeURIComponent(messageText)}`;
};

export const LINKS = {
  nathalie: "https://www.nathaliecarvalho.adv.br",
  rainhaPinha: "https://www.rainhadapinha.com.br",
  acheiRece: "https://www.acheirece.com.br",
  instagram: "https://www.instagram.com/yancarvalhodev/",
  email: "yancarvalhodev@gmail.com",
  phone: "+5574988248384",
  linkedin: "https://www.linkedin.com/in/yancarvalhodev/",
  whatsappDefault: getWhatsAppUrl("Olá Yan! Acessei seu portfólio de Sites & Sistemas e gostaria de conversar sobre um projeto digital de alta conversão."),
  whatsappCTA: getWhatsAppUrl("Olá Yan! Acessei seu portfólio de Sites & Sistemas e gostaria de fazer um orçamento grátis sem compromisso para meu negócio.")
};
