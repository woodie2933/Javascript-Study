// 스코프, 전역변수, 지역변수, 화살표함수
let x = 10;

function printX() {
  console.log(x);
}

console.log(x);
printX();

// 스코프란?
// 범위, 변수가 어디까지 영향을 끼칠 수 있는지에 대한 범위
// 전체 영역에서 영향을 끼친다면 전역변수,
// 함수 내에서만 영향이 있으면 지역변수!

function printX() {
  let x = 10; // 함수 내부에서 선언되었기 때문에, 중괄호 내에서만 의미 있는 변수!
  console.log(x);
}

console.log(x);
printX();
