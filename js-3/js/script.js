// versione lunga
// var listaN = [];
// var n1 = prompt('Inserisci un numero');
// listaN.push(parseInt(n1));
// var n2 = prompt('Inserisci un secondo numero');
// listaN.push(parseInt(n2));
// var n3 = prompt('Inserisci un terzo numero');
// listaN.push(parseInt(n3));
// var n4 = prompt('Inserisci un quarto numero');
// listaN.push(parseInt(n4));
// var n5 = prompt('Inserisci un quinto numero');
// listaN.push(parseInt(n5));
//
// var somma = 0;
//
// for (var x = 0; x < listaN.length; x++) {
//   somma += listaN[x];
// }
//
// console.log('La tua somma é ' + somma)

// versione stretta perché quando delle cose si ripetono quasi sicuramente si tratta di un ciclo
var somma = 0;

for (var x =  0; x < 5; x++){
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
}

console.log('La tua somma é ' + somma)
