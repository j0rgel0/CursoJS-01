// Esto no es posible
// No se aplica el concepto de Hoisting.
let persona1 = new Persona('Juan', 'Perez', 'jperez@mail.com'); 
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre); 
// No es posible crear objeto antes de declarar clases.

class Persona {
    constructor(nombre, apellido, email) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }

}



