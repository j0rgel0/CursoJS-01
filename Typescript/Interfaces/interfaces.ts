interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;
}

let usuario1:Usuario = {nombreUsuario: "Juan", password: "1234", confirmarPassword:"1234"}
console.log(usuario1);
console.log(usuario1.nombreUsuario);

//Definir un contrato
interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function (){
        console.log("Abordando");
    }
}

avion.abordarTransporte();