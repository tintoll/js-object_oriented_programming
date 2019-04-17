// 클래스 생성
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function() {
    return this.first + this.second;
  };
}

console.log(Person("lee", 10, 30)); // 일반 함수 호출
console.log(new Person("lee", 10, 30)); // new 키워드를 이용하여 객체 생성

// 클래스 사용
var lee = new Person("lee", 10, 30);
var kim = new Person("kim", 40, 20);

console.log(lee.sum());
console.log(kim.sum());
