function separerMots(text){
    let arr = [];    
    text = text.trim();
    let mot = "";
   
    

    let i = 0;
    while(i <= text.length){
        if(text[i] != " " && text[i] != undefined) mot += text[i]     
        else {
            arr.push(mot)
            mot= "";
        }
        i++;        
    }
    return arr;
}
console.log(separerMots("Apprendre javaScript et HTML et CSS"))