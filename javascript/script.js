const traducoes = {
  pt: {},
  en: {
    // index.html inglês
    "intro-ola": '<"Hello World", I am>',
    "intro-subtitulo": "Systems Analysis and Development Student",
    "btn-cv": "Download my CV",
    "btn-projetos": "My Projects",
    "sobre-titulo": "About me",
    "sobre-p1": "Hi, my name is Rodrigo Raw. I am a Systems Analysis and Development (ADS) student at Universidade Santa Cecília in Brazil, and I really enjoy building web applications, working with Artificial Intelligence, and creating games.",
    "sobre-p2": "I learn new technologies quickly and adapt easily to different challenges. My academic and personal projects involve Full Stack development, integrating AI into real applications, and game creation.",
    "sobre-p3": "Currently, I am seeking opportunities to gain real-world experience, put what I have been studying into practice, and contribute to challenging projects.",
    "btn-mais-sobre": "More about me",
    "btn-contato": "Contact me",
    "footer-direitos": "Rodrigo Raw. All rights reserved. To learn more, get in touch.",
    "footer-contatos": "Contact:",
    "email-copiado": "E-mail copied to clipboard!",

    // projects.html inglês
    "projects": "PROJECTS",
    "project1-name": "Hackathon - Project \"POSEIDON - Sync\"",
    "project1-description": "Project developed during Porto Hack 2025, aiming to create an innovative solution for the maritime logistics and transportation sector using artificial intelligence.",
    "project1-technologies": "Technologies used: HTML/CSS/JS (front-end) + n8n (back-end).",
    "project2-name": "Project - NexusIA",
    "project2-description": "Project with a focus on artificial intelligence and the creation of chatbot personalities.",
    "project2-technologies": "Technologies used: HTML/CSS/JS (front-end) + Node.js + Express.js (back-end).",
    "project3-name": "Project - Loja RPG",
    "project3-description": "Project developed with the goal of applying my knowledge of Object-Oriented Programming in C#.",
    "project3-technologies": "Technologies used: Console Application in C#.",
    "project4-name": "Rodrigo Raw | Portfolio",
    "project4-description": "This is my personal portfolio, where I present my projects and skills as a developer. I leave the code available for review.",
    "project4-technologies": "Technologies used: HTML/CSS/JS (front-end).",

    // about.html inglês
    "skills-title": "SKILLS",
    "skills-description": "My skills are:",
    "skill-1": "Full-Stack Development",
    "skill-2": "Database",
    "skill-3": "Game Development",
    "skill-4": "Artificial Intelligence",
    "skill-5": "Problem Solving",
    "skill-6": "Teamwork",
    "skill-7": "Proactivity",
    "skill-8": "Communication",
    "skill-9": "Learning Agility",

    "technologies-title": "LANGUAGES AND TECHNOLOGIES",
    "technologies-description": "Languages and technologies I have knowledge of:",

    "courses-title": "COURSES",
    "course-1-name": "freeCodeCamp - CSS and HTML",
    "course-1-description": "In this course, concepts of web programming with HTML and CSS, and responsiveness were taught, providing a solid foundation for front-end development.",
    "course-2-name": "Intensive JavaSpring",
    "course-2-description": "This course was an intensive immersion in Java and Spring, covering advanced backend development concepts.",
    "course-3-name": "CS50 - Harvard",
    "course-3-description": "This course covered the fundamentals of computer science, including algorithms, data structures, and programming in C.",
    "more-about-title": "More About Me",
    "more-about-description": "In addition to programming, I have interests in:",
    "interest-1": "Video games",
    "interest-2": "Music",
    "interest-3": "Sports",
    "interest-4": "Reading",
    "interest-5": "Travel",
    "interest-6": "Academy/Health",
    "interest-7": "Computer Assembly and Configuration",
  }
};

async function carregarComponente(id, arquivo) {
  try {
    const resposta = await fetch(arquivo);
    if (!resposta.ok) throw new Error(`Erro ao carregar ${arquivo}`);
    const html = await resposta.text();
    document.getElementById(id).innerHTML = html;
  } catch (erro) {
    console.error(erro);
  }
}

function dataFooter() {
  const anoElemento = document.getElementById("footer-year");
  if (anoElemento) {
    anoElemento.textContent = new Date().getFullYear();
  }
}

function aplicarIdioma(idioma) {
  document.documentElement.lang = idioma === "en" ? "en" : "pt-br";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const chave = el.getAttribute("data-i18n");
    if (traducoes[idioma] && traducoes[idioma][chave]) {
      el.textContent = traducoes[idioma][chave];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === idioma);
  });

  localStorage.setItem("idioma", idioma);
}

function configurarIdioma() {
  // 1. Lê o texto original do HTML e salva como "pt"
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const chave = el.getAttribute("data-i18n");
    traducoes.pt[chave] = el.textContent.trim();
  });

  // 2. Aplica o idioma salvo
  const idiomaSalvo = localStorage.getItem("idioma") || "pt";
  aplicarIdioma(idiomaSalvo);

  // 3. Ativa o clique nas bandeiras
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      aplicarIdioma(btn.getAttribute("data-lang"));
    });
  });
}

function configurarCopiaEmail() {
  const emailElement = "rodrigo.rraw@gmail.com";
  const btnCopy = document.getElementById("button-copy");
  const aviso = document.getElementById("area-span");

  if (btnCopy && aviso) {
    btnCopy.addEventListener("click", function () {
      navigator.clipboard.writeText(emailElement).then(function () {
        aviso.className = "aparecer";
        setTimeout(() => {
          aviso.className = aviso.className.replace("aparecer", "");
        }, 3000);
      }).catch(err => {
        console.error("Erro ao copiar o e-mail: ", err);
      });
    });
  }
}

async function iniciarPagina() {
  await carregarComponente("header", "layout/header.html");
  await carregarComponente("footer", "layout/footer.html");
  dataFooter();
  configurarIdioma();
  configurarCopiaEmail();
}

iniciarPagina();