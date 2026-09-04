function compterCaracteres(text){
    let compteur = 0;
    let i = 0;
    while(text[i]){
        compteur ++;
        i ++;
    }
    return compteur;
}
console.log(compterCaracteres("code"))