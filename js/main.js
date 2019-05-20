$ (function() {


  var easeInOutQuad = new SmoothScroll('a[href*="#"]', {
	   speed: 1000,
	   speedAsDuration: true
  });

  $('#sticky').stickySidebar({
    topSpacing: 60,
    // bottomSpacing: 60
  });

  var typed = new Typed('#typed', {
   stringsElement: '#typed-strings',
   typeSpeed: 100,
   startDelay: 1000,
   smartBackspace: false,
   backDelay: 300,
   backSpeed: 80,
   loop: true,
   loopCount: Infinity,
   showCursor: true,
   cursorChar: '|',
   autoInsertCss: true
  });

  $(function(){
  let links = $('.nav-button a');

  // Add click event to each link
  // using special jquery object $(this)
  // to reference each element that was matched


  links.on('click', function(){

    // Remove the active class from all links
    links.removeClass('active');

    // Add the active class to the link that was clicked
    // which is refererenced by $(this)
    $(this).addClass('active');
  });

});


});
