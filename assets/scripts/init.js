jQuery(document).ready(function () {
  "use strict";
  initCounter();
  initSroll();
})

function initCounter() {
  console.log('a');
  jQuery('.counter').counterUp({
    delay: 2,
    time: 4000,
    start:0
  });
}

function initSroll() {
  $("a[href^='#features']").click(function() {
      $('html, body').animate({
          scrollTop: $("#features").offset().top
      }, 2000);
  });
  $("a[href^='#team']").click(function() {
      $('html, body').animate({
          scrollTop: $("#team").offset().top
      }, 2000);
  });
  $("a[href^='#media']").click(function() {
      $('html, body').animate({
          scrollTop: $("#media").offset().top
      }, 2000);
  });
}