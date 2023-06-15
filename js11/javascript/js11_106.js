const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { name: "탄이", age: 5, address: "Seoul" };
const obj3 = { friends: ["혜림", "현아", "현일", "우림"] };

const newobj1 = Object.assign({}, obj1);
const newobj2 = Object.assign({}, obj1, obj2);
newobj1.four = 4;

console.log(obj1);
console.log(newobj1);
console.log(newobj2);

console.log("\n");

const newobj3 = Object.assign(obj1, obj3);

console.log(obj1);
console.log(newobj1);
console.log(newobj2);
console.log(newobj3);
