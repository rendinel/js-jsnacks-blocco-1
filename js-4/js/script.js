var name = prompt('come ti chiami?');
var nameList = ['lucio', 'andrea', 'diego'];
var flag = false;

for (var i = 0; i < nameList.length; i++) {
  if (name === nameList[i]){
    flag = true;
  }
}

if ( flag ){
  console.log('puoi entrare');
}else{
  console.log('no'); 
}


// var nameSurname = prompt('Inserisci il tuo nome');
// var nameSurnameCheck = false;
// var listNameSurname = ['lucio','andrea','francesco'];
// var welcome = document.getElementById('welcome');
//
// for(var i = 0; i < listNameSurname.lenght; i++){
//   if ( NameSurname === listNameSurname[i]) {
//     nameSurnameCheck = true;
//   }
// }
//
// if (nameSurnameCheck) {
//     welcome.innerText = 'Benvenuto';
// } else {
//     welcome.innerText = 'vai via';
// }
