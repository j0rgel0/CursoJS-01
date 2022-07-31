// Clases en Javascript
// Un objeto es una instancia de una clase.

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

let persona1 = new Persona('Juan', 'Perez', 'jperez@mail.com'); // se manda a llamar el método get
persona1.nombre = 'Juan Carlos' //se manda a llamar el método set
console.log(persona1.nombre); //Juan Carlos

