const NOM = "Setti";

var pseudo = "Titi";

var motdePasse = "lepresaintgervais";


var pseudo = prompt("Quel est votre pseudo ?");
alert(pseudo);

var motdePasse = prompt("Quel est votre mot de passe ?");
alert(motdePasse);

if(NOM=="Setti") {
    let NOM = "Titi";
    console.log(NOM);
}

if (pseudo != "Titi") {
    let pseudo ="Pseudo incorrect";
   console.log(pseudo);
}


if (motdePasse === "lepresaintgervais") {
    alert("Super !");
} else {
    alert("try again !!");        
    document.location.href= "https://google.fr";
}

