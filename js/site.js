$(document).ready(function() {
	
    $('.package-list a').click(function(event) {
        $(this).toggleClass('active');
       if($('.package-list').find('a').hasClass('active')){
    	$(this).closest('.product-description').find('.btn-buy').removeClass('isDisabled');
    	} else{
    		$(this).closest('.product-description').find('.btn-buy').addClass('isDisabled');
    	}
    	event.preventDefault();
    });
    $('.package-list a').click(function(event) {
		if($('.btn-buy').hasClass('isDisabled')){
				event.preventDefault();
			}
    });


});