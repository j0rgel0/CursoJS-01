// Clases en Javascript
// Un objeto es una instancia de una clase.

class Persona { // clase padre
    
    //Atributos Estáticos, solo pertenece a la clase y no a un objeto.
    static contadorObjetosPersona = 0; // atributos de nuestra clase
    email = 'Valor default del email'; // atributo de nuestros objetos

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa el contador: '+ Persona.contadorObjetosPersona)
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
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase Padre (Object())
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        //El método que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto();
    }

    //Se va asociar con la clase y no con los objetos de la clase
    static saludar(){
        console.log('Saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
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
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let empleado1 = new Empleado('Carlos', 'Lara', 'Sistemas');
console.log(empleado1);
// Heredando método get nombre de la clase padre
console.log(empleado1.nombre); // Carlos
// Heredando método de la clase padre
console.log(empleado1.nombreCompleto()); // Carlos , Sistemas
console.log(empleado1.toString()); // Carlos , Sistemas

//persona1.saludar(); //No puede ejecutar los métodos estáticos
// No es posible llam,ar un método statis desde un objeto

//Solo se llama desde la clase.
Persona.saludar();

// Pero si se puede pasar como argumentos un objeto.
Persona.saludar2(persona1);

// Se hereda el método estático.
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);
console.log(persona1.email); //Valor default del email
console.log(empleado1.email); //Valor default del email
console.log(Persona.email); // Undefined -  Se está creando un atributo estatico, pero no es el que se creo anteriormente
console.log(Empleado.email); // Undefined -  Se está creando un atributo estatico, pero no es el que se creo anteriormente