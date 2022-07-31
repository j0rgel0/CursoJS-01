// Ejercicio de Herencia

// Clase Padre: Productos
class Productos { // Atributos Estáticos, solo pertenece a la clase y no a un objeto.
    static contadorProductos = 0; // Atributo de nuestra clase Persona.

    constructor(nombre, precio) {
        this._idProducto = ++Productos.contadorProductos; // Preincremento
        this._nombre = nombre;
        this._precio = precio;
    }

    // Getter and Setters
    get idProducto() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `
        | id: ${this._idProducto} 
        | nombre: ${this._nombre} 
        | precio: $${this._precio} 
        `;
    }

}

//Estado de agregación
class Orden{
    static contadorOrdenes = 0;
    
    //Constantes estáticas en Javascript
    // Se define un método estático get
    static get MAX_PRODUCTOS(){
        return 5; //Solo podemos añadir 5 productos
    }

    constructor() {
        this._idOrden = ++ Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    // Getter and Setters
    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        } else {
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        //Iterar arreglos.
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        } 
       
        console.log(`
        Orden: ${this._idOrden}
        Total: $${this.calcularTotal()}
        Productos: ${productosOrden}`);
    }
}

//Prueba de la clase Productos
let producto1 = new Productos('Pantalon', 200);
console.log( producto1.toString());
/*
        id: 1  
        nombre: Pantalon  
        precio: $200 
*/

let producto2 = new Productos('Camisa', 500);
console.log( producto2.toString());
/*
        id: 2  
        nombre: Camisa  
        precio: $500  
*/

//Prueba de la clase Orden
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();
/*
        Orden: 1 
        Total: 700 
        Productos:  
        id: 1  
        nombre: Pantalon  
        precio: $200  
          
        id: 2  
        nombre: Camisa  
        precio: $500  
*/

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
let producto3 = new Productos('Cinturon', 50);
console.log(producto3.toString());
/*
        id: 2  
        nombre: Camisa  
        precio: $500  
*/
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);

orden2.mostrarOrden();
/*
                Orden: 2 
        Total: $1000 
        Productos:  
        | id: 1  
        | nombre: Pantalon  
        | precio: $200  
          
        | id: 2  
        | nombre: Camisa  
        | precio: $500  
          
        | id: 3  
        | nombre: Cinturon  
        | precio: $50  
          
        | id: 3  
        | nombre: Cinturon  
        | precio: $50  
          
        | id: 1  
        | nombre: Pantalon  
*/