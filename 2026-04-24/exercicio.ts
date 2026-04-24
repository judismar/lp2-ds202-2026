class Moeda
{
    public arremessar()
    {
        let resultado = Math.round(Math.random());
        if(resultado == 0)
        {
            return "cara"
        }
        else
        {
            return "coroa"
        }
    }
}

//Serve apenas para chamar o método 'jogar()'. É a classe principal.
class CaraOuCoroa
{
    public jogar()
    {
        let jogada = String(prompt("Escolha 'cara' ou 'coroa', ou 'sair' para sair: "));
        let moeda = new Moeda();
        while(jogada != 'sair')
        {
            let resultado = moeda.arremessar();

            if(resultado == jogada)
            {
                console.log("Caiu " + resultado + ". Você venceu! :)");
            }
            else
            {
                console.log("Caiu " + resultado + ". Você perdeu. :(");
            }
            jogada = String(prompt("Escolha 'cara' ou 'coroa', ou 'sair' para sair: "));
        }
    }
}

new CaraOuCoroa().jogar()
