var kim = {
  name: "kim",
  first: 10,
  second: 20
};

var lee = {
  name: "lee",
  first: 30,
  second: 40
};

function sum(prefix) {
  // this = kim
  return prefix + (this.first + this.second);
}
// call는 넘어오는 객체로 this를 변경한다.
console.log("sum.call(kim) : ", sum.call(kim, "==>")); // apply <- 동일한 일을 함.
console.log("sum.call(lee) : ", sum.call(lee, " : "));

// bind는 새로운 함수를 리턴 해준다.
var kimSum = sum.bind(kim, "-->");
console.log("kimSum : ", kimSum());
