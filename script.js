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
  const before = getComputedStyle(hero, "::before");
  const after = getComputedStyle(hero, "::after");

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
  const links = document.querySelectorAll(".nav-link, .cta-btn");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita o reload da página
      const targetId = link.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


// Array com URLs de imagens da sua galeria (substitua pelas suas imagens)
const imagensGaleria = [
    'assets/industry1.jpg',
    'assets/industry2.jpg',
    'assets/industry3.jpg',
    'assets/industry4.jpg',
    'assets/industry5.jpg',
    'assets/industry6.jpg',
    'assets/industry7.jpg',
    'assets/industry8.jpg',
    'assets/industry9.jpg',
    'assets/industry10.jpg'
];

let indiceAtual = 0;

// Elementos do DOM do Lightbox
const galeria = document.getElementById('galeria');
const lightbox = document.getElementById('lightbox');
const imagemLightbox = document.getElementById('imagemLightbox');
const botaoFechar = document.getElementById('fechar');
const botaoAnterior = document.getElementById('anterior');
const botaoProxima = document.getElementById('proxima');
const infoImagem = document.getElementById('infoImagem');

// Função para criar a galeria dinamicamente
function criarGaleria() {
    galeria.innerHTML = ''; // Limpa a galeria existente
    imagensGaleria.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'industry-item'; // Mantém a classe original para estilo
        item.innerHTML = `<img src="${src}" alt="Imagem ${index + 1}">`;
        item.addEventListener('click', () => abrirLightbox(index));
        galeria.appendChild(item);
    });
}

// Função para abrir o lightbox
function abrirLightbox(index) {
    indiceAtual = index;
    mostrarImagem();
    lightbox.classList.add('ativo');
    document.body.style.overflow = 'hidden'; // Impede scroll da página
}

// Função para fechar o lightbox
function fecharLightbox() {
    lightbox.classList.remove('ativo');
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Função para mostrar a imagem atual no lightbox
function mostrarImagem() {
    imagemLightbox.src = imagensGaleria[indiceAtual];
    infoImagem.textContent = `${indiceAtual + 1} / ${imagensGaleria.length}`;
}

// Função para ir para a próxima imagem
function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagensGaleria.length;
    mostrarImagem();
}

// Função para ir para a imagem anterior
function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagensGaleria.length) % imagensGaleria.length;
    mostrarImagem();
}

// Event listeners para o lightbox
botaoFechar.addEventListener('click', fecharLightbox);
botaoProxima.addEventListener('click', proximaImagem);
botaoAnterior.addEventListener('click', imagemAnterior);

// Fechar ao clicar fora da imagem no lightbox
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        fecharLightbox();
    }
});

// Navegação com teclado no lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('ativo')) {
        if (e.key === 'ArrowRight') proximaImagem();
        if (e.key === 'ArrowLeft') imagemAnterior();
        if (e.key === 'Escape') fecharLightbox();
    }
});

// Inicializar galeria ao carregar o DOM
document.addEventListener('DOMContentLoaded', criarGaleria);