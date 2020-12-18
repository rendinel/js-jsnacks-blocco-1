var firstWord = parseInt(prompt('Inserisci un numero'));
var secondWord = parseInt(prompt('Inserisci un secondo numero'));
var thirdWord = parseInt(prompt('Inserisci un terzo numero'));
var fourthWord = parseInt(prompt('Inserisci un quarto numero'));
var fifthWord = parseInt(prompt('Inserisci un quinto numero'));
var sumWordArray = ["firstWord", "secondWord", "thirdWord", "fourthWord" , "fifthWord" ]
// var sumWord = firstWord + secondWord + thirdWord + fourthWord + fifthWord;
// console.log('La somma é:' + sumWord);;

var i;
for (i = 0; sumWordArray[i]  ; i++) {
  text += sumWordArray[i] + sumWordArray[i] + sumWordArray[i] + sumWordArray[i] + sumWordArray[i] ;
}
