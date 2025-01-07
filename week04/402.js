// curr, index의 순서를 바꿔보자!

var newArr = [10, 20, 30].map(function (index, curr) {
  console.log(index, curr);
  return curr + 5;
});

console.log(newArr);
