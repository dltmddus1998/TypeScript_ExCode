{
    // // JavaScript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript 👌
    // function isAdd(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript 👌
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // Javascript 🔥 => TypeScript
    // Optional parameter
    // 파라미터에 필수적으로 값이 들어가는 게 아니라 선택할 수 있다. (원래는 필수적이어서 값이 없거나 타입이 다르면 error) -> '?' 사용
    function printName(firstName: string, lastName?: string) { // lastName은 optional
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Anna', undefined);

    // Default parameter - 기본값 설정
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();    
}