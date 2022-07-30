// Declaración de una función de tipo Expresión(Anónima)
//                  parámetros
let sumar = function (a,b){return a + b};
let resultado = sumar(1,2);
console.log("Suma : " + resultado);

// Función flecha
//Sin llaves, sin la palabra function, sin la palabra return
//                          parámetros
const sumarFuncionTipoFlecha = (a,b) => a + b;

//                            argumentos
resultado = sumarFuncionTipoFlecha(1,2);
console.log("Suma : " + resultado);

