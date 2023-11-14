export default class Conta{
    #agencia;
    #numConta;
    #saldo = 0;

    constructor(ag,ct){
        if(new.target === Conta) { //verificando se a classe que esta sendo instanciada e Conta
            throw new Error(`Nao e possivel instanciar uma classe do tipo abstrata`);
        }
        this.#agencia = ag;
        this.#numConta = ct;
    }

    get Saldo(){ return this.#saldo }
    set Saldo(val) { this.#saldo = val }

    get Agencia() { return this.#agencia }
    get NumConta() { return this.#numConta }

    depositar(valor){
        if(valor > 0 ){
            this.#saldo += valor;
            return `Deposito de R$${valor.toFixed(2)} realizado na conta ${this.#numConta}. Saldo: R$${this.#saldo}`; 
        }
        else{
            return `Valor invalido`;
        }
    }

    saque(valor){
        if(valor < this.#saldo){
            this.#saldo -= valor;
            return `Saque de R$${valor.toFixed(2)} realizado na conta ${this.#numConta}. Saldo: R$${this.#saldo.toFixed(2)}`;
        }
        else{
            return `Saldo insulficiente`;
        }
    }

}