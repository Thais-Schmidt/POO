class Invoice {
    #numeroItem;
    #descricao;
    #qtdeCompra;
    #preçoItem;

    /**
    * @param {Number} pNumero
    * @param {String} pDescricao
    * @param {Number} pQtdeCompra
    * @param {Number} pPreco
    **/

    constructor(pNumero,pDescricao,pQtdeCompra,pPreco) {
        this.#numeroItem = pNumero;
        this.#descricao = pDescricao;
        if(pQtdeCompra < 0 ? this.#qtdeCompra=0 : this.#qtdeCompra = pQtdeCompra);
        if(pPreco < 0 ? this.#preçoItem = 0.0 : this.#preçoItem = pPreco);
    }

    getInvoiceAmount() {
        return (this.#qtdeCompra * this.#preçoItem).toFixed(2);
    }

    get numero(){
        return this.#numeroItem;
    }
    get descricao(){
        return this.#descricao;
    }
    get quantidade(){
        return this.#qtdeCompra;
    }
    get preco(){
        return this.#preçoItem;
    }

    set numero(novoNumero){
        this.#numeroItem = novoNumero;
    }
    set descricao(novaDescricao){
        this.#descricao = novaDescricao;
    }
    set quantidade(novaQuantidade){
        this.#qtdeCompra = novaQuantidade;
    }
    set preco(novoPreco){
        this.#preçoItem = novoPreco;
    }

}

let compra1 = new Invoice (1, "Miojo Tomate Turma da Monica", 3, 2.50);

console.log(compra1);
console.log(`O valor total da compra foi de ${compra1.getInvoiceAmount()}`);
