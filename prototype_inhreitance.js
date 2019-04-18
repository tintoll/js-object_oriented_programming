var superObj = { superVal: "super" };
var subObj = { subVal: "sub" };

subObj.__proto__ = superObj; // prototype link를 통해서 superObj에있는 suerVal를 찾는다.
console.log("subObj.subVal", subObj.subVal);
console.log("subObj.superVal", subObj.superVal);

subObj.superVal = "super modify";
// subObj.superVal을 변경한 것이기 때문에 prototype link를 이용해서 사용한 superObj.superVal의 값은 변경되지 않는다.
console.log("superObj.superVal", superObj.superVal);
console.log("subObj.superVal", subObj.superVal);

// __proto__ 는 표준방식이 아니다.

// superObj를 부로로 하는 새로운 객체 subObj2를 만든다.
var subObj2 = Object.create(superObj);
subObj2.subVal = "sub";
console.log("subObj2.subVal", subObj2.subVal);
console.log("subObj2.superVal", subObj2.superVal);
