{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login1(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        }
    }

    // printLoginState(state)
    // success -> 🎉 body
    function printLoginState1(state: LoginState) {
        if (state.result === 'success') {
            // state 객체 안에 response가 있다면
            // state.response.body에 접근이 가능해진다
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😭 ${state.reason}`);
        }
    }
}