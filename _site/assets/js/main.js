document.addEventListener("DOMContentLoaded", function() {

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

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.content-wrapper');
    if (!wrapper) return;

    const panels = Array.from(wrapper.querySelectorAll('.content'));
    let currentIndex = panels.findIndex(p => p.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0, panels[0].classList.add('active');

    let isAnimating = false;

    // helper: найти индекс панели по name
    function findIndexByName(name) {
        return panels.findIndex(p => p.dataset.panel === name);
    }

    function showPanel(nextIndex, direction = "down") {
        if (isAnimating) return;
        if (nextIndex === currentIndex) return;
        if (nextIndex < 0 || nextIndex >= panels.length) return;

        isAnimating = true;
        const current = panels[currentIndex];
        const next = panels[nextIndex];

        // стартовые состояния — гарантируем корректный z-index и pointer-events
        next.classList.remove('active');
        next.classList.remove('slide-in','slide-out');
        current.classList.remove('slide-in','slide-out');

        // 1) запустить анимацию: текущая уезжает вверх, новая заезжает снизу
        if (direction === "down") {
            current.classList.add('slide-out');
            next.classList.add('slide-in');
        } else {
            current.classList.add('slide-out-down');
            next.classList.add('slide-in-down');
        }

        // по завершении анимаций убираем временные классы и выставляем active
        const onAnimEnd = (ev) => {
        // очистка
        current.classList.remove('slide-out','slide-out-down','active');
        next.classList.remove('slide-in','slide-in-down');
        next.classList.add('active');

        // aria-hidden для доступности
        current.setAttribute('aria-hidden', 'true');
        next.removeAttribute('aria-hidden');

        // перенос фокуса внутрь новой панели (первый фокусируемый элемент)
        const focusable = next.querySelector('button, a, input, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();

        current.removeEventListener('animationend', onAnimEnd);
        isAnimating = false;
        };

        current.addEventListener('animationend', onAnimEnd);
        currentIndex = nextIndex;
    }

    // делегируем клики по кнопкам
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-target]');
        if (!btn) return;

        const target = btn.dataset.target;
        if (!target) return;

        // special tokens
        if (target === 'next' || target === 'down') {
            const nextIndex = Math.min(currentIndex + 1, panels.length - 1);
            showPanel(nextIndex, "down");
            return;
        }

        if (target === 'prev' || target === 'top') {
            const prevIndex = Math.max(currentIndex - 1, 0);
            showPanel(prevIndex, "up");
            return;
        }

        // otherwise treat as name
        const idx = findIndexByName(target);
        if (idx !== -1) showPanel(idx);
    });

    // Инициализация aria-hidden
    panels.forEach((p, i) => {
        if (!p.classList.contains('active')) p.setAttribute('aria-hidden', 'true');
    });
});