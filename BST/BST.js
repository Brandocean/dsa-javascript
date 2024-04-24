class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }       
      
	/// WRITE MINVALUENODE METHOD HERE ///
	minValueNode(currentNode){
	    
	    while(currentNode.left !== null){
	        currentNode = currentNode.left;
	    }
	    
	    return currentNode;
	    
	}

}



let myTree = new BST()

myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

console.log("minValueNode from root:", myTree.minValueNode(myTree.root).value);
console.log("\nminValueNode from root.right:", myTree.minValueNode(myTree.root.right).value);


/*
    EXPECTED OUTPUT:
    ----------------
    minValueNode from root: 18
    
    minValueNode from root.right: 52

*/