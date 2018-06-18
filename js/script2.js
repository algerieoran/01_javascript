var string = "string";
var float = 0.01;
var number = 0;
var boolean = false;
var array = [];

// console.log(typeof(string));
// console.log(typeof(float));
// console.log(typeof(number));
// console.log(typeof(boolean));
// console.log(typeof(array));

//var t = float.toString();fonction toString(); prmet de convertir ma variable en texte


//console.log(typeof(t));

// const sert à déclarer une constante qui sera accessible uniquement en lecture. Ici elle à une porté global c'est à dire que je peux l'appeler n'import où dans mon script elle aura toujours la valeurs "Constante".
const CONSTANTE ="constante";
//CONSTANTE = 12; renvoi une erreur parce que la constante CONSTANTE est déjà défini dans le contexte global.

//Début condition
if(CONSTANTE=== 7) {// Début bloc local
    let CONSTANTE = 20;
    console.log(CONSTANTE);
}// Fin bloc local.
//var CONSTANTE = 20;renvoi une erreur parce que la constante CONSTANTE est déjà défini dans le contexte global.on peux changer const just dans le locale d'une fonction.

//console.log(CONSTANTE);
// = affecter une valeur
// == comparer que deux valeurs sont identiques (ex : 7 et "7")
//=== vérifier que deux valeurs sont identiques et du même type (ex : 7 et 7 (vrais) | ex : 7 et "7" (faux))
//< inferieur à
//> superieur à
//>= superieur ou égale
//<= inférieur ou égale
//!= verifier que deux valeurs sont inégale
//!== verifier que deux valeurs sont strictement inégale

const EXO = 10;
if(EXO <=10) {
    let EXO = 25;
    console.log(EXO);
}

const TITI = 100;
if (TITI >=55) {
    let TITI = 60;
    console.log(TITI);
}

const INES = "ma fille"
if(INES==="ma fille") {
    let INES = "9 ans";
    console.log(INES);
}

 const SARAH ="la petite soeur de Ines";
 if(SARAH !== INES) {
     let SARAH = "7 ans";
     console.log(SARAH);
 }

 const X = 10;

 if(X<50) {
     let X = 2;
     console.log(X);
 } else if(X = 3){
 let X = 10;
 console.log(x);
} 

//parseInt permet de préciser que l'on attend un nombre en retour.
var age = parseInt(prompt("Quel est votre âge ?"));
alert(age);

var majorite = 18;

if (age>=majorite) {
    alert("Super tu es majeur !");
} else {
    alert("Dommage !!");        
    document.location.href= "https://google.fr";
}
//parseFloat permet de préciser que l'on attend un nombre à vergule en retour.
//var azerty = parseFloat(prompt("Quel est votre âge ?"));
//alert(azerty);

