var abreAba3 = document.querySelector("#bloco3");

abreAba3.addEventListener("click", function(evento){

    evento.preventDefault;

    criaFundo ();
    criaCaixa (3);
    criaDivisoes (3);
    poeConteudoExposto3 ();
    poeConteudoOculto3 ();
    fecharAba();
})

function poeConteudoExposto3 (){

    var conteudo = document.querySelector(".aba__exposto");

    var foto = document.createElement("img");
    foto.classList.add("aba__img");

    var textoExposto = document.createElement("h2");
    textoExposto.classList.add("aba__obra")
    
    // variaveis a serem alteradas

    foto.src = "imagens/casa-3.jpg";
    foto.alt = "Imagem Morada Burguesa";
    textoExposto.innerHTML = "Morada Burguesa";

    conteudo.appendChild(foto);
    conteudo.appendChild(textoExposto); 
}

function poeConteudoOculto3 (){

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

    p1.innerHTML = "NOME: Condôminio Residencial Morada Burguesa";
    p2.innerHTML = "STATUS: Em Andamento";
    p3.innerHTML = "O condominío Morada Burguesa encontra-se em área nobre próximo ao Parque das Nações em Criciúma, contando com excelentes apartamentos, confortáveis e com preços acessíveis. O condomínio possui 8 andares, piscina e salão de festas.";

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(p1);
    conteudo.appendChild(p2);
    conteudo.appendChild(p3);
}
