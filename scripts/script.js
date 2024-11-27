document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('user-avatar').addEventListener('click', function(event) {
        const options = document.getElementById('user-options');
        options.style.display = (options.style.display === 'block' ? 'none' : 'block');
        event.stopPropagation(); 
    });

    document.addEventListener('click', function(event) {
        const options = document.getElementById('user-options');
        if (!options.contains(event.target) && !document.getElementById('user-avatar').contains(event.target)) {
            options.style.display = 'none';
        }
    });
});

$('#formCadastro').submit(function(event) {
    event.preventDefault(); 

    var senha = $('#senha').val();
    var confirmaSenha = $('#confirmaSenha').val();

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    $('#cadastroModal').modal('hide');

    window.location.href = 'home.html';
});

$('#formLogin').submit(function(event) {
    event.preventDefault();

    var email = $('#email').val();
    var senha = $('#senha').val();

    if (email && senha) {
        $('#loginModal').modal('hide');
        window.location.href = 'home.html';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});


function confirmarSair() {
    if (confirm("Você tem certeza que deseja sair?")) {
        window.location.href = "index.html";
    }
}

document.getElementById('formAlterarEmail').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("E-mail alterado com sucesso!");
});

document.getElementById('formAlterarSenha').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (novaSenha !== confirmarSenha) {
        alert("As senhas não coincidem!");
    } else {
        alert("Senha alterada com sucesso!");
    }
});