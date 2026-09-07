function trierTableau(tab){
for(let i=0 ; i<tab.length ; i++){
        let max = tab[i];
        for(let j=i ; j<tab.length ; j++){
            if(tab[j] > max) max = tab[j]
        }
        tab[tab.indexOf(max)] = tab[i];
        tab[i] = max;
    }
return tab;
}

console.log(trierTableau([5,8,9,3,4,1,0,22]))