// 객체
// key - value 페어
// value 값에는 어떤 것도 올 수 있다!

// 1.객체생성방법
// 1-1.기본적인 객체 생성 방법
// let person = {
//   name: "도니",
//   age: 30,
//   gender: "여자",
// };

// 1-2.생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 23, "여자");
// let person3 = new Person("홍길녀", 54, "여자");
// let person4 = new Person("홍길균", 15, "남자");
// let person5 = new Person("홍길춘", 70, "남자");

// 2.접근하는 방법
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// 3.객체 메소드 (객체가 가진 기능들: Object.어쩌구저쩌구)
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
  name: "도니",
  age: 30,
  gender: "여자",
};

let keys = Object.keys(person);
console.log(keys);

// 3-2.values
let values = Object.values(person);
console.log(values);

// 3-3.entries
// key와 value를 묶어서 배열로 만든 배열! (2차원 배열)
let entries = Object.entries(person);
console.log(entries);

// 3-4.assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { gender: "남자" });
// 어디에다 복사할래? 무엇을 복사할래?
console.log(newPerson);

// 3-5.객체 비교
let person1 = {
  name: "김길동",
  age: 30,
  gender: "남자",
};

let person2 = {
  name: "김길동",
  age: 30,
  gender: "남자",
};

console.log(person1 === person2);
// false가 나온다. 같지 않다는 뜻! 이유는?

let str1 = "aaa";
let str2 = "aaa";

console.log(str1 === str2);
// 이를테면 스트링은 문자가 같으면 true 값이 나온다.

// 객체라는 것은 크기가 상당히 큽니다. 객체와 배열은 다른 데이터 타입에 비해 크기가 크기 때문에 메모리에 저장할 때에 별도의 공간에 저장합니다.
// 따라서 person1 이 가진 값은 별도의 공간에 대한 주소값이 저장된다. person2의 값도 별도 공간에 대한 주소값을 저장하는 것이다. 따라서 비교를 하게 되면 person1과 person2의 주소값에 대한 비교가 이루어지므로 두 값이 다르다고 나온다!!

console.log(JSON.stringify(person1) === JSON.stringify(person2));
// 객체를 문자열화 시키는 메서드
// 이렇게 하면 문자열만 비교되므로 true가 나온다!

// 3-6.객체병합
let person3 = {
  name: "길동",
  age: 30,
};

let person4 = {
  gender: "남자",
};

// ...명령어 : spread operator
let perfectMan = {
  ...person3,
  ...person4,
};
console.log(perfectMan);
