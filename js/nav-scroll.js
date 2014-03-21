$(".scroll").click(function(event){		
		event.preventDefault();
		$('li.active').removeClass('active');
		$(this).parent().addClass('active');
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, function(){
// 			$('#kait-randall').hide();	
		});
	});