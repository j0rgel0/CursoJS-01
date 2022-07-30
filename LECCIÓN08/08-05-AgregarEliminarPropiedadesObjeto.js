// Agregar o eliminar propiedades.

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

// Añadiendo propiedades.
persona.tel = 2314567890;
persona.tel = 4444567890;
console.log(persona);

delete persona.tel;
console.log(persona);