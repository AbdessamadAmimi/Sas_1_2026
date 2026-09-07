function obtenirProduitsEnPromo(produits){
    return produits.filter((e) => e.enPromo == true).map((e) => e.nom)
}

console.log(obtenirProduitsEnPromo(
    [
    {nom: "PC", enPromo: true},
    {nom: "Souris", enPromo: false},
    {nom: "UC", enPromo: true}
    ]
)
)