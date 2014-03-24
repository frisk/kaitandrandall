$(window).load(function(){
    var colliders = [],
    heartVisible = true,
    c,
    heartText = $('#kait-randall');
	
    
    $(".scroll").click(function(event){		
		event.preventDefault();
		$('li.active').removeClass('active');
		$(this).parent().addClass('active');
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, function(){
			$('#kait-randall').fadeOut('fast');	
		});
	});
    
    $('.registry').on('click', function(e){
        e.preventDefault();
    });
    
    $('.heart-title-js').each(function(index, el){
            var $el = $(el);
                y1 = Math.round($el.offset().top),
                h1 = Math.round($el.outerHeight(true)),
                b1 = y1 + h1;
            
            colliders[index] = {
                top: y1,
                bottom: b1
            }; 
    });
    console.log(colliders);
    $(window).scroll(function(e){
        var main_heart = $('.main-heart-js'),
            y1,
            h1,
            b1;
        
        y1 = main_heart.offset().top;
        h1 = main_heart.outerHeight(true);
        b1 = y1 + h1;
        
        for(var i = 0; i < colliders.length; i++){
            if(b1 >= colliders[i].top && y1 <= colliders[i].bottom) {
                if(!heartVisible) {
                    break;
                } else {
                    heartText.fadeOut('fast');
                    heartVisible = false;
                    c = i;
                    break;
                }
            } else if(colliders[c] && (b1 >= colliders[c].top && y1 <= colliders[c].bottom)){
                if(heartVisible) {
                    heartText.fadeOut('fast');
                    heartVisible = false;
                }
                break;   
            } else if(!heartVisible){
                heartText.fadeIn('fast');
                heartVisible = true;
            }
        }
    });
});