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