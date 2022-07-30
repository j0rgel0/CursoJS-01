// Función constructor para crear objetos.
function Persona(nombre, apellido, email) {
    //this.nombrePropiedad = nombreParametero;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Crea un nuevo objeto de tipo Persona
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);
//Persona { nombre: 'Juan', apellido: 'Perez', email: 'jperez@mail.com' }

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre);
//Persona { nombre: 'Laura',  apellido: 'Quintero',  email: 'lquintero@mail.com' }

padre.nombre = 'Carlos';
console.log(padre);
//Persona { nombre: 'Carlos', apellido: 'Perez', email: 'jperez@mail.com' }

console.log(madre);
//Persona { nombre: 'Laura',  apellido: 'Quintero',  email: 'lquintero@mail.com' }