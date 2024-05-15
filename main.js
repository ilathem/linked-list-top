class LinkedList {
  constructor() {
    this.root = null;
  }
  toString() {
    let string = ` ( ${this.root?.value ?? 'null'} )`;
    let node = this.root;
    while (node) {
      string += ` -> ( ${node.next?.value ?? 'null'} )`; // optional chaining!
      node = node.next
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
        if (node.next) 
          node = node.next;
        else {
          node.next = new Node(value);
          return;
        }
      }
    }
  }
  // prepend(value) {
  //   if (this.root === null) {
  //     this.root = new Node(value);
  //   } else {
  //     let node = this.root;
  //     this.root = new Node(value)
  //     this.root.next = node;
  //     while (node.next) {
        
      
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.append('a');
// list.append('b');
// list.append('c');
// list.prepend('d');
list.toString();
