var abreAba4 = document.querySelector("#bloco4");

abreAba4.addEventListener("click", function(evento){

    evento.preventDefault;

    criaFundo ();
    criaCaixa ();
    criaDivisoes ();
    poeConteudoExposto4 ();
    poeConteudoOculto4 ();
    fecharAba();
})

function poeConteudoExposto4 (){

    var conteudo = document.querySelector(".aba__exposto");

    var foto = document.createElement("img");
    foto.classList.add("aba__img");

    var textoExposto = document.createElement("h2");
    textoExposto.classList.add("aba__obra")
    
    // variaveis a serem alteradas

    foto.src = "imagens/casa-4.jpg";
    foto.alt = "Imagem Residência Woody";
    textoExposto.innerHTML = "Residência Woody";

    conteudo.appendChild(foto);
    conteudo.appendChild(textoExposto); 
}

function poeConteudoOculto4 (){

    var conteudo = document.querySelector(".aba__oculto");

    var botaoFechar = document.createElement("p");
    botaoFechar.classList.add("aba__fechar");
    botaoFechar.id = "fechar";
    botaoFechar.innerHTML = "&#10006;";

    var p1 = document.createElement("p");
    p1.classList.add("aba__texto");

    var p2 = document.createElement("p");
    p2.classList.add("aba__texto");

    var p3 = document.createElement("p");
    p3.classList.add("aba__texto");


    // conteudos ocultos

    p1.innerHTML = "NOME: Residência Woody";
    p2.innerHTML = "STATUS: Concluida 2018";
    p3.innerHTML = "Esta residência visa uma acabamento rústico em madeira com alta eficiência energética. Construída em um terreno limitado, esta residência conta com uma arrojada distribuição dos espaços a fim de manter o conforto e aproveitar ao máximo o terreno.";

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(p1);
    conteudo.appendChild(p2);
    conteudo.appendChild(p3);
}
