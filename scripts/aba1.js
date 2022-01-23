
var abreAba1 = document.querySelector("#bloco1");

abreAba1.addEventListener("click", function(evento){

    evento.preventDefault;

    criaFundo ();
    criaCaixa ();
    criaDivisoes ();
    poeConteudoExposto1 ();
    poeConteudoOculto1 ();
    fecharAba();
})

function poeConteudoExposto1 (){

    var conteudo = document.querySelector(".aba__exposto");

    var foto = document.createElement("img");
    foto.classList.add("aba__img");

    var textoExposto = document.createElement("h2");
    textoExposto.classList.add("aba__obra")
    
    // variaveis a serem alteradas

    foto.src = "imagens/casa-1.jpg";
    foto.alt = "Imagem residência Recanto";
    textoExposto.innerHTML = "Residência Recanto";

    conteudo.appendChild(foto);
    conteudo.appendChild(textoExposto); 
}

function poeConteudoOculto1 (){

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

    p1.innerHTML = "NOME: Residência Recanto";
    p2.innerHTML = "STATUS: Concluida 2020";
    p3.innerHTML = "Localizada no interior de Cazuza, essa residência de alto padrão foi desenvolvida para atender aos mais altos padrões de eficiência energética e propocionar muito conforto e sintonia com seu ambiente externo.";

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(p1);
    conteudo.appendChild(p2);
    conteudo.appendChild(p3);
}
