{
    // Array
    const fruits: string[] = ['π', 'π'];
    const scores: Array<number> = [1, 3, 3];
    function printArray(fruits: readonly string[]) { // readonlyλ‘ λͺμλ λ°°μ΄μ λ³κ²½ λΆκ°λ₯νλ€

    }
    // Tuple 
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123

    // κ΅¬μ‘°λΆν΄ν λΉμ μ΄μ©νλ©΄ μ’ λ λͺννκ² νμΈν  μ μμ§λ§,
    // λ°μ΄ν°λ₯Ό μ¬μ©νλ κ³³μμ μμλ‘ λ³μλͺμ μ¨μΌνλ€λ λ¨μ μ΄ μ‘΄μ¬νλ€.
    const [name, age] = student;
}