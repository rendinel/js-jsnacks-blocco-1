var list = [];
var number;

for(var x= 0; x < 6; x++) {
  number = parseInt(prompt('Scegli un numero'));
  if(number % 2 !== 0){
    list.push(number);
  }
}

console.log(list);








// var arrayOdd = []
// var yourOddNumber = parseInt(prompt('Inserisci il tuo numero'));
// for (var i = 0; i < arrayOdd.length; i++) {
//   if ((i % 2) == 0) {
//     arrayOdd = []
//   } else {
//     arrayOdd.push(yourOddNumber)
//   }
// }
