//refazer a calculadora utilizando (args...) no lugar dos parametros.
//aplicar nas funcoes soma,subtracao e multiplicaçao

class Calculadora {

    //soma
    static soma(...args) {
        let soma = 0;
        if (!isNaN(...args)) {
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

            let num = args.reduce(function (acc, curr) {
                return acc - curr;
            });
            return num;

        } else {
            console.error(`Valor invalido`);
        }
    }

    //multiplicaçao
    // static multi(...args) {
    //     let muti = 1;
    //     if (!isNaN(...args)) {
    //         for (let i = 1; i < args.length; i++) {
    //             muti *= args[i];

    //         }
    //         return muti;

    //     } else {
    //         console.error(`Valor invalido`);
    //     }
    // }

    static multi(...args) {
        if (!isNaN(...args)) {

            let num = args.reduce(function (acc, curr) {
                return acc * curr;
            });
            return num;

        } else {
            console.error(`Valor invalido`);
        }
    }



}



 //resultado esperado 20
console.log(Calculadora.soma(2, 'a', 6, 8));

const subtraindo = Calculadora.subtracao(10, 5, 2, 1, `a`); //resultado esperado 2
console.log(subtraindo);

const multi = Calculadora.multi(3, 2, 5, `a`) //resultado esperado 30
console.log(multi);



