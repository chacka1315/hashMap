import { hashMap } from "./hashMap.js";
const myHashMap = new hashMap();

myHashMap.set("rama", "24");
myHashMap.set("sita", "25");
console.log(myHashMap.buckets[3].head);
console.log(myHashMap.length);
myHashMap.remove("rama");
console.log(myHashMap.buckets[3].head);
console.log(myHashMap.length);
myHashMap.remove("sita");
console.log(myHashMap.buckets[3].head);
console.log(myHashMap.length);
