$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1, 
    margin: 10,
    loop: true,
    autoplay:true, 
    autoplayHoverPause:true, 
    smartSpeed:1000,
    nav: true,
    dots: false,
    navText: [
	  '<img src="img/left-nav.png">',
	  '<img src="img/right-nav.png">'
	  ],
    responsive: {
      0: {
        nav: false,
        dots: true
      },
      480: {
        nav: true,
        dots: false
      }
    }
  });

});

var wrapperMenu = document.querySelector('.hamburger');
var menuSlide = document.querySelector('.menu-list')

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('is-active');
  menuSlide.classList.toggle('menuS') ;
})
