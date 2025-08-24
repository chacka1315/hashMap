import { hashMap } from "./hashMap.js";
const MyHashMap = new hashMap();

console.log(MyHashMap.hash("rama"));
console.log(MyHashMap.hash("sita"));
console.log(MyHashMap.buckets[3]);
MyHashMap.set("rama", "24");
console.log(MyHashMap.buckets[3].head);
MyHashMap.set("rama", "20");
console.log(MyHashMap.buckets[3].head);
MyHashMap.set("sita", "25");
console.log(MyHashMap.buckets[3].head);
