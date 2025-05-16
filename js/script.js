let btn = document.querySelector("#btn");
let menu = document.querySelector("#mobilenavmenu");

btn.addEventListener("click",function (){
    menu.classList.toggle("active");
})