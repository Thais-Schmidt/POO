//refazer a calculadora utilizando (args...) no lugar dos parametros.
//aplicar nas funcoes soma,subtracao e multiplicaçao

class Calculadora {

    //soma
    static soma(...args) {
        let soma = 0;
        if (args.every(arg => !isNaN(arg))) {
            for (let i = 0; i < args.length; i++) {
                soma += args[i];

            }
            return soma;

        } else {
            console.error(`Valor invalido`);
        }
    }

    //subtraçao
    static subtracao(...args) {
        if (!isNaN(...args)) {
            return args.reduce((t, v) => t - v);
        } else {
            console.error(`Valor invalido`);
        }
    }

    //multiplicaçao
    static multi(...args) {
        if (args.every(arg => !isNaN(arg))) {
            return args.reduce((a, b) => a * b);
        } else {
            console.error(`Valor invalido`);
        }
    }

}

console.log(Calculadora.soma(2, 6, 8)); //resultado esperado 16

console.log(Calculadora.subtracao(10, 5, 2, 1)); //resultado esperado 2

console.log(Calculadora.multi(3, 2, 5)); //resultado esperado 30




