$( document ).ready(function() {
	$('#homeContactModal').modal('hide');
	
	$('.phone-cube-tab').on('click', function(){
		$('#homeContactModal').modal('show');
	});
	
	$('.pure-button').on('click', function(){
		$('.phone-cube-tab').trigger('click');
	});
	
});