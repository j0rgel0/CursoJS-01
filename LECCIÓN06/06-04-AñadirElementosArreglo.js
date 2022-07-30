// Añadir elementos.
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++){
    console.log(i + ' ' + autos[i]);
}

autos[1] = 'MerceDezBenz';
console.log(autos[1]);

//Añadir al final del arreglo.
autos.push('Audi')

//Cantidad de elementos:
console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos); 
//[ 'BMW', 'MerceDezBenz', 'Volvo', 'Audi', 'Cadillac' ]

autos[6] = 'Porshe';
console.log(autos); 
//[ 'BMW', 'MerceDezBenz', 'Volvo', 'Audi', 'Cadillac', , 'Porshe' ]


