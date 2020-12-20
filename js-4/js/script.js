// versione short funziona perché indexOf restituisce il primo indice in cui é possibile trovare un determinato elemento nell'array o -1 se non é presente , in questo caso funziona perché se non esiste il nome inserito dentro l'array ritona -1 e mostra non puoi entrare else se nome in array puoi entrare 
var listaInvitati = ['pino', 'paolo', 'doggo'];
var userName = prompt('gna ti chim?');
if (listaInvitati.indexOf(userName) === -1) {
  console.log('Non puoi entrare');
} else {
  console.log('Benvenuto');
}


// versione long
// var name = prompt('come ti chiami?');
// var nameList = ['lucio', 'andrea', 'diego'];
// var flag = false;
//
// for (var i = 0; i < nameList.length; i++) {
//   if (name === nameList[i]){
//     flag = true;
//   }
// }
//
// if ( flag ){
//   console.log('puoi entrare');
// }else{
//   console.log('no');
// }
