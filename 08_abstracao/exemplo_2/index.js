/**
 * ABSTRAÇÃO -
 * Uma classe abstrata não pode ser instanciada, ela é desenvolvida para representar entidades e conceitos abstratos.
 * Você não pode criar um objeto a partir de uma classe abstrata. Uma classe abstrata pode ser herdada e geralmente 
 * serve como classe base para outras classes, pode conter atributos, construtores e métodos;
 * 
 * Em JavaScript não temos uma palavra reservada para definir uma classe abstrata, realizamos uma verificação no seu construtor 
 * através do 'new.target' para verificar se a classe está sendo diretamente instanciada, caso sim, lançamos um erro.
 * 
*/

class Conta {
    #agencia;
    #conta;
    #saldo;

    constructor(agencia, conta, saldo) {
        /**
         * Verifica se a instância criada refere-se a classe abstrata Conta, caso seja, lança um erro infomando que esta classe não pode ser instanciada.
         */
        if (new.target === Conta) {
            throw new TypeError('Cannot create an instance of the abstract class');
        }

        this.#agencia = agencia;
        this.#conta = conta;
        this.saldo = saldo || 0;
    }

    get saldo() {
        return this.#saldo;
    }
    set saldo(saldo) {
        this.#saldo = saldo;
    }
    get conta() {
        return this.#conta;
    }

    depositar(valor) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado na conta ${this.conta}. Saldo: R$${this.#saldo}`;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return `Saque de R$${valor} realizado na conta ${this.conta}. Saldo: R$${this.#saldo}`;
        } else {
            return "Saldo insuficiente.";
        }
    }
    rendimentoJuros() {
        throw new Error('Método abstrato deve ser implementada nas subclasses');
    }
}

class ContaCorrente extends Conta {
    /**
     * Sobrescreve a função da classe Pai retornando uma mensagem de informação ao usuário.
     * @returns 
     */
    rendimentoJuros() {
        return "Não há rendimento de juros em uma conta corrente.";
    }
}

class ContaPoupanca extends Conta {
    /**
     * Sobrescreve a função da classe Pai calculando o valor do juros referente ao saldo em conta poupança, soma o valor dos juros calculado
     * ao saldo da conta.
     * @returns 
     */
    rendimentoJuros() {
        const taxaJuros = 0.03; // Taxa de juros de 3% ao mês
        const juros = this.saldo * taxaJuros;
        this.saldo += juros;
        return `Rendimento de juros de R$${juros.toFixed(2)} na conta poupança ${this.conta}. Saldo: R$${this.saldo}`;
    }
}


// Exemplo de uso
const cc1 = new ContaCorrente("001", "12345");
cc1.depositar(500);
cc1.rendimentoJuros(); 

const cp1 = new ContaPoupanca("002", "67890", 1500);
cp1.depositar(1000);
cp1.rendimentoJuros(); 

// Acessando o saldo de forma segura
console.log(`Saldo da conta corrente: R$${cc1.saldo.toFixed(2)}`);
console.log(`Saldo da conta poupança: R$${cp1.saldo.toFixed(2)}`);