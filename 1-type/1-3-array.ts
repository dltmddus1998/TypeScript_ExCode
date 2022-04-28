{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scores: Array<number> = [1, 3, 3];
    function printArray(fruits: readonly string[]) { // readonly로 명시된 배열은 변경 불가능하다

    }
    // Tuple 
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123

    // 구조분해할당을 이용하면 좀 더 명확하게 확인할 순 있지만,
    // 데이터를 사용하는 곳에서 임의로 변수명을 써야한다는 단점이 존재한다.
    const [name, age] = student;
}