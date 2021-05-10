

$('document').ready(function() {

    $('.js--section-skill').waypoint(function(direction) {

        if (direction == "down") {

            $('nav').addClass('sticky');

        } else {

            $('nav').removeClass('sticky');

        }

    }, {offset: '60px;'

    });
    
    $('.js--scroll-to-content').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-skill').offset().top},1000);
        
    });
    
       $('.js--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top},1000);
        
    });
    
    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "#") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
   //animateddddddddddddddd     https://animate.style/
});
   $('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
    
        nav.slideToggle(200);

        
    });
    
});