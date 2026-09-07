function contientElement(tab, element){
    for(let i=0 ; i<tab.length ; i++) {
        if(tab[i] === element) return true;
    }
    return false;
}

console.log(contientElement([1,2,3,4], 4))