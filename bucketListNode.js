export class Node {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}
