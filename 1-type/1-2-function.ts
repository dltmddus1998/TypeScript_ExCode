{
    // // JavaScript π©
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript π
    // function isAdd(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript π©
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript π
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // Javascript π₯ => TypeScript
    // Optional parameter
    // νλΌλ―Έν°μ νμμ μΌλ‘ κ°μ΄ λ€μ΄κ°λ κ² μλλΌ μ νν  μ μλ€. (μλλ νμμ μ΄μ΄μ κ°μ΄ μκ±°λ νμμ΄ λ€λ₯΄λ©΄ error) -> '?' μ¬μ©
    function printName(firstName: string, lastName?: string) { // lastNameμ optional
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Anna', undefined);

    // Default parameter - κΈ°λ³Έκ° μ€μ 
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();    
}