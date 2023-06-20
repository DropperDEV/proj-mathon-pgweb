function converterComprimento() {
    // Obter valores do formulário
    var valorEntrada = parseFloat(document.getElementById('valor').value);
    var unidadeEntrada = document.getElementById('unidadeEntrada').value;
    var unidadeSaida = document.getElementById('unidadeSaida').value;
    
    // Converter unidades
    var fatorConversao;
    
    // Fator de conversão para metros
    if (unidadeEntrada === 'metro') {
      fatorConversao = 1;
    } else if (unidadeEntrada === 'centimetro') {
      fatorConversao = 0.01;
    } else if (unidadeEntrada === 'milimetro') {
      fatorConversao = 0.001;
    }
    
    // Converter para unidade de saída
    var resultado = valorEntrada * fatorConversao;
    
    // Fator de conversão da unidade de saída
    if (unidadeSaida === 'metro') {
      resultado /= 1;
    } else if (unidadeSaida === 'centimetro') {
      resultado /= 0.01;
    } else if (unidadeSaida === 'milimetro') {
      resultado /= 0.001;
    }
    
    // Exibir resultado
    document.getElementById('resultado').innerHTML = resultado.toFixed(2) + ' ' + unidadeSaida;
  }