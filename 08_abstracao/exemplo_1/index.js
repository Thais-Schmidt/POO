/**
 * ABSTRAÇÃO -
 * Uma classe abstrata não pode ser instanciada, ela é desenvolvida para representar entidades e conceitos abstratos.
 * Você não pode criar um objeto a partir de uma classe abstrata. Uma classe abstrata pode ser herdada e geralmente 
 * serve como classe base para outras classes, pode conter atributos, construtores e métodos;
 * 
 * Em JavaScript não temos uma palavra reservada para definir uma classe abstrata, realizamos uma verificação no seu construtor 
 * através do 'new.target' para verificar se a classe está sendo diretamente instanciada, caso sim, lançamos um erro.
 * 
*/

class Animal {
    constructor() {
        /**
         * Verifica se a instância criada refere-se a classe abstrata Animal, caso seja, lança um erro infomando que esta classe não pode ser instanciada.
         */
        if (new.target === Animal) {
            throw new TypeError('Não é possivel criar uma instância de uma classe abstrata');
        }
    }
    fala() {
        throw new Error('Este método deve ser implementada na classe filha!!');
    }
}

// Aqui estamos criando uma subclasse de Animal chamada Cachorro:
class Cachorro extends Animal {
    fala() { return "Au au!"; }
}

// Aqui estamos criando uma outra subclasse de Animal chamada Gato:
class Gato extends Animal {
    fala() { return "Miau miau!"; }
}

// Exemplos de uso: 
const cachorro = new Cachorro();
console.log(cachorro.fala());

const gato = new Gato();
console.log(gato.fala());

/**
 * Ao tentar criar uma instância de uma classe abstrata, recebemos uma erro.
 */
const animal = new Animal();