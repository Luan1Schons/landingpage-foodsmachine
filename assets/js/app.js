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
      $('.brands').addClass('hideBrands');
    } else {
      clickFunctionalities = 0;
      $('.brands').removeClass('hideBrands');
    }
  })


  $('#btnNeedHelpRegister').on('click', function(e) {
    e.preventDefault();
    $('#btnAddModuleRegister').prop('disabled', true);
    $('#regiser-showcase').hide();
    $(this).removeClass( "btn-white" ).addClass( "btn-dark" );
    $(this).text('OK, ENTRAREMOS EM CONTATO O MAIS RÁPIDO POSSÍVEL')
  });

  $('#btnAddModuleRegister').on('click', function(e) {
    console.log('teste');
    e.preventDefault();
    $('#btnNeedHelpRegister').prop('disabled', true);
  });

});

