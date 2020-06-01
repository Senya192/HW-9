$(document).ready(function() {

    //$('#change').live('click', function(){
	$('body').on('click', '#change', function() {
      var imgName = $(this).attr('data');
      var className = $(this).attr('class'); 
      $('.'+className).css('border', '1px solid transparent');
      className = '#'+  className;
      $(this).css('border', '1px solid #444444');
      $('#loading').css('opacity', '0.7');
      $('#mainimg').animate({
          opacity: 0.4
        }, 600, function() {
              $('<img src="' + imgName + '" />').bind('load', function () {
              $(className).css('backgroundImage', 'url('+this.src+')');
              $("#mainimg").animate({opacity: 1}, 600, function() { $('#loading').css('opacity', '0');} );
           
              });
      });
    });
    
    
    
    
}); 


