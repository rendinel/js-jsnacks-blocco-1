var firstNumber = prompt('Ciao dammi un numero');
var secondNumber = prompt('Ciao dammene un secondo');
var printBiggerNumber = document.getElementById('bigger-number');

if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else {
    console.log('mi hai crashato');
}
