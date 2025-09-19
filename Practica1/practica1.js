// Ejercicio 1 Uso de let y const vamos a modificar el código

let nombre = "Armando"; // usamos let porque se reasigna
const edad = 25; // usamos const porque no cambia

nombre = "Ana Maria"; // reasignación permitida porque es let

var saludo = "Hola,  " +  nombre + ". Tienes " +  edad + " años."; 
console.log(saludo); // muestra el contenido de saludo


// Ejercicio 2 Convertir una función tradicional a una arrow function
 
const cuadrado = numero => numero * numero;

console.log(cuadrado(7)); 
console.log(cuadrado(2)); 
console.log(cuadrado(5)); 