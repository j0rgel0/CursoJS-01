let edad;
let resultado;
let adulto = 18; 

function esMayor(edad) {
    if (edad >= adulto) {
        resultado = "es un adulto";
    } else {
        resultado = "es menor de edad";
    }
    return console.log("Tiene " + edad + " años, " + resultado);
}

esMayor(10);
esMayor(18);
esMayor(19);