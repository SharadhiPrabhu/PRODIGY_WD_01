document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #283c86, #45a247)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #ff7e5f, #feb47b)';
        }
    });
});
