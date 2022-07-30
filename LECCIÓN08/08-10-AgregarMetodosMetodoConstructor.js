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