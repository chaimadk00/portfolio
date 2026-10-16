// ==========================================================
// script.js - Portfolio interactivity
// 1. Footer year          4. Project filters
// 2. Mobile menu          5. Contact form validation
// 3. Skill bars           6. Active nav link on scroll
// ==========================================================


// ---------- 1. Footer year ----------
// Writes the current year into <span id="year">.
document.getElementById("year").textContent = new Date().getFullYear();


// ---------- 2. Mobile menu ----------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);               // CSS shows/hides the menu
  menuToggle.setAttribute("aria-expanded", String(open)); // for screen readers
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuToggle.innerHTML = open ? "&#10005;" : "&#9776;";   // X icon or hamburger icon
}

// Click on the hamburger button: open or close
menuToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// Click on a menu link: close the menu
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Escape key: close the menu
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});


// ---------- 3. Skill bars ----------
// Each .skill has data-level="90". When the Skills section becomes
// visible, we set the bar width to that value (CSS animates it).
const skillsSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".skill");

function fillSkillBars() {
  skillBars.forEach((skill) => {
    const level = skill.dataset.level;                    // reads data-level
    skill.querySelector(".skill-progress").style.width = level + "%";
  });
}

if ("IntersectionObserver" in window) {
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      fillSkillBars();
      observer.disconnect();                              // animate only once
    }
  }, { threshold: 0.3 });
  skillsObserver.observe(skillsSection);
} else {
  fillSkillBars();                                        // old browsers: no animation
}


// ---------- 4. Project filters ----------
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;                 // "all", "web" or "software"

    // Highlight only the clicked button
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    // Show matching cards, hide the others
    projectCards.forEach((card) => {
      card.hidden = !(filter === "all" || card.dataset.category === filter);
    });
  });
});


// ---------- 5. Contact form validation ----------
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Shows an error under a field (or clears it if message is "")
function setError(input, message) {
  const errorBox = document.getElementById(input.id + "-error");
  errorBox.textContent = message;
  input.classList.toggle("invalid", message !== "");
  input.setAttribute("aria-invalid", String(message !== ""));
}

// Each validator returns an error message, or "" if the value is OK
function validateName() {
  const value = nameInput.value.trim();
  const message = value.length < 2 ? "Please enter your name (at least 2 characters)." : "";
  setError(nameInput, message);
  return message === "";
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;      // text@text.text
  let message = "";
  if (value === "") message = "Please enter your email address.";
  else if (!emailPattern.test(value)) message = "Please enter a valid email, like you@example.com.";
  setError(emailInput, message);
  return message === "";
}

function validateMessage() {
  const value = messageInput.value.trim();
  const message = value.length < 10 ? "Your message must be at least 10 characters." : "";
  setError(messageInput, message);
  return message === "";
}

if (form && nameInput && emailInput && messageInput) {
  // Re-check a field while the user types, but only after it showed an error
  [
    [nameInput, validateName],
    [emailInput, validateEmail],
    [messageInput, validateMessage],
  ].forEach(([input, validate]) => {
    input.addEventListener("input", () => {
      if (input.classList.contains("invalid")) validate();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Run all three checks (no short-circuit, so every error is displayed)
    const results = [validateName(), validateEmail(), validateMessage()];

    if (results.includes(false)) {
      if (successMessage) successMessage.hidden = true;
      const invalidField = form.querySelector(".invalid");
      if (invalidField) invalidField.focus();               // jump to the first error
      return;
    }

    // Valid: there is no server in this project, so we only confirm
    const firstName = nameInput.value.trim().split(" ")[0];
    if (successMessage) {
      successMessage.textContent = "Thank you, " + firstName + "! Your message has been sent.";
      successMessage.hidden = false;
    }
    form.reset();

    setTimeout(() => { if (successMessage) successMessage.hidden = true; }, 6000);
  });
}


// ---------- 6. Active nav link on scroll ----------
// Highlights the menu link of the section currently on screen.
const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });                // a thin band near mid-screen

  sections.forEach((section) => sectionObserver.observe(section));
}


// ---------- 7. Interactive Background Tiles Grid ----------
function initHeroTiles() {
  const container = document.getElementById("hero-tiles");
  if (!container) return;

  function renderTiles() {
    container.innerHTML = "";
    const tileSize = window.innerWidth <= 480 ? 28 : (window.innerWidth <= 768 ? 36 : 48);
    const width = Math.max(container.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(container.clientHeight || 0, window.innerHeight || 0);
    const cols = Math.ceil(width / tileSize) + 2;
    const rows = Math.ceil(height / tileSize) + 2;

    const grid = document.createElement("div");
    grid.className = "hero-tiles-grid";

    for (let i = 0; i < cols; i++) {
      const colDiv = document.createElement("div");
      colDiv.className = "tile-row";
      colDiv.style.borderLeft = "1px solid rgba(255, 255, 255, 0.05)";

      for (let j = 0; j < rows; j++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        colDiv.appendChild(tile);
      }
      grid.appendChild(colDiv);
    }
    container.appendChild(grid);
  }

  renderTiles();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderTiles, 150);
  });
}

initHeroTiles();


// ---------- 8. Scroll Progress Indicator ----------
const progressBar = document.getElementById("scroll-progress");
if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
  }, { passive: true });
}


// ---------- 9. Smooth Section Reveal on Scroll ----------
const revealSections = document.querySelectorAll(".reveal-on-scroll");
if ("IntersectionObserver" in window && revealSections.length > 0) {
  const sectionRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.08
  });

  revealSections.forEach((sec) => sectionRevealObserver.observe(sec));
} else {
  revealSections.forEach((sec) => sec.classList.add("is-visible"));
}

