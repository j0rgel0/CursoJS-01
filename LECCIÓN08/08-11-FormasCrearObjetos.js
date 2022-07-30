// Función constructor para crear objetos.
function Persona(nombre, apellido, email) {
    //this.nombrePropiedad = nombreParametero;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}

//Crea un nuevo objeto de tipo Persona
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.nombreCompleto()); //Juan Perez

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre.nombreCompleto()); //Laura Quintero

// Forma más formal pero menos recomendable
let miObjeto = new Object();

//Forma más simplificada y recomendable
let miObjeto2 = {};

// Forma más formal pero menos recomendable
let miCadena = new String('Hola');

//Forma más simplificada y recomendable
let miCadena2 = 'Hola';

// Forma más formal pero menos recomendable
let miNumero = new Number(1);

//Forma más simplificada y recomendable
let miNumero2 = 1;

// Forma más formal pero menos recomendable
let miBoolean = new Boolean(false);
//Forma más simplificada y recomendable
let miBoleean2 = false;

// Forma más formal pero menos recomendable
let miArreglo = new Array;
//Forma más simplificada y recomendable
let miArreglo2 = [];

// Forma más formal pero menos recomendable
let miFuncion = new Function();

//Forma más simplificada y recomendable
let miFuncion2 = function(){};