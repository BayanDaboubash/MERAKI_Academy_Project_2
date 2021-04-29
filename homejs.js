var swiper = new Swiper(".swiper-container", {
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
  $(".home").css({
    display: "block",
  });
  $(".albums").css({
    display: "none",
  });
  $(".favourites").css({
    display: "none",
  });
  $(".editPhoto").css({
    display: "none",
  });
});

$("#album").on("click", () => {
    $(".home").css({
      display: "none",
    });
    $(".albums").css({
      display: "block",
    });
    $(".favourites").css({
      display: "none",
    });
    $(".editPhoto").css({
      display: "none",
    });
  });
  
