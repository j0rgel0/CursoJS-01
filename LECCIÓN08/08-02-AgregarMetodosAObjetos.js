// Añadiendo métodos a los objetos.

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

