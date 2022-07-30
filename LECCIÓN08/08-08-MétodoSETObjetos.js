// Método Set en Objetos

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    // Añadiendo métodos a los objetos
    get nombreCompleto(){
        return this.nombre + ' ' +this.apellido;
    }
}
console.log(persona.lang); //ES
console.log(persona.idioma); //es

// Mejores prácticas para acceder y modificar 
// los valores de las propiedades de los objetos

console.log(persona.nombreCompleto); //Juan Perez

persona.lang =  'en';
console.log(persona.lang); //EN
console.log(persona.idioma); //EN