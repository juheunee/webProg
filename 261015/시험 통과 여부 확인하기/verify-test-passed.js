const fs = require('fs');

// 표준 입력에서 정수 n을 읽어옵니다.
const input = fs.readFileSync(0, 'utf-8').trim();
const n = Number(input);

if (n >= 80) {
  console.log('pass');
} else {
  console.log(`${80 - n} more score`);
}