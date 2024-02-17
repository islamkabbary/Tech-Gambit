const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoHeight: false,
  centeredSlides: true,
  slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2.4,
      spaceBetween: 40,
    }
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
