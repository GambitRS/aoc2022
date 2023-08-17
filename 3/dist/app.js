import { promises as fs } from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const text = await fs.readFile(__dirname + "../data/data.txt");
const data = text.toString();
const lines = data.split(/\r?\n/);
function solve(scoring) {
}
console.log(solve({ A: { X: 4, Y: 8, Z: 3 }, B: { X: 1, Y: 5, Z: 9 }, C: { X: 7, Y: 2, Z: 6 } }));
console.log(solve({ A: { X: 3, Y: 4, Z: 8 }, B: { X: 1, Y: 5, Z: 9 }, C: { X: 2, Y: 6, Z: 7 } }));
//# sourceMappingURL=app.js.map