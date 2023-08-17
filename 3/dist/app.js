import { promises as fs } from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const text = await fs.readFile(__dirname + "../data/data.txt");
const data = text.toString();
//A = 65, Z = 90, a = 97, z = 122
const solveArray = (a) => a.map((a) => a.map((a) => new Set(a))
    .reduce((a, c, i) => new Set([...a].filter(i => c.has(i)))))
    .map((a) => [...a][0])
    .map((a) => (a.charCodeAt(0) > 90) ? a.charCodeAt(0) - 96 : a.charCodeAt(0) - 38)
    .reduce((a, b) => a + b);
//map reduce style
console.log(solveArray(Array.from(data.matchAll(/.+/g))
    .map(String)
    .map((a) => [a.slice(0, a.length / 2), a.slice(a.length / 2, a.length)])));
console.log(solveArray(Array.from(data.matchAll(/.+\r?\n.+\r?\n.+/g))
    .map((a) => String(a).split(/\r?\n/))));
//# sourceMappingURL=app.js.map