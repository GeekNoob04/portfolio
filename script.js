const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Scroll handling
window.onscroll = () => {
    const top = window.scrollY;
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;  // Adjust for header height if needed
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active');
        }
    });
};

// Menu icon click handling - combined both click handlers into one
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Smooth scroll and active link handling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        e.target.classList.add('active');
        
        // Smooth scroll to section
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});
