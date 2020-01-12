// preloader
setTimeout(function() {
  $(".preloader").css("display", "none");
}, 2000);

$(window).load(function() {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

$(function() {
  new WOW().init();
  $(".main-nav").singlePageNav({
    offset: 70
  });

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $(".navbar-collapse a").click(function() {
    $(".navbar-collapse").collapse("hide");
  });
});

$("#down").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#about").offset().top - 100
    },
    500
  );
});
