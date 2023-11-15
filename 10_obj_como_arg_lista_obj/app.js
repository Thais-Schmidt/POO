import ContaCorrente from "./ContaCorrente.js"
import ContaPoupanca from "./ContaPoupanca.js"

let cc1 = new ContaCorrente(321, 987);
console.log(cc1);

console.log(cc1.depositar(4000));

console.log(cc1.saque(1000));

console.log(cc1.saque(5000));

let cp1 = new ContaPoupanca(456, 678);
console.log(cp1);

console.log(cp1.depositar(2000));

console.log(cp1.saque(500));

console.log(cp1.saque(2000));

console.log(cp1.rendimentoJuros());

/**
 * Passando objetos como argumento
 */

console.log(`----Passando objetos como argumento----`);

function salvaCliente(ContaCorrente){
    console.log(ContaCorrente);
}

salvaCliente(cc1);

function salvaCliente2(ContaCorrente,ContaPoupanca){
    console.log(ContaCorrente,ContaPoupanca);
}

salvaCliente2(cc1,cp1)

console.log(`----Lista de objetos----`);

let listaContas = [];
listaContas.push(cc1,cp1);
console.log(listaContas);


