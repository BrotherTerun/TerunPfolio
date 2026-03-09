document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".menu button");
    const panels = document.querySelectorAll(".panel");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
        panels.forEach(p => p.classList.remove("active"));
        const target = button.dataset.target;
        document.getElementById(target).classList.add("active");
        });
    });

    const cards = document.querySelectorAll('.menu-deck .card');

    cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
        cards.forEach((c, i) => {
        c.style.transform = i <= idx ? `translateX(${i*30}px)` : `translateX(${i*60}px)`;
        });
    });
    card.addEventListener('mouseleave', () => {
        cards.forEach((c, i) => c.style.transform = `translateX(${i*30}px)`);
    });
    });
});