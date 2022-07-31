// Ejemplo de static
class Persona {
    // clase padre

    // Atributos Estáticos, solo pertenece a la clase y no a un objeto.
    static contadorPersonas = 0; // atributos de nuestra clase

    //Constantes estáticas en Javascript
    // Se define un método estático get
    static get MAX_OBJ(){
        return 5; //Solo podemos crear 5 objetos del tipo Persona
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas; //Preincremento
        } else {
            console.log('Se han superado el máximo de objeto permitidos.');
        }
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
    nombreCompleto() {
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el metodo de la clase Padre (Object())
    toString() {
        // Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        // El método que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto();
    }

    // Se va asociar con la clase y no con los objetos de la clase
    static saludar() {
        console.log('Saludos desde método static');
    }
    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }

}

// Clase hija, se heredo los metodos de la clase padre.
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersonas); //2

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString());

let persona3 = new Persona('Jorge', 'Ramirez');
console.log(persona3.toString());

let persona4 = new Persona('Armando', 'Ramirez');
console.log(persona4.toString());

let persona5 = new Persona('Armando', 'Ramirez');
console.log(persona5.toString());

console.log( Persona.contadorPersonas ); // 3
console.log( Persona.MAX_OBJ ); // 5
Persona.MAX_OBJ = 10;
//No se creo un método set por lo que el resultado sigue siendo 5
console.log( Persona.MAX_OBJ ); // 5