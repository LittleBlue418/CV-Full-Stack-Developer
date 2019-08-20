

$(function() {

// This code is from https://bootstrapious.com/snippets
    $(".progress").each(function() {

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


    //target a section | when this happes: | the event 'shown' happens on the boostrap class 'collpse' | call this function and gives it the event (the list of stuff that happens)
    $('.inner-section').on('show.bs.collapse', function(event) {

        //create a variable | put in the target for the event (the section) | call the method to find the first parent element (with this matching name)
        var section = $(event.target).closest('.page-section');

        //create another variable | set it to the parent element we just found
        var offset = section.offset();

        //check we have targeted the correct element and it's giving us the location
        console.log(section);
        console.log(offset);

        //create a new variable that contains only the value top
        var properties = {scrollTop:offset.top};
        console.log(properties);

        //create a collection containing the html page and the body | call the method 'animate' |
        $('html, body').animate(properties,1000);
    })

    //code from stack overflow https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  });

