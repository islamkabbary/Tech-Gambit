document.addEventListener("DOMContentLoaded", function () {
  var swiperwriters = new Swiper(".swiperwriters", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.writersBlockArea .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".blogsSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".ratingSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1336: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1720: {
        slidesPerView: 3.5,
        spaceBetween: 30

      },

    }
  });
});
