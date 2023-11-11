export default class Conta{
    #agencia;
    #numConta;
    #saldo;

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

}