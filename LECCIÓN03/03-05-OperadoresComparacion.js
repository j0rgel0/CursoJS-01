// Operaciones de Comparación

let a= 3, b=2, c="3", d=3;

// (3 == 2) False (No son iguales - por el valor)
let z = (a == b);
console.log(z);

// (3 == "3") True (Si son iguales)
z = (a == c); //Revisa el valor es igual sin importar el tipo
console.log(z);

// (3 == "3"") False (No son iguales - por el tipo)
z = (a === c); //Revisa los valores y los tipos sean iguales
console.log(z);

//----------
//Distinto
//----------
// (3 != 2) true (Si son distintos - por el valor)
z = (a != b); // Revisa si el valor es diferente sin importar el tipo
console.log(z);

// (3 != "3") false (No son distintos)
z = (a != c); // Revisa si el valor es diferente sin importar el tipo
console.log(z);

// (3 != 3) false (No son distintos)
z = (a != d); // Revisa si el valor es diferente sin importar el tipo
console.log(z);

// (3 !== 2) true (Si son distintos - por el valor)
z = (a !== b); //Revisa si los valores son diferentes y si los tipos son diferentes
console.log(z);

// (3 !== "3") true (Si son distintos - por el tipo)
z = (a !== c); //Revisa si los valores son diferentes y si los tipos son diferentes
console.log(z);

// (3 !== 3) false (No son distintos)
z = (a !== d); //Revisa si los valores son diferentes y si los tipos son diferentes
console.log(z);