var number = prompt('inserisci un numero di 4 cifre');
var somma = 0;
if (number.lenght !== 4) {
  alert('mi hai crashato, devi inserire un numero di 4 cifre');
}else {
  for(var x = 0; x < 4; x++) {
    somma += parseInt(number[x]);
  }
  console.log('La tua somma é ' + somma);
}

// parseInt va inserito dopo perché all'inizio serve che sia una stringa per verificarne la lunghezza
