// $(seletor).ação();
$(document).ready(function(){//verificar  se a página foi lida
	$('#verde').click(function(){
		$('h1').css("color","green");
	});
	$('#azul').click(function(){
		$('h1').css("color","blue");
	});
});