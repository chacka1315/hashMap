import { hashMap } from "./hashMap.js";
const myHashMap = new hashMap();

myHashMap.set("rama", "24");
myHashMap.set("sita", "25");
console.log(myHashMap.length);

console.log(myHashMap.keys());
console.log(myHashMap.values());
