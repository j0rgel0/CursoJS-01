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

//Llamas asíncronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 segundos');
}
//Se ejecuta en paralelo. Y es asíncrono.
setTimeout(miFuncionCallback,3000); //Después de 3 segundos.
setTimeout(function(){console.log('Saludo asíncrono 2')},4000); //1 segundo después segundos.
setTimeout(() => {console.log('Saludo asíncrono 3')},5000); //1 segundo después segundos.
setTimeout(() => {console.log('Saludo asíncrono 4, pero se ejecuta en 1 segundo.')},1000); //Aparece primero.