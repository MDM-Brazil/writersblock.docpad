$( document ).ready(function() {
	$('#homeContactModal').modal('hide');
	
	$('.phone-cube-tab').on('click', function(){
		$('#homeContactModal').modal('show');
	});
	
});