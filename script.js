//tipos de variáveis
var numero = 6;
var decimal = 4.5;
var texto = "Olá Mundo";

var lista = ["a", "b", "c"];

alert(lista); //lista inteira 

alert(lista[0]); //posição zero 

//com for passando por todoas posições imprimindo posição
for (i in lista){
	alert (i);
}

//com for passando por todoas posições imprimindo elemento da posição
for (i in lista){
	alert (lista[i]);
}