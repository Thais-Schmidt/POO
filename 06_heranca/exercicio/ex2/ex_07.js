//Pessoa

class Pessoa {
    #nome;
    #cpf;
    #anoNasci;

    /**
     * @param {String} pNome
     * @param {Number} pCpf
     * @param {Number} pAnoNasci
     */

    constructor(pNome, pCpf, pAnoNasci) {
        this.#nome = pNome;
        this.#cpf = pCpf;
        this.#anoNasci = pAnoNasci;
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get anoNasci() {
        return this.#anoNasci;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    set anoNasci(novoAnoNasci) {
        this.#anoNasci = novoAnoNasci;
    }

    //modulo
    calcularIdade() 
    {
        const anoAtual = 2023;
        const anoNascimento = this.#anoNasci;
        const idade = anoAtual - anoNascimento;

        return idade;
    }

}

const pessoa1 = new Pessoa("Tatinha", "123.456.789-10", 2001)
console.log(pessoa1);
console.log(pessoa1.calcularIdade());

//Paciente

class Paciente extends Pessoa {
    #convenio;
    #numConvenio;

    /**
     * @param {String} pConvenio
     * @param {Number} pNumConvenio
     */

    constructor(pNome, pCpf, pAnoNasci, pConvenio, pNumConvenio) {
        super(pNome, pCpf, pAnoNasci);
        this.#convenio = pConvenio;
        this.#numConvenio = pNumConvenio;
    }

    get convenio() {
        return this.#convenio;
    }

    get numConvenio() {
        return this.#numConvenio;
    }

    set convenio(novoConvenio) {
        this.#convenio = novoConvenio;
    }

    set numConvenio(novoNumConvenio) {
        this.#numConvenio = novoNumConvenio;
    }

    //modulo

    solicitaConsulta() {
        return `O paciente ${this.nome} esta solicitando uma consulta.`
    }

    realizaExame() {
        return `O paciente ${this.nome} esta realizando o exame.`

    }
}

const paciente1 = new Paciente("Tatinha", "525.080.260-50", 2001, "Amil", "3.456-10")
console.log(paciente1);
console.log(paciente1.solicitaConsulta());
console.log(paciente1.realizaExame());

//Medico

class Medico extends Pessoa {
    #especializacao;
    #nroRegistro;
    #dtAdmissao;

    /**
     * @param {} pEspecializazao
     * @param {} pNroRegisto
     * @param {} pDtAdmissao
     */

    constructor(pNome, pCpf, pAnoNasci, pEspecializazao, pNroRegisto, pDtAdmissao) {
        super(pNome, pCpf, pAnoNasci);
        this.#especializacao = pEspecializazao;
        this.#nroRegistro = pNroRegisto;
        this.#dtAdmissao = pDtAdmissao;
    }

    get especializacao() {
        return this.#especializacao;
    }

    get numResgistro() {
        return this.#nroRegistro;
    }

    get dtAdmissao() {
        return this.#dtAdmissao;
    }

    set especializacao(novaEspecializaçao) {
        this.#especializacao = novaEspecializaçao;
    }

    set numResgistro(novoNumRegistro) {
        this.#nroRegistro = novoNumRegistro;
    }

    set dtAdmissao(novaDtAdmissao) {
        this.#dtAdmissao = novaDtAdmissao;
    }

    //modulo

    atenderConsulta() {
        return `O medico ${this.nome} esta atendendo uma consulta.`
    }

    emitirReceita() {
        return `O medico ${this.nome} emitiu uma receita.`
    }
}

const medico1 = new Medico("Geraldo", "787.778.690-52", 1965, "Pediatra", "1234-76", "04/06/1987");
console.log(medico1);
console.log(medico1.atenderConsulta());
console.log(medico1.emitirReceita());