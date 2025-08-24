import { LinkedList } from "./bucketLinkedList.js";
export class hashMap {
  #load_factor = 0.8;
  #capacity = 16;
  constructor() {
    this.buckets = Array(this.#capacity);
  }

  hash(key) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode = (31 * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = new LinkedList();
      this.buckets[hashCode].append(key, value);
      return;
    }
    const node = this.buckets[hashCode].find(key);
    node ? (node.value = value) : this.buckets[hashCode].append(key, value);
  }
}
