function nettoyerEspaces(text){
    if(text){
        let cleanText = "";
        for(let i=0 ; i<text.length ; i++){
            if(text[i] != " ") cleanText += text[i];
        }
        return cleanText;
    }
    else return "Error"
}

function mettreEnMajuscule(text){
    if(text){
        return text.toUpperCase();
    }
    else return "Error"
    
}

function ajouterPrefixe(text, prefix = "LOG: "){
    return prefix + text;
}

function traiterMessage(text, ...transformations){
    transformations.forEach( (transformation) => {
        text = transformation(text);
    })
    return text;
}

console.log(traiterMessage("            samad@2020  ", nettoyerEspaces, mettreEnMajuscule, ajouterPrefixe));



