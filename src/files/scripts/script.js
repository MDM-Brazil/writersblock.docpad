$( document ).ready(function() {
	$('#homeContactModal').modal('hide');
	
	$('.phone-cube-tab').on('click', function(){
		$('#homeContactModal').modal('show');
	});
	
	$('.home-contact-modal').css('margin','-20px -20px 0');
	//$('.modal-content')
	// $('#typeform').css('margin','-166px 0 0 0');
});