import {promises as fs} from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const text = await fs.readFile(__dirname + "../data/data.txt", "utf-8");

var test = text.toString()
    .split(/\r?\n\r?\n/) //chop array into dwarf sized bits
    .map( //process dwarf lines
        (linesOfThisDwarf)=>(linesOfThisDwarf.split(/\r?\n/)) //dwarf line becomes array of dwarf lines
        .map(Number) //now it's an array of dwarf numbers
        .reduce((a,b)=>a+b) //and we count em all up
    ) 
    .sort((a,b)=>b-a);//sorting of array

console.log(test[0]);
console.log(test[0] + test[1] + test[2]);