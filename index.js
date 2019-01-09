
/*Cashing the DOM*/
const popupStart_div = document.getElementById("popup-button");           //Page Elements
const languageFlag_div = document.getElementById("language-flag");
const xButton_div = document.getElementById("x");
const popMessageDiv_body = document.getElementById("pop");
const mainText_div = document.getElementById("message");
const langChoice_div = document.getElementById("language");
const backgroundImg_body = document.getElementById("background-image");
const flagImg_div = document.getElementById("language-flag");
const flagText_div = document.getElementById("language-txt");
const h1_div = document.getElementById("h1");
const p1_div = document.getElementById("p1");
const p2_div = document.getElementById("p2");

const popupH2_div = document.getElementById("h2");      //Popup Elements
const popupP4_div = document.getElementById("p4");
const cvLink_div = document.getElementById("link-cv");
const popupP5_div = document.getElementById("p5");
const gitLink_div = document.getElementById("link-git");
const codePenLink_div = document.getElementById("link-code");
const ytLink_div = document.getElementById("link-yt");
  
let activeLang="h";                                    //Global variable

/*In case the popup is inactive, change the look of the page*/
function popupClosed(){
popMessageDiv_body.classList.remove("visible");
popMessageDiv_body.classList.add("invisible");

mainText_div.classList.remove("popup-active");
langChoice_div.classList.remove("popup-active");
backgroundImg_body.classList.remove("popup-active");
}

/*In case the popup is active, change the look of the page*/
function popupActive(){
  
popMessageDiv_body.classList.add("visible"); popMessageDiv_body.classList.remove("invisible");
  
mainText_div.classList.add("popup-active");
langChoice_div.classList.add("popup-active");
backgroundImg_body.classList.add("popup-active");

xButton_div.addEventListener('click', popupClosed);
}
/*Change the language of the page if user clicked on flag*/
function languageChange(){
  if (activeLang=="e"){
    activeLang="h";
flagImg_div.src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
flagText_div.innerHTML="Change Language";
h1_div.innerHTML="Üdvözlet! János vagyok.";
p1_div.innerHTML="Korábbi munkáim során főként üzleti kapcsolattartással foglalkoztam. Azonban egyre inkább magával ragadott a programozás világa, ezért most Junior webfejlesztőként keresek állást.";
p2_div.innerHTML="A webes technológiák terén minden érdekel, igyekszem lépést tartani az újdonságokkal. Célom a gyors, felhasználóbarát weboldalak és appok készítése."   
popupStart_div.innerHTML="Keress bátran";
popupP4_div.innerHTML="Töltsd le az önéletrajzom:";
cvLink_div.innerHTML="Letöltés";
popupP5_div.innerHTML="Itt találod a projekjteim:";
ytLink_div.innerHTML="Youtube csatorna";
  }
  else{
activeLang="e";
flagImg_div.src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg";
flagText_div.innerHTML="Nyelv Váltás";
h1_div.innerHTML="Hi! I am John";
p1_div.innerHTML="I'm a junior developer ready to enter the major leagues. I try my best to create great user experience with performant and well designed apps and websites.";
p2_div.innerHTML="I am interested in all aspects of the creation of web applications, and eager to hit the ground running in an established team.";      
popupStart_div.innerHTML="Hire Me";
popupP4_div.innerHTML="Grab my CV to find out more:";
cvLink_div.innerHTML="Download";
popupP5_div.innerHTML="You can find my projects here: ";
ytLink_div.innerHTML="Youtube channel";
  }
}
/*Main function gives listeners to the flag in the right corner and the central button.*/
function main(){
  popupStart_div.addEventListener("click", popupActive);
  languageFlag_div.addEventListener("click", languageChange);
}


/*Starts the logic*/
main();
