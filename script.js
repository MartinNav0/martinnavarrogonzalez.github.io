// script.js

const translations = {
  en: {
    aboutTitle: "About Me",
    navHome: "Home",
    navPortfolio: "Portfolio"
  },
  es: {
    aboutTitle: "Sobre mí",
    navHome: "Inicio",
    navPortfolio: "Mis proyectos"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  // Cambiar textos traducibles
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key] || `[${key}]`;
  });

  // Cambiar banner
  const banner = document.getElementById("heroBanner");
  if (banner) {
    banner.src = `img/Banner_${lang}.png`;
  }

  // Cargar el texto de la sección "Sobre mí"
  loadAboutText(lang);
}

function loadAboutText(lang) {
  const path = `text/${lang}/about_${lang}.txt`;
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch ${path}`);
      return res.text();
    })
    .then(text => {
      const aboutEl = document.getElementById("about-text");
      if (aboutEl) aboutEl.innerText = text;
    })
    .catch(err => {
      console.error("Error loading about text:", err);
      const aboutEl = document.getElementById("about-text");
      if (aboutEl) aboutEl.innerText = "Error loading content.";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);
});