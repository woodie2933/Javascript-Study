function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiflyByTwo = multiplyBy(2);
const multiflyByThree = multiplyBy(3);

console.log(multiflyByTwo(10));
console.log(multiflyByThree(10));

const result = add(multiflyByTwo(5), multiflyByThree(10));
console.log(result);
