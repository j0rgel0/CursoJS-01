'use strict'

try{
    x = 10; //No se declaro la variable
}
catch(error){
    console.log(error);
    //[ReferenceError: x is not defined]
}

console.log('Continuamos...Parte 1');

try{
    miFuncion(); //No se declaro la función
}
catch(error){
    console.log(error);
    //[ReferenceError: miFuncion is not defined]
}

console.log('Continuamos... Parte 2');

try{
    miFuncion(); //No se declaro la función
}
catch(error){
    console.log(error);
    //[ReferenceError: miFuncion is not defined]
} finally {
    console.log ('Termina la revisión de errores');
    //Termina la revisión de errores 
}

console.log('Continuamos... Parte 3');
try{
    let x = 10;
}
catch(error){
    console.log(error);
} finally {
    console.log('En este ejemplo no mandó error ');
    //En este ejemplo no mandó error 
}