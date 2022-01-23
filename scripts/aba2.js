var abreAba2 = document.querySelector("#bloco2");

abreAba2.addEventListener("click", function(evento){

    evento.preventDefault;

    criaFundo ();
    criaCaixa ();
    criaDivisoes ();
    poeConteudoExposto2 ();
    poeConteudoOculto2 ();
    fecharAba();
})

function poeConteudoExposto2 (){

    var conteudo = document.querySelector(".aba__exposto");

    var foto = document.createElement("img");
    foto.classList.add("aba__img");

    var textoExposto = document.createElement("h2");
    textoExposto.classList.add("aba__obra")
    
    // variaveis a serem alteradas

    foto.src = "imagens/casa-2.jpg";
    foto.alt = "Imagem Balanço do Bangalô";
    textoExposto.innerHTML = "Balanço do Bangalô";

    conteudo.appendChild(foto);
    conteudo.appendChild(textoExposto); 
}

function poeConteudoOculto2 (){

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

    p1.innerHTML = "NOME: Residência Balanço do Bangalô";
    p2.innerHTML = "STATUS: Concluida 2017";
    p3.innerHTML = "Esta linda residência urbana valoriza ambientes internos amplos e integrados, possui uma sala e cozinha integrada, chegando a possuir vãos livres de até 9m. E também uma luxuosa área de lazer equipada com piscina e cozinha gourmet";

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(p1);
    conteudo.appendChild(p2);
    conteudo.appendChild(p3);
}
