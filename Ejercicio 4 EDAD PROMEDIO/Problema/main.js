var i = 0;
var suma = 0;
var n = 0;
while(i<n){
	console.log("digite la cantidad de numero");
	n = parseInt(prompt());
	console.log("digite un numero");
	a = parseInt(prompt());
	suma = suma + a;
	i++;
}
var promedio = suma/n
console.log("el promedio es "+ promedio);