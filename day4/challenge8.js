function extraireChaine(text, debut, fin){
    new_text = "";
    for(let i=debut ; i<fin ; i++){
        new_text += text[i];
    }
    return new_text;
}

console.log(extraireChaine("JavaScript", 0, 4));