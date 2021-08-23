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

/*
var checkboxes = document.querySelectorAll('input');

for( var i = 0; i < checkboxes.length; i++ ) {

  checkboxes[i].addEventListener("change", function() {
    updateBugs(this);
  });
}

function updateBugs(changedElement) {
  var checkedCount = document.querySelectorAll('input:checked').length;

  // No bugs, thats impossible!
  if( checkedCount === 0 ) {
    turnOnRandomBug(changedElement);
    if( Math.random() > 0.85 ) {
      turnOnRandomBug(changedElement);
    }
  }
}

function turnOnRandomBug(excluding) {
  turnOn = Math.floor(Math.random() * checkboxes.length);

  if( checkboxes[turnOn] === excluding) {
    turnOn = turnOn + 1;
    if( turnOn > (checkboxes.length - 1)) {
      turnOn = 0;
    }
  }

  checkboxes[turnOn].checked = true;
}

setTimeout(function() {
  turnOnRandomBug(null);
}, 400)

*/