function calculerTotalPanier(panier){
    // let som = 0;
    // for(let i=0 ; i<panier.length ; i++){
    //     som += panier[i].prix * panier[i].quantite
    // }
    // return som;

    return panier.reduce((acc, obj) => acc + (obj.prix * obj.quantite), 0)
}
console.log(calculerTotalPanier([{prix: 10, quantite: 2}, {prix: 5, quantite: 1}, {prix: 5, quantite: 1}]))
