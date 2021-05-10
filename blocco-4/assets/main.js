//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10
/* var palla = {
    nome:'palla',
    peso:10,
}
console.log(palla);

//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

palla.peso = parseInt(prompt('inserisci il peso'));
console.log(palla); */


//Blocco 4 - Sanck 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.
//(ripassiamo il Teorema di Pitagora ;D )

var triangolo = { 
    base: 10,
    altezza:20
}

function area( b , a){
    areaT = (b*a)/2;
    return areaT;
}

var areaTriangolo = area(triangolo.base ,triangolo.altezza);
console.log(areaTriangolo);