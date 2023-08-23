import {promises as fs} from 'fs';
import * as url from 'url';
import { Directory } from './directory.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const dataFile = await fs.readFile(__dirname + "../data/data.txt");
const data = dataFile.toString();

const exampleFile = await fs.readFile(__dirname + "../data/example.txt");
const example = exampleFile.toString();

const contains = ((c:number[],d:number[]) => (c[0] >= d[0] && c[1] <= d[1]) );
const overlaps = ((c:number[],d:number[]) => !((c[0] < d[0] && c[1] < d[0]) || (c[0] > d[1] && c[1] > d[1])) );
const sum = (a:any,b:any)=>a+b;

// 1 star
console.time("1 star ");
const root : Directory = new Directory();
let current : Directory = root;

let lines = data.split(/\r?\n/);
let parts : string[];

for(let line of lines) {
    
    if(line.indexOf("$ cd /") >= 0 || line.indexOf("$ ls") >= 0) {
        continue;
    }

    if(line.indexOf("$ cd ") >= 0) {
        current = current.cd(line.slice(5));
    } else {
        parts = line.split(" ");
        if(parts[0] == "dir") {
            continue;
        }
        current.touch(parts[1], Number(parts[0]));
    }
}

let sol = 0;
for(let dir of Directory.allDirectories) {
    if(dir.totalSize < 100000) {
        sol += dir.totalSize;
    }
}

console.timeEnd("1 star ");
console.log(root);
console.log(sol);

// 2 stars
console.time("2 stars");

const totalDiskSpace : number = 70000000;
const neededDiskSpace : number = 30000000;
let remainingDiskSpace : number = totalDiskSpace - root.totalSize;
let minimumSpaceNeeded : number = neededDiskSpace - remainingDiskSpace;

let smallestDirectoryThatApplies = root;
for(let dir of Directory.allDirectories) {
    if(dir.totalSize > minimumSpaceNeeded && dir.totalSize < smallestDirectoryThatApplies.totalSize) {
        smallestDirectoryThatApplies = dir;
    }
}
console.timeEnd("2 stars");
console.log(smallestDirectoryThatApplies.totalSize);
