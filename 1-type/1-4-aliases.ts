{
    // Type Aliases - 다양한 타입 직접 정의 가능
    type Text = string; // Text라는 새로운 타입은 '문자열'을 의미함
    const name: Text = 'seungyeon'; // const name: string = 'seungyeon'과 동일
    const address: Text = 'Korea';
    type Num = number;

    type Student = { // 특정 객체 정의 가능
        name: string,
        age: number;
    };
    const student: Student = {
        name: 'seungyeon',
        age: 23,
    }
    
    // String Literal Types - 타입을 문자열로도 지정할 수 있음
    // 특정 문자열로 지정한 타입에는 해당 문자열만 할당할 수 있음
    type Name = 'name';
    let seungyeonName: Name ;
    seungyeonName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
}