// Set
// 고유한 값을 저장하는 자료구조이다.
// 값만 저장하고, key를 저장하지 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value2");
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");

console.log(mySet.size);
// 중복된 값은 같은 값으로 처리하여 결과가 2로 뜬다.

// console.log(mySet.size);
// console.log(mySet.has("value1"));
// console.log(mySet.has("value2"));
// console.log(mySet.has("value3"));

// Iterator
for (const value of mySet.values()) {
  console.log(value);
}
