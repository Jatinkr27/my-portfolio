// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Sticky navbar on scroll
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (!navbar || !hero) return;
  const heroBottom = hero.getBoundingClientRect().bottom;
  if (heroBottom <= 10) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Project card hover effect (optional, for extra interactivity)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    card.style.transform = `translateY(-8px) scale(1.03)`;
  });
  card.addEventListener('mouseleave', e => {
    card.style.transform = '';
  });
});

// Animated background using Lottie
window.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('background-graphics');
  if (bg) {
    bg.innerHTML = `<lottie-player src='https://assets2.lottiefiles.com/packages/lf20_2ks3pjua.json' background='transparent' speed='1' style='width: 100vw; height: 100vh;' loop autoplay></lottie-player>`;
  }
  if (window.AOS) {
    AOS.init({ once: true, duration: 900, easing: 'ease-in-out' });
  }
});

// Parallax effect on hero
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (hero) {
    hero.style.backgroundPosition = `center ${window.scrollY * 0.2}px`;
  }
});

// Animated skill bars (optional, if you want to add bars in HTML)
// document.querySelectorAll('.skill-bar').forEach(bar => {
//   bar.style.width = '0%';
//   setTimeout(() => {
//     bar.style.transition = 'width 1.2s cubic-bezier(.77,0,.18,1)';
//     bar.style.width = bar.dataset.level;
//   }, 400);
// });

// Enhanced project card hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    card.style.transform = 'translateY(-8px) scale(1.04)';
    card.style.boxShadow = '0 12px 36px rgba(79,70,229,0.18)';
  });
  card.addEventListener('mouseleave', e => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
