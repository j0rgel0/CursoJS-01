// Estructura del Switch

let numero = 3;
let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1: numeroTexto = 'Número uno';
        break;
    case 2: numeroTexto = 'Número dos';
        break;
        case 2: numeroTexto = 'Número dos';
        break;
        case 3: numeroTexto = 'Número tres';
        break;
        case 4: numeroTexto = 'Número cuatro';
        break;
        default: numeroTexto = 'Caso no encontrado';
        //break; //Es opcional porque es la última línea
}
console.log(numeroTexto);