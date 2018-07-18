
$(document).ready(function(){

$('.slickcaro').slick();

$('.slickautoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

$('.slickgala').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
});


});
