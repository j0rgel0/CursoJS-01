//Función declarativa
function miFuncion(){
    console.log('Saludos desde mi función');
}
miFuncion();
//Saludos desde mi función 

//Función flecha
const miFuncionFlecha = () =>{
    console.log('Saludos desde mi función flecha');
} //En este tipo de función no aplica hoisting.
miFuncionFlecha();
//Saludos desde mi función flecha

//Función flecha 2 sin llaves
const miFuncionFlecha2 = () => console.log('Saludos desde mi función flecha2'); //En este tipo de función no aplica hoisting.
miFuncionFlecha2();
//Saludos desde mi función flecha2

//Función flecha 3 en console.log
const miFuncionFlecha3 = () => {
    return 'Saludos desde la función flecha3';
}; //En este tipo de función no aplica hoisting.
console.log(miFuncionFlecha3());
//Saludos desde mi función flecha3

//Función flecha regresando un Objeto
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());
//{ nombre: 'Juan', apellido: 'Lara' }

//Función flecha con parametros
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Hola, soy una función flecha con parámetros');
//Hola, soy una función flecha con parámetros 

//Función flecha con varios parámetros
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(1,2)); // Resultado: 3