export default class Conta {
    #agencia;
    #conta;
    #saldo;

    constructor(ag, ct, saldo) {
        if (new.target === Conta) { //verificando se a classe que esta sendo instanciada e Conta
            throw new Error(`Nao e possivel instanciar uma classe do tipo abstrata`); //as instruções após o throw não serão executadas
        }
        this.#agencia = ag;
        this.#conta = ct;
        this.#saldo = saldo || 0;
    }


    get Saldo() { return this.#saldo }
    set Saldo(value) {

        if (value > 0) {
            this.#saldo + value
        }
        else {
            return `Valor invalido.`;
        }

    }

    get Agencia() { return this.#agencia }

    get NumConta() { return this.#conta }

    Sacar(value){
        if(value <= this.#saldo){
            this.#saldo -= value;
            return `O saque realizado com sucesso. Saldo atual da conta: ${this.#saldo}`;
        }
        else{
            return `Saldo insulficiente.`
        }
    }

    Depositar(value){
        if(value > 0){
            this.#saldo += value;
            return `Deposito realizado com sucesso! Saldo atual da conta: ${this.#saldo}`;
        }
        else{
            return `Valor invalido.`
        }
    }

}