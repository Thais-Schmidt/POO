class Agenda{
    #nome;
    #numeroTel;
    #numeroCel;
    #contato;

    /**
     * @param {String} pNome 
     * @param {Number} pTel 
     * @param {Number} pCel 
     */
    constructor(pNome,pTel,pCel){
        

        this.#nome = pNome;
        this.#numeroTel = pTel;
        this.#numeroCel = pCel;
    }

    get nome(){
        return this.#nome;
    }

    get tel(){
        return this.#numeroTel;
    }

    get cel(){
        return this.#numeroCel;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    set tel(novoTel){
        this.#numeroTel = novoTel;
    }

    set cel(novoCel){
        this.#numeroCel = novoCel;
    }

    //modulo
    
    // adicionarContato(){
    //     if(this.contatos.has(pNome)){
    //         this.contatos.set(pNome,pTel);
    //         return `Contato adicionado`;
    //     };
    // }


    //fim do modulo
}

let contato1 = new Agenda(`Thais`, 19974111188, 38732123)
console.log(contato1);


