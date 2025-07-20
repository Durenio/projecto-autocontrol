let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.paginas-slaide');
    const totalSlides = document.querySelectorAll('.depoimento').length;

    currentSlide += direction;

    // Volta ao último slide se for menor que zero
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Vai para o primeiro slide se exceder o total
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Movimenta os slides
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}