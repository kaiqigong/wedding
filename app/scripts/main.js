/* jshint devel:true */
'use strict';
$(document).ready(function() {
  var reveal = function (selector) {
    var img = $(selector);
    if (!img[0].src&&img.attr('data-src')) {
      img[0].src = img.attr('data-src');
    }
  };
  var playing = true;
  $('.music').on('click',function(){
    var vid = document.getElementById('audio');
    if (playing) {
      playing = false;
      vid.pause();
      $(this).removeClass('rotate');
    } else {
      $(this).addClass('rotate');
      playing = true;
      vid.play();
    }
  });
  $('#fullpage').fullpage({
    controlArrows: false,
    loopHorizontal: false,
    afterSlideLoad: function(){
      var loadedSlide = $(this);
      reveal(loadedSlide.find('img'));
      loadedSlide.removeClass('hide-img');
    },
    onSlideLeave: function(){
      var leavingSlide = $(this);
      setTimeout(function(){
        leavingSlide.addClass('hide-img');
      }, 1000);
    }
  });
});
