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

