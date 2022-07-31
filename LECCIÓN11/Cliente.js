
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