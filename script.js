// ========================================
// MOBILE NAVIGATION
// ========================================

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {

  const isOpen = navMenu.classList.toggle("active");

  navToggle.setAttribute(
    "aria-expanded",
    isOpen
  );

});


// Close menu when clicking a navigation link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


// ========================================
// CURRENT YEAR
// ========================================

const currentYear =
  document.getElementById("current-year");

currentYear.textContent =
  new Date().getFullYear();


// ========================================
// HEADER SHADOW ON SCROLL
// ========================================

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 8px 30px rgba(122, 0, 25, 0.08)";

  } else {

    header.style.boxShadow =
      "none";

  }

});