document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 70;
        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            if (
                section &&
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
