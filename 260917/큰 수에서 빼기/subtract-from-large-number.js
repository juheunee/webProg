const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
const a = Number(input[0]);
const b = Number(input[1]);

if (a >= b) {
    console.log(a - b);
} else {
    console.log(b - a);
}