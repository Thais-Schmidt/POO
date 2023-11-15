namespace ConsoleAppCSharp
{
    public abstract class Conta
    {
        /// <summary>
        /// O construtor, leva o mesmo nome da classe.
        /// </summary>
        private decimal _saldo;
        private int _agencia;
        private int _numConta;

        //Construtor vazio, sem parametros, no C# os construtores possuem o mesmo nome da classe.
        public Conta()
        {

        }
        public Conta(int ag, int ct)
        {
            this._agencia = ag;
            this._numConta = ct;
        }

        public decimal Saldo
        {
            get => _saldo;
            set
            {
                if (value > 0)
                    _saldo += value;
            }
        }

        public int Agencia
        {
            get => _agencia;
            set
            {
                if (value > 0)
                    _agencia = value;
            }
        }

        public int NumConta
        {
            get => _numConta;
            set
            {
                if (value > 0)
                    _numConta = value;
            }
        }

        public abstract string RendimentoJuros();

        public string Depositar(Conta ct, decimal valor)
        {
            if (ct != null && valor > 0)
            {
                ct.Saldo = valor;
                return $"Deposito de R${valor:N2} realizado na conta {ct.NumConta}. Saldo: R${ct.Saldo:N2}";
            }
            else
            {
                return "Ocorreu um erro.";
            }
        }

        public string Sacar(Conta ct, decimal valor)
        {
            if(ct != null && ct.Saldo >= valor)
            {
                ct._saldo -= valor;
                return $"Saque de {valor:N2} realizado na conta {ct.NumConta}. Saldo: {ct.Saldo:N2}";
            }
            else
            {
                return "Saldo insulficiente.";
            }
        }

        public string Emprestimo(double valor, DateTime data)
        {
            return $"Emprestimo no valor de R${valor:N2} realizado em {data}";
        }

    }

}
