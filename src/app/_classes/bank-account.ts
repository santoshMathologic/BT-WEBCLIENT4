export class BankAccount {

    private name: string  = 'santosh';
    private age: number  = 21;
    private height: number  = 5.5;

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    public displayDetails() {
        console.log("" + this.name);
        console.log("" + this.age);
        console.log("" + this.height);

    }
}



