let miNumero = "10";
// console.log(typeof niNumero);


// let edad =  Number (miNumero);
// console.log(typeof edad);
// if (edad >= 18){
//     console.log("Puede votar");
// } else {
//     console.log("Muy joven para votar");
// }

let edad = Number(miNumero) >= 18 ? console.log("Puede votar") : console.log("Muy joven para votar");
console.log(edad); //undefined

let resultado = Number(miNumero) >= 18 ? "Puede votar" : "Muy joven para votar";
console.log(resultado); // "Muy joven para votar"