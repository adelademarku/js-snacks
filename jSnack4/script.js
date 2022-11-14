//INFORMAZIONI DI PARTENZA

let arrayNomiPartecipanti = [
"Brambilla","Villa", "Colombo", "Sala", "Fumagalli", "Magni", 
"Mauri ","Motta ","Ronchi ","Beretta",
];

//nome non è presente
let nomePresente = false; 


//CHIEDO AL UTENTE DI INSERIRE IL SUO NOME

let inserisciNome = prompt("Inserisci il tuo nome");

//indice 


for(let i=0; i<arrayNomiPartecipanti.length; i++){
    let nome=arrayNomiPartecipanti[i];

    if (nome==inserisciNome){
    nomePresente = true; }
}

if (!nomePresente){
console.log("Non puo partecipare!");
arrayNomiPartecipanti.push(inserisciNome);}
else  { console.log("Puo partecipare"); 
 
}
