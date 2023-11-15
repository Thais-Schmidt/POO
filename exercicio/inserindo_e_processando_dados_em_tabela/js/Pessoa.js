export default class Pessoa {
    #Nome;
    #AnoNasci;
    #Cargo;
    #Idade;

    constructor(pNome, pAno, pCargo, pIdade) {
        if (new.target === Pessoa) {
            throw new Error(`Nao e possivel instanciar uma classe do tipo abstrata`);
        }
        this.#Nome = pNome;
        this.#AnoNasci = pAno;
        this.#Cargo = pCargo;
        this.#Idade = pIdade;
    }

    get Nome() { return this.#Nome };
    set Nome(nome) { this.#Nome = nome };

    get Ano() { return this.#AnoNasci };
    set Ano(ano) { this.#AnoNasci = ano };

    get Cargo() { return this.#Cargo };
    set Cargo(cargo) { this.#Cargo = cargo };

    get Idade() { return this.#Idade };
    set Idade(idade) { this.#Idade = idade };

    //calculando idade

    idade() {
        let anoAtual = new Date().getFullYear();
        let anoNasci = document.getElementById("data_nasc").value;

        if (!isNaN(anoNascimento)) {
            let idade = anoAtual - anoNasci;
            return idade;
        }
        else {
            alert("Insira uma data de nascimento valida.");
        }
    }

    // //criando tabela

    inserindoDados() {
        table += `<tr>
        <td> </td>    
        <td> </td>
        <td> </td>    
        <td> </td>   
        </tr>`;
    }

}

function calcularIdade() {
    let anoAtual = new Date().getFullYear();
    let dataNascimento = document.getElementById("data_nasc").value;

    // Certifique-se de que a data de nascimento não está vazia
    if (dataNascimento) {
        // Extraia o ano da data de nascimento
        let anoNascimento = new Date(dataNascimento).getFullYear();

        // Certifique-se de que o ano de nascimento é um número válido
        if (!isNaN(anoNascimento)) {
            let idade = anoAtual - anoNascimento;
            return idade;
        } else {
            // Trate o caso em que o ano de nascimento não é um número válido
            return "Ano de nascimento inválido";
        }
    } else {
        // Trate o caso em que a data de nascimento está vazia
        return "Informe a data de nascimento";
    }
}

