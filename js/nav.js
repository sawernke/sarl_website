document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger");
  var navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });

    // Close menu when a link is tapped
    navLinks.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  }
});
