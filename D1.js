/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


// VARIABILE con tipo di VALORE: STRING, e puó contenere caratteri alfanumerici. 
// let name = "Mario!" 

// // VARIABILE con tipo di VALORE: NUMBER, deve contenere NUMERI riportati senza apici. 
// let number = 1

// // VARIABILE con tipo di VALORE: BOOLEAN, e serve per AFFERMARE una variabile nel caso di alcune specifiche condizioni.
// let isTrue = true
// // VARIABILE con tipo di VALORE: BOOLEAN, e serve per NEGARE  una variabile nel caso di alcune specifiche condizioni.
// let isFalse = false

// //VARIABILE con tipo di VALORE: NULL, e significqa che nel contenuto non c'é nulla, ma é DEFINITO!
// let empty = null

// VARIABILE con tipo di VALORE: UNDEFINED, e significa che il contenuto c'é! ma é INDEFINITO, finché non ci "guardiamo"dentro




/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName =  "Matteo";
 
console.log( "come ti chiami?",myName);

 let mySurname = "Orlando";
  
 console.log( "qual é il tuo cognome?",mySurname);


 /* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sumNumberOne = 12;
let sumNumberTwo = 20;
let add = sumNumberOne + sumNumberTwo ;
console.log("addizione",add);
 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

console.log(12);
/* ESERCIZIO 5
  
Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


// const myName = "Matteo"
// console.log( "come ti chiami?",myName)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let num = 4;
console.log(4);

let minus= x - num;
console.log("sottrazione",minus);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/ 
 let name1 = "john"

 console.log("john",name1)

 let name2 = "John"
 console.log("John",name2)

//  let areDifferent = name1 !== name2;
//  console.log("name1 è diverso da name2:",areDifferent);


let areSame = name1 === name2;
console.log("name1 è uguale a name2:",areSame);
