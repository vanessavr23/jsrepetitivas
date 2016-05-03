var i = 0;
var suma = 0;
do{
	console.log("digite un numero");
	n = Number(prompt());
	suma = suma + n;
	i++;
}
while(i<10);

console.log("la suma es ", suma);