// $(seletor).ação();
$(document).ready(function(){//verificar  se a página foi lida
	$('#verde').click(function(){
		$('h1').css("color","green");
		$('h1').fadeOut();// "um hide" com efeito
		$('h1').delay(3000);//pausa no javaScript 1000=1s
		$('h1').fadeIn('slow');//slow mais suave  'fast' para mais rápido
	});
	$('#azul').click(function(){
		$('h1').css("color","blue");
		$('#mensagem').text("Cor alterada com sucesso");
		$('#mensagem').css('border', '3px solid blue');
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut('fast');
	});
});