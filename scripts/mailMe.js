
document.getElementById('formulario').addEventListener('submit', function () {
    var nome = document.getElementById('nomeSobrenome'), nome = nome.value;
    var email = document.getElementById('email'), email = email.value;
    var telefone = document.getElementById('fone'), telefone = telefone.value;
    var msg = document.getElementById('mensagem'), msg = msg.value; msg = msg.replace(" ", "%20");

    var texto = 'Olá%20Henrique\n%20Meu%20nome%20é:%20'+ nome +';\n Meu%20email%20é:%20'+ email+';\n Fone:%20'+telefone+';\n\n%20Eu%20gostaria%20de%20tratar%20sobre:%20'+msg;
    document.querySelector('input[name=Body]').setAttribute('value', texto);
});
