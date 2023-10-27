class Pessoa
{
    #nome;
    #anoNasci;

    /**
     * @param {String} pNome
     * @param {Number} pAnoNasci
     */

    constructor(pNome,pAnoNasci){
        this.#nome = pNome;
        this.#anoNasci = pAnoNasci;
    }

    get nome(){
        return this.#nome;
    }

    get anoNasci(){
        return this.#anoNasci;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    set anoNasci(novoAnoNasci){
        this.#anoNasci = novoNome;
    }

    //modulo
        calcularIdade(){
            const anoAtual = 2023;
            const anoNascimento = this.#anoNasci;
            const idade = anoAtual - anoNascimento;

            return idade;
        }
    //fim do modulo
    
}

const pessoa1 = new Pessoa("Thata", 2001);
console.log(pessoa1);
console.log(pessoa1.calcularIdade());

class Aluno extends Pessoa
{
    #curso;

    /**
     * @param {String} pCurso
     */

    get curso(){
        return this.#curso;
    }

    set curso(novoCurso){
        this.#curso = novoCurso;
    }

    constructor(pNome,pAnoNasci,pCurso){
        super(pNome,pAnoNasci);
        this.#curso = pCurso;
    }

}

const aluno2 = new Aluno("Tijolinho", 2003, "Desenvolvimento de traumas");
console.log(aluno2);
console.log(`O aluno ${aluno2.nome}, tem ${aluno2.calcularIdade()}. E esta cursando ${aluno2.curso}.`);


