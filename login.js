let usuario_cadastrado = []

function Cadastrar() {
    var login_text_cadastre = window.document.getElementById('login_text_cadastrar').value;
    var email_cadastrar = window.document.getElementById('email_cadastrar').value;
    var senha_number_cadastrar = window.document.getElementById('senha_number_cadastrar').value;


    let cadastro_usuarios = {
        'usuario': login_text_cadastre,
        'email' : email_cadastrar,
        'senha' : senha_number_cadastrar,
    }

    usuario_cadastrado.push(cadastro_usuarios)

    console.log(usuario_cadastrado);
}

