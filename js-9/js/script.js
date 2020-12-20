var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var somma = 0;
var media = 0;
for (var i = 0; i < numberArray.length; i++) {
  somma += parseInt(numberArray[i]);
  media = somma / parseInt(numberArray.length);
}

document.write(somma + ' ' + media);
