//Implementing min Heap

class minHeap{
    heapSize:number = undefined;
    minheap:number [] = undefined;
    realSize:number = undefined;
    constructor(heapSize: number){
        this.heapSize = heapSize;
        this.minheap = Array.from({length: heapSize}, (v, i) => 0);
        this.realSize = 0;

    }
    add (element:number){
        this.realSize +=1;
        if(this.realSize> this.heapSize){
            console.log('Add too many elements!');
            this.realSize -= 1;
            return;
        }
        this.minheap[this.realSize] = element
        let index:number = this.realSize;
        let parent = Math.floor(index / 2);
        while (this.minheap[index] < this.minheap[parent] && index > 1){
            
        }
    }
    // def add(self, element):
    // self.realSize += 1
    // # If the number of elements in the Heap exceeds the preset heapSize
    // # print "Added too many elements" and return
    // if self.realSize > self.heapSize:
    //     print("Add too many elements!")
    //     self.realSize -= 1
    //     return
    // # Add the element into the array
    // self.minheap[self.realSize] = element
    // # Index of the newly added element
    // index = self.realSize
    // # Parent node of the newly added element
    // # Note if we use an array to represent the complete binary tree
    // # and store the root node at index 1
    // # index of the parent node of any node is [index of the node / 2]
    // # index of the left child node is [index of the node * 2]
    // # index of the right child node is [index of the node * 2 + 1]
    // parent = index // 2
    // # If the newly added element is smaller than its parent node,
    // # its value will be exchanged with that of the parent node 
    // while (self.minheap[index] < self.minheap[parent] and index > 1):
    //     self.minheap[parent], self.minheap[index] = self.minheap[index], self.minheap[parent]
    //     index = parent
    //     parent = index // 2
    
}