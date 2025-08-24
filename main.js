import { HashMap } from "./hashMap.js";
const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.length); // Expected output before growth : 12

test.set("moon", "silver");
console.log(test.length); //Expected output after growth : 13

console.log(test.get("apple")); // red
test.set("apple", "green");
console.log(test.get("apple")); // green

console.log(test.remove("apple")); // true
console.log(test.remove("vs code")); // false
console.log(test.has("carrot")); // true

console.log(test.keys()); // keys array
console.log(test.values()); // values array
console.log(test.entries()); // key value pair array
// test.buckets[100] = "something"; // Error
// console.log(test.buckets[3]) // Error
console.log(test.getBucket(3).head); // Node { key: 'carrot', value: 'orange', nextNode: null }
console.log(test.getBucket(100)); // Error: Trying to access index out of bounds
test.clear(); // reset the hashmap
console.log(test.length); // Expected output after clear() : 0
console.log(test.keys()); // Output []
console.log(test.values()); // Output []
console.log(test.entries()); //Output []
