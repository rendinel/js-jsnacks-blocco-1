var nameSurname = prompt('Inserisci il tuo nome');
var nameSurnameCheck = false;
var listNameSurname = ['lucio','andrea','francesco'];
var welcome = document.getElementById('welcome');

for(var i = 0; i < listNameSurname.lenght; i++){
  if (listNameSurname[i] === nameSurname) {
    nameSurnameCheck = true;
  }
}

if (nameSurnameCheck = true) {
    welcome.innerText = 'Benvenuto';
} else {
    welcome.innerText = 'vai via';
}
