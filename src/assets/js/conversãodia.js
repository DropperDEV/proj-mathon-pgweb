function calcular() {
    const diasInput = document.getElementById('diasInput');
    const resultadoElement = document.querySelector('.resultado');
    const dias = parseInt(diasInput.value);

    if (isNaN(dias)) {
      resultadoElement.textContent = 'Por favor, digite um número válido.';
    } else {
      const anos = Math.floor(dias / 365);
      const meses = Math.floor((dias % 365) / 30);
      const diasRestantes = (dias % 365) % 30;
      resultadoElement.textContent = `Anos: ${anos}, Meses: ${meses}, Dias: ${diasRestantes}`;
    }
  }