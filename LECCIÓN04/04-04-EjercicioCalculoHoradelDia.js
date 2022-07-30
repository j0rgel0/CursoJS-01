// Ejercicio Cálculo de la hora del día
/*
6am - 11am - Buenos días
12pm - 18pm - Buenas tardes
19pm - 24pm - Buenas noches
0am - 6am - Durmiendo
*/

let hora = 5.9;
let mensaje;

if(hora >= 6 && hora <= 11){
    mensaje = "Buenos días";
} else if(hora >= 12 && hora <= 18){
    mensaje = "Buenas tardes";
} else if(hora >= 19 && hora <= 24){
    mensaje = "Buenas noches";
} else if(hora >= 0 && hora < 6){
    mensaje = "Durmiendo";
} else {
    mensaje = "Error";
}
console.log(mensaje);