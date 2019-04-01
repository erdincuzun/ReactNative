let obj1 = {ad: "ES6, get"}
let adi = Reflect.get(obj1, "ad")
console.log(adi)

let obj2 = {ad: ""};
Reflect.set(obj2, "ad", "ES6, set");
console.log(obj2.ad);

let obj3 = {};
Reflect.defineProperty(obj3, "ad", {value: "ES6, define"});
console.log(obj3.ad); 

let obj4 = {ad: "ES6, delete"};
Reflect.deleteProperty(obj4, "ad");
console.log(obj4.ad);

let obj5 = {ad: "ES6"};
console.log(Reflect.has(obj5, "ad"));