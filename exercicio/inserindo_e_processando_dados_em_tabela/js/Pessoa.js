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
        let dataNascimento = new Date(document.getElementById("data_nasc").value);
        let hoje = new Date();

        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        let mesAtual = hoje.getMonth() + 1;

        if (mesAtual < dataNascimento.getMonth() + 1 || (mesAtual === dataNascimento.getMonth() + 1 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        return idade;
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