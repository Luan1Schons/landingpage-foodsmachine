$('.carousel-perfect-for-all').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    nav:false,
    items:1,
    autoplay: true,
    autoplayTimeout: 3000,
    singleItem:true,
    slideSpeed : 300,
    paginationSpeed : 400,
})


$('.clients-carousel').owlCarousel({
  loop:true,
  center: true,
  margin:10,
  nav:false,
  items:5,
  autoplay: true,
  autoplayTimeout: 3000,
  singleItem:true,
  slideSpeed : 300,
  paginationSpeed : 400,
})

var app = new Vue({
  el: '#app',
  data: {
    isHidden: false
  }
})