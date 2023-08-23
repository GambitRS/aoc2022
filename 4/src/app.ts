import {promises as fs} from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const text = await fs.readFile(__dirname + "../data/data.txt");
const data = text.toString();


let contains = ((c:number[],d:number[]) => (c[0] >= d[0] && c[1] <= d[1]) );
let overlaps = ((c:number[],d:number[]) => !((c[0] < d[0] && c[1] < d[0]) || (c[0] > d[1] && c[1] > d[1])) );

let sum = (a,b)=>a+b;
let splitAll = a=>a.split(",")
                   .map(b=>b.split("-")
                            .map(Number));

// 1 star
console.time("sol1 s1");
var res = data.split(/\r?\n/)
              .map(splitAll)
              .map(c=> (contains(c[0],c[1]) || contains(c[1],c[0])) ? 1 : 0)
              .reduce(sum);
console.timeEnd("sol1 s1");
console.log(res);

console.time("sol2 s1");
var total = 0;
for( let line of data.split(/\r?\n/) ) {
    let pairs = line.split(",");
    let r0 = pairs[0].split("-").map(Number);
    let r1 = pairs[1].split("-").map(Number);
    total += (contains(r0,r1) || contains(r1,r0)) ? 1 : 0;
}
console.timeEnd("sol2 s1");
console.log(total);

// 2 stars
console.time("sol1 s2");
var res = data.split(/\r?\n/)
              .map(splitAll)
              .map(c=> (overlaps(c[0],c[1])) ? 1 : 0)
              .reduce(sum);
console.timeEnd("sol1 s2");
console.log(res);

console.time("sol2 s2");
var total = 0;
for( let line of data.split(/\r?\n/) ) {
    let pairs = line.split(",");
    let r0 = pairs[0].split("-").map(Number);
    let r1 = pairs[1].split("-").map(Number);
    total += (overlaps(r0,r1)) ? 1 : 0;
}

console.timeEnd("sol2 s2");
console.log(total);