// while
// let i = 0;

// // for (초기값; 조건; 증감) {
// //   // for문의 기본식
// // }

// while (i < 10) {
//   console.log(i);
//   i++;
// }
// i = 0, 10보다 작기 때문에 콘솔창에 0이라고 찍힙니다.
// 그리고 나서 i++ 로 i가 1이 됩니다.
// 그리고 2가 되고 3이 되고 ... 10이 됩니다.
// 10이 되는 순간 조건을 만족하지 못하기 때문에 출력이 되지 않습니다.

// while 문을 활용하여, 3 초과 100 미만의 숫자 중 5의 배수만 출력하시오.
// let i = 3;
// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) { // 둘 다 만족해야 실행!
//     console.log(i);
//   }
//   i++;
// }

// do ~ while문
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break continue문
// for문과 항상 결합해서 쓰인다.

// for문으로 0부터 10까지 하나씩 늘어나게 해보세요.
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break; // 5가 되면 멈추는 break문!
//   }
//   console.log(i);
// }

// continue문
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; // 5가 되면 출력을 멈추고 다음 사이클로 넘어감!
  }
  console.log(i);
}
