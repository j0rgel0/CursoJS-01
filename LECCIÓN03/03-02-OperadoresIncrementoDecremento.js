// Operadores de Incremento y decremento

let a= 3, b=2;
let z = a + b;

//Incremento
//Pre-incremento (El operador  ++ antes de la varieble);
//Primero se incrementa a y luego se asigna a z
z = ++a;
console.log(a); 
console.log(z);

//Post-incremento (El operador ++ después de la variable);
//Primero se asigna a z y luego se incrementa
z = b++;
console.log(b); 
console.log(z);

//Decremento
//Pre-Decremento (El operador  -- antes de la varieble);
//Primero se decrementa a y luego se asigna el valor a z
z = --a;
console.log(a); 
console.log(z);

//Post-decremento (El operador -- después de la variable);
//Primero se asigna a z y luego se decrementa
z = b--;
console.log(b); 
console.log(z);