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

//SNAFU  Decimal
//1=-0-2     1747
/*
1    2 2  2  2  2  2
5    - 4  4  4  4 -1
25   0 4  4  4 -1  0
125  - 3 -2 -2 -1 -1
625  = 2  3 -2 -2 -2
3125 1       1  1  1
*/

// 1 star

const snafuToDec = (snafu : string) => {
    let res = 0;

    for( let i = snafu.length-1; i >= 0; i--) {
        let pow = snafu.length-1-i;
        switch(snafu[i]) {
            case "=": {res += Math.pow(5, pow) * -2; break;}
            case "-": {res += Math.pow(5, pow) * -1; break;}
            case "0": {res += Math.pow(5, pow) * 0; break;}
            case "1": {res += Math.pow(5, pow) * 1; break;}
            case "2": {res += Math.pow(5, pow) * 2; break;}
        }
        //console.log(snafu[i]);
    }
    return res;
}

const decToSnafu = (dec : number) => {
    let res = [];

    if(dec < 2) {
        return String(dec);
    }
    let pow = 0;
    while(Math.pow(5,pow+1) < dec) {
        pow++;
    } 
    while(pow >= 0) {
        var subres = 0;
        var subPow = Math.pow(5,pow);

        while (subPow <= dec) {
            subres++;
            dec -= subPow;
        }
        res.push(subres);
        pow--;
    }

    for(let i = 0; i < res.length; i++) {
        if( res[i] > 2 ) {
            res[i] = res[i] - 5;
            if(i == 0) {
                res = [1].concat(res);
            } else {
                res[i-1] = res[i-1] + 1;                
            }
            i = i - 2;
        }
    }
    
    return res.map((a)=>{
        switch(a) {
            case -1 : return "-";
            case -2 : return "=";
        }

        return String(a);
    }).reduce(sum);
}

//console.log(snafuToDec(decToSnafu(1200)));
//console.log(decToSnafu(snafuToDec("1=-0-2")));

console.time("1 star ");
var total = 0;
for( let line of data.split(/\r?\n/) ) {
    total += snafuToDec(line);
}
var result = decToSnafu(total);
console.timeEnd("1 star ");
console.log(result);

// 2 stars
console.time("2 stars");
console.timeEnd("2 stars");
