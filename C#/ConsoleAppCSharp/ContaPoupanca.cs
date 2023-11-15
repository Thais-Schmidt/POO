namespace ConsoleAppCSharp
{
    class ContaPoupanca : Conta
    {
        private double _taxaJuros;

        public ContaPoupanca() : base() { }

        public ContaPoupanca(int ag, int ct, double tx) : base(ag, ct)
        {
            this.Agencia = ag;
            this.NumConta = ct;
            this._taxaJuros = tx;
        }

        public override string RendimentoJuros()
        {
            decimal taxaJuros = 0.03M;
            decimal juros = Saldo * taxaJuros;
            Saldo = juros;
            return $"Rendimento de juros de R${juros:N2} na conta poupança {NumConta}. Saldo: R${Saldo:N2}";
        }
    }

}