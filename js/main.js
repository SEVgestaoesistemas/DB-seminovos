/* Inicialização dos componentes e eventos da página. */
let observadorRevelacao;

/* Mostra os conteúdos gradualmente conforme entram na área visível da tela. */
function observarElementosRevelados() {
  if (!observadorRevelacao) return;
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(elemento => observadorRevelacao.observe(elemento));
}

/* Atualiza a aparência do botão de limpeza conforme os filtros são usados. */
function atualizarBotaoLimpar() {
  const possuiFiltro = document.querySelector("#busca").value || document.querySelector("#preco").value !== "todos" || document.querySelector("#ordenacao").value !== "padrao";
  document.querySelector("#limpar-filtros").hidden = !possuiFiltro;
}

document.addEventListener("DOMContentLoaded", () => {
  if ("IntersectionObserver" in window) {
    observadorRevelacao = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => { if (entrada.isIntersecting) { entrada.target.classList.add("is-visible"); observador.unobserve(entrada.target); } });
    }, { threshold:.12 });
  } else {
    observadorRevelacao = { observe: elemento => elemento.classList.add("is-visible") };
  }

  document.querySelectorAll(".benefits__grid, .about__grid, .location__content").forEach(elemento => elemento.classList.add("reveal"));
  renderizarDestaques(); renderizarCatalogo(); configurarWhatsAppGeral(); observarElementosRevelados(); document.querySelector("#ano-atual").textContent=new Date().getFullYear();

  const filtros=document.querySelector("#filtros-catalogo");
  filtros.addEventListener("input", () => { filtrarCatalogo(); atualizarBotaoLimpar(); });
  filtros.addEventListener("change", () => { filtrarCatalogo(); atualizarBotaoLimpar(); });
  document.querySelector("#limpar-filtros").addEventListener("click", () => { filtros.reset(); filtrarCatalogo(); atualizarBotaoLimpar(); document.querySelector("#busca").focus(); });

  document.addEventListener("click", evento => {
    if (evento.target.closest(".vehicle-card__quick-action")) return;
    const card=evento.target.closest("[data-carro-id]"); if(card) abrirModal(card.dataset.carroId);
    if(evento.target.closest("[data-fechar-modal]")) fecharModal(); const botaoGaleria=evento.target.closest("[data-galeria]"); if(botaoGaleria) trocarImagem(botaoGaleria.dataset.galeria);
  });
  document.addEventListener("keydown", evento => { if(evento.key === "Escape") fecharModal(); const card=document.activeElement; if((evento.key === "Enter" || evento.key === " ") && card.matches("[data-carro-id]")) { evento.preventDefault(); abrirModal(card.dataset.carroId); } });

  const menu=document.querySelector(".menu-toggle"), navegacao=document.querySelector(".navigation");
  menu.addEventListener("click", () => { const aberto=navegacao.classList.toggle("is-open"); menu.classList.toggle("is-open",aberto); menu.setAttribute("aria-expanded",aberto); menu.setAttribute("aria-label",aberto?"Fechar menu":"Abrir menu"); });
  navegacao.addEventListener("click", evento => { if(evento.target.tagName === "A") { navegacao.classList.remove("is-open"); menu.classList.remove("is-open"); menu.setAttribute("aria-expanded","false"); } });

  const linksMenu=[...document.querySelectorAll(".navigation a:not(.nav-contact)")]; const secoes=linksMenu.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observadorNavegacao = new IntersectionObserver(entradas => { entradas.forEach(entrada => { if (entrada.isIntersecting) linksMenu.forEach(link => link.classList.toggle("is-active",link.getAttribute("href") === `#${entrada.target.id}`)); }); }, { rootMargin:"-35% 0px -55% 0px" });
  secoes.forEach(secao => observadorNavegacao.observe(secao));
  window.addEventListener("scroll", () => document.querySelector(".header").classList.toggle("is-scrolled",window.scrollY>10));
});
