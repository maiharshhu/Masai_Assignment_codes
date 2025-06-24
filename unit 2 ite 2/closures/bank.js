function bankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
    reset() {
      balance = initialBalance;
    }
  };
}


const account = bankAccount(100);
console.log(account.deposit(50));   
console.log(account.withdraw(30));  
console.log(account.getBalance()); 
account.reset();
console.log(account.getBalance()); 