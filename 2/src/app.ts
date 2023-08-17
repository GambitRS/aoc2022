import {promises as fs} from 'fs';

const text = await fs.readFile("./data/data.txt");
const data : String = text.toString();
const lines = data.split(/\r?\n/);
let score : number = 0;

for (const line of lines) {
    
    var hands = line.split(" ");
    switch(hands[0]) {
        case 'A': {
            if(hands[1] == "X") {
                score += 4;
            }
            if(hands[1] == "Y") {
                score += 8;
            }
            if(hands[1] == "Z") {
                score += 3;
            }
            break;
        }
        case 'B': {
            if(hands[1] == "X") {
                score += 1;
            }
            if(hands[1] == "Y") {
                score += 5;
            }
            if(hands[1] == "Z") {
                score += 9;
            }
            break;
        }
        case 'C': {
            if(hands[1] == "X") {
                score += 7;
            }
            if(hands[1] == "Y") {
                score += 2;
            }
            if(hands[1] == "Z") {
                score += 6;
            }
            break;
        }
    }
}
console.log("1:-----");
console.log(score);
console.log("-------");
console.log("");

score = 0;

for (const line of lines) {
    
    var hands = line.split(" ");
    switch(hands[0]) {
        case 'A': {
            if(hands[1] == "X") {
                score += 3;
            }
            if(hands[1] == "Y") {
                score += 4;
            }
            if(hands[1] == "Z") {
                score += 8;
            }
            break;
        }
        case 'B': {
            if(hands[1] == "X") {
                score += 1;
            }
            if(hands[1] == "Y") {
                score += 5;
            }
            if(hands[1] == "Z") {
                score += 9;
            }
            break;
        }
        case 'C': {
            if(hands[1] == "X") {
                score += 2;
            }
            if(hands[1] == "Y") {
                score += 6;
            }
            if(hands[1] == "Z") {
                score += 7;
            }
            break;
        }
    }
}
console.log("2:-----");
console.log(score);
console.log("-------");