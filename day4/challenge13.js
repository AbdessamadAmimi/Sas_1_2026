function obtenirInitiales(nomComplet){
    let full_name = nomComplet.split(" ");
    let init = [];
    for(let i=0 ; i<full_name.length ; i++){
        init.push(full_name[i][0].toUpperCase());
    }
    return init.join(".");
}

console.log(obtenirInitiales("mohamed amine Amimi"));