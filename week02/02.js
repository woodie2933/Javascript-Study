// 구조분해할당 : destructureing(de + structure + ing)
// de = not, structure = 구조
// 즉, 구조를 찢어서 각각 할당해버린다.
// 무슨 말이냐? 배열이나 객체의 속성을 하나하나 떼어내서 변수에 각 값을 담을 수 있도록 해주는 것!

// 1. 배열의 경우
// let [value1, value2] = [1, "new"];
// console.log("1", value1);
// console.log("2", value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;

// console.log(a); // value1
// console.log(b); // value2
// console.log(c); // value3
// console.log(d); // undefined

// 그런데 배열에 value4가 있다? 그러면 d의 값은 4가 아닌 value4로 반환된다.

// 2. 객체인 경우
// let user = {
//   name: "nbc",
//   age: 30,
// };

// 구조분해할당
// let { name, age } = {
//   name: "nbc",
//   age: 30,
// };

// {} (객체)안의 요소를 찢어서 각각의 변수인 이름과 나이값에 nbc와 30이 각각 들어가게 된다.

// 새로운 이름으로 할당
let user = {
  name: "nbc",
  age: 30,
};

// let { name: newName, age: newAge } = user;
// console.log(newName);
// console.log(newAge);

let { name, age, birthday = "today" } = user;
console.log(name);
console.log(age);
console.log(birthday);

// 그런데 객체 안에 birthday 가 "tomorrow" 로 들어가 있다? 그러면 tomorrow가 호출됩니다.
