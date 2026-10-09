// OConta Bancária 
const contaBancaria = {
    numeroConta: "12345-X",
    saldo: 1000,

    // Método para depositar
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    },

    // Método para sacar 
    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
        } else if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("Saldo insuficiente!");
        }
    },

    // Método para exibir o saldo
    informarSaldo() {
        const mensagem = `Conta: ${this.numeroConta} | Saldo Atual: R$ ${this.saldo.toFixed(2)}`;
        console.log(mensagem);
        alert(mensagem);
        return this.saldo;
    }
};

// Testes no console 
contaBancaria.informarSaldo(); 
contaBancaria.depositar(500);  
contaBancaria.sacar(200);      
contaBancaria.sacar(2000);     
contaBancaria.informarSaldo();
