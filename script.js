// Простий ефект для каомодзі
const kaomoji = document.querySelector('.kaomoji');

kaomoji.addEventListener('mouseover', () => {
    kaomoji.textContent = '( ^ω^ )'; // Змінюємо вираз обличчя
});

kaomoji.addEventListener('mouseout', () => {
    kaomoji.textContent = '(>^ω^<)';
});

// Логіка для іконок (наприклад, відкриття пошуку)
document.querySelector('.ph-magnifying-glass').addEventListener('click', () => {
    console.log('Search clicked');
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.brand-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.product-card');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    cards.forEach(card => {
        card.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

document.querySelector('.feedback-form button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.feedback-form input').value;
    
    if(email.includes('@')) {
        alert('Дякуємо! Ми зв’яжемося з вами за адресою: ' + email);
    } else {
        alert('Будь ласка, введіть коректний e-mail');
    }
});