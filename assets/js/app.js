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


  $('body').on('click','#btnNeedHelpRegister', function(e) {
    e.preventDefault();
    $('#btnAddModuleRegister').removeClass('btn-cian').addClass('btn-disabled');
    $('#regiser-showcase').hide();
    $(this).removeClass( "btn-white" ).addClass( "btn-dark" );
    $(this).text('OK, ENTRAREMOS EM CONTATO O MAIS RÁPIDO POSSÍVEL')
  });

  $('body').on('click','#btnAddModuleRegister', function(e) {
    e.preventDefault();
    $('#btnAddModuleRegister').removeClass('btn-cian').addClass('btn-disabled');
    $('#regiser-showcase').show();
    $('#btnNeedHelpRegister').removeClass( "btn-dark" ).addClass( "btn-white" );
    $('.need-help-to-mount-plan').html('<button type="button" class="btn btn-white" id="btnNeedHelpRegister"><b>PRECISA</b> DE AJUDA PARA MONTAR SEU PLANO</button>');
  });

  $('.register-btn').on('click', function(e) {
    e.preventDefault();
    //$('#btnAddModuleRegister').removeClass('btn-disabled').addClass('btn-cian');
    //$('#regiser-showcase').show();
  });

});

