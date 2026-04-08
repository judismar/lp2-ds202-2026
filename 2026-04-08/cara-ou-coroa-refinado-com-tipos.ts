//Três tipos básicos primitivos: number, string e boolean
//Tipo 'any': tipagem dinâmica (estilo Javascript)

let escolha: string = String(prompt("Digite cara ou coroa: ")).toLocaleLowerCase();
let resultado: number = Math.random()*100;

function resultadoFinal(caraOuCoroa: string)
{
    console.log("Caiu " + caraOuCoroa + ".");
    if(escolha == caraOuCoroa)
    {
        console.log("Você venceu!");
    }
    else
    {
        console.log("Você perdeu. :(");
    }
}

if(resultado <= 50)
{
    resultadoFinal("cara")
}
else
{
    resultadoFinal("coroa")
}

//Operador ternário
//resultado <= 50 ? resultadoFinal("cara") : resultadoFinal("coroa");
