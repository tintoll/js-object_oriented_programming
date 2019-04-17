function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// Person이 공통적으로 사용하는 기능이나 속성을 정의할려면 어떻게 해야하나.
// 이렇경우 prototype을 이용한다.
// 이렇게 사용 할 경우 sum을 한번 생성하기 때문에 메모리도 절약할 수 있다.
Person.prototype.sum = function() {
  return "Modifyed : " + this.first + this.second;
};

var lee = new Person("lee", 10, 30);
var kim = new Person("kim", 40, 20);
kim.sum = function() {
  return "this : " + this.first + this.second;
};

console.log(lee.sum());
console.log(kim.sum());
