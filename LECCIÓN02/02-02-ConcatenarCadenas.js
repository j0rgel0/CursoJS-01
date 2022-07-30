var nombre = 'Jorge';
var apellido = 'López';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

//Se lee de izquierda a derecha
var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

// Esto sucede porque lee de izquierda de derecha
// Encuentra números y primero se realiza la operación
// Se concatena hasta que encuentra un String,
x = 2 + 4 + nombre;
console.log(x);

// Concatenaría números si estuvieran en comillas.
x = '2' + 4 + nombre;
console.log(x);

