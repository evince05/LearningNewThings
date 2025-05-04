export class OrderQueue {

	constructor() {
		this.front = null;
		this.rear = null;
		this.length = 0;
	}

	// don't need to declare "function", just the name.
	dequeue() {

		if (this.length == 0) {
			return;
		}
		else {
			let value = this.front.value;
			this.front = this.front.next;
	
			if (this.front == null) {
				// if the queue is now empty, clear rear
				this.rear = null;
			}

			this.length--;
			return value;
		}
	}

	enqueue(value) {
		let newNode = new Node(value);
		
		if (this.front == null) {
			// adding to empty queue
			this.front = newNode;
			this.rear = newNode;
		}
		else {
			this.rear.next = newNode;
			this.rear = newNode;
		}

		this.length++;
	}

	size() {
		return this.length;
	}
}

class Node {
		
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}