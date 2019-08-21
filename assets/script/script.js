

$(function () {

  // This code is from https://bootstrapious.com/snippets
  $(".progress").each(function () {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }
  // end of code from https://bootstrapious.com/snippets



//Code written with Parmus https://github.com/parmus

  //target an inner section | for each (call this function)

  $('.inner-section').each(function () {

    /* create a variable | put in the section we just found | call the method to find the first
    parent element (with this matching name)*/
    var section = $(this).closest('.page-section');

    //create another variable | set it to the parent element we just found
    var offset = section.offset();

    //TEST check we have targeted the correct element and it's giving us the location
    console.log(section);
    console.log(offset);

    /* 'this' refers to the specific section of the each loop that we ran at the begining of
    the page load | when ... happens: | the event 'shown' happens on the boostrap class
    'collpse' | call this function */
    $(this).on('show.bs.collapse', function (event) {

      //filters out the sub sections
      if (!$(event.target).hasClass('inner-section')) return;


      /*create a new variable that contains only the position value 'top' for the element
      that has just been expanded*/
      var properties = { scrollTop: offset.top };

      //TEST that we have constructed the properties object.
      console.log(properties);

      //create a collection containing the html page and the body | call the method 'animate' |
      $('html, body').animate(properties, 1000);
    })

    $('form').on('submit',function(event){
      event.preventDefault();
      $('#emailNotificationModal').modal();
    })
  // end of code written with Parmus

  })












  //code from stack overflow https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

});

