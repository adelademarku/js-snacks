let primaParola = prompt("Inserisci una parola");
let secondaParola = prompt("Inserisci un'altra parola");

//stabilisco la lunghezza delle parola



if (primaParola.length < secondaParola.length) {
    console.log("la prima parola è piu corta:  " + primaParola 
    + " " +
    "    la seconda parola è piu lunga : "+ secondaParola);
} else if (secondaParola.length < primaParola.length) {
    console.log("la seconda parola è piu cort : " + secondaParola 
    + primaParola); }
else  { 
    console.log("la lunghezza è uguale."); }
