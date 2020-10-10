(function ($) {
  "use strict";

  var browserWindow = $(window);

  browserWindow.on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          "<div>%D <span>Gün</span></div> <div>%H <span>Saat</span></div> <div>%M <span>Dəqiqə</span></div> <div>%S <span>Saniyə</span></div>"
        )
      );
    });
  });

  if ($.fn.classyNav) {
    $("#cleverNav").classyNav();
  }

  if ($.fn.owlCarousel) {
    var tutors = $(".tutors-slide");
    tutors.owlCarousel({
      items: 3,
      margin: 0,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1000,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }

  if ($.fn.magnificPopup) {
    $(".video-btn").magnificPopup({
      type: "iframe",
    });
  }

  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up"></i>',
    });
  }

  if ($.fn.counterUp) {
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
  }

  if ($.fn.sticky) {
    $(".clever-main-menu").sticky({
      topSpacing: 0,
    });
  }

  if (browserWindow.width() > 767) {
    new WOW().init();
  }

  $('a[href="#"]').click(function ($) {
    $.preventDefault();
  });
})(jQuery);
