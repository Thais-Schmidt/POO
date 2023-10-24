/**
 * Programação Orientada a Objetos em JavaScript
 * Classes -> são modelos ou moldes de objetos
 * Objetos -> são abstrações ou representações de 'coisas' que existem no mundo real
 * Objeto -> nova instância de uma classe, para criar esse objeto precisamos criar uma classe para que seja nosso molde
 */


class Pessoa {
    /**
     * Propriedades => variáveis ou características do nosso objeto.
     * Por Convenção, utilizaremos o underline para definir os atributos do tipo private(privados, que não devem 
     * ser acessíveis de fora da classe), em JavaScript é utilizado dessa forma, apesar de não impedir o acesso externo.
    */
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
}

// Instância um novo objeto com base na nossa "Classe" Pessoa
let pessoa1 = new Pessoa('Izaias', 40, 85, 1.75);

console.log(pessoa1);