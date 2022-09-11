/*nav*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle')
    });

}

navSlide();



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

//Astudent
let Astudent = document.querySelector("#Astudent");
Astudent.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', true);
    localStorage.setItem('hours24', false);
    localStorage.setItem('ard', false);
    localStorage.setItem('alchemist', false);
    
});
//24hours
let hours24 = document.querySelector("#hours24");
hours24.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', false);
    localStorage.setItem('hours24', true);
    localStorage.setItem('ard', false);
    localStorage.setItem('alchemist', false);
});
//Ard El-Safeleen
let ard = document.querySelector("#ard");
ard.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', false);
    localStorage.setItem('hours24', false);
    localStorage.setItem('ard', true);
    localStorage.setItem('alchemist', false);
});
//The Alchemist
let alchemist = document.querySelector("#alchemist");
alchemist.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', false);
    localStorage.setItem('hours24', false);
    localStorage.setItem('ard', false);
    localStorage.setItem('alchemist', true);
});
