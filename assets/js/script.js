//création des différents éléments html
(function ($) {
    $(document).ready(function () {
        $(".story").addClass("animSection");
        $("#studio").addClass("animSection");
        $("#oscars").addClass("animSection");
        $("section.story h2").addClass("title-story");
        $(".title-story").html("<span class='animTitle'>L'histoire</span>");
        $("section#studio h2").addClass("title-studio");
        $(".title-studio").html("<div class='bloc-title-studio'><span class='animTitle'>Studio</span> <span class='animTitle2'>Koukaki</span></div>");
        $(".banner img").wrap("<div class='logo-float'></div>");
    });

})(jQuery);

///////////////////////// ANIMATION DES TITRES //////////////////////////////////////

window.onload = (event) => {
  
    const targets = document.querySelectorAll(".animTitle, .animTitle2");

    function handleIntersection(entries) {
        entries.map((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    targets.forEach(target => observer.observe(target));
};


///////////////////////// MENU BURGER //////////////////////////////////////

const elements = document.querySelectorAll('.menu, .site-main, .nav-visible, .site-footer, .site-header');
const burger = document.querySelector('.burger');
//on déclenche l'animation au clic avec toggle (clic ça ajoute la class active, reclic ça l'enlève)
burger.addEventListener('click', () => {
    for (const element of elements) {
        element.classList.toggle('active');
    };
    burger.classList.toggle('active');
});


//On retire la classe active au clic sur un lien
const links = document.querySelectorAll("nav li");
for (const link of links) {
    link.addEventListener("click", () => {
        for (const element of elements) {
            element.classList.toggle('active');
        };
        burger.classList.toggle('active');
    });
};

//////////////////////////////////// CAROUSSEL /////////////////////////////////////////////////////

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
        rotate: 60,
        slideShadows: false,
        scale: 0.85,
        modifier: 1,
    },
});