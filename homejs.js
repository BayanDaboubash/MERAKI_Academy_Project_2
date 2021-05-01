let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
  },
});

$("#All").on("click", () => {
  let value = "All";
  $(".item").show("1000");
  $("#All").css({
    "background-color": "orange",
  });
  $("#Cat").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Flower").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Bird").css({
    "background-color": "rgb(238, 238, 238)",
  });
});

$("#Cat").on("click", () => {
  let value = "Cat";
  $(".item")
    .filter("." + value)
    .show("1000");
  $(".item")
    .not("." + value)
    .hide("1000");
  $("#All").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Cat").css({
    "background-color": "orange",
  });
  $("#Flower").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Bird").css({
    "background-color": "rgb(238, 238, 238)",
  });
});

$("#Flower").on("click", () => {
  let value = "Flower";
  $(".item")
    .filter("." + value)
    .show("1000");
  $(".item")
    .not("." + value)
    .hide("1000");
  $("#All").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Cat").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Flower").css({
    "background-color": "orange",
  });
  $("#Bird").css({
    "background-color": "rgb(238, 238, 238)",
  });
});

$("#Bird").on("click", () => {
  let value = "Bird";
  $(".item")
    .filter("." + value)
    .show("1000");
  $(".item")
    .not("." + value)
    .hide("1000");
  $("#All").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Cat").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Flower").css({
    "background-color": "rgb(238, 238, 238)",
  });
  $("#Bird").css({
    "background-color": "orange",
  });
});

// $(document).ready(()=>{
//   $("#All").on("click",()=>{
//     let value ="All";
//     //let value = $(this).text();
//     console.log(value);
//     if (value == "All"){
//       $(".item").show('1000');
//     }
//     else{
//       $(".item").filter(value).show('1000');
//       $(".item").not(value).hide('1000');
//     }
//   })

//   $(".list").on("click", ()=>{
//     $(this).addClass('active').siblings().removeClass('active');
//   })
// })

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
  $("#All").css({
    "background-color": "orange",
  });
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

const array = [];
// let a = 1;
// $(".favourites").html(`<img src='${a}.jpg' >`);

// $("#a1").on("dblclick", () => {
//   array.push("1.jpg")
//   let a = $("#a1").attr('src');
// });

// $("#a2").on("dblclick", () => {
//   array.push("41.jpg")
//   let a = $("#a2").attr('src');
// });

$(".photo .item").on("dblclick", (e) => {
  array.push(e.target);
});

$("#favourite").on("click", () => {
  array.forEach(function (element, index) {
    $(".favourites").append(element);
  });
});

$("#add").on("click", () => {
  const urlPhoto = $("#urlImage").val();
  const nameAlbums = $("nameAlbum").val();
  $(".albums").append(
    `<div class="item ${nameAlbums}" value="${nameAlbums}"><img src="${urlPhoto}" /></div>`
  );
});
