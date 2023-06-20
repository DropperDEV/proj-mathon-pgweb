function converterPeso() {
    // Obter valores do formulário
    var valorEntrada = parseFloat(document.getElementById('valor').value);
    var unidadeEntrada = document.getElementById('unidadeEntrada').value;
    var unidadeSaida = document.getElementById('unidadeSaida').value;
    
    // Tabela de conversão de quilogramas para outras unidades
    var tabelaConversao = {
      grama: 1000,
      libra: 2.20462,
      onca: 35.274
      // Adicione outras unidades e seus fatores de conversão aqui
    };
    
    // Converter unidades
    var resultado;
    
    if (unidadeEntrada === unidadeSaida) {
      resultado = valorEntrada; // Mesma unidade de entrada e saída
    } else if (unidadeEntrada === 'quilograma') {
      resultado = valorEntrada * tabelaConversao[unidadeSaida];
    } else if (unidadeSaida === 'quilograma') {
      resultado = valorEntrada / tabelaConversao[unidadeEntrada];
    } else {
      // Conversão intermediária para quilograma e, em seguida, para a unidade de saída
      resultado = (valorEntrada / tabelaConversao[unidadeEntrada]) * tabelaConversao[unidadeSaida];
    }
    
    // Exibir resultado
    document.getElementById('resultado').innerHTML = resultado.toFixed(2) + ' ' + unidadeSaida;
}