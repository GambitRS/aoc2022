import {promises as fs} from 'fs';

const text = await fs.readFile("./data/data.txt");
const data : String = text.toString();
const lines = data.split(/\r?\n/);
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
if(curDwarf > 0) {
    dwarves.push(curDwarf);
}

dwarves.sort((a,b) => b-a);
console.log(dwarves[0] + dwarves[1] + dwarves[2]);