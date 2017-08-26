
/*hamburger menu*/

$( document ).ready(function(){
  $(".burger-button").click(function(){
   $(".burger-menu").slideToggle();
    $(".burger-button").toggleClass("active");
  });
});

/*equipment selection*/

$(document).ready(function(){
  /* filtering */
  $('.portfolio-filter a').click(function(e) {
    e.preventDefault();
    console.log("We clicked it");

    $('.portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    $('.filter-box .filter-item').each(function() {
      if(filterVal == 'all'){
        $(this).removeClass('hidden');
      }else{
        if(!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden'); // hide those that don't have the filter
        }else{
          $(this).removeClass('hidden'); // show those that do have the filter
        }
      };
    });
  });
});
