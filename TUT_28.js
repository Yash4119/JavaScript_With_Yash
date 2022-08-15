console.log("this is tutorial 28 and today we will learn object prototype");

let obj = {
  name: "yash ambekar",
  address: "Devale",
  age: 21,
};

console.log(obj);

function Obj(givenName, givenadr, givenage) {
  this.name = givenName;
  this.address = givenadr;
  this.age = givenage;
}

Obj.prototype.getName = function () {
  return this.name;
};
Obj.prototype.setName = function (newname) {
  this.name = newname;
};

let obj2 = new Obj("Krishna Kotgire", "Lonavla", 21);
obj2.setName("Avdesh Vora");
console.log(obj2);
