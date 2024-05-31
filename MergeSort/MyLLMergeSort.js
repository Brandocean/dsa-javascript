class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    //   +===================================================+
    //   |               WRITE YOUR CODE HERE                |
    //   | Description:                                      |
    //   | - This method merges another linked list          |
    //   |   (`otherList`) into the current list.            |
    //   |                                                   |
    //   | Side Effects:                                     |
    //   | - The merged list replaces the current list.      |
    //   | - The length of the list is updated.              |
    //   |                                                   |
    //   | Tips:                                             |
    //   | - A dummy node is used to simplify the            |
    //   |   merging process.                                |
    //   | - We traverse both lists, comparing each node.    |
    //   | - The smaller node is added to the new list.      |
    //   | - Finally, the remaining nodes are added.         |
    //   +===================================================+
	
	merge(otherList){
	    
	    let otherHead = otherList.head;
	    let dummy = new Node(0);
	    let current = dummy;
	    
	    while(this.head && otherHead){
	        if(this.head.value < otherHead.value){
	            current.next = this.head;
	            this.head = this.head.next;
	        } else{
	            current.next = otherHead;
	            otherHead = otherHead.next;
	        }
	        current = current.next;
	    }
	    
	    while(this.head){
	        current.next = this.head;
	        this.head = this.head.next;
	        current = current.next;
	    }
	    
	    while(otherHead){
	        current.next = otherHead;
	        otherHead = otherHead.next;
	        current = current.next;
	    }
	    
	    this.head = dummy.next;
	    current = this.head;
	    this.length += otherList.length;
	    
	}
}





// ------------------------------------
//  Merge two sorted lists
// ------------------------------------
const list1 = new LinkedList(1);
list1.push(3);
list1.push(5);
const list2 = new LinkedList(2);
list2.push(4);
list2.push(6);
console.log("Merge two sorted lists:");
list1.printList(); // Should print: 1 -> 3 -> 5
list2.printList(); // Should print: 2 -> 4 -> 6
list1.merge(list2);
list1.printList(); // Should print: 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log("---------------");

// ------------------------------------
//  Merge lists with duplicates
// ------------------------------------
const list5 = new LinkedList(1);
list5.push(2);
list5.push(3);
const list6 = new LinkedList(1);
list6.push(2);
list6.push(3);
console.log("Merge lists with duplicates:");
list5.printList(); // Should print: 1 -> 2 -> 3
list6.printList(); // Should print: 1 -> 2 -> 3
list5.merge(list6);
list5.printList(); // Should print: 1 -> 1 -> 2 -> 2 -> 3 -> 3
console.log("---------------");

// ------------------------------------
//  Merge lists with negative numbers
// ------------------------------------
const list7 = new LinkedList(-1);
list7.push(0);
const list8 = new LinkedList(-2);
list8.push(-1);
console.log("Merge lists with negative numbers:");
list7.printList(); // Should print: -1 -> 0
list8.printList(); // Should print: -2 -> -1
list7.merge(list8);
list7.printList(); // Should print: -2 -> -1 -> -1 -> 0
console.log("---------------");

// ------------------------------------
//  Merge lists where one is larger
// ------------------------------------
const list9 = new LinkedList(1);
list9.push(2);
const list10 = new LinkedList(3);
list10.push(4);
list10.push(5);
console.log("Merge lists where one is larger:");
list9.printList(); // Should print: 1 -> 2
list10.printList(); // Should print: 3 -> 4 -> 5
list9.merge(list10);
list9.printList(); // Should print: 1 -> 2 -> 3 -> 4 -> 5
console.log("---------------");