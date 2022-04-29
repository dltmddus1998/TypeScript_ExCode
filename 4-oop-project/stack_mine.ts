{
    type Doc = {
        id: string;
        data: object;
    }
    
    interface Stack {
        readonly size: number;
        push(value: Doc): void;
        pop(): Doc | undefined;
    }
    
    class Nodee {
        constructor(
            readonly prevNode: Nodee | undefined,
            readonly meta: Doc,
        ){}
    }
    
    type Head = {
        idx: number;
        node: Nodee | undefined;
    };
    
    class StackBasic implements Stack {
        private head: Head = {
            idx: 0,
            node: undefined
        };
        constructor(readonly size: number) {}
    
        // private
        private createNode(metaData: Doc): Nodee {
            return new Nodee(this.head.node, metaData);
        }
    
        private deleteNode(): void {
            if (this.head.idx <= 0) return;
            this.head.idx--;
            this.head.node = this.head.node?.prevNode;
        }
    
        // public
        push(value: Doc): void {
            if (this.head.idx >= this.size) {
                throw new Error("Array index out of bounds");
            }
            this.head.node = this.createNode(value);
            this.head.idx++;
        }
    
        pop(): Doc | undefined {
            const meta = this.head.node?.meta;
            this.deleteNode();
            return meta;
        }
    }
    
    const stack = new StackBasic(1);
    console.log(`stack.size: ${stack.size}`);
    console.log("try to push 1");
    stack.push({
        id: "abc124",
        data: {
            name: "seungyeon",
            message: "I love you",
        },
    });
    
    console.log(stack.pop());
    
    
}