class Livro{
    #titulo;
    #qtdPaginas;
    #paginasLidas;
    #porcentagem;

    /**
    * @param {String} pTitulo
    * @param {Number} pQtdePaginas
    * @param {Number} pPaginasLidas
    **/

    constructor(pTitulo, pQtdePaginas, pPaginasLidas) {
        this.#titulo = pTitulo;
        this.#qtdPaginas = pQtdePaginas;
        this.#paginasLidas = pPaginasLidas;
    }

    //metodo

    verificarProgresso() {
        const progresso = ((this.#paginasLidas * 100)/this.#qtdPaginas).toFixed(2);

        console.log(`Voce ja leu ${progresso}% do livro.`);
    }

    // fim do metodo

    get titulo() {
        return this.#titulo;
    }

    get qtdePaginas() {
        return this.#qtdPaginas;
    }

    get paginasLidas() {
        return this.#paginasLidas;
    }

    set titulo(novoTitulo) {
        this.#titulo = novoTitulo;
    }
    
    set qtdePaginas(novaQtdePaginas) {
        this.#qtdPaginas = novaQtdePaginas;
    }

    set paginasLidas(novasPaginasLidas) {
        this.#paginasLidas = novasPaginasLidas;
    }

}

let pequenoPrincipe = new Livro("Pequeno Pricipe", null, null);

console.log(pequenoPrincipe);

pequenoPrincipe.qtdePaginas = 98;
pequenoPrincipe.paginasLidas = 20;

console.log(pequenoPrincipe.verificarProgresso());

pequenoPrincipe.paginasLidas = 50;
console.log(pequenoPrincipe.verificarProgresso());



console.log(`O livro ${pequenoPrincipe.titulo} possui ${pequenoPrincipe.qtdePaginas}  paginas.`);


let VermelhoBrancoSangueAzul = new Livro("Vermelho, Branco e Sangue Azul", 387, 41);

console.log(VermelhoBrancoSangueAzul);
console.log(`O livro ${VermelhoBrancoSangueAzul.titulo} possui ${VermelhoBrancoSangueAzul.qtdePaginas}  paginas.`);

console.log(VermelhoBrancoSangueAzul.verificarProgresso());
