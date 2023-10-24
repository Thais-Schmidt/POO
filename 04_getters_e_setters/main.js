/**
    Getters e Setters

    Em programaçao orientada a objetos existem dois nomes especificos para trabalhar com açoes de definir e recuperar dados de um atributo, para definir dados de atributos utiliza-se a palavra 'set' (setters) e para recuperar dados de um atributo utiliza-se a palavra 'get' (getters)
 */


class Pessoa {
    //Propriedades => variáveis ou características do nosso objeto
    _nome; // tipo String
    _idade; // tipo Integer
    _peso; // tipo Float, Real, Decimal
    _altura; // tipo Float, Real, Decimal


    /**
     * Método construtor da Classe
     * Um método construtor pemite criar atribuir valores ao objeto criado no momento que ele é instanciado.
     * Aqui é possível adicionar o tipo de dado que cado parâmetro deve receber, facilita quando estivermos utilizando as classes separadamente
     * 
     * @param {String} pNome
     * @param {Number} pIdade
     * @param {Number} pPeso
     * @param {Number} pAltura
     */
    constructor(pNome, pIdade, pPeso, pAltura) {
        this._nome = pNome;
        this._idade = pIdade;
        this._peso = pPeso;
        this._altura = pAltura;
    }

    /**
     * Método ou função que realiza o cálculo do índice de massa corporal baseado nas informações de pesso e altura da pessoa
     * @returns Retorna o valor do cálculo do índice de massa corporal baseado na fórmula: peso/(altura*altura)
    */
    calculaImc() {
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    /* Metodos - get - (obter/retornar um dado/valor), quando queremos retornar um valor sem precisarmos de return*/

    get nome(){
        return this._nome;
    }
    get idade(){
        return this._idade;
    }
    get peso(){
        return this._peso;
    }
    get altura(){
        return this._altura;
    }

    /* Metodos - set - (difinir/atribuir/alterar um dado/valor), recebemos um parametro com o novo valor e atribuimos seu valor a propriedade */

    set nome(novoNome){
        this._nome = novoNome;
    }
    set idade(novaIdade){
        this._idade = novaIdade;
    }
    set peso(novoPeso){
        this._peso = novoPeso;
    }
    set altura(novaAltura){
        this._altura = novaAltura;
    }

}

//Instanciando um novo objeto e passando os parâmetros para o construtor
let pessoa1 = new Pessoa('Thata', 22, 76, 1.56);

let pessoa2 = new Pessoa();
pessoa2.nome = 'Cristian';
pessoa2.idade = 25;
// pessoa2.peso = 73;
// pessoa2.altura = 1.76;

let pessoa3 = new Pessoa(null, 54, 74, null);

console.log(`O IMC dessa pessoa é ${pessoa1.calculaImc()}`)
console.log(pessoa1);

console.log(pessoa2);

console.log(pessoa3);
