{
    // Union Types: OR
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) { 
        // direction이라는 인자를 받아오는데 이 때 이 인자의 타입을 위에서 정의한 Direction으로 정해준다.
        console.log(direction);
    }
    move('right');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16// 위에 정의된 3가지 숫자중 하나만 할당 가능하다.

    // 실전 예제
    // function : login -> success || fail 
    // 로그인 성공시 네트워크에서 받아온 response 리턴, 실패시 해당 이유를 보여주는 함수를 만들 것이다.
    // 이런 경우와 같이 Union Type은 발생할 수 있는 다양한 케이스 중에 하나만 정하고 싶을 때 자주 사용한다.
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!',
            },
        }
    }

    // printLoginState(state)
    // success -> 🎉 body
    // fail -> 😭 reason

    // 💩 바람직하지 않은 코드
    function printLoginState(state: LoginState) {
        if ('response' in state) {
            // state 객체 안에 response가 있다면
            // state.response.body에 접근이 가능해진다
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😭 ${state.reason}`);
        }
    }

}