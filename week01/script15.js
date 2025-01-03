// 배열

// 1.생성
// 1-1.기본생성
// let fruits = ["사과", "바나나", "오렌지"];
// // 배열은 항상 0번째부터 시작합니다!

// // 1-2.크기지정
// let number = new Array(5);
// // 5개의 요소를 가진 배열을 만들어줘.

// console.log(fruits);
// console.log(number.length);

// // 2.요소에 접근하기 - 배열에서는 index값으로 접근합니다.
// // 객체에서는 key값으로 접근했지요?
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3.배열의 메서드

// 3-1.push
// let fruits = ["사과", "바나나"];
// console.log(fruits);

// fruits.push("오렌지"); // 오렌지를 추가해보자!
// console.log(fruits);

// 3-2.pop메서드
// let fruits = ["사과", "바나나"];
// console.log(fruits);
// fruits.pop(); // 마지막 요소를 삭제하는 메서드
// console.log(fruits);

// 3-3.shift메서드
// let fruits = ["사과", "바나나", "키위"];
// console.log(fruits);
// fruits.shift(); // 맨 앞에 있는 요소를 삭제하는 메서드
// console.log(fruits);

// 3-4.unshift메서드
// let fruits = ["사과", "바나나", "키위"];
// console.log(fruits);
// fruits.unshift("포도"); // 맨 앞에 포도를 추가해보자!
// console.log(fruits);

// 3-5.splice메서드
// let fruits = ["사과", "바나나", "키위"];
// console.log(fruits);
// fruits.splice(1, 1, "포도");
// // 시작번호, 삭제할 수, 대체할 요소
// console.log(fruits);

// 3-6.slice메서드
// let fruits = ["사과", "바나나", "키위"];
// let sliceFruits = fruits.slice(1, 2);
// // 시작부터 끝점까지 지정할 수 있다
// console.log(sliceFruits);
// -2 이런 식으로 하면 뒤에서부터 셉니다!
