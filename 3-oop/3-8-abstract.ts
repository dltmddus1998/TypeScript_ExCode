{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // abstract 키워드를 붙이면 CoffeeMachine 자체로는 Object 생성 불가
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBenas: number) {
            this.coffeeBeans = coffeeBenas; // 해당 클래스 안에 있는 coffeeBeans를 전달된 coffeeBeans만큼 할당
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('values for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...🔥');
            
        }

        // abstract 메소드는 구현사항을 쓰면 안됨.
        protected abstract extract(shots: number): CoffeeCup ;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...🥛');
        }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true,
            }
        }
    }

    // 부모 클래스인 CoffeeMachine이 CoffeeMaker 인터페이스의 규격에 따르기 때문에 
    // 두 자식 클래스는 CoffeeMaker 배열로 만들 수 있다.
    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ]; 
    machines.forEach(machine => {
        console.log('----------------------');
        machine.makeCoffee(1);
    })
}