interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }

    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);
    }

    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수 -> 👿
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// Employee를 확장한 타입만 가능하다는 뜻
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

// K extends keyof T : 객체 T 안에 있는 키의 타입
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const obj = {
    name: 'ellie',
    age: 20,
};
console.log(getValue(obj, 'name'));
