// script.js

document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((projects) => {
        const container = document.getElementById("project-list");
  
        projects.forEach((project) => {
          const card = document.createElement("div");
          card.className = "project-card";
  
          card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank">Ver más →</a>` : ""}
          `;
  
          container.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error loading project data:", error);
      });
  });
  
  // Changing language
  const translations = {
    en: {
      aboutTitle: "About Me",
      aboutText: "I am a researcher in data-driven engineering. My work spans experimental aerodynamics, renewable energy, and modeling, combining theory and computational tools to solve real-world problems.",
      projectsTitle: "Projects",
      experienceTitle: "Experience",
      exp1: "Researcher in Experimental Aerodynamics, UC3M",
      exp2: "Airborne Wind Energy Group, UC3M",
      exp3: "Georgia Tech – Wind turbine flow analysis",
      contactTitle: "Contact",
      navHome: "Home",
      navPortfolio: "Portfolio"
    },
    es: {
      aboutTitle: "Sobre mí",
      aboutText: "Soy investigador en métodos basados en datos aplicados a la ingeniería. He trabajado en aerodinámica experimental, energías renovables y modelado avanzado, combinando teoría y herramientas computacionales para resolver problemas reales.",
      projectsTitle: "Proyectos",
      experienceTitle: "Experiencia",
      exp1: "Investigador en Aerodinámica Experimental, UC3M",
      exp2: "Grupo de Energía Eólica Airborne, UC3M",
      exp3: "Georgia Tech – Flujo en turbinas eólicas",
      contactTitle: "Contacto",
      navHome: "Inicio",
      navPortfolio: "Mis proyectos"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.innerText = translations[lang][key] || `[${key}]`;
    });
  
    // ✅ Actualizar imagen del banner según idioma
    const banner = document.getElementById("heroBanner");
    if (banner) {
      banner.src = `Banner_${lang}.png`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "en";
    setLanguage(lang);
  });