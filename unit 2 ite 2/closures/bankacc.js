function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}


const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50));   
console.log(myAccount.withdraw(30));   
console.log(myAccount.getBalance());   
