function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function() {
  return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second);
  this.third = third;
}

// 비표준이라서 사용을 지향하지 않는다.
// PersonPlus.prototype.__proto__ = Person.prototype;
// 표준
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constuctor = PersonPlus;
PersonPlus.prototype.avg = function() {
  return (this.first + this.second + this.third) / 3;
};

var lee = new PersonPlus("lee", 10, 30, 40);

console.log(lee.sum());
console.log(lee.avg());
