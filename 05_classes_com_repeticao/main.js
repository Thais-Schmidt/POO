/* 
Exemplo de classes com atributos e metodos semelhantes

Criar uma classe Carro com 3 atributos> #modelo #marca e #ligado.

Criar um construtor que receba os argumentos modelo e marca e inicialize como falso o atributo ligado.

Criar get e set para modelo e marca.

Criar uma funçao ligar(), que marque o atributo ligado como true e retorne uma mensagem que o veiculo ligou.

Criar uma funçao desligar(), que marque o atributo ligado com false e retorne uma mensagem que o veiculo fi desligado.

Criar uma funcao acelerar(), que verifica o status do atributo ligado, caso for false gere um erro com: - throw new Error (`O carro nao pode ser acelerado pois esta acelerado`), caso contrario retorne que o carro foi acelerado.

Criar uma funcao estaLigado(), que retorne o status do atributo ligado.
*/

class Carro {

    #marca;
    #modelo;
    #ligado;

    /**
    * @param {String} pMarca
    * @param {String} pModelo
    */

    constructor(pMarca, pModelo) {
        this.#marca = pMarca;
        this.#modelo = pModelo;
        this.#ligado = false;
    }

    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }

    set marca(novaMarca) {
        this.#marca = novaMarca;
    }

    set modelo(novoModelo) {
        this.#modelo = novoModelo;
    }

    // metodo
    ligar(){
        this.#ligado = true;
        return `O carro esta ligado!`;
    }

    desligar(){
        this.#ligado = false;
        return `O carro esta desligado!`;
    }

    acelerar(){
        if(!this.#ligado){
            throw new Error(`O carro nao pode ser acelerado, pois esta desligado!`);
        };
        return `O carro foi acelerado!`;
    }

    estaLigado(){
        this.#ligado = true;
        return `O carro esta ligado!`
    }

    // fim do metodo

}

const carro1 = new Carro (`Civic`, `Honda`);
console.log(carro1);
console.log(carro1.ligar());
console.log(carro1.acelerar());
console.log(carro1.desligar());
// console.log(carro1.acelerar());

/**
 * Criar uma classe chamada Bicicleta, que possui dois atributos: #modelo #marca. 
 * 
 * Criar um construtor que receba os argumentos modelo e marca.
 * 
 * Criar get e set para modelo e marca.
 * 
 * Criar uma funçao pedalar(), que retorne ua mensagem que a bicilceta foi pedalada.
 * 
 *   
 */

class Bicicleta{
    #modelo;
    #marca;

    /**
     * @param {String} pModelo 
     * @param {String} pMarca 
     */

    constructor(pModelo, pMarca){
        this.#modelo = pModelo;
        this.#marca = pMarca;
    }

    get modelo(){
        return this.#modelo;
    }

    get marca(){
        return this.#marca;
    }

    set modelo(novoModelo){
        this.#modelo = novoModelo;
    }

    set marca(novaMarca){
        this.#marca = novaMarca;
    }

    pedalar(){
        return `Esta bicicleta esta sendo pedalada!`
    }
}

const bicicleta1 = new Bicicleta(`Cross`,`Caloi`);
console.log(bicicleta1);
console.log(bicicleta1.pedalar());