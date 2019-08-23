

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
  $('.inner-section').each(function () {


    var section = $(this).closest('.page-section');
    var offset = section.offset();

    $(this).on('show.bs.collapse', function (event) {

      if (!$(event.target).hasClass('inner-section')) return;

      var properties = { scrollTop: offset.top };

      $('html, body').animate(properties, 1000);
    })
  // end of code written with Parmus


  // code from stack overflow https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically
   $('form').on('submit',function(event){
      event.preventDefault();
      $('#emailNotificationModal').modal();
    })
  // end of code from stack overflow

  })












  //code from stack overflow https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

});

