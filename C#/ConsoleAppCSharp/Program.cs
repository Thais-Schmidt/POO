// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

/*
*O conceito namespace foi criado para nos ajudar a organizar melhor nossos codigos. 
*Eles podem ser entendidos como "categorias" ou "blocos" que contem trechos de codigo.
*/

namespace ConsoleAppCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("\n====Teste conta 1====");
            ContaCorrente cC1 = new ContaCorrente();
            cC1.Agencia = 1234;
            cC1.NumConta = 9876;

            Console.WriteLine(cC1.Depositar(cC1, 1000)); //depositando 1000,00 
            Console.WriteLine(cC1.Depositar(cC1, 2000)); //depositando 2000,00

            Console.WriteLine(cC1.Sacar(cC1, 750)); //sacando 750,00 

            Console.WriteLine($"Agencia de numero:{cC1.Agencia}, conta: {cC1.NumConta}");
            Console.WriteLine(cC1.RendimentoJuros());

            ContaPoupanca cP1 = new ContaPoupanca(0001,987,0.02);
            Console.WriteLine($"Agencia numero {cP1.Agencia}, Conta poupança:{cP1.NumConta}");
            Console.WriteLine(cP1.Depositar(cP1, 2000)); //depositando 2000,00
            Console.WriteLine(cP1.RendimentoJuros());
            
        }
    }

}