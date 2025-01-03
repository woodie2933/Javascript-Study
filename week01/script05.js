// 형 변환
// 형태를 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1.암시적
// 1-1.문자열
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);
// 숫자와 문자를 더하면 문자열로 변환이 된다!

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);
// 문자열로 반환되어 1true 로 반환된다!
// 문자열과 다른 데이터타입이 +연산자로 만났을 때에는 문자열이 우선시된다!

// {}, null, undefined 등등이 + "1" 과 만나면 => 문자열이 된다.

// 1-2.숫자
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

// +연산자가 아닌 다른 연산자 (-, *, %) 가 나오면 항상 숫자가 우선시됨.
// 문자와 문자가 와도 숫자로 변환이 됩니다.

// 2.명시적 형 변환
// 2-1.Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// vs.
console.log(Boolean("false"));
console.log(Boolean({}));
// 빈 문자열이 아닌 어떤 문자라도 있으면 true가 나옵니다.

// 2-2.문자열
let result5 = String(123);
console.log(typeof result5);

let result6 = String(true);
console.log(typeof result6);

let result7 = String(false);
console.log(typeof result7);

let result8 = String(null);
console.log(typeof result8);

let result9 = String(undefined);
console.log(typeof result9);
// 전부 String으로 출력됨
// 명시적 형 변환

// 1-3.Number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);
