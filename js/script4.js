/**== comparer que 2 valeurs sont identiques
* === comparer 2 valeurs sont identiques et du même type
* < inférieur
* > supérieur
* <= inférieur ou égal
* >= supérieur ou égal
* !=inégal
* !== strictement inégal



* Opérateur logique
* && -> AND (et)
* || -> OR (ou)
* ! -> NOT (non)
 * Opérateur logique : 
 * && -> AND(et)
 * || -> OR(ou)
 * ! -> NOT(non)
 */


 var t = "quelquechose";
 var r = 12;

 // si t est indentique et de meme type "quelquechose" et que r est egal et du meme type que 1 on écrit "quelquechose" si non on écritr.
//  if((t ==="quelquechose")&&(r=== 1)) {
//      document.write(t);// Ne s'execute qui si les 2 conditions sont vrai
//  } else {
//     document.write(r);// Ne s'execute que si l'une des conditions est fausse 
//  }

 //si t est indentique et du même type que "quelquechose" ou que r est est égale et du même type que "number" on écrit r.
 if((t==="quelquechose")|| (r==="number")) {
     document.write(r);
 }else {
     document.write("Erreue !!!");
 }

 if(!t ==="test") {
     document.write('azertyuiop');
 }else{
     document.write('poiuytreza');
 }