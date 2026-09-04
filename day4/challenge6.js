function repeterChaine(text, repetition){
    let new_text = "";
    for(let i=0 ; i<repetition ; i++){
        new_text += text;
    }
    return new_text;
}
console.log(repeterChaine("JS", 10));