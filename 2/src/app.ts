import {promises as fs} from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const text = await fs.readFile(__dirname + "../data/data.txt");
const data : string[] = text.toString().split(/\r?\n/);

const solve = (scoring : Object) => data.map((l)=>l.split(" ").reduce((a,b)=>scoring[a][b])).reduce((a,b)=>a+b);

console.log( solve({ A:{X:4,Y:8,Z:3}, B:{X:1,Y:5,Z:9}, C:{X:7,Y:2,Z:6}}) );
console.log( solve({ A:{X:3,Y:4,Z:8}, B:{X:1,Y:5,Z:9}, C:{X:2,Y:6,Z:7}}) );