var variable1 = 4.5;
var variable11 = 5;
var variable2="Hola Mundo";
variable1=variable1+2;
var variable3;
console.log(variable1);
console.log(variable2);
console.log(variable3);

variable3=8;
console.log(variable3);

variable3='"Soy texto ahora"';
console.log("Valor variable 3: "+variable3);

var arreglo=["Diego","Juan","Maria","Pedro",5,10];
console.log(arreglo);

var variableBool = true;
console.log(variableBool);

if (10>15) {
	console.log("es mayor");
} 
else if(variable1<=10){
	console.log("menor o igual");
}
else {
	console.log("No es mayor");
}

var dias =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ]

for (var i = 0; i < dias.length; i++) {
	console.log("hoy es: "+dias[i]);
}

for (i in dias){
		console.log("hoy es: "+dias[i]);
}

function  sumar1(n1, n2){
	var res=n1+n2;
	return res;
}

console.log(sumar1(variable1,variable11));

var iva =19;

function valorIva(precio){
	var res = precio*iva/100;
	return res;
}

console.log(valorIva(52000));



var mascota={"nombre":"Lucas","Edad":5};
var persona={"nombre":"Juan","Edad":26,"Sexo":"M","mascota":mascota};

console.log(persona);

var parrafos=document.getElementsByTagName("p");

console.log(parrafos);
console.log(parrafos[0]);

var parrafo2 =document.getElementById("p2");

console.log(parrafo2.innerText);


var numero1 =document.getElementById("numero1").value;
var numero2 =document.getElementById("numero2").value;

function actualizar(){
	numero1=document.getElementById("numero1").value;
	console.log(numero1);
}

function sumar(){
	numero1=parseFloat(document.getElementById("numero1").value);
	numero2=parseFloat(document.getElementById("numero2").value);
	var res = numero1+numero2;
	document.getElementById("p2").innerText=res;
}

var precio;

function valorIva2(){
	precio=parseFloat(document.getElementById("precio").value);
	var res = precio*19/100;
	document.getElementById("p2").innerText=res;
}


