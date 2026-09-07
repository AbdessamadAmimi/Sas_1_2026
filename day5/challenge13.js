function trouverPremierMajeur(users){
    return users.find((e) => e.age >= 18)
}

console.log(trouverPremierMajeur([{nom: "Lina", age: 15}, {nom: "Amine", age: 20} , {nom: "Abde", age: 21} ]))