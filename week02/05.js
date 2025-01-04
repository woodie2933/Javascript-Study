// 일급 객체로서의 함수
const person = {
  name: "john",
  age: 31,
  isMarried: true,
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
  }, // 화살표 함수를 이용한 표기
  // function () {
  //   console.log(`Hello, my name is ${this.name}`);
  // },
};

// this 객체, 자기 자신을 가리키는 객체.
// {} : 스코프

person.sayHello();
