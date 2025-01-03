// 조건부 실행
let x = 10;

// if (x > 0) {
//   console.log("x는 양수입니다.");
// }

x > 0 && console.log("x는 양수입니다.");
// && 조건 때문에 콘솔창이 실행된다.

// or조건(||) 을 써보자
// 삼항 연산자와 단축평가

let y; // y는 선언만 되어 있고 값 할당이 안 되었기 때문에, undefined 값이 들어간 상태!
let z = y || 20; // y가 undefined 이면 || 우측의 값을 반환해줘!

console.log(z);
