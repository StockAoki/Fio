// ============================================
// CONFIGURATION - Personaliza estas fechas
// ============================================

// Fecha de inicio de la relación (22 de febrero 2025 para 10 meses)
const RELATIONSHIP_START = new Date('2025-02-22T00:00:00');

// Fecha de reencuentro - CAMBIA ESTA FECHA cuando sepas cuándo se verán
const REUNION_DATE = new Date('2026-01-06T18:00:00'); // Ejemplo: 30 de diciembre a las 6pm

// ============================================
// COUNTERS - Months, Days, Hours Together
// ============================================

function calculateTimeTogether() {
    const now = new Date();
    const diff = now - RELATIONSHIP_START;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Calculate months (considering they celebrate on the 22nd of each month)
    const months = Math.floor((now - RELATIONSHIP_START) / (1000 * 60 * 60 * 24 * 30.44));
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// Update every hour
calculateTimeTogether();
setInterval(calculateTimeTogether, 3600000);

// ============================================
// WORLD CLOCKS - Costa Rica & Amsterdam
// ============================================

function updateWorldClocks() {
    const now = new Date();
    
    // Costa Rica (UTC-6)
    const costaRicaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }));
    const crHours = costaRicaTime.getHours().toString().padStart(2, '0');
    const crMinutes = costaRicaTime.getMinutes().toString().padStart(2, '0');
    document.getElementById('costaRicaTime').textContent = `${crHours}:${crMinutes}`;
    
    // Amsterdam (UTC+1)
    const amsterdamTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
    const amHours = amsterdamTime.getHours().toString().padStart(2, '0');
    const amMinutes = amsterdamTime.getMinutes().toString().padStart(2, '0');
    document.getElementById('amsterdamTime').textContent = `${amHours}:${amMinutes}`;
}

// Update every second
updateWorldClocks();
setInterval(updateWorldClocks, 1000);

// ============================================
// REUNION COUNTDOWN
// ============================================

function updateCountdown() {
    const now = new Date();
    const diff = REUNION_DATE - now;
    
    if (diff <= 0) {
        // They're together!
        document.querySelector('.countdown-title').textContent = '¡Ya estamos juntos! 🎉';
        document.getElementById('countDays').textContent = '0';
        document.getElementById('countHours').textContent = '0';
        document.getElementById('countMinutes').textContent = '0';
        document.getElementById('countSeconds').textContent = '0';
        document.querySelector('.countdown-message').textContent = '¡Finalmente juntos de nuevo! ❤️';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countDays').textContent = days;
    document.getElementById('countHours').textContent = hours;
    document.getElementById('countMinutes').textContent = minutes;
    document.getElementById('countSeconds').textContent = seconds;
}

// Update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// FLOATING HEARTS
// ============================================

function createHeart() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    hero.appendChild(heart);
}

// Create initial hearts
for (let i = 0; i < 15; i++) {
    createHeart();
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe reason cards with stagger
document.querySelectorAll('.reason-card').forEach((card, index) => {
    setTimeout(() => {
        observer.observe(card);
    }, index * 100);
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PARALLAX EFFECT FOR HEARTS
// ============================================

window.addEventListener('scroll', () => {
    const hearts = document.querySelectorAll('.heart');
    const scrolled = window.pageYOffset;
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index % 3) * 0.2;
        heart.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// CONSOLE MESSAGE (Easter Egg)
// ============================================

console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║     💕 10 Meses de Amor 💕           ║
║                                       ║
║  Cada línea de código aquí fue       ║
║  hecha con amor para ti              ║
║                                       ║
║  Te amo más que a JavaScript 😄      ║
║                                       ║
╚═══════════════════════════════════════╝
`);