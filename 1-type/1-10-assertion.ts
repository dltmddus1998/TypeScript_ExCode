{
    // Type Assertion
    function jsStrFunc(): any {
        return 2;
    }

    const result = jsStrFunc();
    // result라는 변수가 string 타입인걸 확신한다 -> type assertion 사용 가능 
    console.log((result as string).length);
    

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 💩

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers(); 
    numbers?.push(2); // 이게 배열일거라 확신한다면 ?추가 -> 옵션이 아니라 절대적으로 값이 있다고 확신할 때 쓰는 것.

    const button = document.querySelector('class')!; // 무조건 Null이 아니라 있을거라고 확신할 때 ! 추가
    if (button) {
        button.nodeValue;
    } 
    
}