

var form = document.querySelector("form");
form.onsubmit = function (e){
    console.log ("submit");
    e.preventDefault();
};

