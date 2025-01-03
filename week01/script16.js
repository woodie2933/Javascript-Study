// forEach, map, filter, find

// let numbers = [4, 1, 5, 3, 2];

// // 매개변수 자리에 함수를 넣은 것을 콜백함수라고 합니다.
// // numbers.forEach(function (item) {
// //   console.log(item);
// // });

// // 2.map : 항상 원본 배열의 길이만큼 return된다.
// let newNumbers = numbers.map(function (item) {
//   // map함수는 반드시 리턴문을 가져야 함!
//   // 기존의 배열을 가공해서 새로운 배열을 생산해내는 역할이기 때문
//   return item * 2;
// });

// console.log(newNumbers);

// 3.filter
// let numbers = [4, 1, 5, 3, 2];

// let filteredNumbers = numbers.filter(function (item) {
//   // map 과 마찬가지로 return값이 들어가야 함!
//   // map 은 가공할 값이 들어가죠? filter는 필터링을 할 조건이 들어갑니다.
//   return item > 3;
//   // return item === 5;
//   // return item !== 5;
// });

// console.log(filteredNumbers);

// 4.find
let numbers = [4, 1, 5, 3, 2];

let result = numbers.find(function (item) {
  // filter랑 유사하게 조건문을 통해 조건이 맞는 것만 반환하게 되어 있다.
  // 그러나, 조건에 맞는 요소 중 첫 번째만 반환!!
  return item > 3;
});

console.log(result);
