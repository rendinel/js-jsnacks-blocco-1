var numero = parseInt(prompt('dammi un numero'));
if (numero > 10) {
  alert('mi hai crashato');
}else {
  for (var i = 1; i <= numero; i++) {
    console.log(Math.pow(i, 3));
  }
}
