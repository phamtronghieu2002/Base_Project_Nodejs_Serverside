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
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // Khi video không còn hiển thị trong viewport
      video.pause();
      thumbNail.style.display = 'flex';
    }
  });
}, {
  threshold: 0
});

observer.observe(video);