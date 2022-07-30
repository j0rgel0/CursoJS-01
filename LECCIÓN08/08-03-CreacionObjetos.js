// Creación de objetos

//Primer forma de definir un objeto. Simplificada.
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    // Añadiendo métodos a los objetos
    nombreCompleto: function (){
        return this.nombre + ' ' +this.apellido;
    },
    otraFuncion: function(){}
}

console.log(persona);
console.log(persona.nombreCompleto()); //Juan Perez
console.log(persona.nombre); //Juan
console.log(persona.apellido); //Perez
console.log(persona.email); //jperez@mail.com
console.log(persona.edad); //28

//Otra manera de crear objetos.
let persona2 = new Object();
console.log(persona2);
persona2.nombre = 'jorge';
persona2.direccion = 'Privada siempre viva';
persona2.telefono = '2314510625';
console.log(persona2);
console.log(persona2.telefono); //2314510625 ​​​​​
