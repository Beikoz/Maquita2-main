 const images = [
    "/assets/main%20img.png",
    "/assets/hero2.png",
    "/assets/hero3.png"
  ];

  const hero = document.querySelector(".hero");

  // Estado inicial
  let current = 0;        // índice da imagem atual
  let showingA = true;    // começamos exibindo a camada A (::before)

  // Garante a classe inicial e aplica imagens nas variáveis CSS
  hero.classList.add("show-a");
  hero.style.setProperty("--img-a", `url('${images[current]}')`);
  hero.style.setProperty("--img-b", `url('${images[(current + 1) % images.length]}')`);

  // Troca com fade a cada 5s
  setInterval(() => {
    const next = (current + 1) % images.length;

    if (showingA) {
      // prepara a camada B com a próxima imagem e mostra B
      hero.style.setProperty("--img-b", `url('${images[next]}')`);
      hero.classList.remove("show-a");
      hero.classList.add("show-b");
    } else {
      // prepara a camada A com a próxima imagem e mostra A
      hero.style.setProperty("--img-a", `url('${images[next]}')`);
      hero.classList.remove("show-b");
      hero.classList.add("show-a");
    }
    

    showingA = !showingA;
    current = next;
  }, 5000); // tempo entre trocas


  (function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const apply = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Aplica no load (caso já abra a página rolada)
  apply();
  // Atualiza durante o scroll
  window.addEventListener('scroll', apply, { passive: true });
})();