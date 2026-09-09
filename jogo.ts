class Jogador
{
    nome: string;
    acerto: number;
    pv: number; //Pontos de vida

    constructor(nome: string, acerto: number, pv: number)
    {
        this.nome = nome;
        this.acerto = acerto;
        this.pv = pv;
        if(this.pv < 0) this.pv = 20; //Quando há um único comando, não precisa de colchetes, exceto para métodos e funções 
    }

    levarDano(danoVida: number): boolean
    {
        //if(this instanceof Arqueiro){}
        
        this.pv -= danoVida;
        if(this.pv < 0)
        {
            this.pv = 0;
            if(this.pv == 0)
            {
                return false; //morreu
            }
        }
        return true;
    }

    /*private estaVivo()
    {
        return this.pv > 0;
    }*/
}

class Guerreiro extends Jogador{}
class Arqueiro extends Jogador
{
    mirou: boolean = false;

    //Caso mirou não fosse sempre false:
    /*constructor(nome: string, acerto: number, pv: number, mirou: boolean)
    {
        super(nome, acerto, pv);
        this.mirou = mirou;
    }*/

    mira()
    {
        this.mirou = true;
    }
}
