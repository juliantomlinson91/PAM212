// Ejercicio A usando Destructuración 
const persona = {
    nombre: "Julian",
    edad: 19,
    direccion: {
    municipio : "El Marques",
    ciudad: "Qro",
    pais: "Mexico",
    }
};
// Aplicamos la Destructuración
const { nombre, edad, direccion:{municipio, ciudad, pais } } = persona;
//console.log("Me llamo  " +  nombre + ", tengo " +  edad + " años y vivo en " + ciudad + ".");


// Ejercicio B uso de .map()
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];
let filtrados = productos.filter(producto => producto.precio > 1000);
 // console.log("Los productos con un precio mayor  a 1000 son: ");
 // console.log(filtrados);

 let nuevoArray = filtrados.map(filtrado => filtrado.nombre);
 // console.log(nuevoArray);


 

// Ejercicio C uso de .find(), .forEach() y reduce().
const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

// Usando .find()
let personaLuis = personas.find(persona => persona.nombre == "Luis");

console.log(personaLuis);

// Usando .forEach()
personas.forEach(function(persona){
    console.log(persona.nombre, persona.edad);
});

// Usando .reduce()
let suma = personas.reduce((sumaTotal, persona) => sumaTotal + persona.edad, 0);
console.log(suma);