var memberArray = ["kim", "hong", "lee"];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager: "kim",
  developer: "hong",
  designer: "lee"
};

// 객체 내용 가져오기(2가지 방식)
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);

// 객체의 속성 수정
memberObject.designer = "leej";
console.log("after memberObject.designer", memberObject.designer);

// 객체의 속성 삭제
delete memberObject.developer;
console.log("after memberObject.developer", memberObject.developer);
