$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        margin: 10,
        nav: true,
        responsive: { 
            0: {
                items: 1 
            },
            600: {
                items: 2 
            },
            1000: {
                items: 3 
            }
        }
    });
});

$(document).ready(function(){

$(".owl-carousel").owlCarousel({
items: 3, 
loop: true, 
center: true,
margin: 5, 
responsive: {
0: {
items: 1,
},
768: {
items: 2, 
},
1024: {
items: 3,
}
}
});
});

var swiper = new Swiper(".mySwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
coverflowEffect: {
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows: true,
},
});