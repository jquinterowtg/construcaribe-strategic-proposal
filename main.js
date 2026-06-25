document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones de Scroll (AOS)
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Sticky Header Background
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-brand-dark/90', 'shadow-lg');
            nav.classList.remove('border-white/10');
        } else {
            nav.classList.remove('bg-brand-dark/90', 'shadow-lg');
            nav.classList.add('border-white/10');
        }
    });
});
