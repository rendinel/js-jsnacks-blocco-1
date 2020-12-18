var arrayOdd = []
var yourOddNumber = parseInt(prompt('Inserisci il tuo numero'));
for (var i = 0; i < arrayOdd.length; i++) {
  if ((i % 2) == 0) {
    arrayOdd = []
  } else  {
    arrayOdd.push(yourOddNumber)
  }
}
