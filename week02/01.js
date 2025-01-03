// ES6 버전 문법 since 2015
// let과 const 등 다양한 신종 문법이 개발되어 편리한 사용 가능~

// 1.let(변수선언) & const(상수선언)
// 이전에는 var만 사용!

// 한 번 선언하고 할당한 값에 재할당이나 재선언이 되는가? 의 여부가 차이점

// 2.arrow function 화살표 함수
function add() {}

var add = function () {};

var add = (x) => {
  return 1;
};

var add = (x) => 1;

// 3.삼항연산자
condition ? true : false;

console.log(true ? "참" : "거짓");
console.log(false ? "거짓" : "참");
console.log(1 === 1 ? "참" : "거짓");
console.log(1 !== 1 ? "참" : "거짓");
