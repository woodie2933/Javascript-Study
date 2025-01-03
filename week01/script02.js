// 데이터 타입
// runtime : 데이터 타입의 결정 시점
// 코드를 작성할 때가 아닌, 실행할 때
// -> 터미널에 코드가 실행될 때!
// java : string a = "abc"; 자바는 변수 타입을 설정해줘야하지만
// javascript : const a = "abc"; js는 안해도 됨,냅다 선언.

// 1.숫자
// 1-1.정수
let num1 = 10;
console.log(num1);
console.log(typeof num1); // typeof = 타입이 뭐냐?

// 1-2.실수(float)
let num2 = "3.14"; // 그냥 3.14면 number로 인식, "3.14"면 string 으로 인식!
console.log(num2);
console.log(typeof num2);

// 1-3.지수형(Exp)
let num3 = 2.5e5; // 2.5 x 10^5 (10의 5제곱)
console.log(num3);
console.log(typeof num3);

// 1-4.
let num4 = "Hello" / 2;
console.log(num4); // NaN 출력, '숫자가 아닙니다' 라는 뜻

// 1-5. Infinity
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

// 1-6. Infinity
let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);
