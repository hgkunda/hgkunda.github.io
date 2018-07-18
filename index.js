
$(document).ready(function(){

$('.slickcaro').slick();

$('.slickautoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

// $('.slickgala').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

// let gala = $('.slickgala').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   asNavFor: $('.slickfinal')
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
// });

let final = $('.slickfinal').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: $('.slickgala')
});

let gala = $('.slickgala').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  asNavFor: $('.slickfinal')
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});


// $( function() {
//     var icons = {
//       header: "ui-icon-circle-arrow-e",
//       activeHeader: "ui-icon-circle-arrow-s"
//     };
//     $( "#accordion" ).accordion({
//       icons: icons
//     });
//     $( "#toggle" ).button().on( "click", function() {
//       if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
//         $( "#accordion" ).accordion( "option", "icons", null );
//       } else {
//         $( "#accordion" ).accordion( "option", "icons", icons );
//       }
//     });
//   } );

});
