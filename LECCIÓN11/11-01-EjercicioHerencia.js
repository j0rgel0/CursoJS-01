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
    get idPersona() {
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
        id: ${this._idPersona} 
        nombre: ${this._nombre} 
        apellido: ${this._apellido} 
        edad: ${this._edad}
        `;
    }

}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    // Getter and Setters
    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this.sueldo = sueldo;
    }

    // Sobreescritura
    toString() {
        return `
        ${super.toString()}idEmpleado: ${this._idEmpleado}
        sueldo: ${this._sueldo}
        `;
    }

}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++ Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    // Getter and Setters
    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    // Sobreescritura
    toString() {
        return `
       ${super.toString()}idCliente: ${this._idCliente}
        fecha de registro: ${this._fechaRegistro}
        `;
    }

}

//Prueba de la clase Persona
let persona1 = new Persona('Juan', 'Perez', '23');
console.log( persona1.toString());
/*
        id: 1 
        nombre: Juan 
        apellido: Perez 
        edad: 23
*/

//Prueba de la clase Empleado
let empleado1 = new Empleado('Roberto', 'Carlos', '22', '25000');
console.log( empleado1.toString());
/*
        id: 2  
        nombre: Roberto  
        apellido: Carlos  
        edad: 22 
        idEmpleado: 1 
        sueldo: 25000 
*/

//Prueba de la clase Empleado
let cliente1 = new Cliente('Elizabeth', 'López', '30', new Date());
console.log( cliente1.toString());
/*
        id: 3  
        nombre: Elizabeth  
        apellido: López  
        edad: 30 
        idCliente: 1 
        fecha de registro: Sun Jul 31 2022 09:10:16 GMT-0500 (hora de verano central) 
*/