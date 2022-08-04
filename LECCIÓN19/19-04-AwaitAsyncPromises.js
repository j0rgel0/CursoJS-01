// Async/Await 
// Asyn - Indica que la función debe regresar una promesa
async function miFunctionConPromesayAwait(){
    let miPromesa = new Promise( resolver => {
        //Función de tipo callback
        resolver('Promesa con async y await');
    });
    //Await nos indica que va a procesar una promesa
    console.log( await miPromesa );
};

miFunctionConPromesayAwait();