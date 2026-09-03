function additionnerTout(...Numbers){
    let somme = 0;
    Numbers.forEach((n) => {
        somme += n;
    });
    return `La somme est ${somme}`
}

console.log(additionnerTout(10, 20, 30))