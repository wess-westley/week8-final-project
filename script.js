// DOM Elements
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const pages = document.querySelectorAll('.page');
const pageLinks = document.querySelectorAll('[data-page]');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeChatbot = document.getElementById('closeChatbot');
const contactForm = document.getElementById('contactForm');
const playPauseBtn = document.getElementById('playPauseBtn');
const bgMusic = document.getElementById('bgMusic');

// ✅ Page Navigation with Smooth Scroll
function navigateTo(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
    targetPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks.classList.remove('active');
}

pageLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(link.getAttribute('data-page'));
    });
});

// ✅ Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ✅ Header Scroll Effect
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// ✅ Background Music
let isPlaying = false;
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        bgMusic.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// ✅ Chatbot Toggle
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active'); // smooth open/close
});
closeChatbot.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// ✅ Form Validation
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// ✅ Background Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particle.style.animationDelay = `${Math.random() * 15}s`;

        particlesContainer.appendChild(particle);
    }
}
createParticles();
