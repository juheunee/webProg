const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim();
const n = Number(input);

// 정사각형의 넓이 출력
console.log(n * n);

// n이 5보다 작을 경우 tiny 출력
if (n < 5) {
  console.log('tiny');
}