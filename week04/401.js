// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행한다.

var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);

// 2. 인자에 대한 제어권
// map 함수
// : 배열에 대한 메서드입니다. 배열의 요소 하나하나를 순회하며 가공해서 새로운 배열을 생성!

var newArr = [10, 20, 30].map(function (curr, index) {
  console.log(curr, index);
});

// 결과는 어떻게 될까?
console.log(newArr);

var newArr = [10, 20, 30].map(function (curr, index) {
  console.log(curr, index);
  return curr + 5;
});

console.log(newArr);
