const mobilMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".header-overlay");
const headerNavigation = document.querySelector(".header-navigation");
const home = document.querySelector(".home");
const headerSocial = document.querySelector(".header-social-container");
const closeButton = document.querySelector(".close-mob-menu");
const closeButtonIcon = document.querySelector(".close-mob-icon");
const body = document.querySelector('body');

closeButton.addEventListener("click", closeMenu);
mobilMenu.addEventListener("click", openMenu);
headerNavigation.addEventListener("click", goToPage);



function openMenu(){
 mobilMenu.classList.add("hide");
 closeButton.classList.remove("hide"); 
 closeButtonIcon.classList.remove("hide");
 overlay.classList.add("is-open");
 body.classList.add("no-scroll");
 headerNavigation.style.visibility = "visible";
 headerSocial.style.visibility = "visible";
 home.classList.remove("hide");
}

function closeMenu(){
 overlay.classList.remove("is-open");
 body.classList.remove("no-scroll");
 mobilMenu.classList.remove("hide");
 closeButtonIcon.classList.add("hide");
 headerNavigation.style.visibility = "hidden";
 headerSocial.style.visibility = "hidden";
  home.classList.add("hide");
}

function goToPage(){
 if (overlay.classList.contains("is-open")){
   closeMenu();
 }
}