// 2. 문자열 string(문자열 = 문자의 나열)
// '' = "" 작은 혹은 큰 따옴표로 합쳐 놔야 문자열이 된다.
let str = "Hello, World!";
// console.log(str);
// console.log(typeof str);

// 2-1.문자열 길이 확인하기
// console.log(str.length);

// 2-2.문자열 결합하기
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
// console.log(result);

// 2-3.문자열 자르기
let str3 = "Hello, world!";
console.log(str3.substr(7, 5)); // 서브스트링, 문자를 자르는 메서드.
// 숫자 두 개를 넣어 어디서부터 자를지, 몇개까지 자를지 설정해줘야 한다.
console.log(str3.slice(7, 12));
// 슬라이스, 문자를 자르는 메서드. 시작위치부터 끝 위치까지 지정해줘야 한다.

// 2-4.문자열 검색
let str4 = "Hello, world!";
console.log(str4.search("world"));
// search 메서드. 몇 번째부터 시작되는지 찾을 수 있음.

// 2-5. 문자열 대체
let str5 = "Hello, world!";
let result01 = str5.replace("world", "Javascript");
console.log(result01);
// replace 메서드. 괄호 안의 문자를 변경해준다. world -> Javascript

// 2-6.문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02);
// , 를 기준으로 배열로 찢어줘.
