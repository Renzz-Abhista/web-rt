const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

// Burger
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu');
    });
});

// Sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const removeActiveClass = () => {
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        
        if (entry.isIntersecting) {
            removeActiveClass();
            navLink.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});
