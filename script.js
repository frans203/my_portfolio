// TYPED.JS

const options = {
  strings: [
    "",
    "<i>Olá</i>, sou Francisco Santana. <b>Front-end Developer</b>. ",
  ],
  typeSpeed: 40,
};

let typed = new Typed(".section-1-heading h1", options);
// swiper.js
var swiper = new Swiper(".section-3-slide", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1100) {
    for (let item of swiper) {
      item.params.navigation.slidesPerGroup = 1;

      item.params.pagination.slidesPerGroup = 1;
      item.params.pagination.slidesPerView = 1;
      item.params.slidesPerGroup = 1;
      item.params.slidesPerView = 1;
    }
  } else {
    location.reload();
  }
});

// SECTION 2
let i = 0;
const images = document.querySelectorAll(".section-2-img");
console.log(images);
setInterval(function () {
  if (i === images.length) {
    i = 0;
  }
  images.forEach((img) => {
    img.classList.remove("change");
  });
  images[i].classList.add("change");
  i++;
}, 3000);

// CHANGE LANGUAGE

function changeLanguageHTML(lang) {
  location.hash = lang;
  location.reload();
}

const language = {
  ptbr: {
    sectionOneHeading: "Olá, sou Francisco Santana. Front-end Developer",
    sectionTwoHeading: "Sobre Mim",
    sectionTwoPara: `Gosto de programação desde adolescente, no final do Ensino médio
    comecei a estudar e me aprofundar na área, tornando-me Front-end
    Developer.`,
    sectionTwoSkills: `  Possuo <span class="sk sk-1">Inteligência emocional</span>,
    facilidade na
    <span class="sk sk-2">Resolução de Conflitos e Problemas</span> e
    estou sempre buscando meu
    <span class="sk sk-3">Desenvolvimento Pessoal</span> tanto no
    âmbito profissional quanto no ambiente social.`,
    sectionTwoLangText: `Tenho experiência nas linguagens:`,
    section_2_free_h2: "Sou Freelancer",
    section_2_free_h3:
      "Meu lema? <b>Mais rápido possível</b>, no <b>menor preço</b>",
    sectionThreeHeading: `Veja meus Projetos`,
    loadingParagraph: "Carregando...",
    mobile_paragraph: "Toque nos cards",
    projectLink: "Ir para o Projeto",
    js_project_1: `Um simples app em javascript de conta bancária. (Use para
      acessar: js 1111, jd 2222)`,
    js_project_2: `  Pesquise por várias receitas com esse app`,
    js_project_3: ` Jogo simples para dois jogadores com um dado`,
    js_project_4: `Marque dados de corrida ou pedalagem em um mapa`,
    ws_project_1: `  Um clone da UI/UX do PayPal com página principal, login e
    cadastro`,
    ws_project_2: ` Site com estilo da apple com seção de iPhone, Mac, e Apple
    Watch`,
    ws_project_3: ` Site com um template empresarial estilizado e com uso da library swiper.js`,
    ws_project_4: ` Template de site para vinhos. Use scroll, menu e botões na
    tela para navegar.`,
    ws_project_5: `Template de site bancário com imagens optimizadas`,
    ws_project_6: `Template de site de arquiteto com animações e a library Tilt.js`,
    sectionFourHeading: `Entre em contato comigo`,
    section_4_h3: "Veja todos os meus repositórios aqui:",
  },

  eng: {
    sectionOneHeading:
      "<i>Hi</i>, i'm Francisco Santana. <b>Front-end Developer</b>.",
    sectionTwoHeading: "About Me",
    sectionTwoPara: `I like programming since i was a teenager, but just in the end of the High School i started to study and delve into this area, and  becoming a Frond-End Developer.`,
    sectionTwoSkills: `  I have <span class="sk sk-1">emotional intelligence</span>,
    easy in
    <span class="sk sk-2">solving problems and conflicts</span> and i'm always looking for my 
    <span class="sk sk-3">Personal Development</span> both professionally and socially.`,
    sectionTwoLangText: `I have experience in these languages:`,
    section_2_free_h2: "I'm Freelancer",
    section_2_free_h3:
      "My motto? <b>As fast as Possible</b>, at <b>the lowest Price</b>",
    sectionThreeHeading: `See my Projects`,
    loadingParagraph: `Loading...`,
    mobile_paragraph: "Touch on the cards",
    projectLink: "Go to the Project",
    js_project_txt: [
      `A javascript simple bank account app. (users and PINS: js 1111, jd 2222)`,
      ` Search for many recipes with this app`,
      `Simple dice game for two players`,
      `Store running or cycling data on a map`,
    ],
    js_project_1: `A javascript simple bank account app. (users and PINS: js 1111, jd 2222)`,
    js_project_2: ` Search for many recipes with this app`,
    js_project_3: ` Simple dice game for two players`,
    js_project_4: `Store running or cycling data on a map`,
    ws_project_1: `  A UI/UX PayPal clone with home, login and SignUp pages`,
    ws_project_2: ` Site with Apple Style with Iphone, MacBook and Apple Watch sections`,
    ws_project_3: ` Business template Website`,
    ws_project_4: ` Wine Site Template. Use scroll, menu and buttons on the screen to navigate.`,
    ws_project_5: `Bank Site template with optimazed images feature`,
    ws_project_6: `Website Architect template with animations and with Tilt.js library`,
    sectionFourHeading: `Contact with me`,
    section_4_h3: "See all my repositories:",
  },
};

