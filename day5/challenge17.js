function remplacerElement(tab, ancien, nouveau){
    tab.splice( tab.indexOf(ancien), 1, nouveau )
    console.log(tab)
}

(remplacerElement(["1","2","3","4"], "3", "2"))