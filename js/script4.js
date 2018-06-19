/**1/const est une constante accessible uniquement en lecture dans le contexte global et modifiabledans un contexte local
 * 
 * 2/ les conditions if.. else if.. else permettre de définir une condition pour laquelle ont souhaite executer un code particulier. C'est un bloc de code local
 * 
 * 3/
 * == comparer que 2 valeurs sont identiques
* === comparer 2 valeurs sont identiques et du même type
* < inférieur
* > supérieur
* <= inférieur ou égal
* >= supérieur ou égal
* !=inégal
* !== strictement inégal


* 4/Opérateurs logiques :
* && -> AND (et)
* || -> OR (ou)
* ! -> NOT (non)-> NOT transforme se qui est vrais en faux et se qui faux en vrais.vice versa!
 Opérateurs logiques son généralement utilisé avec des valeurs booléennes et renverrons des des booléennes à l'exception de AND(&&) et OR(||)."
 pour en savoir plus :

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison

5/les variables (var) sont des boites dans lesquelles ont stock des données EX: var boite = ["donne1", "donne2", "donne3"; "donne4"];
il existe des variables à portée global & local.
EX : setti; 

 */


//  var t = "quelquechose";
//  var r = 12;

 // si t est indentique et de meme type "quelquechose" et que r est egal et du meme type que 1 on écrit "quelquechose" si non on écritr.
//  if((t ==="quelquechose")&&(r=== 1)) {
//      document.write(t);// Ne s'execute qui si les 2 conditions sont vrai
//  } else {
//     document.write(r);// Ne s'execute que si l'une des conditions est fausse 
//  }

 //si t est indentique et du même type que "quelquechose" ou que r est est égale et du même type que "number" on écrit r.
//  if((t==="quelquechose")|| (r==="number")) {
//      document.write(r);
//  }else {
//      document.write("Erreue !!!");
//  }

//  if(!t ==="test") {
//      document.write('azertyuiop');
//  }else{
//      document.write('poiuytreza');
//  }


// EXERCISES : 
// 1/:
//  var x = 7;
//  var y = 14;
 
//  if (x<= y){
//      alert ("Supper !!");
//  }else {
//     document.location.href= "https://google.fr";
//  }

//  2/:
//var heure = 8; 
//var heure = 12;
 //var heure = 18;
//   var heure = 20;

// if (heure < 12 == true ) {
//     alert("c'est le matin");
// } else if (heure == 12 == true) {
//     alert ("c'est midi");
// } else if (heure <= 18 == true  ) {
//     alert ("c'est l'apres midi");
// } else{
//     alert ("c'est le soir");
// }

// 3/


var x = 12;
var number = typeof(x);
var x = 18;
// var x = 20;
// var x = "minuit";
// console.log(typeof(x));

if (x == typeof(x)) {
    if(x<= 12){
        console.log("Bonjour !!");
    }else if (x <=18) {
        console.log ("Bonsoir !!");
    }
    else {
        console.log( "Va dormir !!");
    }
} else {
    document.location.href= "https://cooplalouve.fr/nos-actions";
}


// console.log(typeof(typeof(x)));

var x = 12;
if (Number.isInteger(x)){ //Number.isInteger(x)<=> typeof(Number)= x;
  console.log(x);
}else{