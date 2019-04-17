# js-object_oriented_programming

- Object : 서로 연관된 변수와 함수를 그룹핑하고 이름을 붙인것.



### Prototype 사용 이유

1. 공통적으로 기능이나 속성을 정의할수 있다. 
2. 객체 생성시 prototype으로 정의된 메소드는 한번 생성되기때문에 메모리를 절약할 수 있다. 

```javascript

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
```

