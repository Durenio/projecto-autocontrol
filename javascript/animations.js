
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Você pode remover o observer se quiser que a animação só aconteça uma vez
        // observer.unobserve(entry.target);
      }
    });
  });

  // Seleciona todos os elementos que têm a classe animate-slide-up
  document.querySelectorAll('.animate-slide-up').forEach(el => {
    observer.observe(el);
  });



