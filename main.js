let buttonOn  = document.querySelector("#buttonOn");
let page01 = document.querySelector(".page01");
let page02 = document.querySelector(".page02");
let imageCookie = document.querySelector("#imageCookie");
let imageCookieOpen = document.querySelector("#imageCookieOpen");
let hide = document.querySelector(".hide");






imageCookie.addEventListener('click', trocaScreen);
buttonOn.addEventListener('click', resetScreen);




// tentar novamente
function resetScreen(){
    trocaScreen()
}



// troca imagem
function trocaScreen(){
    page01.classList.toggle("hide");
    page02.classList.toggle("hide");
}