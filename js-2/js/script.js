var wordOne = prompt('Inserisci una parola');
var wordTwo = prompt('Inseriscine una seconda');
if (wordOne.length > wordTwo.length) {
  console.log(wordOne);
} else if (wordOne.length < wordTwo.length) {
  console.log(wordOne);
} else {
  console.log('Mi hai crashato');
}
