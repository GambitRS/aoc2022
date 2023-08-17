import {promises as fs} from 'fs';

const text = await fs.readFile("./data/data.txt");
const data : String = text.toString();
const lines = data.split(/\r?\n/);

function solve(scoring : Object) {
    let score : number = 0;

    for (const line of lines) {
        let hands = line.split(" ");
        score += scoring[hands[0]][hands[1]];
    }

    return score;
}

console.log( solve({ A:{X:4,Y:8,Z:3}, B:{X:1,Y:5,Z:9}, C:{X:7,Y:2,Z:6}}) );
console.log( solve({ A:{X:3,Y:4,Z:8}, B:{X:1,Y:5,Z:9}, C:{X:2,Y:6,Z:7}}) );