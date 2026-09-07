function inverserTableau(tab){
    let rev_tab = [];
    for(let i=tab.length-1 ; i>=0 ; i--){
        rev_tab[i] = tab[tab.length-1-i]
    }
    return rev_tab;
}

console.log(inverserTableau(["A", "B", "C", "D"]))