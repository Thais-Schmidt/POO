import Utils from "./Utilitarios.js";

console.log(`=====Tratamento de dados=====`);

console.log(Utils.checkNumbers(3));
console.log(Utils.checkNumbers("3")); 
console.log(Utils.checkNumbers("L"));

console.log(`=====Tratamento de dados - Exception =====`);

console.log(Utils.checkNumber3(11));
console.log(Utils.checkNumber3(1));

console.log(Utils.soma(2,2));

console.log(Utils.soma2());

console.log(Utils.soma(2,2));