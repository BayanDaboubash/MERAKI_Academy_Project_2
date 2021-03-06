$(".home").show();
$(".albums").hide();
$(".favourites").hide();
$(".editPhoto").hide();
$("#thank").hide();
$("#showPhotoBig").hide();
$("#all").css({
  "color": "orange",
});
$("#album").css({
  "color": "rgba(158, 153, 153, 0.904)",
});
$("#favourite").css({
  "color": "rgba(158, 153, 153, 0.904)",
});
$("#edit").css({
  "color": "rgba(158, 153, 153, 0.904)",
});

const photoArray = JSON.parse(localStorage.getItem("photoArray")) || [
  "src='./1.jpg' class='item Cat'",
  "src='./41.jpg' class='item Flower'",
  "src='./21.jpg' class='item Bird'",
  "src='./2.jpg' class='item Cat'",
  "src='./42.jpg' class='item Flower'",
  "src='./22.jpg' class='item Bird'",
  "src='./3.jpg' class='item Cat'",
  "src='./43.jpg' class='item Flower'",
  "src='./23.jpg' class='item Bird'",
  "src='./4.jpg' class='item Cat'",
  "src='./44.jpg' class='item Flower'",
  "src='./24.jpg' class='item Bird'",
  "src='./5.jpg' class='item Cat'",
  "src='./45.jpg' class='item Flower'",
  "src='./25.jpg' class='item Bird'",
  "src='./6.jpg' class='item Cat'",
  "src='./46.jpg' class='item Flower'",
  "src='./26.jpg' class='item Bird'",
  "src='./7.jpg' class='item Cat'",
  "src='./47.jpg' class='item Flower'",
  "src='./27.jpg' class='item Bird'",
  "src='./8.jpg' class='item Cat'",
  "src='./48.jpg' class='item Flower'",
  "src='./28.jpg' class='item Bird'",
  "src='./9.jpg' class='item Cat'",
  "src='./49.jpg' class='item Flower'",
  "src='./29.jpg' class='item Bird'",
  "src='./10.jpg' class='item Cat'",
  "src='./50.jpg' class='item Flower'",
  "src='./30.jpg' class='item Bird'",
  "src='./11.jpg' class='item Cat'",
  "src='./51.jpg' class='item Flower'",
  "src='./31.jpg' class='item Bird'",
  "src='./12.jpg' class='item Cat'",
  "src='./52.jpg' class='item Flower'",
  "src='./32.jpg' class='item Bird'",
  "src='./13.jpg' class='item Cat'",
  "src='./53.jpg' class='item Flower'",
  "src='./33.jpg' class='item Bird'",
  "src='./14.jpg' class='item Cat'",
  "src='./54.jpg' class='item Flower'",
  "src='./34.jpg' class='item Bird'",
  "src='./15.jpg' class='item Cat'",
  "src='./55.jpg' class='item Flower'",
  "src='./35.jpg' class='item Bird'",
  "src='./16.jpg' class='item Cat'",
  "src='./56.jpg' class='item Flower'",
  "src='./36.jpg' class='item Bird'",
  "src='./17.jpg' class='item Cat'",
  "src='./57.jpg' class='item Flower'",
  "src='./37.jpg' class='item Bird'",
  "src='./18.jpg' class='item Cat'",
  "src='./58.jpg' class='item Flower'",
  "src='./38.jpg' class='item Bird'",
  "src='./19.jpg' class='item Cat'",
  "src='./59.jpg' class='item Flower'",
  "src='./39.jpg' class='item Bird'",
  "src='./20.jpg' class='item Cat'",
  "src='./60.jpg' class='item Flower'",
  "src='./40.jpg' class='item Bird'",
];

let nameAlbumNew = "";
$("#add").on("click", () => {
  nameAlbumNew = $("input[name='nameAl']:checked").val();
  console.log(nameAlbumNew);
  // if ($("#Cat1").checked) {
  //   nameAlbumNew = "Cat";
  // }
  // if ($("#Bird1").checked) {
  //   nameAlbumNew = "Bird";
  // }
  // if ($("#Flower1").checked) {
  //   nameAlbumNew = "Flower";
  // }
  $("#thank").show();
  const urlPhoto = $("#urlImage").val();
  photoArray.push(`src='${urlPhoto}' class='item ${nameAlbumNew}'`);
  localStorage.setItem("photoArray", JSON.stringify(photoArray));
});

let options = {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
  },
};

