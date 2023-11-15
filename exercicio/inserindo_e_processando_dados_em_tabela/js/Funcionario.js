import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa{

    criaTable() {
        table = `<tr>
                        <td>Nome:</td>
                        <td>Nascimento:</td>
                        <td>Funçao:</td>
                        <td>Idade:</td>
                    </tr>`;
    
    }

}