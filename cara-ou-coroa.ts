let escolha = prompt("Digite cara ou coroa: ");
let resultado = Math.random()*100;

if(resultado <= 50)
{
    console.log("Caiu cara.");

    if(escolha == "cara")
    {
        console.log("Você venceu!");
    }
    else
    {
        console.log("Você perdeu. :(");
    }
}
else
{
   console.log("Caiu coroa.");

   if(escolha == "cara")
    {
        console.log("Você perdeu. :(");
    }
    else
    {
        console.log("Você venceu!");
    }
}
