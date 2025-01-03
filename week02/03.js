// 단축 속성명 : property shorthand
// 이 문법을 반다시 알아야됩니다.

const name = "nbc";
const age = "30";

// key - value 페어
// const obj = {
//   name: name,
//   age: age,
// };

// 좌측은 키, 오른쪽이 밸류값. 즉 오른쪽이 실질적인 데이터입니다.
// 왼쪽은 그냥 이름일 뿐! 그래서 오른쪽의 밸류값은 변수로도 쓸 수 있습니다!
// 왼쪽과 오른쪽은 이름이 겹칠 수도 있습니다! 그렇다면 생략이 가능해진다!
// 즉, 키와 밸류 값이 같으면 하나만 써도 된다는 뜻!

const obj = { name, age }; // 바로 이렇게요!
const obj1 = { name: name, age: age }; // 같은 뜻!

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 ES6 문법 중 하나!

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);
// ... 이 바로 스프레드 오퍼레이터, 전개 구문의 문법!
// 1,2,3으로 이루어진 배열의 요소들을 전개해달라는 말과 같다.

// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr);

// 객체에서도 적용이 됩니다.
// let user = {
//   name: "nbc",
//   age: 30,
// };

// let user2 = { ...user };
// console.log(user);
// console.log(user2);

// 나머지 매개변수 (rest parameter)
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(...args);
}
// 매개변수의 개수를 정확히 모를 때, ...args로 추가적으로 어떤 argument 가 들어올 수 있다는 점을 명시해줄 수 있습니다.

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 위처럼 입력하면 console.log(a, b, c); 의 값은 1 2 3으로 반환되고, console.log(...args); 의 값은 4 5 6 7이 반환된다. 하지만 ... 없이 console.log(args); 로 값을 반환하면 배열의 형태로 [4,5,6,7] 로 반환된다. 즉, ...로 스프레드 오퍼레이터를 실행해줘야 컴퓨터가 1,2,3 외의 값들을 나머지 매개변수로 처리해준다!

// 템플릿 리터럴 문법
console.log("Hello World");
//문자열을 입력할 때! ``을 사용해 씁니다.
console.log(`Hello World ${3 + 3}`);

const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`);

// 템플릿 리터럴의 장점 하나 더!
// 멀티라인을 지원한다!
// 말 그대로 템플릿을 리터럴리 지원한다!
console.log(`
  Hello
     My name is Javascript!!!
        
         Nice to meet you!!!!!
  `);

// OMG 활용도가 상당히 높습니당
