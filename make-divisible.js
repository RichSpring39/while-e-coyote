const prompt = require("prompt-sync")({sigint: true});

let x = Number(prompt("Enter in X: "));
let y = Number(prompt("Enter in Y: "));

while(x % y!= 0){
        console.log(x);
        x = x + 1
}
console.log(x, "divisible by", y);