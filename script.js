
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
    strings: ['Emane BOUTIB', 'a Developer', 'a Designer', 'a Problem Solver'],
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
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with React and Node.js',
        image: 'https://picsum.photos/400/300?random=1'
    },
    {
        title: 'Social Media Dashboard',
        description: 'Real-time analytics dashboard with data visualization',
        image: 'https://picsum.photos/400/300?random=2'
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task management system with real-time updates',
        image: 'https://picsum.photos/400/300?random=3'
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
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Python', icon: 'fab fa-python' }
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
