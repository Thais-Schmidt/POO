// 1 - Implemente uma classe chamada “Agenda” que represente uma agenda telefônica.
// Essa classe deve permitir adicionar, editar e remover contatos, além de buscar por contatos a partir de um nome ou número de telefone.

class Agenda {

    constructor() {
        //Cria um atributo do tipo array
        this.contatos = new Array();
    }

    #verificarContato(nome) {
        this.count = 0;
        if (this.contatos.forEach(c => {
            if (c.nome === nome) {
                this.count++;
            }
        }));
        return this.count === 0 ? false : true;
    }

    adicionar(nome, telefone) {
        if (this.contatos.length === 0) {
            this.contatos.push({ nome, telefone });
            return `Contato adicionado com sucesso!;`
        } else {
            if (!this.#verificarContato(nome)) {
                this.contatos.push({ nome, telefone });
                return `Contato adicionado com sucesso!`;
            } else {
                return `Contato ja existente!`;
            }
        }
    }

    #verificaIndicePorNome(nome){
        this.index = -1;
        if( this.contatos.forEach(c => {
            if(c.nome === nome){
                this.index = this.contatos.findIndex(i => i.nome === nome);
            }
        }));
    }

    editar(nomeAtual, novoNome, novoTel){
        this.#verificaIndicePorNome(nomeAtual);
        if(this.index !== -1){
            this.contatos[this.index] = { nome:novoNome, telefone:novoTel };
            return `Contato alterado com sucesso!`
        }
        else {
            return `Contato nao encontrado!`
        }
    }

    remover(nome){
        this.#verificaIndicePorNome(nome);
        if(this.index !== -1){
            this.contatos.splice(this.index,1);
            return `Contato removido com sucesso!`
        }
        else {
            return `Contato nao encontrado!`
        }
    }

    pesquisarPorNome(nome){
        this.#verificaIndicePorNome(nome);
        if(this.index !== -1){
            return `Contato encontrado: ${this.contatos[this.index].nome}, ${this.contatos[this.index].telefone}`
        }
        else {
            return `Contato nao encontrado!`
        }
    }

    #verificaIndicePorTelefone(telefone){
        this.index = -1;
        if( this.contatos.forEach(c => {
            if(c.telefone === telefone){
                this.index = this.contatos.findIndex(i => i.telefone === telefone);
            }
        }));
    }

    pesquisarPorTelefone(telefone){
        this.#verificaIndicePorTelefone(telefone);
        if(this.index !== -1){
            return `Contato encontrado: ${this.contatos[this.index].nome}, ${this.contatos[this.index].telefone}`
        }
        else {
            return `Contato nao encontrado!`
        }
    }

    listarContatos(){
        this.res = `==lista de contatos==\n`
        this.contatos.forEach(c => {
            this.res += `${c.nome}, ${c.telefone}\n`
        });
        return this.res;
    }


}

const contato = new Agenda;
console.log(contato.adicionar(`Thata`, `987659760`)); //adicionando novo contato
console.log(contato.adicionar(`Gabriela`,`987622349`));; //adicionando novo contato
console.log(contato.adicionar(`Tiaga`,`123456789`)); //adicionando novo contato
console.log(contato.adicionar(`Bruna`, `987612345`)); //adicionando novo contato
console.log(contato.adicionar(`Camyllo`, `987637465`)); //adicionando novo contato

console.log(contato.adicionar(`Thata`, `987659760`)); //adicionando contato JA EXISTENTE 

console.log(contato); //informando que o contato ja existe

console.log(contato.editar(`Thata`, `Thais`, `123451234`)); //alterando o nome do contato Thata

console.log(contato); //exibindo agenda com contato Thata alterado para Thais

console.log(contato.remover(`Camyllo`)); //removendo contato Camyllo

console.log(contato.remover(`Lucas`)); //removendo contato nao existente

console.log(contato.pesquisarPorNome(`Thais`)); //Apresentando no console o nome e o numero do contato

console.log(contato.pesquisarPorTelefone(`987612345`)); //Apresentando no console o nome e o numero do contato

console.log(contato.listarContatos()); //Apresentando todos os contatos

