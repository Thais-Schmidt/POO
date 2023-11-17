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

// Funçao para não permitir caracteres especiais ao preencher o nome

const nomeInput = document.querySelector("#nome");

nomeInput.addEventListener("keypress", function(e) {

    if(!checandoCaracter(e)){
        e.preventDefault();
    }
});

function checandoCaracter(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[a-z A-Z]';

    if(caracter.match(pattern)){
        return true;
    }
} 

