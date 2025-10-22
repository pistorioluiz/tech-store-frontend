const menu = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => menu.classList.toggle('show'));

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) menu.classList.remove('show');
    });
});

document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const button = e.target.querySelector('button');

    if (input.value.includes('@')) {
        button.textContent = '✓ Inscrito';
        setTimeout(() => {
            button.textContent = 'Inscrever';
            e.target.reset();
        }, 2000);
    } else {
        button.textContent = 'Email inválido!';
        setTimeout(() => button.textContent = 'Inscrever', 2000);
    }
});