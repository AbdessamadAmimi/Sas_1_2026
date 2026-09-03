function formatMAD(val){
    return `${val} MAD`;
}
function convertir(montant, taux, format){
    return `${format(montant * taux)}`
}
console.log(convertir(100, 10.5, formatMAD))