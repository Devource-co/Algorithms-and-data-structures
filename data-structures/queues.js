class Queue {
  constructor(props) {
    this.data = {};
    this.count = 0;
    this.lowerIndex =0;
  }

  enqueue(value) {
    this.data[this.count] = value;
    this.count++;
    return this.data;
  }

  dequeue() {
    if (this.count === 0) {
      return undefined;
    }

    var result = this.data[0];
    delete this.data[this.lowerIndex];
    this.lowerIndex++;
    return this.data
  }
  
}

var queues = new Queue();

console.log(queues.enqueue(5));
console.log(queues.enqueue(3));
console.log(queues.enqueue(4));

console.log(queues.dequeue());
console.log(queues.dequeue());

class PriorityQueue {
  constructor(props) {
    this.collection = [];
  }

  enqueue(value) {
    let added;
    if (this.collection.length === 0) {
      this.collection.push(value);
    } else {
      for (var i = 0; i < this.collection.length; i++) {
        if (value[1] < this.collection[i][1]) {
          this.collection.splice(i,0, value);
          added = true;
          break;
        }
      }
    if(!added) {
      this.collection.push(value);
    }
    }
    return this.collection;
  }

  dequeue() {
    var value = this.collection.shift();
    return value[0];
  }
}

console.log('======================= Priority Queues ==============================')

var priority = new PriorityQueue();

console.log(priority.enqueue(['cat', 3]))
console.log(priority.enqueue(['dog', 2]))
console.log(priority.enqueue(['cow', 4]))
console.log(priority.dequeue());
