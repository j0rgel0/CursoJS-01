// Clases en Javascript
// Un objeto es una instancia de una clase.

class Persona { //clase padre
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }

    set apellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

}

// Clase hija, se heredo los metodos de la clase padre.
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez'); 
console.log(persona1);

let empleado1 = new Empleado('Carlos', 'Lara', 'Sistemas'); 
console.log(empleado1);
//Heredando método get nombre de la clase padre
console.log(empleado1.nombre); // Carlos
//Heredando método de la clase padre
console.log(empleado1.nombreCompleto()); //Carlos Lara
