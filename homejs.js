let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$("#all").on("click", () => {
  $(".home").show();
  $(".albums").hide();
  $(".favourites").hide();
  $(".editPhoto").hide();
});

$("#album").on("click", () => {
  $(".home").hide();
  $(".albums").show();
  $(".favourites").hide();
  $(".editPhoto").hide();
});

$("#favourite").on("click", () => {
  $(".home").hide();
  $(".albums").hide();
  $(".favourites").show();
  $(".editPhoto").hide();
});

$("#edit").on("click", () => {
  $(".home").hide();
  $(".albums").hide();
  $(".favourites").hide();
  $(".editPhoto").show();
});
