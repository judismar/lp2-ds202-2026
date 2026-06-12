class Numero
{
    private x;

    public constructor(x: number)
    {
        this.x = x;
    }

    public soma(outroNumero: Numero): Numero
    {
        let resultadoSoma = new Numero(this.x + outroNumero.x);
        return resultadoSoma;
    }

    public multiplica(outroNumero: Numero): Numero
    {
        let resultado = new Numero(this.x * outroNumero.x);
        return resultado;
    }
}
5 + (2 + 3)*5 //fazer a mesma coisa, usando métodos:
let n = new Numero(2);
let n2 = new Numero(3);
let n3 = new Numero(5);
n3.soma(n.soma(n2)).multiplica(n3); //aqui! Métodos como operações: tudo pode ser feito por métodos.

class Gato
{
    private nome: string;
    private raca: string;
    private estaTriste = true;

    public constructor(nome: string, raca: string)
    {
        this.nome = nome;
        this.raca = raca;
    }

    public retornaNome()
    {
        return this.nome;
    }

    public retornaRaca()
    {
        return this.nome;
    }

    public mordeDono(nome: string)
    {
        this.estaTriste = false;
        console.log(nome + " foi mordida!");
    }

    public estaFeliz()
    {
        return !this.estaTriste
    }
}

let b1 = new Gato("Chano", "SRD");
b1.mordeDono("Kiara");
if(b1.estaFeliz())
{
    console.log("Eba!!!!");
}
