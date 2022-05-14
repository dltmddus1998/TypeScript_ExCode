{
    const obj = {
        name: 'ellie'
    }
    obj.name // ellie
    obj['name'] // ellie 

    // 인덱스를 기반으로 타입을 결정할 수 있다.
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name']; // Name: String
    const text: Name = 'jhello';

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person: Person = {
        name: 'ellie',
        gender: 'male',
    }
}