
// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#6366f1' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    }
});

// Initialize Typed.js
new Typed('.typed-text', {
    strings: ['Emane', 'a Frontend Developer', 'Backend Developer', 'a Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    icon.className = document.body.dataset.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Dynamic Project Cards
const projects = [
    {
        title: 'THE Golden Restaurant',
        description: 'A modern,responsive website for an elegant dining experience with menu and reservation features',
        image: 'resto-projet.png'
    },
    {
        title: 'Beauty&Glam website',
        description: 'A stylish and modern website to showcase professional makeup looks, services, and booking options',
        image: 'makeup.jpg'
    },
    {
        title: 'TechnoStore E-commerce Platform',
        description: 'A fully functional e-commerce website for selling smartphones, headphones, and accessories with secure checkout and responsive design',
        image: 'etrade.jpg'
    }
];

const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    projectsGrid.innerHTML += `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
});

// Dynamic Skills
const skills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    // { name: 'Node.js', icon: 'fab fa-node-js' },
    // { name: 'Python', icon: 'fab fa-python' },
    { name: 'Github', icon: 'fab fa-github' },
    { name: 'Wordpress', icon: 'fab fa-wordpress' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },

];

const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    skillsGrid.innerHTML += `
        <div class="skill-item" data-aos="fade-up">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        </div>
    `;
});

// Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    form.reset();
});
