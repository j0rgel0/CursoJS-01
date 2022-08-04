// Async indica que una función regresa una promesa.
async function miFunctionConPromesa(){
    return 'Saludos con promesa y async';
};

//Es una función normal, pero manda el valor de revolver.
//Una función la podemos convertir en promesa, solo
//añadiendo async. 
miFunctionConPromesa().then(valor => console.log(valor));