
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
    menu.classList.add("active")
}
//     if (menu.style.display === "none") {
//         menu.style.display = "flex";
//     } 
//     else {
//     menu.style.display = "none";
//     }
// 

function closeMenu(){
    menu.classList.remove("active")
    // if (menu.style.display === "flex") {
    //     menu.style.display = "none"
    // }
}

menuOpen.addEventListener("click", openMenu)
menuClose.addEventListener ("click", closeMenu)


// Features tabs
var tabbtn = document.getElementsByClassName("tab")



// function openCity(evt, cityName) {
//     var i, x, tablinks;
//     x = document.getElementsByClassName("city");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < x.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " w3-red";
//   }