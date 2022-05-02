interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

// 전달하는 value를 한단계 감싸는 node라는 것을 만들어서 
// head가 새로들어온 값을 가리키고, 이전에 가리키던 것이 있다면, 그것들을 찾아가는 형식. 
type StackNode = {
    // 항상 사용자가 데이터를 넣어서 한단계 감싸는 무언가를 만든다면 
    // 불변성을 유지하는 것이 좋다. -> readonly
    readonly value: string;
    readonly next?: StackNode; // 다음 스택 노드를 가리키거나 아무것도 가리키지 않는다. ?로 optional 설정
}

class StackImpl implements Stack {
    // 내부에서 동일한 이름을 쓰는 경우 앞에 _(언더바)를 붙여주면 된다.
    private _size: number = 0;
    
    // head는 stacknode를 가리킬수도 아닐수도 있음
    private head?: StackNode;

    // 보통 constructor을 통해 size를 설정해놓는다.
    constructor(private capacity: number) {}

    // getter만 있고 setter는 없기때문에 내부적으로만 변경할 수 있다.
    get size() {
        return this._size;
    }
    
    // node를 먼저 만들고 
    // 2. 새로운 node는 head가 가리키는 값을 가리키도록
    // 3. head가 새로운 값을 가리키도록
    push(value: string) {
        if(this._size === this.capacity) {
            throw new Error('Stack is full!');
        }
        const node: StackNode = {
            value,
            // 2. 
            next: this.head
        };
        // 3. 
        // 방금 만든 노드 할당
        this.head = node;
        this._size++;
    }

    // head가 가리키고 있는 값 리턴
    pop(): string {
        // 스택이 비어있는경우 node는 없을수도 있다
        if (this.head == null) { // null == undefined, null !== undefined (null, undefined모두 거르기 위해 == 사용)
            throw new Error("Stack is Empty");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(10);
stack.push('sy 1');
stack.push('bob 2');
stack.push('steve 3');
while(stack.size !== 0) {
    console.log(stack.pop());
}