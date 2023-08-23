import {promises as fs} from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const dataFile = await fs.readFile(__dirname + "../data/data.txt");
const data = dataFile.toString();

const exampleFile = await fs.readFile(__dirname + "../data/example.txt");
const example = exampleFile.toString();

const contains = ((c:number[],d:number[]) => (c[0] >= d[0] && c[1] <= d[1]) );
const overlaps = ((c:number[],d:number[]) => !((c[0] < d[0] && c[1] < d[0]) || (c[0] > d[1] && c[1] > d[1])) );
const sum = (a:any,b:any)=>a+b;

const findMarker = (data:string, packetSize:number) => {
    for(let i : number = 0; i < data.length-packetSize; i++) {
        let subset = data.slice(i,i+packetSize);
        let set : Set<string> = new Set();
        //console.log(subset);
        for(let s of subset) {
            //console.log("adding " + s);
            set.add(s);
        }
        if(set.size == packetSize) {
            return (i+packetSize);
        }
    }
    return 0;
}

// 1 star
console.time("1 star ");
let sol = findMarker(data, 4);
console.timeEnd("1 star ");
console.log(sol);

// 2 stars
console.time("2 stars");
sol = findMarker(data, 14);
console.timeEnd("2 stars");
console.log(sol);
