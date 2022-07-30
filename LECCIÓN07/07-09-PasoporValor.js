// Paso por valor

//Valor primitivo porque no tiene ni propiedades ni métodos.
let x = 10;

function cambiarValor(a){
   a = 20;
   console.log(a);
}

let resultado = cambiarValor(x);
console.log(x);
