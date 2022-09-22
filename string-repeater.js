const prompt = require("prompt-sync")({sigint: true});

const string = prompt("Enter a string: ");
let str = string;

while(str.length <= 10){
        console.log(str);
      str = str + string;
}

// added string
console.log(str);