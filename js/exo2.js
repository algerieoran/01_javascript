// // les variables de chaque type
// var name = "setti";
// var age = 39;
// var height = 1.68;
// var vrais = true;

// var s =["setti",39,1.68, true];
// console.log(s);


<<<<<<< HEAD
// ********************************************************************************************************************************************************
=======
// // ********************************************************************************************************************************************************
>>>>>>> 15e35baab79af1b3d4dda2882fdccc0414c63092


// var name = prompt("Quel est votre nom ?");
// var dod = prompt("Quel est votre taille ?");
// var x = prompt("Quel est votre travail ?");

// if(name != "setti"== true) {
//     alert(dod);

// }else {
//     alert(x);
// }


// var age = prompt("Quel est votre âge ?");
// var hobbie = prompt("Quel est votre hobbie ?");
// alert(age);
// if(age ===39) {
//     alert("c'est bien mon age !!");
// }
// else{
//     alert(hobbie);
// }
// // ***********************************************************************************************************************************************************************

// var tabb = [
//     "ines",
//     "sarah",
//     "lili",
//     "nounou",
//     "nadia",
//     "safa",
//     "mamy",
//     "papi"
// ];
// document.write("mon tableau simple : "+"<br>"+tabb+"<br>");

// // *************************************************************************************************************************************
// //la boucle for utilisé dans la plupart des cas ou on ne connait pas le nombre de récupération. S'écrit for(var maVariable=0;maVariable< 12; maVariable++ ou maVariable--)
// for(var i = 0; i < tabb.length; i++){
//     alert("coool !!");
//     document.write(tabb[i]+"<br>");
//  }
//  // 
// // *********************************************************************************************************
// var result = "";
// var tab =[
//     {
//         nom : "titi",
//         taille : 1.68,
//         age : 39
//     },
//     {
//         nom : "ines",
//         taille : 1.38,
//         age : 9
//     },
//     {
//         nom : "sarah",
//         taille : 1.28,
//         age : 7
//     },
//     {
//         nom : "lili",
//         taille : 1.48,
//         age : 10
//     },
//     {
//         nom : "cici",
//         taille : 1.78,
//         age : 29
//     },
//     {
//         nom : "dina",
//         taille : 1.58,
//         age : 19
//     },
// ];

// document.write("<br>"+"mon tableau d'objets : "+"<br>"+tab+"<br>");

// *************************************************************************************************************************************
//boucle while elle est plus adaplter dans les cas ou on ne connait pas le nombre de répititions
// var maVariable = [0,1,2,3];
// while (maVariable <= maVariable.length){
//     maVariable++;
// }
// document.write(maVariable);
// ***********************************************************************************************************************************
// la boucle la plus adapter pou explorer les tableaux d'objets
// for(var i in tab){
//     result = result + tab[i];
//     //result+=tab[i];//ecriture simplifier
//  }
//  document.write(result);

//  ****************************************************************************************************************
// var maVariable = 0;
// var resultat = "";

// do{
//     maVariable = maVariable+1;
//     resultat = resultat + maVariable;
//     alert("executer la boucle !!");
// }while (maVariable < 5);
// document.write(resultat);
// console.log(resultat);


// 
//**********************************************avoir********************************************************************** */
// var x=5, y=10, z=20, b=6;console.log(x--);

// console.log(b++);

// console.log(++y);

// console.log(--z);

// console.log(x);

// console.log(b);
//********************************************************************************************************************* */
var sexe = "";

if(sexe == "masculin" && age > 18){
    alert("background: blue");
}
else if (sexe=="feminin"&& age > 18){
    alert("background: pink");
}

var element = document.getElementsByTagName("body")
var question = prompt("De quel sexe es-tu ?");
var age = parseInt(prompt("Quel est votre âge ?"));

if(question == "masculin"){
    element.setAttribute("style", "color:red; border: 1px solid blue;");
}
else if(question == "feminin"){
    alert(age);
}
<<<<<<< HEAD
// ***********************************************************************************************************************************************************************

var tabb = [
    "ines",
    "sarah",
    "lili",
    "nounou",
    "nadia",
    "safa",
    "mamy",
    "papi"
];
document.write("mon tableau simple : "+"<br>"+tabb+"<br>");

// **********************************************************************************************************************************************************************************************************************************************

var tab =[
    {
        nom : "titi",
        taille : 1.68,
        age : 39
    },
    {
        nom : "ines",
        taille : 1.38,
        age : 9
    },
    {
        nom : "sarah",
        taille : 1.28,
        age : 7
    },
    {
        nom : "lili",
        taille : 1.48,
        age : 10
    },
    {
        nom : "cici",
        taille : 1.78,
        age : 29
    },
    {
        nom : "dina",
        taille : 1.58,
        age : 19
    },
];

document.write("<br>"+"mon tableau d'objets : "+"<br>"+tab+"<br>");

// *************************************************************************************************************************************
for(var i = 0; i < tabb.length; i++){
   alert("coool !!");
   document.write(tabb+"<br>");
}
// ***************************************************************************************************************************************
// for(var i = 0; i < tab.length; i++){
//     alert("coool !!");
//     document.write(tab+"<br>");
//  }

//  ****************************************************************************************************************
//  while(tabb<= 110){
//         document.write(tabb + "<br>");
//        tabb++;
//     }
=======
else {
    alert("Ah .. Tu n’es ni l’un ni l’autre ?");
}


>>>>>>> 15e35baab79af1b3d4dda2882fdccc0414c63092
