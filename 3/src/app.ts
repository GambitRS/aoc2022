import {promises as fs} from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const text = await fs.readFile(__dirname + "../data/data.txt");
const data : string = text.toString();
const lines = data.split(/\r?\n/);

function solve() {
    let score : number = 0;
    let score2 : number = 0;
    let map0 : Array<string> = null, 
        map1 : Set<string> = null, 
        map2 : Set<string> = null;

    for(let line of lines) {
        let comp1 : string = line.slice(0,line.length/2);
        let comp2 : string = line.slice(line.length/2,line.length);
        var map : Set<string> = new Set<string>();
    
        for(let char of comp1) {
            map.add(char);
        }

        //A = 65, Z = 90, a = 97, z = 122
        for(let char of comp2) {
            if(map.has(char)) {
                score += (char.charCodeAt(0) > 90) ? char.charCodeAt(0) - 96 : char.charCodeAt(0) - 38;
                break;
            }
        }

        //part two        
        for(let char of comp2) {
            map.add(char);
        }
        let test : number[];

        //I want to use the map function of array for this exercise, so I made 2 sets into arrays instead of all maps
        //This also allows me to use the some function, a map you can break out of using return
        if(map0 == null) map0 = Array.from(map);
        else if(map1 == null) map1 = map;
        else {
            map2 = map;
            let doubles : string[] = []
            map0.map((entry)=>{if(map1.has(entry)) doubles.push(entry)});
            let test = doubles.some((char)=>{if(map2.has(char)) {
                return score2 += (char.charCodeAt(0) > 90) ? char.charCodeAt(0) - 96 : char.charCodeAt(0) - 38;
            } });

            map0 = null;
            map1 = map2 = null;
        }
        
    }   

    console.log(score);
    console.log(score2);
}

solve();