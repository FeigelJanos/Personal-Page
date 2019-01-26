/*Cacheing the DOM*/

const welcomeSlide_div = document.getElementById("message");
const projectSlide_div = document.getElementById("projects-slide");
const contactSlide_div = document.getElementById("contacts-slide");

const hamburgerOuterText_div = document.getElementById("menu-title");
const hamburgerInactive_div = document.getElementById("hamburger-start");
const hamburgerActive_div = document.getElementById("menu-contents");
const hamburgerLanguageButton_div = document.getElementById("menu-language");
const hamburgerWelcomeButton_div = document.getElementById("welcome-text");
const hamburgerProjectsButton_div = document.getElementById("project-text");
const hamburgerContactsButton_div = document.getElementById("contact-text");

const welcomeH1_div = document.getElementById("welcome-title1");
const welcomeH2_div = document.getElementById("welcome-title2");
const welcomeP1_div = document.getElementById("welcome-par1");
const welcomeP2_div = document.getElementById("welcome-par2");
const welcomePopupOpenerButton_div = document.getElementById("popup-button");
const welcomePopupOpenerText_button = document.getElementById("popup-par3");
const popupButtonContainer_div = document.getElementById("popup-button-div");

const popupWindow_div = document.getElementById("popup-div");
const popupCloseButton_div = document.getElementById("close-popup");
const popupH2_div = document.getElementById("popup-title");
const popupP1_div = document.getElementById("popup-par1");
const popupCVDownloadButton_div = document.getElementById("link-cv");
const popupP2_div = document.getElementById("popup-par2");
const popupGitHubLink_div = document.getElementById("link-git");
const popupCodePenLink_div = document.getElementById("link-code");
const popupYoutubeLink_div = document.getElementById("link-yt");

const projectsH1_div = document.getElementById("project-title1");
const projectsP1_div = document.getElementById("project-par1");
const projectsP2_div = document.getElementById("project-par2");
const projectsH2_div = document.getElementById("project-title2");
const projectsFirstProject_div = document.getElementById("link-project1");
const projectsFirstProjectText_div = document.getElementById(
  "project-card-par1"
);
const projectsSecondProject_div = document.getElementById("link-project2");
const projectsSecondProjectText_div = document.getElementById(
  "project-card-par2"
);
const projectsThirdProject_div = document.getElementById("link-project3");
const projectsThirdProjectText_div = document.getElementById(
  "project-card-par3"
);
const projectImage1_div = document.getElementById("project1-img");
const projectImage2_div = document.getElementById("project2-img");
const projectImage3_div = document.getElementById("project3-img");

const contactsH1_div = document.getElementById("contact-title1");
const contactsP1_div = document.getElementById("contact-par1");
const contactsH2_div = document.getElementById("contact-title2");
const contactsMailButton = document.getElementById("link-mail");
const contactsSkypeButton = document.getElementById("link-skype");
const contactsGitHubButton = document.getElementById("link-github");

function languageChange() {
  if (hamburgerOuterText_div.innerHTML == " Menü ") {
    hamburgerOuterText_div.innerHTML = " Menu ";
    hamburgerLanguageButton_div.innerHTML = "Magyar";
    hamburgerWelcomeButton_div.innerHTML = "Welcome";
    hamburgerProjectsButton_div.innerHTML = "Projects";
    hamburgerContactsButton_div.innerHTML = "Contacts";

    welcomeH1_div.innerHTML = "Hey! I am John.";
    welcomeH2_div.innerHTML = " A web developer";
    welcomeP1_div.innerHTML =
      "I'm a junior developer ready to enter the major leagues. I try my best to create great user experience with performant and well designed apps and websites. And to keep up with the newest techniques and tools in development.";
    welcomeP2_div.innerHTML =
      "I am interested in all aspects of the creation of web applications, and eager to hit the ground running in an established team.";
    welcomePopupOpenerText_button.innerHTML = "Hire Me";

    popupP1_div.innerHTML = "Grab my CV here:";
    popupCVDownloadButton_div.innerHTML = "Download";
    popupP2_div.innerHTML = "You can find all my projects below:";
    popupYoutubeLink_div.innerHTML = "Youtube channel";

    projectsH1_div.innerHTML = "Projects";
    projectsP1_div.innerHTML =
      "I belive that in programming, to fully comprehend new knowledge it have to be used in practice. I wite code every day and allways have at least one work in progress project that exceeds my current abilities.";
    projectsP2_div.innerHTML =
      "I created several projects, from small algorithms to more comprehensive applications. Some of the completed applications can be found below.";
    projectsH2_div.innerHTML = "Recent projects:";
    projectsFirstProjectText_div.innerHTML = "Responsive survey";
    projectsSecondProjectText_div.innerHTML = "Rock-paper-scissors";
    projectsThirdProjectText_div.innerHTML = "Wizard duel";

    contactsH1_div.innerHTML = "Contacts";
    contactsP1_div.innerHTML =
      "Feel free to contact me on any of the channels found here or in my CV. You can find my Skype and email address below.";
    contactsH2_div.innerHTML = "Let's work together!";
  } else {
    hamburgerOuterText_div.innerHTML = " Menü ";
    hamburgerLanguageButton_div.innerHTML = "English";
    hamburgerWelcomeButton_div.innerHTML = "Üdvözlet";
    hamburgerProjectsButton_div.innerHTML = "Projektek";
    hamburgerContactsButton_div.innerHTML = "Elérhetőségek";

    welcomeH1_div.innerHTML = "Üdvözlet! János vagyok.";
    welcomeH2_div.innerHTML = "Webfejlesztő";
    welcomeP1_div.innerHTML =
      "Korábbi munkáim során főként üzleti kapcsolattartással foglalkoztam. Azonban egyre inkább magával ragadott a programozás világa, ezért most front end webfejlesztőként keresek állást.";
    welcomeP2_div.innerHTML =
      "A webes technológiák terén minden érdekel, igyekszem lépést tartani az újdonságokkal. Célom a gyors, felhasználóbarát weboldalak és appok készítése. ";
    welcomePopupOpenerText_button.innerHTML = "Keress bátran";

    popupP1_div.innerHTML = "Töltsd le az önéletrajzom:";
    popupCVDownloadButton_div.innerHTML = "Letöltés";
    popupP2_div.innerHTML = "Itt megtalálod a projekjteim:";
    popupYoutubeLink_div.innerHTML = "Youtube csatorna";

    projectsH1_div.innerHTML = "Projektjeim";
    projectsP1_div.innerHTML =
      "Bár még nem rendelkezem professzionális tapasztalatokkal, úgy gondolom, hogy a megszerzett tudás akkor válik igazán hasznossá, ha gyakorlatban is alkalmazható. Ezért mindíg szánok időt arra, hogy az új ismereteket egy-egy projekt keretében is kipróbáljam.";
    projectsP2_div.innerHTML =
      "Számos projektet készítettem, amelyek közül néhány alább elérhető.";
    projectsH2_div.innerHTML = "Friss projektjeim:";
    projectsFirstProjectText_div.innerHTML = "Reszponzív kérdőív";
    projectsSecondProjectText_div.innerHTML = "Kő-papír-olló";
    projectsThirdProjectText_div.innerHTML = "Varázsló párbaj";

    contactsH1_div.innerHTML = "Elérhetőségeim";
    contactsP1_div.innerHTML =
      "Elérhető vagyok az önéletrajzomban megadott elérhetőségek mindegyikén. De itt megtalálod a Skype profilom és az email címem is.";
    contactsH2_div.innerHTML = "Dolgozzunk együtt!";
  }
}

