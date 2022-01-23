function criaFundo (){
    var aba = document.querySelector(".aba");

    var fundo = document.createElement('div');
    fundo.classList.add('aba__hidden');

    aba.appendChild(fundo);
}

function criaCaixa (){
    var hidden = document.querySelector(".aba__hidden");

    var caixa = document.createElement('div');
    caixa.classList.add('aba__box');

    hidden.appendChild(caixa);
}

function criaDivisoes (){

    var container = document.querySelector(".aba__box");

    var caixaExposto = document.createElement("div");
    caixaExposto.classList.add("aba__exposto");

    var caixaOculto = document.createElement("div");
    caixaOculto.classList.add("aba__oculto")

    container.appendChild(caixaExposto);
    container.appendChild(caixaOculto);
}

function fecharAba (){
    
    var botaoFechar = document.querySelector("#fechar");
    botaoFechar.addEventListener("click", fechar);
}

var fechar = ()=>{

    const fechar = document.querySelector(".aba__hidden");
    fechar.remove ();
}