if (window.location.hash) {
  if (window.location.hash === "#eng") {
    changeLangText("eng");
  }
  if (window.Location.hash === "#ptbr") {
    changeLangText("ptbr");
  }
}

function changeLangText(lang) {
  typed.strings = ["", `${language[lang].sectionOneHeading}`];
  document.querySelector(".section-2-heading").innerHTML =
    language[lang].sectionTwoHeading;
  document.querySelector(".section-2-paragraph").innerHTML =
    language[lang].sectionTwoPara;

  document.querySelector(".soft-skills").innerHTML =
    language[lang].sectionTwoSkills;

  console.log();
  document.querySelector(".section-2-languages h3").innerHTML =
    language[lang].sectionTwoLangText;
  document.querySelector(".section-2-freelance h2").innerHTML =
    language[lang].section_2_free_h2;
  document.querySelector(".section-2-freelance h3").innerHTML =
    language[lang].section_2_free_h3;
  document.querySelector(".section-3-heading").innerHTML =
    language[lang].sectionThreeHeading;

  document.querySelector(".mobile-paragraph").innerHTML =
    language[lang].mobile_paragraph;
  projectTexts(".loading", language[lang].loadingParagraph);
  projectTexts(".js-des-1", language[lang].js_project_1);
  projectTexts(".js-des-2", language[lang].js_project_2);
  projectTexts(".js-des-3", language[lang].js_project_3);
  projectTexts(".js-des-4", language[lang].js_project_4);

  projectTexts(".ws-des-1", language[lang].ws_project_1);
  projectTexts(".ws-des-2", language[lang].ws_project_2);
  projectTexts(".ws-des-3", language[lang].ws_project_3);
  projectTexts(".ws-des-4", language[lang].ws_project_4);
  projectTexts(".ws-des-5", language[lang].ws_project_5);
  projectTexts(".ws-des-6", language[lang].ws_project_6);

  document.querySelectorAll(".project-link").forEach((item) => {
    item.innerHTML = language[lang].projectLink;
  });
  document.querySelector(".section-4-heading").innerHTML =
    language[lang].sectionFourHeading;
  document.querySelector(".section-4-h3").innerHTML =
    language[lang].section_4_h3;
}

function projectTexts(element, search) {
  document.querySelectorAll(element).forEach((item) => {
    item.innerHTML = search;
  });
}

// LAZY PROJECT IMAGES
// const projectImgs = document.querySelectorAll(".project-img");
// console.log(projectImgs);
// const imgObs = (entries, observer) => {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener("load", (e) => {
//     entry.target.parentElement.classList.remove("blur");
//   });
//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(imgObs, {
//   root: null,
//   threshold: 0.2,
//   rootMargin: "-100px",
// });

// projectImgs.forEach((img) => imgObserver.observe(img));

////JS APPS
const jsApps = document.querySelector(".section-3-js-pjs");
const websites = document.querySelector(".section-3-pj-ws");
function loadImgAs(imgsContainer, loadingClass) {
  window.addEventListener("scroll", () => {
    const imgs = imgsContainer.querySelectorAll("img");
    if (window.pageYOffset + window.innerHeight >= imgsContainer.offsetTop) {
      imgs.forEach((img) => {
        img.src = img.dataset.src;
        img.parentElement.classList.remove("blur");
      });
    }
    imgs[2].addEventListener("load", (e) => {
      document.querySelector(loadingClass).style.opacity = "0";
    });
  });
}

loadImgAs(jsApps, ".loading-1");
loadImgAs(websites, ".loading-2");
