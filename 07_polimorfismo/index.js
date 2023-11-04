/**
 * Polimofismo
 * 
 * Um dos conceitos mais utilizados no paradigma de programaçao orientada a objetos e o polimorfismo, que promove a reutilizaçao de codigo, 
 * ou seja, possibilita algo assumir varias formas. No contexto da POO, ele nos mostra como um metodo pode assumir formas diferentes das quais foram 
 * implementadas inicialmente e agir de modo que possa ser utilizado por outra classe.
 *  
 * O polimorfismo e implementado conforme o uso da herança.
 * 
 * Polimorfismo: qualidade ou estado de ser capaz de assumir varias formas.
 */

class Pessoa
{
    #nome;
    #idade;
    #peso;
    #altura;

    constructor(pNome,pIdade,pPeso,pAltura){
        this.#nome = pNome;
        this.#idade = pIdade;
        this.#peso = pPeso;
        this.#altura = pAltura;
    }

    calculaImc() {
        return (this.#peso / (this.#altura * this.#altura)).toFixed(2);
    }

    falar(){
        return `Ola mundo!`;
    }
}

let pessoa1 = new Pessoa(`Thata`, 22, 76, 1.56);
console.log(pessoa1);
console.log(`O IMC dessa pessoa é ${pessoa1.calculaImc()}`)




class Funcionario extends Pessoa{
    /**
     * Polimorfismo - Sobrescrita
     * Modifica o escopo do metodo/funçao de acordo com o desejado.
    */

    calculaImc(){
        return `O seu imc e de: "${super.calculaImc()}"`
    }

    /**
     * Polimorfismo - Sobrecarga
     * Permite que um determinado metodo ou funçao tenha um comportamento distinto 
     * em funçao dos diferentes parametros que ele receba.
     * @param {*} cargo 
     * @returns 
     */

    falar(cargo){
        return `Ola, meu cargo e ${cargo}}`
    }
}

let func1 = new Funcionario(`Gabriel`, 21, 80, 1.80);
console.log(func1);
console.log(func1.calculaImc())
console.log(func1.falar(`desenvolvedor`));

let func2 = new Funcionario(`Jerivaldo`, 70, 75, 1.67);
console.log(func2);
console.log(func2.calculaImc());




class Aluno extends Pessoa{

    /**
     * @param {*} nPeso 
     * @param {*} nAltura 
     * @returns 
     */
    
    calculaImc(nPeso, nAltura) {
        return (nPeso / (nAltura * nAltura)).toFixed(4);
    }
}

let aluno1 = new Aluno(`Izac`, 12, 56, 1.45);
console.log(aluno1);
console.log(aluno1.calculaImc(100, 1.8));
console.log(aluno1.falar());




