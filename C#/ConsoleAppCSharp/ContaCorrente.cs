namespace ConsoleAppCSharp
{
    public class ContaCorrente : Conta
    {
        public override string RendimentoJuros()
        {
            return "Esta conta nao possui rendimento de jurus.";
        }
    }
}

