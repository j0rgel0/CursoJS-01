// Clase Padre: Dispositivo de Entrada
class DispositivoEntrada { 
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    // Getter and Setters
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    // Getter and Setters
    get idRaton() {
        return this._idRaton;
    }
    
    toString() {
        return `Raton: [idRaton: ${this._idRaton}], tipoEntrada: [${this._tipoEntrada}], marca: [${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados  = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    // Getter and Setters
    get idTeclado() {
        return this._idTeclado;
    }
    
    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}], tipoEntrada: [${this._tipoEntrada}], marca: [${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}], marca: [${this._marca}], tamaño: [${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n${this._monitor} \n${this._raton} \n${this._teclado}
        `;
    }
}

// Estado de agregación no de herencia
class Orden {
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
       return this._idOrden; 
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    //Podría ser toString, pero lo llamaremos diferente para que mandemos a llamar
    // de manera explicita
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
            //computadorasOrden += computadora; //Puede ocuparse de está manera, pero no considerar los saltos de línea
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());
// Raton: [idRaton: 1], tipoEntrada: [USB], marca: [HP]
let raton2 = new Raton('Bluetooth','Dell');
console.log(raton2.toString());
// Raton: [idRaton: 2], tipoEntrada: [Bluetooth], marca: [Dell] 
raton2.marca = 'HP';
console.log(raton2.toString());
// Raton: [idRaton: 2], tipoEntrada: [Bluetooth], marca: [HP] 

let teclado1 = new Teclado('Bluetooth','MSI');
console.log(teclado1.toString());
// Raton: [idRaton: 1], tipoEntrada: [USB], marca: [HP]
let teclado2 = new Teclado('USB','Acer');
console.log(teclado2.toString());
// Teclado: [idTeclado: 2], tipoEntrada: [USB], marca: [Acer] 
teclado2.marca = 'HP';
console.log(teclado2.toString());
// Teclado: [idTeclado: 2], tipoEntrada: [USB], marca: [HP] 

let monitor1 = new Monitor('HP','15');
console.log(monitor1.toString());
// Monitor: [idMonitor: 1], marca: [HP], tamaño: [15] 
let monitor2 = new Monitor('Dell','27');
console.log(monitor2.toString());
// Monitor: [idMonitor: 2], marca: [Dell], tamaño: [27] 
monitor2.marca = 'MSI';
console.log(monitor2.toString());
// Monitor: [idMonitor: 2], marca: [MSI], tamaño: [27] 

let computadora1 =  new Computadora('HP', monitor1, raton1, teclado1);
console.log(computadora1.toString());
//console.log(`${computadora1}`); //otra forma de llamar computadora1 con templatetostring
/*
Computadora 1: HP  
Monitor: [idMonitor: 1], marca: [HP], tamaño: [15]  
Raton: [idRaton: 1], tipoEntrada: [USB], marca: [HP]  
Teclado: [idTeclado: 1], tipoEntrada: [Bluetooth], marca: [MSI] 
*/
let computadora2 =  new Computadora('Armada', monitor2, raton2, teclado2);
console.log(computadora2.toString());
//console.log(`${computadora1}`); //otra forma de llamar computadora1 con templatetostring
/*
Computadora 2: Armada  
Monitor: [idMonitor: 2], marca: [Dell], tamaño: [27]  
Raton: [idRaton: 2], tipoEntrada: [Bluetooth], marca: [HP]  
Teclado: [idTeclado: 2], tipoEntrada: [USB], marca: [HP] 
*/

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
/*
Orden: 1, Computadoras:  
Computadora 1: HP  
Monitor: [idMonitor: 1], marca: [HP], tamaño: [15]  
Raton: [idRaton: 1], tipoEntrada: [USB], marca: [HP]  
Teclado: [idTeclado: 1], tipoEntrada: [Bluetooth], marca: [MSI] 
         
Computadora 2: Armada  
Monitor: [idMonitor: 2], marca: [Dell], tamaño: [27]  
Raton: [idRaton: 2], tipoEntrada: [Bluetooth], marca: [HP]  
Teclado: [idTeclado: 2], tipoEntrada: [USB], marca: [HP] 
         
Computadora 2: Armada  
Monitor: [idMonitor: 2], marca: [Dell], tamaño: [27]  
Raton: [idRaton: 2], tipoEntrada: [Bluetooth], marca: [HP]  
Teclado: [idTeclado: 2], tipoEntrada: [USB], marca: [HP] 
*/

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
/*
Orden: 2, Computadoras:  
Computadora 2: Armada  
Monitor: [idMonitor: 2], marca: [Dell], tamaño: [27]  
Raton: [idRaton: 2], tipoEntrada: [Bluetooth], marca: [HP]  
Teclado: [idTeclado: 2], tipoEntrada: [USB], marca: [HP] 
         
Computadora 1: HP  
Monitor: [idMonitor: 1], marca: [HP], tamaño: [15]  
Raton: [idRaton: 1], tipoEntrada: [USB], marca: [HP]  
Teclado: [idTeclado: 1], tipoEntrada: [Bluetooth], marca: [MSI] 
*/