// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- CURSOR GLOW ---
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorGlow.style.left = x + 'px';
    cursorGlow.style.top = y + 'px';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
});

// --- TEXTO DINÁMICO HERO (NUEVO) ---
const textElement = document.getElementById('dynamic-text');
const phrases = [
    "impulsamos tu empresa.",
    "creamos software inteligente.",
    "automatizamos tus ventas.",
    "digitalizamos tu negocio.",
    "diseñamos futuro."
];

let phraseIndex = 0;

function changeText() {
    // 1. Desvanecer el texto actual (Fade Out)
    textElement.classList.add('fade-out');
    textElement.classList.remove('fade-in');

    // 2. Esperar 0.5s (lo que dura la transición CSS) y cambiar texto
    setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        textElement.textContent = phrases[phraseIndex];
        
        // 3. Reaparecer el nuevo texto (Fade In)
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
    }, 500); // 500ms coincide con la transition en CSS
}

// Iniciar el ciclo cada 3.5 segundos
setInterval(changeText, 3500);