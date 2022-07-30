// Continue

for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){  
        continue; //Ir a la siguiente iteracion
        // console.log(contador); // Ya no se ejecuta esta línea.
    } else {
        console.log(contador);
    }
}

console.log("Fin del ciclo For");