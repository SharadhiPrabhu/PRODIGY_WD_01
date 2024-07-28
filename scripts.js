document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-item a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #5a3e73, #8e44ad)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #8e44ad, #9b59b6)';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#fff';
            link.style.color = '#8e44ad';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });
});
