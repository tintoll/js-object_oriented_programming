class Person {
  // 생성할때 초기화용도로 사용하는 constructor 메서드
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  // 메소드를 구현할때 function 키워드를 사용하지 않는다.
  sum() {
    return "class : " + (this.first + this.second);
  }
}

// prototype도 그대로 사용가능 함.
// Person.prototype.sum = function() {
//   return "Modifyed : " + this.first + this.second;
// };

var lee = new Person("lee", 10, 30);
var kim = new Person("kim", 40, 20);
kim.sum = function() {
  return "this : " + (this.first + this.second);
};

console.log(lee.sum());
console.log(kim.sum());
