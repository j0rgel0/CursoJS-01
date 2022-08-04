// Promises , Async/Await y setTimeout

// Asyn - Indica que la función debe regresar una promesa
async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio de la función');
    //Definimos el objeto de tipo Promise
    let miPromesa = new Promise( resolver => {
        //setTimeout que va resolver un valor después de cierto tiempo
        setTimeout(()=> resolver('Promesa con await y timeout'),3000);
    });
    //Await para esperar por una promesa
    // No podemos ocupar await si no está dentro de una función con async
    console.log( await miPromesa );
    console.log('Fin de la función'); // No se va imprimir hasta que hayamos terminado de procesar la promesa.
};

funcionConPromesaAwaitTimeout();