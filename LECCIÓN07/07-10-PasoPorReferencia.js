// Paso por referencia

//Valor primitivo porque no tiene ni propiedades ni métodos.
let x = 10;

function cambiarValor(a){
   a = 20;
   console.log(a);
}

let resultado = cambiarValor(x);
console.log(x);

// Referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
console.log(persona); 
//{ nombre: 'Juan', apellido: 'Perez' }

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
// { nombre: 'Carlos', apellido: 'Lara' }