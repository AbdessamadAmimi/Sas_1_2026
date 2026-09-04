function remplacerCaractere(text, ancien, nouveau){
    let new_text = "";
    for(let i=0 ; i<text.length ; i++){
        if(text[i] === ancien) {
            new_text += nouveau;
        }
        else{
            new_text += text[i]
        }
    }
    return new_text;
}
console.log(remplacerCaractere("banana", "a", "o"));
