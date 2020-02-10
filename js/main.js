
var form = document.querySelector("form");
form.onsubmit = function (e){
    console.log ("submit");
    e.preventDefault();
};


// Mobile menu

var menuOpen = document.getElementById("hamburger");
var menu = document.getElementById("mobilemenu")
var menuClose = document.getElementById("hamburger-close");

function menuAction()
{
    console.log("menuAction");
    menu.classList.toggle("active");
}

menuOpen.addEventListener("click", menuAction);
menuClose.addEventListener ("click", menuAction);

// function classToggler(element, className)
// {
//     element.classList.toggle(className);
// }

// Element.prototype.classToggler = function (className)
// {
//     this.classList.toggle(className);
// };

// NodeList.prototype.classToggler = HTMLCollection.prototype.classToggler = function (className)
// {
//     for (i = 0; i < this.length -1; i ++)
//     {
//         if (this[i])
//         {
//             this[i].classToggler(className);
//         }
//     }
// }

// let elemento = document.querySelector("body");

// classToggler(elemento, "active");

// document.querySelector("body").classToggler("active");
// document.querySelectorAll("ul").classToggler("active");

// function openMenu(){
//     console.log("clicking")
//     menu.classList.add("active")
// }
// //     if (menu.style.display === "none") {
// //         menu.style.display = "flex";
// //     } 
// //     else {
// //     menu.style.display = "none";
// //     }
// // 

// function closeMenu(){
//     menu.classList.remove("active")
//     // if (menu.style.display === "flex") {
//     //     menu.style.display = "none"
//     // }
// }




// Features tabs

// var tabbtn = document.getElementsByClassName("tab")
// var tab = document.getElementsByClassName("tab-content")

// 0
// 1
// 2

// contents
// tab[i].onclick = function() { contents[i].display }

// data-target = "tab1"

// data-tab = "tab1"


// let buttons = docuemt.querySelectorAll(".tab-button");

// button.onclick = function()
// {
//     let current = document.querySelector("[data-tab = '" + this.dataset.target +  "']")
// }


// 0
// 1
// 2


// function openTab(event, tabName){
//     for (i = 0; i < tab.length; i ++){
//         tab[i].classList.remove = "content-active"    
//     }
// }


// tabbtn.addEventListener("click", openTab)


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