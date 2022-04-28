// Let's make a calculator 🧮


// 1. 계산해주는 함수 생성
// function calculate(symbol: string, num1: number, num2: number) {
//     if (symbol === 'add') {
//         return num1 + num2;
//     } else if (symbol === 'substract') {
//         return num1 - num2;
//     } else if (symbol === 'multiply') {
//         return num1 * num2;
//     } else if (symbol === 'divide') {
//         return num1 / num2;
//     } else {
//         return num1 % num2;
//     }
// }

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(command: Command, a: number, b: number): number {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); //1

