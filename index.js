/*Cacheing the DOM*/
const body_HTML = document.getElementById("body");

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
const projectsFirstProjectText_div = document.getElementById("project-card-par1"); 
const projectsSecondProject_div = document.getElementById("link-project2");
const projectsSecondProjectText_div = document.getElementById("project-card-par2");
const projectsThirdProject_div = document.getElementById("link-project3");
const projectsThirdProjectText_div = document.getElementById("project-card-par3");

const contactsH1_div = document.getElementById("contact-title1");
const contactsP1_div = document.getElementById("contact-par1");
const contactsH2_div = document.getElementById("contact-title2");
const contactsMailButton = document.getElementById("link-mail");
const contactsSkypeButton = document.getElementById("link-skype");
const contactsGitHubButton = document.getElementById("link-github");

function languageChange(){
	console.log("Language works");
}

function hamurgerActivate(){
	console.log("Hamburger works");
}

function popupActivate(){
popupWindow_div.classList.add("visible-pop"); 
popupWindow_div.classList.add("popup-active-popup"); 
popupWindow_div.classList.remove("invisible");
  
body_HTML.classList.add("popup-active-body");

popupCloseButton_div.addEventListener('click', popupClose);
}

function main(){
	hamburgerLanguageButton_div.addEventListener("click", languageChange);
	hamburgerInactive_div.addEventListener("click", hamurgerActivate);
	welcomePopupOpenerButton_div.addEventListener("click", popupActivate);
	
}


main();
