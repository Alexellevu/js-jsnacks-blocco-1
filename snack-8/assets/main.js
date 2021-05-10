//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero

var numUtente = (prompt('inserisci un numero di 4 cifre'));
console.log(numUtente);
var array = [];

array.push(parseInt(numUtente));
console.log(array);

for(var i=0; i < array.length; i++)
{
var somma = somma + array[i];
console.log(somma);
}
