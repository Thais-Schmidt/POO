class Filme {
    #titulo;
    #duracaoEmMinutos;

    /**
    * @param {String} pTitulo
    * @param {Number} pDuracaoEmMinutos
    **/

    constructor(pTitulo,pDuracaoEmMinutos) {
        this.#titulo = pTitulo;
        this.#duracaoEmMinutos = pDuracaoEmMinutos;
    }

    // metodo

    exibirDuracaoEmHoras() {
        const horas = Math.floor(this.#duracaoEmMinutos/60);
        const minutos = this.#duracaoEmMinutos%60;

        console.log(`O filme ${this.#titulo} possui ${horas} horas e ${minutos} minutos`); 
    }

    // fim do metodo

    get titulo(){
        return this.#titulo;
    }

    get duracao(){
        return this.#duracaoEmMinutos;
    }

    set titulo(novoTitulo) {
        this.#titulo = novoTitulo;
    }

    set duracao(novaDuracao) {
        this.#duracaoEmMinutos = novaDuracao;
    }

}

let umFilme = new Filme ("Titanic", 194);
console.log(umFilme);
umFilme.exibirDuracaoEmHoras();

let umFilme2 = new Filme ("OPPENHEIMER", 181);
console.log(umFilme2);
umFilme2.exibirDuracaoEmHoras();