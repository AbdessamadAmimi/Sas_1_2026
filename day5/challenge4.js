function ajouterALaFin(tab, element){
    tab[tab.length] = element;
    return tab;
}

console.log(ajouterALaFin(["A", "B", "C", "D"], "E"))