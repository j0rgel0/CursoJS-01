// Método Get en Objetos

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    // Añadiendo métodos a los objetos
    get nombreCompleto(){
        return this.nombre + ' ' +this.apellido;
    }
}

// Mejores prácticas para acceder y modificar 
// los valores de las propiedades de los objetos

console.log(persona.nombreCompleto); //Juan Perez

