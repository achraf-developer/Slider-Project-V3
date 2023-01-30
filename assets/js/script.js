// new WOW().init();
$(document).ready(function () {
  $(".hero-slider").slick({
    autoplay:true,
    autoplaySpeed: 3000,
    accessibility:true,
    arrows: true,
    fade: true,
    dots:false,
    cssEase: "ease",
    easing:'linear',
    draggable:false,


    slidesToShow: 1,
    //     adaptiveHeight: true,
  });
});
