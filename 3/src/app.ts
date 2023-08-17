import {promises as fs} from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const text = await fs.readFile(__dirname + "../data/data.txt");
const data : string = text.toString();

//A = 65, Z = 90, a = 97, z = 122
const solveForElves = (elvesWithSacks : string[][]) =>
    elvesWithSacks.map((sacks : string[]) => 
        sacks.map((items)=>new Set(items))
        .reduce((sack,otherSack)=>new Set([...sack].filter(item=>otherSack.has(item)))))
    .map((sacks)=>[...sacks][0])
    .map((item : string) => (item.charCodeAt(0) > 90) ? item.charCodeAt(0) - 96 : item.charCodeAt(0) - 38)
    .reduce((aPrio,bPrio)=>aPrio+bPrio);

//map reduce style
console.log(solveForElves(Array.from(data.matchAll(/.+/g))
    .map(String)        
    .map((sack)=>[sack.slice(0,sack.length/2), sack.slice(sack.length/2, sack.length)])));

console.log(solveForElves(Array.from(data.matchAll(/.+\r?\n.+\r?\n.+/g))        
    .map((elves)=>String(elves).split(/\r?\n/))));
