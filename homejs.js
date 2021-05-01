let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
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

$(document).ready(()=>{
  $(".list").on("click",()=>{
    const value = $(this).attr("data-filter");
    if (value == "All"){
      $(".item").show('1000');
    }
    else{
      $(".item").not(""+value).hide('1000');
      $(".item").filter(""+value).show('1000');
    }
  })
})
