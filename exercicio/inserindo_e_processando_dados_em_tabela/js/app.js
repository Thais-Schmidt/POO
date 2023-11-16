import Funcionario from "./Funcionario.js";

function adicionando() {
    // console.log("Função funcionando.");

    const func = new Funcionario();

    func.Nome = document.getElementById("nome").value;
    func.Ano = document.getElementById("data_nasc").value;
    func.Cargo = document.getElementById("funcao").value;

    try {
        func.Idade = func.idade();
    } catch (error) {
        console.error(error.message);
        return;
    }

    func.novaPessoa();
}

export { adicionando };


