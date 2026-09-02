const prompt = require("prompt-sync")();
let n = prompt("Choisir un numero :");
switch (choice){
    case "1":
        console.log("Ouverture du profil...");
        break;
    case "2":
        console.log("Ouverture des paramètres...");
        break;
    case "3":
        console.log("Ouverture du notifications...");
        break;
    case "4":
        console.log("Déconnection...");
        break;
    default: console .log("Choix invalide.");
}