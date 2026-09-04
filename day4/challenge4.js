function compterVoyelles(text){
    let voyelle = ["a", "e", "i", "o", "u", "y"];
    let compteur = 0;
    for(let i=0 ; i<text.length ; i++){
        for(let j=0 ; j<voyelle.length ; j++){
            if(text[i] == voyelle[j]) compteur ++;
        }
    }
    return compteur;
}
console.log(compterVoyelles("abd essamad amimi"))