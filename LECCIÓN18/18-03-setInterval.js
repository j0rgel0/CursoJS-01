let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//Manda a llamar de manera asíncrona
setInterval(reloj,1000);