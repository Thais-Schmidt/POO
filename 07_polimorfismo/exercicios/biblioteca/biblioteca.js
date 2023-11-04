/*  3 - Implemente uma classe chamada “Biblioteca” que represente uma biblioteca virtual. 
*   Essa classe deve permitir cadastrar livros, 
*   fazer empréstimos, 
*   devolver livros 
*   e verificar a disponibilidade de um livro. 
*/

class Biblioteca {

    constructor() {
        this.livros = new Array();
        this.disponivel = true;
    }

    //verificar produto por nome

    #verificaLivro(livro) {
        for (const l of this.livros) {
            if (l === livro) {
                return true;
            }
        }
        return false; 
    }

    //cadastrar livros

    cadastrandoLivro(livro) {
        if (!this.#verificaLivro(livro)) { // "!" é o operador de negação
            this.livros.push(livro);
            return `Livro adicionado com sucesso!`;
        } else {
            return `Livro ja existente!`;
        }
    }

    // emprestando e disponibilidade

    disponibilidade() {
        if (this.disponivel) {
            return `O livro está disponível!`;
        }
        return `O livro não está disponível!`;
    }

    emprestando() {
        if (this.disponivel) {
            this.disponivel = false;
            return `O livro foi emprestado.`;
        } else {
            return `O livro não esta dsponivel!`
        }
    }

    devolverLivro() {
        this.disponivel = true;
        return `O livro foi devolvido. Obrigada.`
    }

}

//adicionando livros ao estoque da biblioteca

let biblioteca = new Biblioteca();

console.log(biblioteca.cadastrandoLivro('As Viagens de Guliver'));
console.log(biblioteca.cadastrandoLivro('Ensaio sobre a cegueira'));
console.log(biblioteca.cadastrandoLivro('Tudo que os homens sabem sobre as mulheres'));
console.log(biblioteca.cadastrandoLivro('O colecionador'));
console.log(biblioteca.cadastrandoLivro('A revoluçao dos bichos'));

//visualizando todos os livros cadastrados

console.log(biblioteca);

//emprestando livro

console.log(biblioteca.emprestando('Ensaio sobre a cegueira'))

//checando disponibilidade

console.log(biblioteca.disponibilidade())

//devolvendo livro

console.log(biblioteca.devolverLivro())

//checando disponibilidade após a devoluçao

console.log(biblioteca.disponibilidade())




