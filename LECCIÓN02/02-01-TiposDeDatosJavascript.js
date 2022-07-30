/*
Ejemplos de
tipos de datos
en Javascript
*/

// Variables dinamicas. No especificamos el tipo de la variable.

//Tipo de dato String
var nombre = "Carlos";
console.log(nombre, typeof nombre);

//Tipo de dato númerico
var numero = 1000;
console.log(numero, typeof numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : 55443322
}
console.log(objeto, typeof nombre);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera, typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion, typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo,typeof simbolo)

//Tipo clase es una function
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona,typeof Persona)

//Tipo de dato undefined
var x;
console.log(x,typeof x);

x = undefined;
console.log(x,typeof x);

//null  = ausencia de valor
var y = null;
console.log(y,typeof y);
// ¿Porque es tipo object?

//Arrays
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos, typeof autos);

var z = '';
console.log(z,typeof z);

