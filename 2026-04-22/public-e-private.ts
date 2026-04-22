//Abstração: Simplificar; exemplo: temos o território do Brasil, mas podemos usar um mapa para nos localizar. Outro exemplo: Em LP1, usamos print() e randint() sem saber como são implementados, mas sim como são usados.

//Modularização: Dividir o programa em módulos: funções, arquivos com funções; classes, arquivos com classes etc.

//Encapsulamento: De forma resumida, interagir com objetos sem conhecer seu funcionamento interno. Ex: Microondas. Separação dos detalhes externos do objeto (que são acessíveis), de seus detalhes internos de implementação, que são abstraídos.

//Abaixo, a solução dos exercícios da última aula.

//1. Crie uma classe chamada `Pessoa` com os atributos `nome` e `idade`. Instancie um objeto dessa classe e imprima os atributos.
class Pessoa
{
    private nome: string;
    private idade: number;

    public constructor(n: string, i: number)
    {
        this.nome = n;
        this.idade = i;
    }

    public retornaNome()
    {
        return this.nome
    }

    public retornaIdade()
    {
        return this.idade
    }
}

let p = new Pessoa('Renan', 16);
console.log(p.retornaNome(), p.retornaIdade());

//2. Crie uma classe `Carro` com atributos `marca` e `modelo`. Instancie um objeto e modifique os atributos.
class Carro
{
    public constructor(
        private marca: string,
        private modelo: string){}

    public alteraMarca(novaMarca: string)
    {
        this.marca = novaMarca;
    }

    public alteraModelo(novoModelo: string)
    {
        this.modelo = novoModelo;
    }
}

let carro = new Carro("marca", "modelo");
carro.alteraMarca("BMW");
carro.alteraModelo("Wellington");

//3. Crie uma classe `Produto` com atributos `nome` e `preco`. Crie 3 instâncias dessa classe e mostre o preço total dos produtos.
class Produto
{
    private nome = "parquímetro";
    private preco = 10;

    public precoTotal(prod2: Produto, prod3: Produto)
    {
        return this.preco + prod2.preco + prod3.preco;
    }
}

let x = new Produto();
let y = new Produto();
let z = new Produto();
console.log(z.precoTotal(x, y));

//4. Crie uma classe `Livro` com atributos `titulo` e `autor`. Instancie três livros e mostre o nome do autor de cada um.

class Livro
{
    public constructor(
        private titulo: string,
        private autor: string){}

    public mostraAutor()
    {
        return this.autor;
    }
}

class GerenciaLivros
{
    private caeiro: Livro = new Livro("Poesia Completa de Alberto Caeiro", "Alberto Caeiro");
    private zara: Livro = new Livro("Assim Falava Zaratustra", "Nietzsche");
    private frank = new Livro("Frankenstein ou o Prometeu Moderno", "Mary Shelley");

    public mostraAutoras()
    {
        console.log(this.caeiro.mostraAutor(), this.zara.mostraAutor(), this.frank.mostraAutor());
    }
}

new GerenciaLivros().mostraAutoras();

//5. Crie uma classe `Aluno` com atributos `nome`, `nota1` e `nota2`. Implemente um método que calcula a média.
class Aluno
{
    private nome = "Judis";
    private nota1 = 7;
    private nota2 = 10;

    public media()
    {
        return (this.nota1 + this.nota2)/2
    }
}

//6. Crie uma classe `Funcionario` com atributos `nome`, `salario` e um método que calcula o salário anual.

class Funcionario
{
    public constructor(
        private nome: string,
        private salario: number
    )
    {
        if(salario < 4000)
        {
            salario = 4000.00;
        }
    }

    public computaSalarioAnual()
    {
        return this.salario*12;
    }
}

//7. Crie uma classe `ContaBancaria` com atributos `titular`, `saldo` e `numero`. Adicione um método para depositar dinheiro.

class ContaBancaria
{
    public constructor(
        private titular: string,
        private saldo: number,
        private numero: number
    ){}

    public deposita(dinheiro: number)
    {
        if(dinheiro > 0)
        {
            this.saldo += dinheiro;
        }
        else
        {
            console.log("Valor inválido.");
        }
    }
}
