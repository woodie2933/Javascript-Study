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

// 화살표 함수로 작성한 경우에만 name 부분이 undefined 로 뜬다!
// 왜냐면 화살표 함수는 this 를 바인딩하지 않기 때문!!!
// this 와는 일반 function 키워드를 써야 결과값이 나옵니다.
