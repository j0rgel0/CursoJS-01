// Funciones como objetos.

function miFuncion(a, b) { 
    
    // Esto solo se puede realizar dentro de nuestra función:
    // Para saber cuantos argumentos hay en nuestra función.
    
    console.log(arguments); //{ [Iterator]  0: 2, 1: 3 }
    console.log(arguments.length); // 2
    return a + b;
}

//Llamando a la función.
let resultado = miFuncion(2, 3);
console.log(resultado);


console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);