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

Persona.prototype.tel = '44332211';

//Crea un nuevo objeto de tipo Persona
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);
console.log(padre.nombreCompleto()); //Juan Perez
console.log(padre.tel); //44332211
padre.tel = '32215500';
console.log(padre.tel); // 32215500
let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre);
console.log(madre.nombreCompleto()); //Laura Quintero
console.log(madre.tel); //44332211