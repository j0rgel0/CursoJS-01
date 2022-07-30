// Precedencia de Operadores
let a= 3, b=2, c=1, d=4;

let z = a * b;
console.log(z);

z = a * b + c;
console.log(z);

z = c + a * b;
console.log(z);

// Primero la multiplicación
// Después la división
// Izquierda a derecha
z = c + a * b / d;
console.log(z);

// Primero la multiplicación
// Después la división
// Izquierda a derecha
z = a * b + c / d;
console.log(z);

// Primero los paréntesis
// Después la multiplicación
// Después la división
// Izquierda a derecha
z = (c + a) * b / c;
console.log(z);