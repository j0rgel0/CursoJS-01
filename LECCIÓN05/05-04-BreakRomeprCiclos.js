// Break

for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){ //Imprime valores pares.
        console.log(contador);
        break; //Solo imprime el primer número par.
    }
    
}

console.log("Fin del ciclo For");