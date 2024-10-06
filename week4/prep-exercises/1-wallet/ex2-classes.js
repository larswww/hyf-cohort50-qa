// import eurosFormatter from './euroFormatter.js';

class Wallet {
  #name;
  #cash;
  static counter = 0;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
    walletVersion()
  }

  get name() {
    return this.#name;
  }

  static walletVersion () {
    console.log('Cohort50_Wallet_v5.1.3')
    console.log('Number of wallets ', this.counter)
    this.counter++;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    this.#cash -= amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring from ${this.name} to ${
        wallet.name
      }`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance:`
    );
  }
}

function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

  Wallet.walletVersion()
  Wallet.walletVersion()
  Wallet.walletVersion()



  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);



  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
