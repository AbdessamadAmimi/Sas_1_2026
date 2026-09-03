function verifierMotDePasse(mdp){
    if(mdp.includes("@") && mdp.length >= 8) return true;
    return false;
}

console.log(verifierMotDePasse("code@1234"));
console.log(verifierMotDePasse("code@1234"));