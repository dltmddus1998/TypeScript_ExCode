class TimeOutError extends Error {

}
class OfflineError extends Error {

}

class NetworkClient {
    tryConnect(): void {
        throw new OfflineError('no network!!');
    }
}

class UserService {
    constructor(private client: NetworkClient) {}

    login() {
        this.client.tryConnect();
    }
}

class App {
    constructor(private userService: UserService) {}
    run() {
        try {
            this.userService.login();   
        } catch(err) {
            if (err instanceof OfflineError) {
                //
            }
        }
    };
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();