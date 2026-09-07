function fusionnerTableaux(tab1, tab2){
    let new_tab = [];
    for(let i=0 ; i<tab1.length ; i++){
        new_tab.push(tab1[i]);
    }

    for(let i=0 ; i<tab2.length ; i++){
        new_tab.push(tab2[i]);
    }

    return new_tab;
}

console.log(fusionnerTableaux([1,2,3] , [4,5]))