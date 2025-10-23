// script.js
// Troca de imagens no hero com crossfade
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  // Suas imagens de fundo
  const imagens = [
    "./assets/mainimg.png",
    "./assets/hero2.png",
    "./assets/hero3.png",
  ];

  let atual = 0;

  // Força as imagens iniciais
  hero.style.setProperty("--img-a", `url(${imagens[0]})`);
  hero.style.setProperty("--img-b", `url(${imagens[1]})`);

  function trocarImagem() {
    const proxima = (atual + 1) % imagens.length;

    // alterna classes show-a / show-b para crossfade
    hero.classList.toggle("fade");

    if (hero.classList.contains("fade")) {
      hero.style.setProperty("--img-a", `url(${imagens[proxima]})`);
    } else {
      hero.style.setProperty("--img-b", `url(${imagens[proxima]})`);
    }

    atual = proxima;
  }

  setInterval(trocarImagem, 6000); // troca a cada 6s
});

// Muda a navbar quando rolar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave ao clicar nos links
  const links = document.querySelectorAll(".nav-link, .cta-btn");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita o reload da página
      const targetId = link.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Menu responsivo
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Galeria e Lightbox
  const imagensGaleria = [
    "assets/industry1.jpg",
    "assets/industry2.jpg",
    "assets/industry3.jpg",
    "assets/industry4.jpg",
    "assets/industry5.jpg",
    "assets/industry6.jpg",
    "assets/industry7.jpg",
    "assets/industry8.jpg",
    "assets/industry9.jpg",
    "assets/industry10.jpg",
  ];

  let indiceAtual = 0;
  let imagensAtivas = [];

  const galeria = document.getElementById("galeria");
  const lightbox = document.getElementById("lightbox");
  const imagemLightbox = document.getElementById("imagemLightbox");
  const botaoFechar = document.getElementById("fechar");
  const botaoAnterior = document.getElementById("anterior");
  const botaoProxima = document.getElementById("proxima");
  const infoImagem = document.getElementById("infoImagem");

  function criarGaleria() {
    if (!galeria) return;
    galeria.innerHTML = ""; // Limpa a galeria existente
    imagensGaleria.forEach((src, index) => {
      const item = document.createElement("div");
      item.className = "industry-item"; // Mantém a classe original para estilo
      item.innerHTML = `<img src="${src}" alt="Imagem ${index + 1}">`;
      item.addEventListener("click", () => abrirLightbox(index, imagensGaleria));
      galeria.appendChild(item);
    });
  }

  function abrirLightbox(index, imagensArray) {
    imagensAtivas = imagensArray;
    indiceAtual = index;
    mostrarImagem();
    lightbox.classList.add("ativo");
    document.body.style.overflow = "hidden";
  }

  function fecharLightbox() {
    lightbox.classList.remove("ativo");
    document.body.style.overflow = "auto";
  }

  function mostrarImagem() {
    imagemLightbox.src = imagensAtivas[indiceAtual];
    infoImagem.textContent = `${indiceAtual + 1} / ${imagensAtivas.length}`;
  }

  function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagensAtivas.length;
    mostrarImagem();
  }

  function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagensAtivas.length) % imagensAtivas.length;
    mostrarImagem();
  }

  if (botaoFechar) botaoFechar.addEventListener("click", fecharLightbox);
  if (botaoProxima) botaoProxima.addEventListener("click", proximaImagem);
  if (botaoAnterior) botaoAnterior.addEventListener("click", imagemAnterior);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) fecharLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (lightbox && lightbox.classList.contains("ativo")) {
      if (e.key === "ArrowRight") proximaImagem();
      if (e.key === "ArrowLeft") imagemAnterior();
      if (e.key === "Escape") fecharLightbox();
    }
  });

  criarGaleria();

  // Galeria do footer
  const imagensGaleriaFooter = [
    "assets/industry1.jpg",
    "assets/industry2.jpg",
    "assets/industry3.jpg",
    "assets/industry4.jpg",
    "assets/industry5.jpg",
    "assets/industry6.jpg",
    "assets/industry7.jpg",
    "assets/industry8.jpg",
    "assets/industry10.jpg",
  ];

  const galeriaFooterImagens = document.querySelectorAll(
    ".gallery-grid-footer .gallery-item"
  );
  galeriaFooterImagens.forEach((img, index) => {
    img.addEventListener("click", () =>
      abrirLightbox(index, imagensGaleriaFooter)
    );
  });
});

