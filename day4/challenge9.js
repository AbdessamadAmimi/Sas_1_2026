function nettoyerEspaces(text){
    let compteur_debut = 0;
    let new_text = "";
    for(let i=0 ; i<text.length ; i++){
        if(text[i] === " "){
            compteur_debut ++;
        }
        else break;
    }
    let compteur_fin = text.length;
    for(let j=text.length-1; j>compteur_debut ; j--){
        if(text[j] === " "){
            compteur_fin --;
        }
        else break;
    }
    for(let k=compteur_debut ; k<=compteur_fin ; k++){
        new_text += text[k]
    }
    return new_text;
}

console.log(nettoyerEspaces("           hello world             "));