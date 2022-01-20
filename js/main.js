/*==================== SHOW MENU ====================*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        
        // Link Animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
            } 
        });

        //Burger Animation
        burger.classList.toggle('toggle')
    });
}

navSlide()

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-links li')
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

function linkAction(){
    const navLinks = document.querySelectorAll('.nav-links li')
    // When we click on each nav__link, we remove the show-menu class
    nav.classList.remove('nav-active')
    burger.classList.remove('toggle')
    navLinks.forEach(link => { 
        link.style.animation = ``})
    
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE YEAR DATE ====================*/ 

document.getElementById('currentYear').innerHTML = new Date().getFullYear() 

/*==================== AUTO TYPED ====================*/ 

var typed = new Typed('.auto-input', {
    strings: ['Tomas Rojo', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 200,
    loop: true
  });


