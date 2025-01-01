

// Back to Top functionality
const backToTopBtn = document.getElementById('back-to-top');
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// here toggle bar 

function toggleMenu() {
  const nav = document.querySelector('nav ul');
  const toggleButton = document.querySelector('.menu-toggle');
  nav.classList.toggle('active');
  toggleButton.textContent = nav.classList.contains('active') ? '✖' : '☰';
}

function closeMenu() {
  const nav = document.querySelector('nav ul');
  const toggleButton = document.querySelector('.menu-toggle');
  nav.classList.remove('active');
  toggleButton.textContent = '☰';
}


function toggleMenu() {
  const nav = document.querySelector('nav ul');
  const toggleButton = document.querySelector('.menu-toggle');
  nav.classList.toggle('active');
  toggleButton.textContent = nav.classList.contains('active') ? '✖' : '☰';
}

function closeMenu() {
  const nav = document.querySelector('nav ul');
  const toggleButton = document.querySelector('.menu-toggle');
  nav.classList.remove('active');
  toggleButton.textContent = '☰';
}

function openLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.classList.add('active');
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.classList.remove('active');
}

 // scrolling header hide and show 
let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition) {
    // Scroll down
    header.style.top = '-100px';
  } else {
    // Scroll up
    header.style.top = '0';
  }
  lastScrollPosition = currentScrollPosition;
});






// Transtion Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function makeSectionVisible(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.remove('visible');
    });

    const section = document.getElementById(sectionId);
    section.classList.add('visible');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  // Example usage: call this function when a navigation link is clicked
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = this.getAttribute('href').substring(1);
      makeSectionVisible(targetSection);
    });
  });

// Transition Section End 

// Set up visitor count
let visitorCount = localStorage.getItem("visitorCount") || 0;
visitorCount++;
localStorage.setItem("visitorCount", visitorCount);
document.getElementById("visitorCount").textContent = visitorCount;

// Get and set like/dislike counts from localStorage
let likeCount = localStorage.getItem("likeCount") || 0;
let dislikeCount = localStorage.getItem("dislikeCount") || 0;

// Display like/dislike counts
document.getElementById("likeCount").textContent = likeCount;
document.getElementById("dislikeCount").textContent = dislikeCount;

// Like button functionality
document.getElementById("likeButton").addEventListener("click", () => {
  likeCount++;
  localStorage.setItem("likeCount", likeCount);
  document.getElementById("likeCount").textContent = likeCount;
});

// Dislike button functionality
document.getElementById("dislikeButton").addEventListener("click", () => {
  dislikeCount++;
  localStorage.setItem("dislikeCount", dislikeCount);
  document.getElementById("dislikeCount").textContent = dislikeCount;
});


