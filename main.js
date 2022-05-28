//------------Define constants and variables-----------------
const formContainer = document.querySelector(".register");
const errorMessage = document.querySelectorAll(".error-message")
const emailRegXep = new RegExp("(^[a-z0-9])([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\]\*]*)@[a-z0-9]+[\.]{1}.+[a-z0-9]+$", "i");
//-------------Functions--------------------
function display(icon, errorMessageIndex){
    icon.style.opacity = "1";
    errorMessage[errorMessageIndex].style.height = "auto";
    errorMessage[errorMessageIndex].style.overflow = null;
    errorMessage[errorMessageIndex].style.opacity = "1";
}

function hide(icon, errorMessageIndex){
    icon.style.opacity = "0";
    errorMessage[errorMessageIndex].style.height = "0";
    errorMessage[errorMessageIndex].style.overflow = "hidden";
    errorMessage[errorMessageIndex].style.opacity = "0";
}



formContainer.addEventListener("keyup", (event)=> {
    let input = event.target;
    let errorIcon = input.nextElementSibling;
    let parent = event.target.parentNode;
    
    if(parent.classList.contains("first-name")){
       if(input.value == ""){
           display(errorIcon, 0);
       }else hide(errorIcon, 0);
    }

    if(parent.classList.contains("last-name")){
        if(input.value == ""){
            display(errorIcon, 1);
        }else hide(errorIcon, 1);
    }

    if(parent.classList.contains("email")){
        if(! emailRegXep.test(input.value)) display(errorIcon, 2);
        else hide(errorIcon, 2);
    }

    if(parent.classList.contains("password")){
        if(input.value == ""){
            display(errorIcon, 3);
        }else hide(errorIcon, 3);
    }
})