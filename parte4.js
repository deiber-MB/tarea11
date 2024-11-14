let numero=parseInt(prompt("Ingrese un número"));
if(numero % 2==0){
    document.write("numero es par")
}else{
    document.write("numero es impar");
}
 
let numero = Math.floor(Math.random() * 10) + 1;
let adivina = prompt("Adivina un numero entre 1 y 10");
if(adivina==numero){
    document.write("Felicidades, adivinaste el número");
}else {
    document.write("Lo siento mejor suerte a la proxima, el número era", numero);
}