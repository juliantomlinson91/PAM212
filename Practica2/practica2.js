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
console.log("Me llamo  " +  nombre + ", tengo " +  edad + " años y vivo en " + ciudad + ".");


// Ejercicio B 