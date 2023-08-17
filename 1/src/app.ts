import {promises as fs} from 'fs';

const text = await fs.readFile("./data/data.txt");
const lines = text.toString().split(/\r?\n/);
const dwarves : number[] = [];
let curDwarf : number = 0;

for (const line of lines) {    
    if(line == "" || line == null) {
        dwarves.push(curDwarf);
        curDwarf = 0;
    } else {
        curDwarf += +line;
    }
}
dwarves.push(curDwarf);
dwarves.sort((a,b) => b-a);

console.log("1")
console.log(dwarves[0]);
console.log("2")
console.log(dwarves[0] + dwarves[1] + dwarves[2]);