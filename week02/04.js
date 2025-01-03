// 일급 객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// const sayHello = function () {
//   console.log("Hello!");
// };

// 변수의 선언부 + 함수로 이루어져 있지요?
// 변수에 함수를 할당하는거죠? 그러면 뭐가 좋지요?
// sayHello라는 함수를 어디에서나 호출할 수 있다!

// 2. 함수를 인자값으로 다른 함수에 전달할 수 있다!
// 2-1. 콜백함수 : 매개변수로써 쓰이는 함수
// 2-2. 고차함수 : 함수를 인자로 받거나 리턴하는 함수
// 콜백함수는 고차함수의 한 종류라고 봐도 됨!
// function callFunction(func) {
//   // 매개변수로 받은 변수가 사실은 함수이다!
//   func();
// }

// const sayHello = function () {
//   console.log("Hello!");
// };

// callFunction(sayHello);

// 3. 함수를 반환할 수 있다
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = createAdder(5);
console.log(addFive(10));
