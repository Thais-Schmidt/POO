//2 - Crie uma classe chamada “LojaVirtual” que represente uma plataforma de vendas online. 
//Essa classe deve ter funcionalidades para cadastrar produtos, gerar carrinho de compras, aplicar descontos e calcular o valor total da compra.

class LojaVirtual{
    #numero;
    #quantidade;
    #produto;
    #valor;

    /**
     * 
     * @param {Number} numero 
     * @param {String} quantidade 
     * @param {Number} produto 
     * @param {Number} valor 
     */

    constructor(numero,quantidade,produto,valor){
        this.#numero = numero;
        this.#produto = produto;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get numero(){
        return this.#numero;
    }
    get produto(){
        return this.#produto;
    }
    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    set numero(novoNumero){
        this.#numero = novoNumero;
    }
    set produto(novoProduto){
        this.#produto = novoProduto;
    }    
    set quantidade(novaQuantidade){
        this.#quantidade = novaQuantidade;
    }
    set valor(novoValor){
        this.#valor = novoValor;
    }

    //modulo

    totalDaCompra(){
        return (this.#quantidade * this.#valor).toFixed(2);
    }

    desconto(){

        if (this.#quantidade > 5){
            let desconto = 0.10;
            let valorCompra = this.totalDaCompra();
            let valorTotal = valorCompra - (valorCompra*desconto);
            return valorTotal;
        } else {
            return `Sua compra nao obteve desconto!`
        }
    }

}

let item = new LojaVirtual(1,8,`Miojo`,5.30);
console.log(item);
let item2 = new LojaVirtual(2,1,`Leite`,10.00);
console.log(item2);

//item 1

console.log(item.totalDaCompra());
console.log(`Sua compra de ${item.totalDaCompra()} obteve desconto! O valor da compra com desconto fica ${item.desconto()}.`);

//item 2

console.log(item2.desconto());
console.log(item2.totalDaCompra());







