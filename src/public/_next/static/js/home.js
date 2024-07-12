// carousel certificert
try {
    var swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 80,
        slidesPerGroup: 1,
        zoom: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 45,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
} catch (error) {
    console.log(error);
}

//preloader
const preloader = $('#preloader');
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        preloader.hide();
    }, 700);
});
//
$('[data-fancybox="gallery"]').fancybox({});

// VIDEO
document.getElementById('play-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('thumb-nail-video').style.display = 'none';
    document.getElementById('video').play();
});
//VIDEO
let video = document.getElementById('video');
let thumbNail = document.getElementById('thumb-nail-video');
let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                // Khi video không còn hiển thị trong viewport
                video.pause();
                thumbNail.style.display = 'flex';
            }
        });
    },
    {
        threshold: 0,
    },
);

observer.observe(video);
// add animation certificert
//phần tử chẵn
const slide_item_even = $('.swiper-wrapper .swiper-slide:nth-child(2n) a');
const slide_item_odd = $('.swiper-wrapper .swiper-slide:nth-child(2n+1) a');

slide_item_even.attr('data-aos', 'fade-right');
slide_item_odd.attr('data-aos', 'fade-left');
slide_item_even.attr('data-aos-duration', '1000');
slide_item_odd.attr('data-aos-duration', '1000');

// handle introduce-category
$('.single-service1, .single-service2').click(function () {
    $(this).toggleClass('active');
    $(this).next('.accordion-body, .accordion-collapse').slideToggle();
    $(this)
        .find('i.fi-br-angle-up, i.fi-br-angle-down')
        .toggleClass('fi-br-angle-up fi-br-angle-down');
});

// handle couter up
try {

  const counterUp = window.counterUp.default

  const callback = entries => {
    entries.forEach( entry => {
      const el = entry.target
      if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
        counterUp( el, {
          duration: 2000,
          delay: 20,
        } )
        el.classList.add( 'is-visible' )
      }
    } )
  }
  
  const IO = new IntersectionObserver( callback, { threshold: 1 } )
  
  document.querySelectorAll('.countfect').forEach(el => {
    IO.observe(el)
})
        
} catch (error) {
    console.log(error);
}

AOS.init();
