//JQuery library for lightbox

lightbox.option({
    'wrapAround': true,
    'disableScrolling': true
  })



// function  search bar 


 function myFunction() {

  let elements = $('a');

  $('a').hide();
  const input = $('#searchBar').val().toUpperCase();
  if (input.length === 0) {
    $('a').show();
  } else {
    elements.each(function(i, element) {
      const item = element.dataset.title.toUpperCase();
      if(item.indexOf(input) > -1) {
        $(element).show();
      }
    });
  }
}; 
