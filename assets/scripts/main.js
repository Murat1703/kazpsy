let header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (pageYOffset > 70){
        header.classList.add('__fixed-header');
    }
    if (pageYOffset < 70){
        header.classList.remove('__fixed-header');
    }
});

let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
} )