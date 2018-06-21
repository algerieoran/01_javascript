// les boucles :


// les boucles :
// Dans les parenthèses de la boucle for : départ ; condition ; incrémentation
// Au départ, j’affecte une valeur à ma variable. Cette valeur est un chiffre.
// Ma condition dit « tant que ce chiffre est inférieur à 100 ».
// Mon incrémentation consiste à ajouter +1 à chaque tour de boucle.
// Dans mes accolades, ce code sera exécuté à chaque tour de boucle, donc il sera exécuté 99 fois.
// La boucle WHILE est une autre manière d’écrire une boucle. Basée sur le même principe que la
// boucle for, ses instructions seront exécutées tant que la condition est remplie.
// La syntaxe de la boucle WHILE est plus proche de l’humain que celle de la boucle FOR même si la
// boucle FOR est très utilisée par les développeurs.
// Reprenons notre exemple du compteur de chiffre. Cette fois écrit en version WHILE:
// La boucle DO WHILE, est une boucle qui exécutera d’abord une première fois le code SANS tester la
// condition ; PUIS ensuite, n’exécutera le code que si la condition est remplie pour toutes les fois
// suivantes.
//************************************************************************************************************************** */


for(var monChiffre = 1; monChiffre < 100; monChiffre++){
    document.write(monChiffre + "<br>");
}
// 

// var monChiffre = 1;

// while(monChiffre <= 100){
//     document.write(monChiffre + "<br>");
//     monChiffre++; //monChiffre++;=> à chaque tour de boucle  il rajoute 1.
// }

// Déprécier
// var monChiffre = 1;

// do{ 
//     monChiffre += 1;
//     document.write("Ce code ne s'executera qu'une seul fois");
//     document.write(monChiffre + "<br>");
// } while(monChiffre<= 110){
//     document.write(monChiffre + "<br>");
//     monChiffre++;
// }

//Incrémentation
//var monChiffre = 1;
//monChiffre++ => monChiffre + 1;
//monChiffre-- => monChiffre - 1;
//****************************************************************************************************************** */
// var mytable = [
//     "Amina",
//     "Mahjouba",
//     "Mohammed",
//     "Kheira",
//     "Ahmed",
//     "Nounou",
//     "Titi",
//     "Fadila",
//     "Reda",
//     "Lila",
//     "Mostapha"
// ];
// // i inferieur à la longeur de mon "mytable"

// for(var i = 0; i < mytable.length; i++){
//     alert("Salut "+ mytable[i]);
// }
//******************************************************************************************************************* */
// // push
//   mytable.push("mamy");
// //   Unshift
//   mytable.unshift("papy");
// //   pop retire le dernier élément du tableau
//   mytable.pop();
// //  Shift retire le premier élément du tableau
//  mytable.shift();
//  document.write(mytable + " " +"<br>");

//********************************************************************************************************************** */
var table = [
    {
    nom : "belkacem",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "oulkadi",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "bakhtaoui",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "mimouni",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "cheddad",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "khassani",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "aithmed",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
{
    nom : "keffif",
    email : "setti.belka@gmail.com",
    tel : 0544564777
},
];
document.write(table);
console.log(table);