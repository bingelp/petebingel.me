
$(document).ready(function(){


/* Scroll hire me button to contact page */
	$('.contact-me').click(function(){
     $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
    return false;
	});


/* Sticky menu */
$(".navbar").sticky({topSpacing: 0});


/* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
     });

/* Charts*/
    
$('.chart').waypoint(function() {
    $(this).easyPieChart({barColor: '#3498db',size: '150',easing: 'easeOutBounce',onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}});
}, {
  triggerOnce: true,
  offset: 'bottom-in-view'
});


/* VEGAS Home Slider */
	
    $(function() {
  $.vegas({ src:'img/slider/800px-Arthur_Ravenel_Jr._Bridge%27s_cables.jpg'})
  ('overlay', { src:'img/overlays/07.png'});
});


/*Contact form */
      $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');
        }
    });



});