// Declaración de una función de tipo Expresión(Anónima)
let sumar = function (a=4, b=5) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};
let resultado = sumar();
console.log("Suma : " + resultado);
