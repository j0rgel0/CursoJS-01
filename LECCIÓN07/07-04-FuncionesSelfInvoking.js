// Funciones SelfInvoking
// IIEF

//También es una función anonima, y se ejecuta así misma.
(function (){
    console.log("Ejecutando la función");
})(); //Es la unica vez que se puede mandar a llamar.


(function (a, b){
    console.log("Suma: " + (a + b) );
})(3, 4);
