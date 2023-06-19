function gerarSenha() {
    var caracteres = '';
    var comprimento = parseInt(document.getElementById('comprimento').value);
    var incluirLetrasMaiusculas = document.getElementById('incluirLetrasMaiusculas').checked;
    var incluirLetrasMinusculas = document.getElementById('incluirLetrasMinusculas').checked;
    var incluirNumeros = document.getElementById('incluirNumeros').checked;
    var incluirSimbolos = document.getElementById('incluirSimbolos').checked;

    if (incluirLetrasMaiusculas) {
      caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (incluirLetrasMinusculas) {
      caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (incluirNumeros) {
      caracteres += '0123456789';
    }
    if (incluirSimbolos) {
      caracteres += '!@#$%^&*()_+~`|}{[]\:;?><,./-='; 
    }

    var senha = '';
    for (var i = 0; i < comprimento; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById('senhaGerada').value = senha;
  }