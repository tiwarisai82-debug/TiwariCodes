const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile Menu
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll(
    ".service-card, .equipment-card, .about-content, .gallery-grid img",
  )
  .forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.7s ease";
    observer.observe(item);
  });
