// 함수 = function(기능)
// input, output 을 가진 기능

function 함수이름() {} // 기본적인 골격입니다.

// 1.함수 선언문
// 소괄호 앞에 함수의 이름을 적어주세요.
function add(매개변수) {
  // 함수 내부에서 실행할 로직
}

// 두 개의 숫자를 입력받아 덧셈을 한 후 내보내는 함수
function add(x, y) {
  return x + y;
}

// 2.함수 표현식
let add2 = function (x, y) {
  return x + y;
};

// 함수를 호출한다 (사용한다)
// 함수명() -> add(입력값)
console.log(add(2, 3));

let functionResult = add(3, 4);
console.log(functionResult);

// add2 를 가지고 10과 20을 더한 값을 출력해보세요!
console.log(add2(10, 20));
let functionResult2 = add(10, 20);
console.log(functionResult2);

// 함수의 인풋 부분 = 매개변수
// return 문 뒤의 값 : 반환값 (output)
