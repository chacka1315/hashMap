import { Node } from "./bucketListNode.js";
export class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }

  append(key, value) {
    if (!this.#head) {
      this.#head = new Node(key, value);
      return;
    }
    let lastNode = this.#head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    lastNode.nextNode = new Node(key, value);
  }

  size() {
    if (!this.#head) return 0;
    let size = 1;
    let currentNode = this.#head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return size;
  }

  get head() {
    if (!this.#head) return null;
    return this.#head;
  }

  get tail() {
    if (!this.#head) return null;
    let lastNode = this.#head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  contains(key) {
    if (!this.#head) return false;
    let isContains = false;
    let node = this.#head;
    while (node !== null) {
      if (node.key === key) {
        return (isContains = true);
      }
      node = node.nextNode;
    }
    return isContains;
  }

  find(key) {
    if (!this.#head) return null;
    let node = this.#head;
    while (node !== null) {
      if (node.key === key) {
        return node;
      }
      node = node.nextNode;
    }
    return null;
  }

  findIndex(key) {
    if (!this.#head) return null;
    let index = 0;
    let node = this.#head;
    while (node !== null) {
      if (node.key === key) {
        return index;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    if (!this.#head) return null;
    let listString = `( ${this.#head.node} ) --> `;
    let node = this.#head.nextNode;
    while (node !== null) {
      listString += `( ${node.key} ) --> `;
      node = node.nextNode;
    }
    return listString + null;
  }

  removeNode(key) {
    if (!this.#head) return false;
    if (this.#head.key === key) {
      this.#head = this.#head.nextNode;
      return true;
    }
    let node = this.#head.nextNode;
    let previousNode = this.#head;
    while (node !== null) {
      if (node.key === key) {
        previousNode.nextNode = node.nextNode;
        return true;
      }
      previousNode = node;
      node = node.nextNode;
    }
    return false;
  }
}
