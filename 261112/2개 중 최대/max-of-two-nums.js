const fs = require("fs");
// 입력값을 공백 기준으로 나누고 숫자로 변환
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];

// 삼항 연산자로 두 수 중 최댓값 구하기
const max = a > b ? a : b;

console.log(max);