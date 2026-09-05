function formaterTexte(text){
    let text_objet = {
        majuscule: text.toUpperCase(),
        minuscule: text.toLowerCase()
    }
    return text_objet;
}
console.log(formaterTexte("cOdE"));