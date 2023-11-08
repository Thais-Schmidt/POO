//metodos e atributos estatisticos

class Paciente{
    #nome;
    #idade;
    static contador = 0;

    cosntructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
        Paciente.contador++;
    }
    
    static calcularImc(peso,altura){
        return(peso/(altura*altura)).toFixed(2);
    }

}

class Utils{
    static atributoEstatico=`Ola, sou um atributo estatico`;

    static metodoEstatico(){
        return this.atributoEstatico;
    }
}

let p1 = new Paciente(`Lucas`, 21);
let p2 = new Paciente(`Camilly`, 19);
let p3 = new Paciente(`Gabriel`, 20);

console.log(Paciente.contador);
console.log(Paciente.calcularImc(76,1.65));

console.log(Utils.atributoEstatico);
console.log(Utils.metodoEstatico());

class Calculadora{
    static soma(n1,n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 + n2;
        }else {
            // console.warn(`Valor invalido`)
            console.error(`Valor invalido`)
        }
    }

    static subtracao(n1,n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 - n2;
        }else {
            console.error(`Valor invalido`)
        }
    }

    static divisao(n1,n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 / n2;
        }else {
            console.error(`Valor invalido`)
        }
    }

    static multiplicacao(n1,n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 * n2;
        }else {
            console.error(`Valor invalido`)
        }
    }

}

console.log(Calculadora.soma(2,5));
console.log(Calculadora.subtracao(2,5));
console.log(Calculadora.multiplicacao(2,5));
console.log(Calculadora.divisao(2,5));

