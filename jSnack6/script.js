
let numeroUtente = prompt("Inserire un numero da 0 a 10");

// Faccio generare un numero casuale al PC da 0 a 10

let numeroRandomDecimaleVirgola = Math.random() * 11;
let numeroRandomIntero = Math.floor(numeroRandomDecimaleVirgola);

console.log("Il computer ha estratto il numero: " + numeroRandomIntero);

// vedo se il numero è uguale o no 


if(numeroRandomIntero == numeroUtente){
    console.log("HAI VINTO!!");
} else {
    console.log("HAI PERSO!");
}