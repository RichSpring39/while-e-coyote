const prompt = require("prompt-sync")({sigint: true});

let is = Number(prompt("Enter Number: "));
let ts = Number()
let num1 = 0;
let num2 = 1;
let s = 0;

while(s < is){
    if (s === 0){
        console.log(0);
    }else if (s === 1){
        console.log(1);
    }else {
        ts = num1 + num2;
        console.log(num1 + num2);
        num1 = num2;
        num2 = ts;
    }
    s++;
}