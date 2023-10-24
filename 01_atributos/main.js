//Criando uma classe:
//O nome da classe deve começar com letra maiúscula

class Pessoa
{
    //Propriedades => características do nosso objeto
    nome;
    idade;
    peso;
    altura;
}

// Criando um novo objeto a partir de uma classe
// A instância é criada com valores iniciais indefinidos

let pessoa1 = new Pessoa()

pessoa1.nome = 'Bia';
pessoa1.idade = '19';
pessoa1.peso = '55';
pessoa1.altura = '1.65';

console.log(pessoa1);