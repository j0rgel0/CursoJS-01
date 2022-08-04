// let miPromesa = new Promise(resolver,rechazar);
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion) {
        resolver('Resolvió correcto');
    } else {
        rechazar('Se produjo un error');
    }
});

// Puede ser una línea
// miPromesa.then(valor => console.log(valor), error => console.log(error));

/* 
En varias Líneas
miPromesa.then(
    valor => console.log(valor), 
    error => console.log(error)
);
*/

// Separando el error:
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));
