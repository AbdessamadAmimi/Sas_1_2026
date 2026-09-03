function GenererEmail(nom, prenom){
    return `${prenom.toLowerCase()}.${nom.toLowerCase()}@entreprise.com`
}
console.log(GenererEmail("Amimi", "ABDessamad"));