{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBenas: number) {
            this.coffeeBeans = coffeeBenas; // 해당 클래스 안에 있는 coffeeBeans를 전달된 coffeeBeans만큼 할당
        }   

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('values for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }
    }


    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    // console.log(maker);

    class User {
        get fullName(): string { 
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('values for age should be greater than 0')
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {

        }
    }
    const user = new User('Steve', 'Jobs');
    user.age = 6; // 내부적으로 internalAge 접근은 불가하지만 set age()를 통해 internalAge 값 할당 가능
    console.log(user.fullName); // Ellie Jobs
    console.log(user.age);
    
    
    
}