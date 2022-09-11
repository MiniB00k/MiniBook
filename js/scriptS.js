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
//Astudent
let Astudent = document.querySelector("#Astudent");
Astudent.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', true);
    localStorage.setItem('hours24', false);
    localStorage.setItem('ard', false);
    localStorage.setItem('alchemist', false);
    window.document.location = './book-summary.html';
    
});
//24hours
let hours24 = document.querySelector("#hours24");
hours24.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', false);
    localStorage.setItem('hours24', true);
    localStorage.setItem('ard', false);
    localStorage.setItem('alchemist', false);
    window.document.location = './book-summary.html';
});
//Ard El-Safeleen
let ard = document.querySelector("#ard");
ard.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', false);
    localStorage.setItem('hours24', false);
    localStorage.setItem('ard', true);
    localStorage.setItem('alchemist', false);
    window.document.location = './book-summary.html';
});
//The Alchemist
let alchemist = document.querySelector("#alchemist");
alchemist.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Astudent', false);
    localStorage.setItem('hours24', false);
    localStorage.setItem('ard', false);
    localStorage.setItem('alchemist', true);
    window.document.location = './book-summary.html';
});

navSlide();