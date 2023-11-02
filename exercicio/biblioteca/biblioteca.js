//3 - Implemente uma classe chamada “Biblioteca” que represente uma biblioteca virtual.
//Essa classe deve permitir cadastrar livros, fazer empréstimos, devolver livros e verificar a disponibilidade de um livro.

class Biblioteca {
    #Id;
    #nomeLivro;
    #disponivel;

    constructor(pId, pLivro) {
        this.#Id = pId;
        this.#nomeLivro = pLivro;
        this.#disponivel = true;
    }

    get id() {
        return this.#Id;
    }

    get livro() {
        return this.#nomeLivro;
    }

    set id(novoId) {
        this.#Id = novoId;
    }

    set livro(novoLivro) {
        this.#nomeLivro = novoLivro;
    }

    //modulo

    disponivel() {
        if (!this.#disponivel) {
            throw new Error(`Este livro nao esta disponivel!`)
        }
        return `O livro esta disponivel!`;
    }

    emprestarLivro() {
        this.#disponivel = false;
        return `O livro foi emprestado!`
    }

    devolverLivro() {
        this.#disponivel = true;
        return `O livro foi devolvido!`
    }

    //fim do modulo
}

let livro1 = new Biblioteca(1, `As viagens de Guliver`);
console.log(livro1);
console.log(livro1.disponivel());
console.log(livro1.emprestarLivro());
//console.log(livro1.disponivel());
console.log(livro1.devolverLivro());
console.log(livro1.disponivel());

