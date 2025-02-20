document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");

    carousel.addEventListener("wheel", function (event) {
        event.preventDefault(); // Evita que el scroll vertical de la página interfiera
        carousel.scrollLeft += event.deltaY; // Mueve el carrusel horizontalmente
    });
});
