$('.carousel-perfect-for-all').owlCarousel({
  loop: true,
  center: true,
  margin: 10,
  nav: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  singleItem: true,
  slideSpeed: 300,
  paginationSpeed: 400,
})


$('.clients-carousel').owlCarousel({
  loop: true,
  center: true,
  margin: 10,
  nav: false,
  items: 5,
  autoplay: true,
  autoplayTimeout: 3000,
  singleItem: true,
  slideSpeed: 300,
  paginationSpeed: 400,
})

$(document).ready(function () {
  let clickFunctionalities = 0;
  $('.btn-red-functionalities').on('click', function (e) {

    if (clickFunctionalities === 0) {
      clickFunctionalities = 1;
      $(".brands").hide();
    } else {
      clickFunctionalities = 0;
      $(".brands").show();
    }
  })
});