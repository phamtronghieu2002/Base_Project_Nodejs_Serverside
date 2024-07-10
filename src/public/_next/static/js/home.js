// carousel certificert
try {
    var owl = $('.owl-carousel')
    
    owl.owlCarousel({
      margin: 0,
      responsiveClass: true,
      dots: true,
      slideTransition: "linear",
      autoplay: false,

      navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
      ],
     
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        767: {
          items: 3,
          nav: true,
        },
      },
    });


    owl.trigger('translated.owl.carousel');
  } catch (error) {
      console.log(error);
  }
  
//preloader
const preloader =$("#preloader")
document.addEventListener("DOMContentLoaded", function() {
  
    setTimeout(function() {
        preloader.hide();
    }, 700);
});
// 
$('[data-fancybox="gallery"]').fancybox({
   
});