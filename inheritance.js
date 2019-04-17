class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "class : " + (this.first + this.second);
  }
}

// 새로운 메소드를 추가하고 싶을때 Person에다가 넣어주면 Person으로 만든 객체에 모두 영향을 미친다.
// 그래서 모두에게 영향을 미치지 않게 하기 위해서 새로운 클래스를 만들어서 사용한다.
// 그때 Person 에서 사용하던 부분을 가져오고 싶으면 extends키워드로 상속해주면 된다.
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    // super키워드를 이용하여 Person의 기능을 사용할수 있다.
    super(name, first, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var lee = new PersonPlus("lee", 10, 30, 40);

console.log(lee.sum());
console.log(lee.avg());
