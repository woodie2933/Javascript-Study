// for문, while문 => 매우중요

// 반복문이다!

//for문의 기본 구조
// for (초기값; 조건식; 증감식) {
//   // 내용
// }

// i 라는 변수가 0에서부터 시작해서, 10보다 작은 때까지
// {} 안의 사이클을 실행하고, 한 번 실행이 끝날 때마다 i 의 값은 1씩 증가할거야!
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 배열과 for문은 짝꿍! 왜냐?
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i); // 현재 인덱스 값 출력
//   console.log(arr[i]); // 현재 인덱스에 해당하는 배열의 요소를 출력!
// }

// 0부터 10까지의 수 중에서 2의 배수만 콘솔창에 출력해보세요.
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
  name: "도니",
  age: 30,
  gender: "female",
};

// person['key'] : value에 접근하는 방법, key로 쓸 수도 있음!
for (let key in person) {
  console.log(key + ": " + person[key]);
}
