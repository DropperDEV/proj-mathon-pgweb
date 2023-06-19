function calcularArea() {
    // Obter os valores dos lados x e y do retângulo
    var ladoX = parseFloat(document.getElementById('input-lado-x').value);
    var ladoY = parseFloat(document.getElementById('input-lado-y').value);

    // Verificar se os valores são válidos
    if (isNaN(ladoX) || isNaN(ladoY)) {
        alert('Digite valores válidos para os lados.');
    } else {
        // Calcular a área do retângulo
        var area = ladoX * ladoY;

        // Exibir o resultado
        var resultadoElement = document.querySelector('.retangulo-resultado');
        resultadoElement.textContent = "A área do retângulo é: " + area;
    }
}

var calcularButton = document.querySelector('button');
calcularButton.addEventListener('click', calcularArea);
