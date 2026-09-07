function masquerCarte(nCard){
    let lastN = nCard.slice( (nCard.length - 4) , nCard.length )
    return lastN.padStart(nCard.length , "*")
}

console.log(masquerCarte("1234567891234"))