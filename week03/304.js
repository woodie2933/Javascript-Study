// 이런 패턴은 어떨까?

var copyObject = function (target) {
  var result = {};

  // for - in 구문을 이용하여 객체의 모든 프로퍼티에 접근할 수 있습니다.
  // 하드코딩을 피할 수 있다!
  // copyObject 로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 됨!

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// for - in : 객체에 있는 프로퍼티 하나하나에 접근해서 리턴!

// 위 패턴을 예제에 적용해봅시다.

var user = {
  name: "one",
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "two";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);

// 그러나 이 copyObject 메서드도 문제가 있다! 왜냐하면 얘는 얕은 복사를 하기 때문에, 바로 아래의 프로퍼티에만 변경이 적용되기 때문. 위 예제를 예로 들면, name값만 적용 가능하다!
// 그래서 깊은 복사가 필요하다!! 305.js 에서...
