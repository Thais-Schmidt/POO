import Corrente from "./ContaCorrente.js";
import Poupanca from "./ContaPoupanca.js";

let cc1 = new Corrente(333, 696, 1000);
console.log(cc1);
console.log(cc1.Depositar(300));
console.log(cc1.Sacar(200));


// let cp1 = new Poupanca(999, 575);
// console.log(cp1);