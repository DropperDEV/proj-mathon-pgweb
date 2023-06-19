function translateToBinary() {
    const inputText = document.getElementById('input').value;
    let binaryCode = '';

    for (let i = 0; i < inputText.length; i++) {
      const charCode = inputText.charCodeAt(i);
      const binary = charCode.toString(2);
      binaryCode += binary.padStart(8, '0') + ' ';
    }

    document.getElementById('output').value = binaryCode.trim();
  }

  function translateToText() {
    const inputBinary = document.getElementById('input').value;
    const binaryArray = inputBinary.trim().split(' ');
    let text = '';

    for (let i = 0; i < binaryArray.length; i++) {
      const binary = binaryArray[i];
      const charCode = parseInt(binary, 2);
      const char = String.fromCharCode(charCode);
      text += char;
    }

    document.getElementById('output').value = text;
  }