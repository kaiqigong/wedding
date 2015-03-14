/* jshint devel:true */
'use strict';
$(document).ready(function() {
  $('#fullpage').fullpage({
    controlArrows: false,
    loopHorizontal: false,
    afterSlideLoad: function(){
      var loadedSlide = $(this);
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
