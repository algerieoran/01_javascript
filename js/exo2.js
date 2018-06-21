// les variables de chaque type
var name = "setti";
var age = 39;
var height = 1.68;
var vrais = true;

var s =["setti",39,1.68, true];
console.log(s);


// ********************************************************************************************************************************************************


var name = prompt("Quel est votre nom ?");
var dod = prompt("Quel est votre taille ?");
var x = prompt("Quel est votre travail ?");

if(name != "setti"== true) {
    alert(dod);

}else {
    alert(x);
}


var age = prompt("Quel est votre âge ?");
var hobbie = prompt("Quel est votre hobbie ?");
alert(age);
if(age ===39) {
    alert("c'est bien mon age !!");
}
else{
    alert(hobbie);
}
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