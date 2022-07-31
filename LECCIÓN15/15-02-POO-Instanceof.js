class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: Nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    //Sobreescribiendo , debe tener el mismo nombre, y se añade otro comportamiento
    //Añadiendo atributo departamento.
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}
function determinarTipo(tipo){
    // Polimorfismo
    // En una misma línea, ejecuta el método de la clase padre o de la clase hija.
    console.log( tipo.obtenerDetalles() );

    //Instanceof
    //Se pone en primer lugar la clase de menor jerarquía
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    } else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
}

let empleado1 = new Empleado('Juan',3000);
// console.log(empleado1.obtenerDetalles());
// Empleado: Nombre: Juan, sueldo: 3000 

let gerente1 = new Gerente('Carlos',50000,'sistemas');
// console.log( gerente1.obtenerDetalles() );
// Gerente: Empleado: Nombre: Carlos, sueldo: 50000 depto: sistemas 

//Polimorfismo
determinarTipo(empleado1);
//Empleado: Nombre: Juan, sueldo: 3000

determinarTipo(gerente1);
//Gerente: Empleado: Nombre: Carlos, sueldo: 50000 depto: sistemas 