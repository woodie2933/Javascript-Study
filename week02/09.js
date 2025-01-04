const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

// console.log(myMap.keys());
// for (const key of myMap.keys()) {
//   console.log(key);
// }

// console.log(myMap.values());
// for (const value of myMap.values()) {
//   console.log(value);
// }

// console.log(myMap.entries());
// for (const entry of myMap.entries()) {
//   console.log(entries);
// }

// Map 의 크기와 존재 여부를 확인할 수 있는 방법

console.log(myMap.size); // Map 의 길이(사이즈)
console.log(myMap.has("four")); // key 값을 가지고 있는 지 검색할 수 있다!
