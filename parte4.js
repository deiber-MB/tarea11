let numero = Math.floor(Math.random() * 10) + 1;
let adivina = prompt("adivina un numero entre 1 y 10");
if(adivina==numero){
    document.write("felecidades adivinaste el numero")

}else{
    document.write("no adivinaste el numero suerte para la proxima ")
}