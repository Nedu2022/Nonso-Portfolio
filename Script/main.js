const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.getElementById("navbar");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelector(".nav-items");
const navLinks = document.querySelectorAll(".nav-link li");
const text = document.querySelector("sec.text");




let flag = true;

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");

  flag = !flag;
  if (!flag) {
    overlay.style.transform = "translateY(0)";
    navItems.style.transform = "translateY(0)";
  } else {
    overlay.style.transform = "translateY(100vh)";
    navItems.style.transform = "translateY(-100vh)";
  }


  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease-in-out backwards ${index / 6 + 0.5}s`;
    }
  });
});

//----------------Navbar-------------//
window.addEventListener("scroll", () => {
  let navbar =document.getElementById("navbar");
  navbar.classList.toggle("fixed", this.window.scrollY > 0);
});


ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
  
});

ScrollReveal().reveal('.text-holder-bg', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.text-holder-sm', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.social-icons', {delay: 800, origin: 'left', interval: 200});
ScrollReveal().reveal('.send', {delay: 800, origin: 'right'});
ScrollReveal().reveal('.about-col-1', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.proficiency-text, #rock-skills', {delay: 500, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.proficiency-sub, #rock-skills-text', {delay: 600, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.profi-textbg', {delay: 700, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.profi-textsm, .skills_container', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.proficiency-text', {delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.timeline-content', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.timeline-location', {delay: 600, origin: 'top', interval: 200});
ScrollReveal().reveal('.timeline-date', {delay: 500, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.contact-left', {delay: 600, origin: 'left', interval: 200});
ScrollReveal().reveal('.contact-right', {delay: 700, origin: 'right', interval: 200});
