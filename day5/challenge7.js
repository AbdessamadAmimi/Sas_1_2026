function filtrerPairs(tab){
    filter_tab = [];
    for(let i=0 ; i<tab.length ; i++){
        if(tab[i] % 2 == 0) filter_tab.push(tab[i]);
    }
    return filter_tab;
}

console.log(filtrerPairs([1,2,3,4,5,6,7,8,9]))