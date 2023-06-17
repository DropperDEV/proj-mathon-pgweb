function calcularFatorial() {
      var inputElement = document.querySelector('input[type="text"]');
      var numero = parseInt(inputElement.value);
  
      if (isNaN(numero)) {
          alert("Por favor, digite um número válido.");
          return;
      }
  
      if (numero < 0) {
          alert("O fatorial não pode ser calculado para números negativos.");
          return;
      }
  
      var fatorial = 1;
      for (var i = 2; i <= numero; i++) {
          fatorial *= i;
      }
  
      var resultadoElement = document.querySelector('.fatorial-resultado');
      resultadoElement.textContent = "O fatorial é: " + fatorial;
  }
  
  var calcularButton = document.querySelector('button');
  calcularButton.addEventListener('click', calcularFatorial);
  