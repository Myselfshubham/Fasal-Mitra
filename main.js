const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
});



// ScrollReveal animation for Team Section
ScrollReveal().reveal(".team__container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".team__card", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".contact__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".contact__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".contact__info", {
  ...scrollRevealOption,
  delay: 1000,
});

// Dynamically set the current year
document.getElementById("current-year").textContent = new Date().getFullYear();
