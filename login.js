var usuario_cadastrado = [];


function cadastrar(){
    var login_text_cadastre = document.getElementById('login_text_cadastrar').value;
    var email_cadastrar = document.getElementById('email_cadastrar').value;
    var senha_number_cadastrar = document.getElementById('senha_number_cadastrar').value;


    let cadastro_usuarios = {
        'usuario': login_text_cadastre,
        'email' : email_cadastrar,
        'senha' : senha_number_cadastrar,
    }

    let usuarioEncontrado = usuario_cadastrado.find(cadastro => cadastro.usuario === login_text_cadastre);
    
    if (usuarioEncontrado) {
        alert('Usuario ja registrado, tente mudar seu usuario para que possa ser concluido o cadastro!!!');
        document.getElementById('login_text_cadastrar').value = '';
        document.getElementById('email_cadastrar').value = '';
        document.getElementById('senha_number_cadastrar').value = '';

    }else{
        if (cadastro_usuarios.usuario != '' && email_cadastrar != '' && senha_number_cadastrar != '') {
            usuario_cadastrado.push(cadastro_usuarios)
            alert('cadastro bem sucedido!!!')

            document.getElementById('login_text_cadastrar').value = '';
            document.getElementById('email_cadastrar').value = '';
            document.getElementById('senha_number_cadastrar').value = '';
        }

        console.log(usuario_cadastrado);

        alert('Usuario cadastrado!!!');
    }

    
};


function login() {
    var login_acessar = window.document.getElementById('login_text').value;
    var senha_acessar = window.document.getElementById('senha_number').value;

    let usuarioEncontrado = usuario_cadastrado.find(cadastro => cadastro.usuario === login_acessar && cadastro.senha === senha_acessar);
    
    if (usuarioEncontrado) {
        alert('Seja bem vindo ' + login_acessar);
    }else{
        alert('senha invalida!!!!')
    }
}

