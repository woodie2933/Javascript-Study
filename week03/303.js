// user 객체를 생성
var user = {
  name: "won",
  gender: "male",
};

// 이름을 변경하는 함수 'changeName' 을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티에 접근해서 이름을 변경했네요! => 가변성

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

// 새로운 객체 생성으로 다른 저장소에 저장할 것이므로 데이터가 겹치지 않는다!
// '유저 정보가 변경되었습니다.' 가 출력될 것!!
var user2 = changeName(user, "two");

// 결국 아래 로직을 skip하게 될 것입니다.
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // one, two 반환
console.log(user === user2); // false 반환

// 그러나 이 방법을 사용하는 경우, 변경하고자 하는 객체의 내용이 100줄이면? 1000줄이면? 너무 하드 코딩이 많아진다. 그래서 개발자들은 '얕은 복사' 라는 것을 사용!! 304.js 에서...
