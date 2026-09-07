function supprimerDoublons(tab){
    new_tab = [];
    for(let i=0 ; i<tab.length ; i++){
        if(!(new_tab.includes(tab[i]))) new_tab.push(tab[i])
    }
    return new_tab;
}
console.log(supprimerDoublons([1,2,4,7,6,2,2,3,6,7,1,2,3,7,6,4]))