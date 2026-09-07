function formaterChaine(tab){
    tab.pop();
    tab.shift();
    return tab.join("-")
}

console.log(formaterChaine(["A","B","C","D","E"]))