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
}

let myTree = new BST()

myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

console.log("minValueNode from root:", myTree.minValue(myTree.root));
console.log("\nminValueNode from root.right:", myTree.minValue(myTree.root.right));

let myBST = new BST();
myBST.rInsert(2);
myBST.rInsert(1);
myBST.rInsert(3);

console.log(`Root -> ${myBST.root.value}`);
console.log(`RootL -> ${myBST.root.left.value}`);
console.log(`RootR -> ${myBST.root.right.value}`);

myBST.deleteNode(2);

console.log(`Root -> ${myBST.root.value}`);
console.log(`RootL -> ${myBST.root.left.value}`);
console.log(`RootR -> ${myBST.root.right}`);

/*
    EXPECTED OUTPUT:
    ----------------
    minValueNode from root: 18
    
    minValueNode from root.right: 52

*/