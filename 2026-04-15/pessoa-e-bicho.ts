class Pessoa
{
    nome: string;
    triste: boolean;
    
    constructor(primeiroNome: string, ehTriste: boolean)
    {
        this.nome = primeiroNome;
        this.triste = ehTriste;
    }
    //Abaixo, forma sucinta de fazer o que é feito acima, usando outra sintaxe. Em LPs, essas facilidades são chamadas de 'açúcares sintáticos'. Ambas são equivalentes.
    /*constructor(
      public nome: string,
      public triste: boolean){}*/

    abraca(outraPessoa: Pessoa)
    {
        outraPessoa.triste = false;
        this.triste = false;
        console.log(this.nome + " abraça " + outraPessoa.nome);
    }
}

class Bicho
{
    constructor(
        public nome: string,
        public especie: string,
        public saudavel: boolean)
        {
            if(!this.saudavel)
            {
                console.log("Mandar email para solicitar atendimento.");
            }
        }

        brincar()
        {
        }
}
