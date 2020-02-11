
var form = document.querySelector("form");

form.onsubmit = function (e){
    console.log ("submit");
    e.preventDefault();
};


//-----------Mobile menu

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


//-----------Feature Tabs

var btnTab = document.getElementsByClassName("tab")
var contTab = document.getElementsByClassName("tab-content")
var line = document.getElementsByClassName("red-line")

function selectTab (){
  for (let i = 0; i < btnTab.length; i ++){
    btnTab[i].onclick = function (){
      changeTab (i);
    }
  }
}

function changeTab (index){
  for (let i = 0; i < contTab.length; i ++){
    if (contTab[i].classList.contains("active")){
      contTab[i].classList.remove("active");
    }
    if (btnTab[i].classList.contains("active")){
      btnTab[i].classList.remove("active")
    }
    if (line[i].classList.contains("active")){
      line[i].classList.remove("active")
    }

    contTab[index].classList.add("active");
    btnTab[index].classList.add("active");
    line[index].classList.add("active");
  }
}

selectTab()


//--------------FAQ's

var questions = document.getElementsByClassName("questions")
var answers = document.getElementsByClassName("answers")

function questionList (){
  for (let i = 0; i < questions.length; i ++){
    questions[i].onclick = function (){
      openAnswer (i);
    }
  }
}

function openAnswer (index){
  for (let i = 0; i < answers.length; i ++){
    answers[index].classList.add("active")
  }
}

questionList()