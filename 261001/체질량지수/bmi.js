const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const h = Number(input[0]);
const w = Number(input[1]);

const b = Math.floor((10000 * w) / (h * h));

console.log(b);

if (b >= 25) {
    console.log("Obesity");
}