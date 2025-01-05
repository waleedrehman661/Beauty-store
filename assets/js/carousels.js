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
    
    // Tab switching logic
    $(".tab-btn").click(function () {
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    const tabId = $(this).data("tab");
    $(".tab-panel").removeClass("active");
    $(`#${tabId}`).addClass("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove 'active' class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabPanels.forEach(panel => panel.classList.remove("active"));
  
        // Add 'active' class to the clicked button and corresponding panel
        button.classList.add("active");
        const targetPanel = document.getElementById(button.getAttribute("data-tab"));
        targetPanel.classList.add("active");
      });
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

$(document).ready(function () {
    $("#value-carousel").owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: true
        }
      }
  
    });
  });
//   FOoter


document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      const content = header.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

//   FOoter