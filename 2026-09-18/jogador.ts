abstract class Jogador
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

    abstract atacar(oponente: Jogador): void;

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

class Guerreiro extends Jogador
{
    atacar(oponente: Jogador): void
    {

    }
}

class Druida extends Jogador
{
    domado: number = 0;

    domar(): 
    {
        this.domado = Math.random()*3
    }

    atacar(oponente: Jogador): void
    {
        this.domado = false;
    }
}

class Arqueiro extends Jogador
{
    mirou: boolean = false;

    //Caso mirou não fosse sempre false:
    /*constructor(nome: string, acerto: number, pv: number, mirou: boolean)
    {
        super(nome, acerto, pv);
        this.mirou = mirou;
    }*/

        

    atacar(oponente: Jogador): void
    {
        this.mirou = false;
    }

    mira()
    {
        this.mirou = true;
    }
}



let j = new Arqueiro("Agatha", 1, 20);
let h = new Guerreiro("Hermenegildo", 1, 5);
