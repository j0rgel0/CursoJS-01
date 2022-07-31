'use strict'

try{
    let x = 10;
    throw 'Mi error';
}
catch(error){
    console.log(error);
} finally {
    console.log('Termina la revisión de errores. Parte 1');
    //En este ejemplo no mandó error 
}

let resultado = 'as';
try{
    if(isNaN(resultado)) throw 'No es un número';
}
catch(error){
    console.log(error); //No es un número
    //console.log(error.name); //undefined
    //console.log(error.message); //undefined
} finally {
    console.log('Termina la revisión de errores. Parte 2');
    //En este ejemplo no mandó error 
}

let resultado2 = '';
try{
    if(isNaN(resultado2)) {throw 'No es un número';}
    else if(resultado2 === '') {throw 'Es una cadena vacía';}
}
catch(error){
    console.log(error); //Es una cadena vacía
    //console.log(error.name); //undefined
    //console.log(error.message); //undefined
} finally {
    console.log('Termina la revisión de errores. Parte 3');
    //En este ejemplo no mandó error 
}

try{
    x = 10;
}
catch(error){
    console.log(error.name); //ReferenceError
    console.log(error.message); //x is not defined
} finally {
    console.log('Termina la revisión de errores. Parte 1');
    //En este ejemplo no mandó error 
}
