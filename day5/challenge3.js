function trouverMax(tab){
    let max = tab[0];
    for(let i=0 ; i<tab.length ; i++){
        if(tab[i] > max) max = tab[i];
    }
    return max;
}

console.log(trouverMax([12,15,67,5,90,44,500,1]))