const prompt = require("prompt-sync")();

console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");
let choice = prompt("Choisir une option :");
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