$(document).ready(function () {
  console.log("Скрипты подъехали")

  $('.reviews__slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true
  })

  //wow
  $(function () {
    new WOW().init();
  })
});



