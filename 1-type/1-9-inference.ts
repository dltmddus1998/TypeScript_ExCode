{
    // Type Inference
    let text = 'hello';
    function print(message = 'hello') {
        console.log(message);
        
    }

    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2); // result -> 자동으로 숫자타입 결정
}