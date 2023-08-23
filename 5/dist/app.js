import { promises as fs } from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const dataFile = await fs.readFile(__dirname + "../data/data.txt");
const data = dataFile.toString();
const exampleFile = await fs.readFile(__dirname + "../data/data.txt");
const example = exampleFile.toString();
const contains = ((c, d) => (c[0] >= d[0] && c[1] <= d[1]));
const overlaps = ((c, d) => !((c[0] < d[0] && c[1] < d[0]) || (c[0] > d[1] && c[1] > d[1])));
const sum = (a, b) => a + b;
const instructions = example.split(/\r?\n\r?\n/g);
const cargo = instructions[0];
const commands = instructions[1].split(/\r?\n/g).map((a) => Array.from(a.matchAll(/\d+/g)).map(Number));
const boxes = cargo.split(/\r?\n 1 /)[0];
const boxLines = boxes.split(/\r?\n/);
let places = [];
const moveBoxes9000 = (a) => {
    //console.log(places);
    //console.log(a);
    places[a[2] - 1] = places[a[1] - 1].substring(0, a[0]).split("").reverse().join("") + places[a[2] - 1];
    places[a[1] - 1] = places[a[1] - 1].substring(a[0]);
    //console.log(places);
};
const moveBoxes9001 = (a) => {
    places[a[2] - 1] = places[a[1] - 1].substring(0, a[0]) + places[a[2] - 1];
    places[a[1] - 1] = places[a[1] - 1].substring(a[0]);
};
// 1 star
console.time("1 star");
var lines = boxLines.map((a) => (Array.from(a.matchAll(/.{3}\s?/g)).map(String)));
for (let i in lines[0]) {
    places.push("");
}
for (let objects of lines) {
    for (let oindex in objects) {
        places[oindex] = places[oindex] + objects[oindex].substring(1, 2).trim();
    }
}
let places2 = places.slice();
commands.map(moveBoxes9000);
let answer = places.map((a) => a.substring(0, 1)).reduce((a, b) => a + b);
console.timeEnd("1 star");
console.log(answer);
// 2 stars
console.time("2 stars");
places = places2;
commands.map(moveBoxes9001);
let answer2 = places.map((a) => a.substring(0, 1)).reduce((a, b) => a + b);
console.timeEnd("2 stars");
console.log(answer2);
//# sourceMappingURL=app.js.map