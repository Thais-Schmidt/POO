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
        let dataNascimento = document.getElementById("data_nasc").value; 

        if (dataNascimento) {
            let anoNascimento = new Date(dataNascimento).getFullYear();

            if (!isNaN(anoNascimento)) {
                let idade = anoAtual - anoNascimento;
                return idade;
            } else {
                alert("Ano de nascimento inválido");
            }
        } 
        
    }

    // incluindo linhas na tabela

    static criandoTabela() {
        return `<tr>
                    <th id="nome-th">Nome:</th>
                    <th>Nascimento:</th>
                    <th>Função:</th>
                    <th>Idade:</th>
                </tr>`;

    }

    retornandoDados() {
        return `<tr>
                    <td id="nome-td">${this.Nome}</td>
                    <td>${this.Ano}</td>
                    <td id="func-td">${this.Cargo}</td>
                    <td>${this.Idade}</td>
                </tr>`;
    }

    novaPessoa() {
        let tabela = document.getElementById("tbl-pessoas");

        if (!tabela.innerHTML) {
            tabela.innerHTML = Pessoa.criandoTabela();
        }

        tabela.innerHTML += this.retornandoDados(); // Adicionando a nova linha
    }

}
