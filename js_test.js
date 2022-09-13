//Crear Variables y pedirle al usuario las cantidades
var n = Number(prompt("Escribe el Numero total de unidades"));
var q = Number(prompt("Escribe cuantas unidades pueden fallar sin que el sistema falle"));
var l = Number(prompt("Escribe la cantidad de fallos por hora"));
var u = Number(prompt("Escribe el tiempo o indice de reparacion en horas ejemplo reparar 1 unidad en 3 horas seria 1/3 = escribe 0.333 "));

//////////////////////////////////////////////////////

//Funcion para realizar operacion Factorial Recursiva
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

//////////////////////////////////////////////////////

//Sustituir las variable en la ecuacion
var result = Number((factorial(n)*(l)**(q+1))/(factorial(n-q-1)*(u**q)));

//////////////////////////////////////////////////////

//Mostrar el resultado como alerta y en la consola
alert("El Resultado es " + result);
console.log("El Resultado es " + result);








































