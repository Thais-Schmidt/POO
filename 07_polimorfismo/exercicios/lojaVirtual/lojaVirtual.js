//2 - Crie uma classe chamada “LojaVirtual” que represente uma plataforma de vendas online. 
//Essa classe deve ter funcionalidades para cadastrar produtos, 
//gerar carrinho de compras, 
//aplicar descontos 
//e calcular o valor total da compra.

class LojaVirtual {

    constructor() {
        //criando um array
        this.produtos = new Array(); //array para adicionar produtos ao estoque
        this.carrinhoLista = new Array(); //array para adicionar produtos ao carrinho
    }

    //cadastrando produtos

    cadastro(produto, valor) {
        if (this.produtos.length === 0) {   //se o estoque estiver vazio vai adicionar o produto
            this.produtos.push({ produto, valor }); //push adiciona produtos ao fim do array 
            return `Produtos cadastrado com sucesso!`
        } else {  //se o estoque nao estiver vazio
            if (!this.#verificaProduto(produto)) { //a funçao vai verificar se o produto ja existe no estoque atraves do nome
                this.produtos.push({ produto, valor }); //se nao existir, a funçao adiciona 
                return `Produto cadastrado com sucesso!`
            } else {
                return `Produto ja existente no estoque!` //se ja existir, informa que ja existe e o produto nao vai ser adicionado de novo
            }
        }
    }

    //verificar produto por nome

    #verificaProduto(produto) {
        this.count = 0;  //variavel usada para ver quantos produtos existem com o mesmo nome a partir do 0
        this.produtos.forEach(p => {  //percorre o array utilizando o forEach
            if (p.produto === produto) { //(p.produto === produto) verifica se o produto dentro do estoque p.produto é igual ao nome do produto que esta sendo verificado
                this.count++;
            }
        });
        return this.count === 0 ? false : true;
    }

    //gerar carrinho de compras
    carrinho(produto) {
        if (this.#verificaProduto(produto)) {  //verifica se o produto no parametro produto existe dentro do estoque atraves da funçao #verificaProduto()
            this.carrinhoLista.push(produto); //se sim, adiciona o produto ao carrinho 
            return `Disponivel! Produto adicionado ao carrinho.`;
        } else {  //se não estiver, o produto é dado como indisponivel
            return `Produto "${produto}" esta indisponivel.`;
        }
    }

    //obtendo valor total + desconto se a compra for acima de 50,00

    valorTotal() {
        let totalCompra = 0;  //começando com o valor total da compra em 0,00

        for (let produtosNoCarrinho of this.carrinhoLista) {
            /*
             *let produtosNoCarrinho indica que estamos
             *puxando os produtos que estao no carrinho a partir do
             *this.carrinhoLista
            */
            const estoque = this.produtos.find(p => p.produto === produtosNoCarrinho);
            /*
            * procura na lista this.produtos atravez do find;
            * se o nome do produto que esta no carrinho(produtosNoCarrinho) corresponder ao mesmo nome de
            * algum produto dentro do array produtos, o produto é armazanado na variavel estoque
            */

            if (estoque) {  
                /*
                Na parte de cima da funçao armazenamos os produtos na variavel estoque,
                nesta parte da funçao usamos o estoque como parametro 
                */
                totalCompra += estoque.valor;  
                /**
                 * entao, usando o += somamos o valor dos produtps dentro da variavel estoque atravez do estoque.valor, que puxa só os numeros
                 * e armazenamos na variavel totalCompra
                 */
            }
        }

        if (totalCompra > 50) {
            const semDesconto = totalCompra; //valor original da compra fica salvo
            totalCompra *= 0.85; //calcula o valor de 15% de desconto

            return `Sua compra deu o total de ${semDesconto.toFixed(2)}. Pelo valor ter sido maior que 50,00 sua compra obteve um desconto de 15%. Valor total da compra ${totalCompra.toFixed(2)}.`;
        }

        return `Sua compra deu o total de ${totalCompra.toFixed(2)}.`;

    }

    /**
     * Loop for...of  
     * O for é uma estrutura de controle usada para percorrer coleções
     * de elementos, como arrays, e é útil para realizar a mesma
     * operação em cada elemento
     */
}

//cadastrando produtos ao estoque da loja

const produtos = new LojaVirtual();
console.log(produtos.cadastro(`Faqueiro`, 45.70));
console.log(produtos.cadastro(`Liquidificador`, 73.05));
console.log(produtos.cadastro(`Batedeira`, 73.05));
console.log(produtos.cadastro(`Kit de pratos`, 40.73));
console.log(produtos.cadastro(`Livro`, 27.28));

//cadastrando produto ja existente ao estoque da loja

console.log(produtos.cadastro(`Livro`, 27.28));

//visualizando todos os produtos

console.log(produtos);

//adicionando produtos carrinho de compras

console.log(produtos.carrinho(`Faqueiro`));
console.log(produtos.carrinho(`Liquidificador`));

//adicionando produto nao existente no carrinho

console.log(produtos.carrinho(`Vassoura`));

//visualizando carrinhho de compras

console.log(produtos.carrinhoLista)

//obtendo valor total da compra, se a compra for acima de 50,00
//o desconto de 15% ja sera incluido

console.log(produtos.valorTotal())







