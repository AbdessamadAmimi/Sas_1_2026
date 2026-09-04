function inverserChaine(text){
    let rev_text = "";
    for(let i=text.length-1 ; i>=0 ; i--){
        rev_text += text[i];
    }
    return rev_text;
}
console.log(inverserChaine("helloworld"));