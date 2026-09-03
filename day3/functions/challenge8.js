function creerCompteur(valeurInitiale = 0){
    return(function Incrementation(){
        valeurInitiale ++
            return  valeurInitiale;
        })
}

const monCompteur = creerCompteur(10);
console.log(monCompteur());
console.log(monCompteur());