var kim = {
  name: "kim",
  first: 30,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};
// this의 의미는 this가 속해있는 메소드가 속해있는 객체를 가르킨다.
console.log("kim.sum()", kim.sum());
