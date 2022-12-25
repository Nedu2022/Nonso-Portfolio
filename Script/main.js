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
