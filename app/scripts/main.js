/* jshint devel:true */
$(document).ready(function() {
  $('#fullpage').fullpage({
    controlArrows: false,
    loopHorizontal: false,
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      var loadedSlide = $(this);
      loadedSlide.removeClass('hide-img');
    },
    onSlideLeave: function( anchorLink, index, slideIndex, direction){
      var leavingSlide = $(this);
      setTimeout(function(){
        leavingSlide.addClass('hide-img');
      }, 1000);
    }
  });
});
