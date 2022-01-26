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
    strings: ['Tomas Rojo', 'a Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 200,
    loop: true
  });

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const lightTheme = 'bx-sun'


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    if (themeButton.classList.contains('bx-moon')){
        themeButton.classList.remove('bx-moon')
        themeButton.classList.toggle('bx-sun')
    } else {
        themeButton.classList.remove('bx-sun')
        themeButton.classList.toggle('bx-moon')
    }

})


