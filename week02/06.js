// 배열의 요소로 함수를 할당

const myArr = [
  function (a, b) {
    return a + b;
  }, // 0번째 요소
  function (a, b) {
    return a - b;
  },
];

// 베열의 요소에 접근하는 방법 그대로 function에 접근해주시면 됩니다.

// 더하기
console.log(myArr[0](1, 3)); // 배열의 0번째 요소에 argument로 a,b값을 1,3으로 넣을것임

// 빼기
console.log(myArr[1](10, 7)); // 배열의 1번째 요소에 argument로 a,b값을 10,7로 넣을것임
