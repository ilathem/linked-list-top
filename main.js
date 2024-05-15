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
      node = node.next;
    }
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    if (!this.root) return false;
    let node = this.root;
    let i = 0;
    while (node) {
      if (node.value === value) return i;
      i++;
      node = node.next;
    }
    return null;
  }

  // insertAt(value, index) that inserts a new node with the
  // provided value at the given index.
  insertAt(value, index) {
    if (index < 0) return null;
    if (index === 0) this.prepend(value);
    let i = 1;
    let node = this.root;
    while (node.next) {
      if (index === i) {
        const oldNode = node.next;
        const newNode = new Node(value);
        node.next = newNode;
        newNode.next = oldNode;
        return;
      }
      node = node.next;
      i++;
    }
    console.log(index, i);
    if (index === i) {
      this.append(value);
    } else {
      return null;
    }
    console.log(node);
    console.log(i);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  method() {

  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");

list.toString();
list.insertAt("x", 4);
list.toString();

list.toString();
list.insertAt("x", 4);
list.toString();

list.toString();
list.insertAt("x", 4);
list.toString();
