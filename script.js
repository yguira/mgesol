/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });


  /* Close menu after clicking any nav link */

  const menuLinks = mainNav.querySelectorAll("a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuToggle.textContent = "☰";
    });
  });
}


/* =========================================================
   ACTIVE NAVIGATION WHILE SCROLLING
   ========================================================= */

const sections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".main-nav a[href^='#']"
);


function updateActiveNav() {
  let currentSection = "";

  const scrollPosition =
    window.scrollY + 190;


  sections.forEach((section) => {
    if (
      scrollPosition >=
      section.offsetTop
    ) {
      currentSection =
        section.getAttribute("id");
    }
  });


  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {
      link.classList.add("active");
    }
  });
}


window.addEventListener(
  "scroll",
  updateActiveNav
);

window.addEventListener(
  "resize",
  updateActiveNav
);


/* Run immediately */

updateActiveNav();