class BankAccount {
    private _balance: number;

    constructor(balance: number) {
        this._balance = balance;
    }

    deposit(amount: number): void {
        this._balance += amount;
    }
    withdraw(amount: number): void {
        if (this._balance < amount) {
            return;
        }

        this._balance -= amount;
    }
    getBalance(): number {
        return this._balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());

const account2 = new BankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance());
