class Heap {

    #heap = [];

    getHeap(){
        return [...this.#heap] // Return a copy of the heap
    }

    #leftChild(index){
        return 2 * index + 1;
    }
    
    #rightChild(index){
        return 2 * index + 2;
    }

    #parent(index){
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2){
        [this.#heap[index1],this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }

    insert(value){
        this.#heap.push(value);
        let current = this.#heap.length - 1;

        while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]){
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }
    }

    remove(){
        if(this.#heap.length === 0) return null;

        if(this.#heap.length === 1) return this.#heap.pop();

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);

        return maxValue;
    }

    #sinkDown(index){
        let maxIndex = index;
        let size = this.#heap.length;

        while(true){
            let leftIndex = this.#leftChild(index);
            let rightIndex = this.#rightChild(index);

            if(leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]){
                maxIndex = leftIndex;
            }

            if(rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]){
                maxIndex = rightIndex;
            }

            if(maxIndex !== index){
                this.#swap(index, maxIndex);
                index = maxIndex;
            } else {
                return;
            }
        }

    }
}

let myHeap = new Heap();

myHeap.insert(100);
myHeap.insert(99);
myHeap.insert(75);
myHeap.insert(58);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(18);

console.log(myHeap.getHeap());

myHeap.remove()

console.log(myHeap.getHeap());

myHeap.remove()

console.log(myHeap.getHeap());

