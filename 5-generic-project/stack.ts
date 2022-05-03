interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>; 
}

class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
        return this._size;
    }
    
    push(value: T) {
        if(this._size === this.capacity) {
            throw new Error('Stack is full!');
        }
        // head에 이미 정확한 타입이 명시되어 있는 상황 -> 제네릭 타입 생략 가능 (타입 추론)
        const node = {
            value,
            next: this.head
        };
        this.head = node;
        this._size++;
    }

    pop(): T {
        if (this.head == null) { 
            throw new Error("Stack is Empty");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl<string>(10);
stack.push('sy 1');
stack.push('bob 2');
stack.push('steve 3');
while(stack.size !== 0) {
    console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while(stack2.size !== 0) {
    console.log(stack2.pop());
}