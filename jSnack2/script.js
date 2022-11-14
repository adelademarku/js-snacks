let primaParola = prompt("Inserisci una parola");
let secondaParola = prompt("Inserisci un'altra parola");

//stabilisco la lunghezza delle parola




if (primaParola > secondaParola) {
    console.log("la prima parola è piu lunga:" + primaParola);
} else if (secondaParola > primaParola) {
    console.log("la seconda parola è piu lunga : " + secondaParola); }


if (primaParola < secondaParola) {
    console.log("la prima parola è piu corta:" + primaParola);  
} else if (secondaParola > primaParola) {
    console.log("la seconda parola è piu corta: " + secondaParola);
} 

if (primaParola == secondaParola) { 
    console.log("la lunghezza è uguale."); }
