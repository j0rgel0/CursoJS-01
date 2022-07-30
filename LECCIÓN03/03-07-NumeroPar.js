// let a = 10;

// if(a % 2 == 0){
//     console.log("Es un número par");
// }else {
//     console.log("Es un número impar")
// }

let numero;
let resultado;

function esPar(numero) {
    if (numero % 2 == 0) {
        resultado = "Es un número par";
    } else {
        resultado = "Es un número impar";
    }
    return console.log(resultado);
}

esPar(10);
esPar(9);
