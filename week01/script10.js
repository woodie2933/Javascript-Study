// 문법 (if, else if, switch 등등)
// 조건문 - if, else if, else, switch

// 1-1.if문
let x = 10;

if (조건) {
  // true나 false가 나올 수 있는 조건
  mainLogic(실행문); // 조건이 true면 메인 로직이 실행된다.
}

// 1-2.
let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 콘솔창에서 출력해주세요.

if (y.length >= 5) {
  console.log(y.length);
}

// let x = 10;
// // 2.if - else 문
// if (x > 0) {
//   console.log("x는 양수입니다");
// } else {
//   console.log("x는 음수입니다");
// }

// let x = 10;
// // if - else if - else 문
// if (x < 0) {
//   // main logic #1
//   console.log("1");
// } else if (x >= 0 && x < 10) {
//   // main logic #2
//   console.log("2");
// } else {
//   // main logic #3
//   console.log("3");
// }

// 1-4. switch 문
// 변수의 값에 따라 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과입니다");
    break;
  case "바나나":
    console.log("바나나입니다");
    break;
  case "키위":
    console.log("키위입니다");
    break;
  default:
    console.log("아무것도 아닙니다.");
    break;
}
