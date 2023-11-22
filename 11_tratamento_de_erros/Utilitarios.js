export default class Utilitarios {

    static checkNumbers(n) {

        const result = Number(n); //faz a conversao mesmo se o numero estiver entre aspas

        if (Number.isNaN(result)) {
            return `Valor nao numerico`;
        }
        return `Valor numerico.`

    }

    /**
    * Exception: sao erros que sao gerados durante a execuçao dos codigos. 
    */

    static checkNumber2(x) {

        if (x != 11) {
            // throw new Error(`O valor de x nao pode ser diferente de 11.`)

        }

    }

    static checkNumber3(x) {

        try {

            if (x != 11) {
                throw new Error(`O valor de x nao pode ser diferente de 11.`)
            }

        } catch (error) {
            return error;
        }

    }

    static soma(a,b){
        return a+b;
    }

    static soma2(){
        try {
            const result = x + y;
            return result;
        } catch (error) {
            return `Erro: ${error}`;
        }
    }

}


