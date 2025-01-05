// 304.js 의 문제점을 보완한 완벽히 다른 객체를 반환하는 코드!

var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

// 재귀적인 수행을 해야 한다!!!!