let swiper = new Swiper(".swiper-container", options);

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
  $("#thank").hide();
  $("#showPhotoBig").hide();
  $("#all").css({
    "color": "orange",
  });
  $("#album").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#favourite").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#edit").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
});

$("#album").on("click", () => {
  $(".home").hide();
  $(".albums").show();
  $(".favourites").hide();
  $(".editPhoto").hide();
  $("#thank").hide();
  $(".item").show();
  $("#showPhotoBig").hide();
  $("#all").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#album").css({
    "color": "orange",
  });
  $("#favourite").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#edit").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
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

$("#favourite").on("click", () => {
  $(".home").hide();
  $(".albums").hide();
  $(".favourites").show();
  $(".editPhoto").hide();
  $("#showPhotoBig").hide();
  $("#thank").hide();
  $("#all").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#album").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#favourite").css({
    "color": "orange",
  });
  $("#edit").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
});

$("#edit").on("click", () => {
  $(".home").hide();
  $(".albums").hide();
  $(".favourites").hide();
  $(".editPhoto").show();
  $("#showPhotoBig").hide();
  $("#thank").hide();
  $("#urlImage").val("");
  $("input[type='radio']").prop("checked", false);
  $("#all").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#album").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#favourite").css({
    "color": "rgba(158, 153, 153, 0.904)",
  });
  $("#edit").css({
    "color": "orange",
  });
});

const array = JSON.parse(localStorage.getItem("arrayFav")) || [];
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

$(".photo").on("dblclick", (e) => {
  let a = e.target.src;
  array.push(a);
  localStorage.setItem("arrayFav", JSON.stringify(array));
});

$("#favourite").on("click", () => {
  $(".favourites").html(
    "<h1 class='massege title'> The image can be delete to your favorites by double-clicking on it </h1>"
  );
  $(".favourites").append(`<div class='photos'></div>`);
  array.forEach(function (element, index) {
    $(".photos").append(`<img src=${element} class="item" title="double click to delete from favorite" >`);
  });
});

//localStorage.removeItem("arrayFav")
$("#album").on("click", () => {
  $(".photo").html("");
  photoArray.forEach(function (element, index) {
    $(".photo").append(`<div id="${index}" title='double click to add to favorite'> <img ${element} title='double click to add to favorite'> </div>`);
  });
});

$(".favourites").on("dblclick", (e) => { 
  let a = e.target.src;
  let num = array.indexOf(a);
  array.splice(num, 1);
  localStorage.setItem("arrayFav", JSON.stringify(array));
  $(".favourites").html(
    "<h1 class='massege title'> The image can be delete to your favorites by double-clicking on it </h1>"
  );
  $(".favourites").append(`<div class='photos'></div>`);
  array.forEach(function (element, index) {
    $(".photos").append(`<img src=${element} class="item" >`);
  });
});

$("#level1 div").on("click", (e) => {
  $("#showPhotoBig").show();
  $("#showPhotoBig").html("");
  $(".home").hide();
  let a = e.target.src;
  $("#showPhotoBig").append(`<img src=${a} class="big" title="Click to revert the image to its previous size">`);
});

$("#showPhotoBig").on("click", (e) => {
  $(".home").show();
  $("#showPhotoBig").hide();
});

$("#level2 div").on("click", (e) => {
  $("#showPhotoBig").show();
  $("#showPhotoBig").html("");
  $(".home").hide();
  let a = e.target.src;
  $("#showPhotoBig").append(`<img src=${a} class="big" title="Click to revert the image to its previous size">`);
});

$("#level3 div").on("click", (e) => {
  $("#showPhotoBig").show();
  $("#showPhotoBig").html("");
  $(".home").hide();
  let a = e.target.src;
  $("#showPhotoBig").append(`<img src=${a} class="big" title="Click to revert the image to its previous size">`);
});

$("#level4 div").on("click", (e) => {
  $("#showPhotoBig").show();
  $("#showPhotoBig").html("");
  $(".home").hide();
  let a = e.target.src;
  $("#showPhotoBig").append(`<img src=${a} class="big" title="Click to revert the image to its previous size">`);
});

$("#level5 div").on("click", (e) => {
  $("#showPhotoBig").show();
  $("#showPhotoBig").html("");
  $(".home").hide();
  let a = e.target.src;
  $("#showPhotoBig").append(`<img src=${a} class="big" title="Click to revert the image to its previous size">`);
});
