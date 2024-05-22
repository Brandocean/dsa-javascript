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

    #rInsert(value, currentNode = this.root) {
        if (currentNode === null) return new Node(value);

        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;
    }

    rInsert(value) {
        if (this.root === null) this.root = new Node(value);
        this.#rInsert(value);
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

    // recursiveContains
    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;
        if (value === currentNode.value) return true;
        if (value < currentNode.value) return this.rContains(value, currentNode.left);
        if (value > currentNode.value) return this.rContains(value, currentNode.right);
    }

    #deleteNode(value, currentNode) {
        if (currentNode === null) return null;

        // Iterate through the binary search tree
        if (value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#deleteNode(value, currentNode.right);
        } else { // delete cases
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            } else if (currentNode.left === null) {
                currentNode = currentNode.right;
            } else if (currentNode.right === null) {
                currentNode = currentNode.left;
            } else {
                let subMinTree = this.minValue(currentNode.right);
                currentNode.value = subMinTree;
                currentNode.right = this.#deleteNode(subMinTree, currentNode.right);
            }
        }

        return currentNode;
    }

    deleteNode(value) {
        this.root = this.#deleteNode(value, this.root);
    }

    minValueNode(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    minValue(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    BFS() {
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length) {
           currentNode = queue.shift();
           results.push(currentNode.value);
           if(currentNode.left) queue.push(currentNode.left);
           if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }

    DFSPreOrder() {
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    DFSPostOrder() {
        let results = [];
        function traverse(currentNode){
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }

	DFSInOrder(){
	    let results = [];
	    function traverse(currentNode){
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
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

console.log('\nBFS')
console.log( myTree.BFS() );
console.log('\nPreOrder')
console.log( myTree.DFSPreOrder() );
console.log('\nPostOrder')
console.log( myTree.DFSPostOrder() );
console.log('\nInOrder')
console.log( myTree.DFSInOrder() );

