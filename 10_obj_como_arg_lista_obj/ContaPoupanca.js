import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta{

    rendimentoJuros( ) {
        const txJuros = 0.03;
        const juros = this.Saldo * txJuros;

        this.Saldo += juros;
        
        return `Rendimento de juros de R$${juros.toFixed(2)} na conta ${this.NumConta}. Saldo: R$${this.Saldo.toFixed(2)}`;
    }
}