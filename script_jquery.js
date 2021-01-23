// $(seletor).ação();
$(function(){//verificar  se a página foi lida
	$('#l2').click(function(){
		$('#img1').hide();
		$('#img3').hide();
		$('#img2').show();
	});
	$('#l3').click(function(){
		$('#img1').hide();
		$('#img2').hide();
		$('#img3').show();

	});

	$('#l1').click(function(){
		$('#img2').hide();
		$('#img3').hide();
		$('#img1').show();
	});
});