function hamburgerBaseState() {
  hamburgerActive_div.classList.add("invisible");

  hamburgerActive_div.style.right = -225 + "px";

  hamburgerActive_div.removeEventListener(
    "mouseleave",
    hamburgerBaseState,
    false
  );
}

function hamurgerActivate() {
  hamburgerActive_div.classList.remove("invisible");

  let right = -225;
  let id = setInterval(frame, 5);
  function frame() {
    if (right == 0) {
      clearInterval(id);
    } else {
      right += 9;
      hamburgerActive_div.style.right = right + "px";
    }
  }
  hamburgerActive_div.addEventListener("mouseleave", hamburgerBaseState);
}
/*Closing the popup if you click on the x*/
function popupClose() {
  popupWindow_div.classList.remove("visible-pop"); //Popup becomes visible
  popupWindow_div.classList.add("invisible");

  hamburgerOuterText_div.classList.remove("popup-active-darken"); //Everything becomes darker
  hamburgerInactive_div.classList.remove("popup-active-darken");
  popupButtonContainer_div.classList.remove("popup-active-darken");
  welcomeSlide_div.classList.remove("popup-active-darken");
  projectSlide_div.classList.remove("popup-and-shadow");
  projectSlide_div.classList.add("shadow");
  contactSlide_div.classList.remove("popup-active-darken");

  hamburgerInactive_div.addEventListener("click", hamurgerActivate);

  popupCloseButton_div.removeEventListener("click", popupClose);
}

/*If you click on the button, pop up pops up.*/
function popupActivate() {
  popupWindow_div.classList.add("visible-pop"); //Popup becomes visible
  popupWindow_div.classList.remove("invisible");

  hamburgerOuterText_div.classList.add("popup-active-darken"); //Everything becomes darker
  hamburgerInactive_div.classList.add("popup-active-darken");
  popupButtonContainer_div.classList.add("popup-active-darken");
  welcomeSlide_div.classList.add("popup-active-darken");
  projectSlide_div.classList.remove("shadow");
  projectSlide_div.classList.add("popup-and-shadow");
  contactSlide_div.classList.add("popup-active-darken");

  hamburgerInactive_div.removeEventListener("click", hamurgerActivate, false); //Hamburger menu does not react

  popupCloseButton_div.addEventListener("click", popupClose); //If you click on the x popup closes
}

/**/
function projectInactive() {
  projectImage1_div.classList.remove("project-img-active");
  projectImage2_div.classList.remove("project-img-active");
  projectImage3_div.classList.remove("project-img-active");
}

/**/
function projectHover3() {
  projectImage3_div.classList.add("project-img-active");
  projectsThirdProject_div.addEventListener("mouseout", projectInactive);
}

/**/
function projectHover2() {
  projectImage2_div.classList.add("project-img-active");
  projectsSecondProject_div.addEventListener("mouseout", projectInactive);
}

/**/
function projectHover1() {
  projectImage1_div.classList.add("project-img-active");
  projectsFirstProject_div.addEventListener("mouseout", projectInactive);
}

/*Main fuction. First thing to start*/
function main() {
  hamburgerLanguageButton_div.addEventListener("click", languageChange);
  hamburgerInactive_div.addEventListener("click", hamurgerActivate);
  welcomePopupOpenerButton_div.addEventListener("click", popupActivate);
  projectsFirstProject_div.addEventListener("mouseover", projectHover1);
  projectsSecondProject_div.addEventListener("mouseover", projectHover2);
  projectsThirdProject_div.addEventListener("mouseover", projectHover3);
}

/*Starting program*/
main();
