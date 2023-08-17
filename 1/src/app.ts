import {promises as fs} from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const text = await fs.readFile(__dirname + "../data/data.txt");
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

console.log(dwarves[0]);
console.log(dwarves[0] + dwarves[1] + dwarves[2]);