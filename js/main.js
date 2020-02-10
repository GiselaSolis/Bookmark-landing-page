
var form = document.querySelector("form");
form.onsubmit = function (e){
    console.log ("submit");
    e.preventDefault();
};


// Mobile menu

var menuOpen = document.getElementById("hamburger");
var menu = document.getElementById("mobilemenu")
var menuClose = document.getElementById("hamburger-close");

function openMenu(){
    console.log("clicking")
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } 
    else {
    menu.style.display = "none";
    }
}

function closeMenu(){
    if (menu.style.display === "flex") {
        menu.style.display = "none"
    }
}

menuOpen.addEventListener("click", openMenu)
menuClose.addEventListener ("click", closeMenu)
