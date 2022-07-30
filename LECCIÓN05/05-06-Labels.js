// Labels - No es recomendada.

Inicio:
for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){  
        continue Inicio; //Ir a la etiqueta inicio.
        // console.log(contador); // Ya no se ejecuta esta línea.
    } else {
        console.log(contador);
    }
}

console.log("Fin del ciclo For");