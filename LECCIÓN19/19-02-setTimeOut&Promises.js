let promesa = new Promise((resolver) => {
    console.log('Iniciando promesa, cuenta 3 segundos.');
    setTimeout( () => resolver('Saludos con promesa y Timeout'),3000);
    console.log('Fin de la promesa.');
});

promesa.then(valor => console.log(valor));