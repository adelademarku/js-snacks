let primaParola = prompt("Inserisci una parola");
let secondaParola = prompt ("Inserisci un'altra parola");

//stabilisco la lunghezza delle parola



let lenprimaParola = primaParola.length;
let lensecondaParola =secondaParola.length;

console.log ("la lunghezza della prima parola è: "+ lenprimaParola);
console.log ("la lunghezza della seconda parola è: "+ lensecondaParola);

//stabilisco la parola piu lunga e corta


let parolaPiuLunga = Math.max (lenprimaParola,lensecondaParola);
let parolaPiuCorta = Math.min (lenprimaParola,lensecondaParola); 


//stampo le parole 

console.log ("la parola piu lunga è: "+ parolaPiuLunga);
console.log ("la parola piu corta è: "+ parolaPiuCorta);  


// bonus: se le parole sono uguali 
if (lenprimaParola == lensecondaParola){console.log("la lunghezza è uguale.");} 
