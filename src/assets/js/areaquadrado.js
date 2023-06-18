function calcularArea() {
    // Obter o valor do lado do quadrado
    var lado = parseFloat(document.getElementById('input-lado').value);

    // Verificar se o valor é válido
    if (isNaN(lado)) {
        alert('Digite um valor válido para o lado.');
    } else {
        // Calcular a área do quadrado
        var area = lado * lado;

        // Exibir o resultado
        var resultadoElement = document.querySelector('.quadrado-resultado');
        resultadoElement.textContent = "A área do quadrado é: " + area;
    }
}

var calcularButton = document.querySelector('button');
calcularButton.addEventListener('click', calcularArea);
