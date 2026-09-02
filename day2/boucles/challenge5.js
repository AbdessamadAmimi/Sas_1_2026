const prompt = require("prompt-sync")();
let n = prompt("Donner le nombre N: ");
let x = prompt("Donner le nombre X: ");
// for(let i=1 ; i<=n ; i++){
//     console.log(i * x);
// }
let i = 1;
while(i*x <= n){
    console.log(i*x);
    i++;
}
