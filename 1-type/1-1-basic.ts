{
    // number
    const num:number = 1;

    // String
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined - 값이 결정되지 않은 상태
    let name: undefined; //💩 - 이렇게 쓰지 않음
    let age: number | undefined; //👌
    age = undefined;
    age = 1;

    // 무언가가 있고 없을 때 undefined를 많이 씀
    function find(): number | undefined {
        return undefined;
    }

    // null - 값이 비어져 있는 명확한 상태
    let person: null; //💩
    let person2: string | null; //👌

    // unknown - 무슨 타입인지 모르는 상태 -> 가능하면 쓰지 말기!! 💩
    // 타입스크립트에서 자바스크립트 라이브러리를 이용할 때 자바스크립트에서 리턴하는 타입을 모를 때 쓰긴 하지만 웬만하면 쓰지말기
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any - 어떤 것이든 담을 수 있음 💩
    let anything: any = 0;
    anything = 'hello';

    // void - 함수에서 아무것도 리턴하지 않으면 저절로 void타입이 된다. (함수에서 타입 지정하는 것은 관례적이니 써주는게 좋다)
    // 변수에서 쓰는 일은 굉장히 드물다.
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    // 애플리케이션에서 예상치 못한 핸들링 못하는 에러를 발견했을 때 사용 - 리턴할 계획 없음을 명시하는 never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
    }
    let neverEnding: never; // 💩

    // object - primitive type 제외한 모든 object type 할당 가능 
    let obj: object; // 💩 - object 중 어떤 타입인지 자세히 명시해줘야함!!
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
}