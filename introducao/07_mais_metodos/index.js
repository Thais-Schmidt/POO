/* 
Mais metodos
*/

let pessoa = {
    nome: `Thata`,
    exibirNome() {
        return `Ola meu nome e ${this.nome}`;
    },
    alteraNome(novoNome) {
        return this.nome = novoNome;
    }

} 

console.log(pessoa.exibirNome());

pessoa.alteraNome(`Thais`);
console.log(pessoa.exibirNome());