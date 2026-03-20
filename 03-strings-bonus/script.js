const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = city.indexOf("Y");
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.substring(3);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.replace("York", "Delhi");
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
/* avevo usato erroneamente 
const cityNameConcat = city.concat(" ", cityName)*/
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"

// 6. Allenamento personale

const animale = "volpe"
const fruttoConGliAcini = shoppingList.slice(-3)
const proverbio = `La ${animale} non arriva all'${fruttoConGliAcini}`
console.log(proverbio)


let fraseSbagliata = "Roma è spesso chiamata la piccola pera"
const marlene = shoppingList.substring(0, 3).concat("a")
let fraseGiusta = fraseSbagliata.replace("Roma", city)
const fineFraseGiusta = `la grande ${marlene}`
fraseGiusta = fraseGiusta.replace("la piccola pera", fineFraseGiusta)
console.log(fraseGiusta)


