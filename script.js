// ===== Wait until DOM is loaded =====
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio site loaded ✅");

    // ===== SCROLL REVEAL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // ===== SMOOTH SCROLLING =====
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if(targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== MOBILE MENU TOGGLE (optional) =====
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');

    // If you want a toggle button later, you can add it and enable this code
    // Example: document.querySelector('.menu-btn').addEventListener('click', () => {
    //      nav.classList.toggle('active');
    // });

});
