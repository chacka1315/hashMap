import { LinkedList } from "./bucketLinkedList.js";
export class HashMap {
  #load_factor = 0.75;
  #capacity = 16;
  #length = 0;
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
      this.#length++;
      return;
    }
    const node = this.buckets[hashCode].find(key);
    if (node) {
      node.value = value;
    } else {
      this.buckets[hashCode].append(key, value);
      this.#length++;
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    if (!this.buckets[hashCode]) return null;
    const node = this.buckets[hashCode].find(key);
    if (node) return node.value;
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    return this.buckets[hashCode].contains(key);
  }

  remove(key) {
    const hashCode = this.hash(key);
    const removeResult = this.buckets[hashCode].removeNode(key);
    removeResult && this.#length--;
    return removeResult;
  }

  get length() {
    return this.#length;
  }

  clear() {
    this.#capacity = 16;
    this.#length = 0;
    this.buckets = Array(this.#capacity);
  }

  keys() {
    let keys = [];
    this.buckets.forEach((bucket) => {
      let node = bucket.head;
      while (node) {
        keys.push(node.key);
        node = node.nextNode;
      }
    });
    return keys;
  }

  values() {
    let values = [];
    this.buckets.forEach((bucket) => {
      let node = bucket.head;
      while (node) {
        values.push(node.value);
        node = node.nextNode;
      }
    });
    return values;
  }

  entries() {
    let entries = [];
    this.buckets.forEach((bucket) => {
      let node = bucket.head;
      while (node) {
        entries.push([node.key, node.value]);
        node = node.nextNode;
      }
    });
    return entries;
  }
}
