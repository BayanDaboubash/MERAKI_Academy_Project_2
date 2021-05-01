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
    })
    $("#Cat").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Flower").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Bird").css({
      "background-color": "rgb(238, 238, 238)",
    })
  });

  $("#Cat").on("click", () => {
    let value = "Cat";
    $(".item").filter("."+value).show('1000');
    $(".item").not("."+value).hide('1000');
    $("#All").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Cat").css({
      "background-color": "orange",
    })
    $("#Flower").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Bird").css({
      "background-color": "rgb(238, 238, 238)",
    })
  });

  $("#Flower").on("click", () => {
    let value = "Flower";
    $(".item").filter("."+value).show('1000');
    $(".item").not("."+value).hide('1000');
    $("#All").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Cat").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Flower").css({
      "background-color": "orange",
    })
    $("#Bird").css({
      "background-color": "rgb(238, 238, 238)",
    })
  });

  $("#Bird").on("click", () => {
    let value = "Bird";
    $(".item").filter("."+value).show('1000');
    $(".item").not("."+value).hide('1000');
    $("#All").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Cat").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Flower").css({
      "background-color": "rgb(238, 238, 238)",
    })
    $("#Bird").css({
      "background-color": "orange",
    })
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

$("img").on("dblclick", () => {
  array.push($(this.id));
});
