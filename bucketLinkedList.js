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
    if (!this.#head) return "The list is empty !";
    return this.#head;
  }

  get tail() {
    if (!this.#head) return "The list is empty !";
    let lastNode = this.#head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  at(index) {
    if (!this.#head) return "The list is empty !";
    let targetedNode = null;
    let count = 0;
    let currentNode = this.#head;
    while (currentNode && !targetedNode) {
      if (index === count) targetedNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
    return targetedNode ? targetedNode : "No node at that index !";
  }

  pop() {
    if (!this.#head) return "The list is empty !";
    if (!this.#head.nextNode) {
      this.#head = null;
    } else {
      let node = this.#head.nextNode;
      let previous = this.#head;
      while (node !== null) {
        if (node.nextNode === null) {
          previous.nextNode = null;
          return;
        }
        previous = node;
        node = node.nextNode;
      }
    }
  }

  contains(value) {
    if (!this.#head) return false;
    let isContains = false;
    let node = this.#head;
    while (node.nextNode !== null) {
      if (node.value === value) {
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
        return `Found at index : ${index}`;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }
  toString() {
    if (!this.#head) return "The list is empty !";
    let listString = `( ${this.#head.node} ) --> `;
    let node = this.#head.nextNode;
    while (node !== null) {
      listString += `( ${node.key} ) --> `;
      node = node.nextNode;
    }
    return listString + null;
  }

  insertAt(value, index) {
    const listeSize = this.size();

    if (!this.#head) return "The list is empty !";
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index > listeSize) {
      throw new Error(`Max index is ${listeSize}`);
    } else if (index === this.size()) {
      this.append(value);
      return;
    }

    let node = this.#head.nextNode;
    let previousNode = this.#head;
    let count = 1;
    while (node !== null) {
      if (count === index) {
        const newNode = new Node(value);
        previousNode.nextNode = newNode;
        newNode.nextNode = node;
        return;
      }
      previousNode = node;
      node = node.nextNode;
      count++;
    }
  }

  removeAt(index) {
    const listeSize = this.size();
    if (!this.#head) return "The list is empty !";
    if (index === 0) {
      this.#head = this.#head.nextNode;
      return;
    } else if (index > listeSize - 1) {
      throw new Error(`Max index is ${listeSize - 1}`);
    } else if (index === this.size() - 1) {
      this.pop();
      return;
    }
    let node = this.#head.nextNode;
    let previousNode = this.#head;
    let count = 1;
    while (node !== null) {
      if (count === index) {
        previousNode.nextNode = node.nextNode;
        return;
      }
      previousNode = node;
      node = node.nextNode;
      count++;
    }
  }
}
