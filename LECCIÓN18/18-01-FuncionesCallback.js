function miFuncion1(){
    console.log('Función 1');
}
function miFuncion2(){
    console.log('Función 2');
}

//Se ejecutan de manera secuencial
miFuncion1();
miFuncion2();

//Función de tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3,imprimir);
//Resultado: 8 


//Función de tipo Callback - Modificada
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

sumar(5,3,imp);
//Resultado: 8 