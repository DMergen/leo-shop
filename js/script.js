$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1, 
    autoWidth: true,
    nav: true,
    dots: false,
    navText: [
	  '<img src="img/left-nav.png">',
	  '<img src="img/right-nav.png">'
	 ]
  });

});