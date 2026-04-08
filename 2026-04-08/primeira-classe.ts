class Pessoa
{
    nome: string;
    triste: boolean = true;
    
    constructor(primeiroNome: string)
    {
        this.nome = primeiroNome;
    }

    abraca(outraPessoa: Pessoa)
    {
        outraPessoa.triste = false;
        this.triste = false;
        console.log(this.nome + " abraça " + outraPessoa.nome);
    }
}

let pessoa1: Pessoa = new Pessoa("Daniel");
let pessoa2 = new Pessoa("Alex");
pessoa1.abraca(pessoa2);
