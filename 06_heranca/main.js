/**
 * Herança
 * 
 * O reaproveitamento de codigo e a possibilidade de se evitar o codigo duplicado sao os objetivos das linguagens orientadas a objetos.
 */



class Veiculos
{
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
}



class Bicicleta extends Veiculos{
    pedalar(){
        return `Esta bicicleta esta sendo pedalada!`
    }
}

let bicicleta1 = new Bicicleta(`Cross`,`Caloi`);
console.log(bicicleta1);
console.log(bicicleta1.modelo);



class Carro extends Veiculos {
    #ligado= false; //ou podemos deixar o #ligado diret coo false, como aqui

    // constructor(pMarca, pModelo) {   //ou podemos fazer desta forma, utilizando o super
    //     super(pMarca,pModelo); 
    //     this.#ligado = false;
    // }

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
