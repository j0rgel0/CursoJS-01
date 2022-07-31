// Ejercicio de Herencia

// Clase Padre: Persona
class Persona { // Atributos Estáticos, solo pertenece a la clase y no a un objeto.
    static contadorPersonas = 0; // Atributo de nuestra clase Persona.

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas; // Preincremento
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Getter and Setters
    get _idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this.edad;
    }

    set edad(edad) {
        this.edad = edad;
    }
    toString() {
        return `
        ${this._idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}
        `;
    }

}