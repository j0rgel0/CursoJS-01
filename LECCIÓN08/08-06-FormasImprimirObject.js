// Formas para imprimir los objetos

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    // Añadiendo métodos a los objetos
    nombreCompleto: function (){
        return this.nombre + ' ' +this.apellido;
    }
}

// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' , ' + persona.apellido + ' , ' + persona.email + ' , ' + persona.edad);

// For (nuevaVariable in nombreObjeto)
for(nombrePropiedad in persona){
    //Nombre de las propiedades del objeto persona
    console.log(nombrePropiedad);
    //Valores de las propiedades del objeto persona
    console.log(persona[nombrePropiedad]);
}

//Object.values
let personaArray = Object.values(persona);
console.log(personaArray);

//Convertir nuestro objeto a una cadena.
let personaString = JSON.stringify(persona);
console.log(personaString);