class LinkedList {
  constructor() {
    this.root = null;
  }

  toString() {
    let string = ` ( ${this.root?.value ?? "null"} )`;
    let node = this.root;
    while (node) {
      string += ` -> ( ${node.next?.value ?? "null"} )`; // optional chaining!
      node = node.next;
    }
    console.log(string);
  }

  append(value) {
    console.log(`appending ${value}`);
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root;
      while (node) {
        if (node.next) node = node.next;
        else {
          node.next = new Node(value);
          return;
        }
      }
    }
  }

  prepend(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root;
      this.root = new Node(value);
      this.root.next = node;
    }
  }

  size() {
    if (this.root === null) return 0;
    else {
      let size = 0;
      let node = this.root;
      while (node) {
        size++;
        node = node.next;
      }
      return size;
    }
  }

  head() {
    return this.root;
  }

  tail() {
    let node = this.root;
    if (!node) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  at(index) {
    if (index < 0) return null;
    let i = 0;
    let node = this.root;
    while (node) {
      if (index === i) {
        return node;
      }
      node = node.next;
      i++;
    }
    return node;
  }

  // remove last element and returns it
  pop() {
    if (!this.root) return null;
    if (this.size() === 1) {
      const node = this.root;
      this.root = null;
      return node;
    }
    let node = this.root;
    while (node.next.next) {
      node = node.next;
    }
    const nodeToPop = node.next;
    node.next = null;
    return nodeToPop;
  }

  // return true if value in list, otherwise return false
  contains(value) {
    if (!this.root) return false;
    let node = this.root;
    while (node) {
      if (node.value === value) return true;
      node = node.next
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
console.log(`list ${list.contains('a') ? 'contains' : 'does not contain'} a`);
console.log(`list ${list.contains('b') ? 'contains' : 'does not contain'} b`);
console.log(`list ${list.contains('x') ? 'contains' : 'does not contain'} x`);
