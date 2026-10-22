const fs = require('fs');

// 입력을 받아 정수로 변환합니다.
const input = fs.readFileSync(0).toString().trim();
const a = Number(input);

// a가 113 이상이면 1, 그렇지 않으면 0을 출력합니다.
if (a >= 113) {
    console.log(1);
} else {
    console.log(0);
}