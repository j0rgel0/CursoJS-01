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

console.log(persona.nombre); //Juan
console.log(persona['apellido']); //Perez

//For in (dentro de cierto objeto)
for(nombrePropiedad in persona){
    //Nombre de las propiedades del objeto persona
    console.log(nombrePropiedad);
    //Valores de las propiedades del objeto persona
    console.log(persona[nombrePropiedad]);
}