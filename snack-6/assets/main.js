/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

var numUtente = parseInt(prompt('inserisci un numero'));
console.log(numUtente);


for (var i = 1; i <= numUtente; i++){
     var potenza =Math.pow(i, 3);
     console.log(potenza);
}