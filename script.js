// Add smooth scroll functionality for the navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust this value to control the scroll offset
            behavior: 'smooth'
        });
    });
});
