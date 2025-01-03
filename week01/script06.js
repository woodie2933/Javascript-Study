// 연산자 (+, -, *, /, %)

// 1.더하기 연산자
console.log(1 + 1);
console.log(1 + "1");

// 2.빼기 연산자
console.log(1 - "2");
console.log(1 - 2);

// 3.곱하기 연산자
console.log(2 * 3);
console.log("2" * 3);

// 4.나누기 연산자
console.log(4 / 2);
console.log("4" / 2);

// 5.나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2);
console.log(5 % 2);

// 6.할당연산자(assignment)
// 6-1.등호연산자(=)
let x = 10;
// 등호 연산자가 바로 할당 연산자입니다.

// 6-2.더하기 등호 연산자(+=)
x += 10;
console.log(x);

// 6-3.빼기 등호 연산자(-=)
x -= 25;
console.log(x);

// 6-4.곱하기 등호 연산자(*=)
let a = 10;
a *= 2;

console.log(a);

// 비교연산자(--> true 또는 false를 반환하는 연산자)
// 1.일치연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

// 숫자 2와 숫자 2가 같니? 응!
console.log(2 === 2); // true
console.log("2" === 2); // false
console.log(2 == "2"); // true

// 2.불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니? 아니!
console.log(2 !== "2"); // false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true

// 3.작다연산자(<), 작거나 같다 연산자(<=)
console.log("-----"); // 구분선
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false

// 4.논리연산자
// 4-1.논리곱 연산자 : 모두 true일 때 true 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2.논리합 연산자 : 두 값 중 하나라도 true인 경우 true 반환
console.log(true || true); // true
console.log(true || false); // false
console.log(false || true); // false
console.log(false || false); // false

// 4-3.논리부정연산자 => !
// 값을 반대로 바꿔줍니다.
console.log(!true);
let d = true;
console.log(!d);

// 5. 삼항연산자(중요!)
// 조건에 따라 값을 선택한다.
let z = 10;
let result = z > 5 ? "크다" : "작다";
console.log("-------");
console.log(result);
// z가 5보다 크다, 즉 참이면 : 앞의 값을 가져온다.

console.log("-------");

let p = 20;
// 3항연산자를 이용하여 p가 10보다 작은 경우 작다를, 크면 크다를 출력해주세요.
let answer = p < 10 ? "작다" : "크다";
console.log(answer);

// 6.타입연산자(typeof)
console.log(typeof "5");
