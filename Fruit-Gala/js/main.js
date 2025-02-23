// Header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header_scrolled");
    }else{
        nav.classList.remove("header_scrolled");
    }
}


/*
=========================
   SIDEBAR CSS
========================= 
*/

let navBar = document.querySelector(".nav-link");
let navCollapes = document.querySelector(".navbar-collapse.collapse");

navBar.foreach(function(e){
    e.addEventListner("click", function(){
        navCollapes.classList.remove("show");
    })
})