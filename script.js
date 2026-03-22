const data = {
  education: [
    {
      period: "2023 - 2025",
      title: "HD in Computing and Software Engineering",
      institution: "ICBT Campus linked in Cardiff Metropoliton Univercity",
      description:
        "I completed HD in Computing and Software Engineering with a Merit Pass",
    },
  ],
  experience: [
    {
      period: "2025 - 2026",
      title: "Intern QA Automation Engineer",
      company: "CeyDigital, Bandarawela",
      tasks: [
        "Developed and maintained automated test scripts for web applications.",
        "Collaborated with teams to identify bugs and improve quality.",
      ],
    },
  ],
  techStack: [
    { name: "HTML", colorClass: "group-hover:text-orange-500" },
    { name: "CSS", colorClass: "group-hover:text-blue-500" },
    { name: "JavaScript", colorClass: "group-hover:text-yellow-400" },
    { name: "Sql", colorClass: "group-hover:text-green-500" },
    { name: "Python", colorClass: "group-hover:text-cyan-400" },
    { name: "Linux", colorClass: "group-hover:text-orange-500" },
    { name: "Docker", colorClass: "group-hover:text-blue-500" },
    { name: "AWS", colorClass: "group-hover:text-yellow-500" },
    { name: "Playwright", colorClass: "group-hover:text-green-500" },
    { name: "GitHub", colorClass: "group-hover:text-white" },
  ],
  projects: [
    {
      title: "Modern To-Do List",
      description:
        "A full-stack e-commerce solution with cart functionality, user authentication, and payment gateway integration.",
      stack: ["React", "Node", "MongoDB"],
      images: [
        "D:\My_New_Portfolio\img\ToDo List ss1.png",
        "https://placehold.co/600x400/2a2a2a/FFF?text=Project+One+2",
        "https://placehold.co/600x400/3a3a3a/FFF?text=Project+One+3",
      ],
      links: { code: "#", demo: "#" },
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for managing daily tasks with drag-and-drop features and real-time updates.",
      stack: ["Vue.js", "Firebase", "Tailwind"],
      images: [
        "https://placehold.co/600x400/2a2a2a/FFF?text=Project+Two+1",
        "https://placehold.co/600x400/3a3a3a/FFF?text=Project+Two+2",
      ],
      links: { code: "#", demo: "#" },
    },
    {
      title: "AI Weather Dashboard",
      description:
        "Real-time weather tracking application utilizing open weather APIs and AI for basic forecasting.",
      stack: ["JavaScript", "API", "CSS3"],
      images: [
        "https://placehold.co/600x400/3a3a3a/FFF?text=Project+Three+1",
        "https://placehold.co/600x400/4a4a4a/FFF?text=Project+Three+2",
      ],
      links: { code: "#", demo: "#" },
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({ duration: 1000, once: true, mirror: false });

  // Render Data
  renderEducation();
  renderExperience();
  renderTechStack();
  renderProjects();

  // Initialize Features
  initThemeToggle();
  initTypingEffect();
  initSmoothScroll();
  initMobileMenu();
  updateFooterYear();
  initCarousels(); // Must be called AFTER rendering projects
});

// Render Functions
function renderEducation() {
  const container = document.getElementById("education-list");
  if (!container) return;
  container.innerHTML = data.education
    .map(
      (item) => `
        <div class="glass-card p-6 rounded-xl border-l-4 border-primary hover:bg-white/5 transition-colors">
            <span class="text-xs text-primary font-mono mb-2 block">${item.period}</span>
            <h4 class="text-lg font-bold text-white">${item.title}</h4>
            <p class="text-sm text-gray-400 mt-1">${item.institution}</p>
            <p class="text-gray-400 text-sm mt-3">${item.description}</p>
        </div>
    `,
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;
  container.innerHTML = data.experience
    .map(
      (item) => `
        <div class="glass-card p-6 rounded-xl border-l-4 border-secondary hover:bg-white/5 transition-colors">
            <span class="text-xs text-secondary font-mono mb-2 block">${item.period}</span>
            <h4 class="text-lg font-bold text-white">${item.title}</h4>
            <p class="text-sm text-gray-400 mt-1">${item.company}</p>
            <ul class="text-gray-400 text-sm mt-3 list-disc list-inside space-y-1">
                ${item.tasks.map((task) => `<li>${task}</li>`).join("")}
            </ul>
        </div>
    `,
    )
    .join("");
}

function renderTechStack() {
  const container = document.getElementById("tech-stack-container");
  if (!container) return;
  container.innerHTML = data.techStack
    .map(
      (tech, index) => `
        <div class="p-6 glass-card rounded-xl hover:bg-white/5 transition-all group hover:-translate-y-2 cursor-default"
             data-aos="zoom-in" data-aos-delay="${100 + index * 50}">
            <p class="text-lg font-bold text-gray-300 ${tech.colorClass} transition-colors">${tech.name}</p>
        </div>
    `,
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = data.projects
    .map(
      (project, index) => `
        <div class="glass-card rounded-xl overflow-hidden project-card group relative"
             data-aos="fade-up" data-aos-delay="${100 + index * 100}">
            <div class="carousel-container h-48 project-image-container">
                <div class="carousel-inner h-full w-full">
                    ${project.images
                      .map(
                        (img, i) => `
                        <div class="carousel-item ${i === 0 ? "active" : ""}">
                            <img src="${img}" alt="${project.title} Image ${i + 1}" class="w-full h-full object-cover">
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <button class="carousel-btn carousel-prev prev-btn" aria-label="Previous Slide">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-btn carousel-next next-btn" aria-label="Next Slide">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-2 text-xs font-mono text-gray-500 mb-4">
                    ${project.stack.map((tech) => `<span class="px-2 py-1 bg-white/5 rounded">${tech}</span>`).join("")}
                </div>
                <div class="flex gap-4 mt-2">
                    <a href="${project.links.code}" class="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors" aria-label="View Project Code">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.links.demo}" class="flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors" aria-label="View Live Demo">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Feature Initialization Functions
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcon(savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const currentTheme = body.classList.contains("light-mode")
      ? "light-mode"
      : "";
    localStorage.setItem("theme", currentTheme);
    updateIcon(currentTheme);
  });

  function updateIcon(theme) {
    if (theme === "light-mode") {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }
}

function initTypingEffect() {
  if (document.getElementById("typed-text")) {
    new Typed("#typed-text", {
      strings: ["Undergraduate Software Engineer"],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () =>
      mobileMenu.classList.toggle("hidden"),
    );
  }
}

function updateFooterYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

function initCarousels() {
  const carousels = document.querySelectorAll(".carousel-container");
  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");
    let currentIndex = 0;

    function showSlide(index) {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.remove("opacity-0", "z-0");
          item.classList.add("opacity-100", "z-10");
        } else {
          item.classList.remove("opacity-100", "z-10");
          item.classList.add("opacity-0", "z-0");
        }
      });
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        showSlide(currentIndex);
      });

      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        showSlide(currentIndex);
      });
    }
  });
}
