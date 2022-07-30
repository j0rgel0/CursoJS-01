let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo, tel){
        return titulo + '. ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
    
}

// Uso de apply para usar el método persona1.nombreCompleto con
// los datos de persona2
console.log(persona1.nombreCompleto('Lic','2445578899'));
let arreglo = ['Ing','33445566'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

