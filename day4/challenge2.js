function compterLettre(text, lettre){
    let compteur = 0;
    for(let i=0 ; i<text.length ; i++){
        if(text[i] == lettre) compteur ++;
    }
    return `La lettre ${lettre} est repetée ${compteur} fois`;
}
console.log(compterLettre("javascript", "a"))