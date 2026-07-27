/* Centralize aqui o telefone de atendimento da loja: DDI + DDD + número, sem espaços. */
const numeroWhatsApp = "558197470525";
const mensagemWhatsAppGeral = "Olá! Vim pelo site da Diego Brandão Veículos e gostaria de mais informações.";
function criarLinkWhatsApp(mensagem) { return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`; }
function configurarWhatsAppGeral() { document.querySelectorAll("[data-whatsapp-geral]").forEach(link => { link.href=criarLinkWhatsApp(mensagemWhatsAppGeral); link.target="_blank"; link.rel="noopener"; }); }
