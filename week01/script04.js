// 불리언 Boolean
// true, false
let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

// if문, for문 등을 다루기 위해 항상 이 Boolean이 필요하다!

// undefined : 정의되지 않은
// 값이 할당되지 않은 변수를 의미한다.
let x;
console.log(x);

// null : 값이 존재하지 않음을 명시적으로 나타내는 방법
// null = undefined 가 아닙니다. null은 개발자가 의도적으로 값이 없다라는것을 명시하기 위해 만든 값입니다. undefined는 정의되지 않은 값입니다.

let y = null;
console.log(y);

// object(객체) : key-value 페어
let person = {
  name: "choi",
  age: 20,
  isMarried: true,
};

console.log(typeof person);

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
// 객체는 중괄호, 배열은 대괄호
let number = [1, 2, 3, 4, 5];
// 배열은 하나하나가 다 인덱스 값을 가지고 있습니다.
// 위치에 대한 데이터를 가지고 있다! 0번째, 1번째,,,
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[1]);
