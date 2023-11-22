import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta{

    RendimentoJuros(){
        const txJuros = 0.03;
        const juros = this.Saldo * txJuros;
        
        return `Rendimento de juros de R$${juros.toFixed(2)}. Saldo atual na conta: R$${this.Saldo.toFixed(2)}`;
    }

}