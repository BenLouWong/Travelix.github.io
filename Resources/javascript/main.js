//-------CAROUSEL-------// //https://www.w3schools.com/w3css/w3css_slideshow.asp
//https://kenwheeler.github.io/slick/


$(document).ready(function(){   
    
    //Selectors
    
    var header=document.querySelector('.header');
    var hamburgerMenu=document.querySelector('.hamburger-menu');
    var closeMenu=document.querySelector('.close-hamburger-menu');
    
    hamburgerMenu.addEventListener('click',function(){
        header.classList.toggle('menu-open');
    })
    
    closeMenu.addEventListener('click',function(){
        header.classList.toggle('menu-open');
    })
    
    
    //Slick sliders
    
    $('.quote_carousel_slides').slick({
        infinite: true,
        speed: 700,
        autoplay:false,
        autoplaySpeed: 2000,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $('.testimonials_content').slick({
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    
});

