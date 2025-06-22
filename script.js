// Aguarda o carregamento completo do dom antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // seleciona o form de contato pelo id
    const contactForm = document.getElementById('contactForm');

    // Adiciona um evento 'submit' ao form
    contactForm.addEventListener('submit', function(event) {
        
        // Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault(); 

        // Exibe uma mensagem de confirmação
        alert('Obrigado pela mensagem! Entraremos em contato em breve.');

        // Limpa os campos do formulário após o envio
        contactForm.reset();
    });

});
// lógica do carrossel 
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    // Verifica se o carrossel existe na página
    if (!track) return;

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button--right');
    const prevButton = document.querySelector('.carousel-button--left');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // organiza os slides um ao lado do outro
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Função para mover para um slide específico
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Função para atualizar a visibilidade dos botões
    const updateButtons = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    };

    // Evento de clique no botão "Próximo"
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateButtons(slides, prevButton, nextButton, nextIndex);
    });

    // Evento de clique no botão "Anterior"
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        
        moveToSlide(track, currentSlide, prevSlide);
        updateButtons(slides, prevButton, nextButton, prevIndex);
    });
});