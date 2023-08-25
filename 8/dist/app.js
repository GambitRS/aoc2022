import { promises as fs } from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const dataFile = await fs.readFile(__dirname + "../data/data.txt");
const data = dataFile.toString();
const exampleFile = await fs.readFile(__dirname + "../data/example.txt");
const example = exampleFile.toString();
const contains = ((c, d) => (c[0] >= d[0] && c[1] <= d[1]));
const overlaps = ((c, d) => !((c[0] < d[0] && c[1] < d[0]) || (c[0] > d[1] && c[1] > d[1])));
const sum = (a, b) => a + b;
const toTree = (a) => new Tree(a);
let visibleTrees = [];
class Tree {
    height = 0;
    visible = false;
    rating = 0;
    constructor(height) {
        this.height = Number(height);
    }
    setVisible() {
        if (this.visible == false) {
            visibleTrees.push(this);
        }
        this.visible = true;
    }
}
/*
for(let fl of forest) {
    console.log(fl.map((a)=>String(a.visible).charAt(0)).reduce(sum));
}

for(let fl of forest) {
    console.log(fl.map((a)=>String(a.height)).reduce(sum));
}
*/
// 1 star
console.time("1 star ");
let forest = [];
for (let line of example.split(/\r?\n/)) {
    forest.push(line.split("").map(toTree));
}
let highest = 0;
for (let i = 0; i < forest.length; i++) {
    highest = -1;
    for (let j = 0; j < forest[i].length; j++) {
        if (forest[i][j].height > highest) {
            forest[i][j].setVisible();
            highest = forest[i][j].height;
        }
    }
    highest = -1;
    for (let j = forest[i].length - 1; j >= 0; j--) {
        if (forest[i][j].height > highest) {
            forest[i][j].setVisible();
            highest = forest[i][j].height;
        }
    }
}
for (let i = 0; i < forest[0].length; i++) {
    highest = -1;
    for (let j = 0; j < forest.length; j++) {
        if (forest[j][i].height > highest) {
            forest[j][i].setVisible();
            highest = forest[j][i].height;
        }
    }
    highest = -1;
    for (let j = forest.length - 1; j >= 0; j--) {
        if (forest[j][i].height > highest) {
            forest[j][i].setVisible();
            highest = forest[j][i].height;
        }
    }
}
console.timeEnd("1 star ");
console.log(visibleTrees.length);
// 2 stars
console.time("2 stars");
let highestRating = null;
let calculateTreeRating = (x, y) => {
};
for (let i = 0; i < forest.length; i++) {
    highest = -1;
    for (let j = 0; j < forest[i].length; j++) {
        //calculate tree
    }
}
console.timeEnd("2 stars");
//# sourceMappingURL=app.js.map