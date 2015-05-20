$(function() {
  $('.slides').slides({
    play: 5000,
    preload: true,
    pagination: false,
    generatePagination: false
  });

  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr('href');
    if ($(window).scrollTop() != '0') {
      $(this).fadeIn('slow')
    }

    var $scrollDiv = $(this)
      , $window    = $(window);

    $window.scroll(function() {
      if ($window.scrollTop() == '0') {
        $scrollDiv.fadeOut('slow')
      } else {
        $scrollDiv.fadeIn('slow')
      }
    });

    $(this).click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow')
    });
  };

  $('#toTop').scrollToTop();
});
