{
    type Video = {
        title: string;
        author: string;
    }
    
    // type object 정의 안에서 '[]'를 이용하면 for...in을 사용한 것과 같다.
    // ?를 통해 optional 설정해줬으므로, T의 키들을 써도 되고 안써도 된다.
    type Optional<T> = {
        // P는 T에 있는 모든 키들 중 하나: T에서 P에 해당하는 값
        [P in keyof T]?: T[P] 
    };
    
    // 타입 안에 있는 데이터들이 변경될 수 없게 설정
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }
    
    type VideoOptional = Optional<Video>;
    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }
    
    // 재사용성...
    type Animal = {
        name: string;
        age: number;
    }
    const animal: Optional<Animal> = {
        name: 'dog'
    }
    animal.name = 'cat';
    
    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'lee'
    };
    // video.title = 'ha'; // error
    
    // 기존의 값의 타입을 쓰거나 null이 가능하도록 하는 타입
    type Nullable<T> = { [P in keyof T]: T[P] | null };

    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }
}