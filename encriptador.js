// Declaración de variables y selectores
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const validationMessage = document.getElementById('validationMessage');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');

// Función para encriptar
function encrypt() {
    const input = inputText.value;

    if (/[A-Z]/.test(input) || /[^a-zA-Z0-9\s]/.test(input)) {
        validationMessage.textContent = 'No se aceptan mayúsculas ni caracteres especiales';
        outputText.textContent = '';
        return;
    } else {
        validationMessage.textContent = '';
    }

    let encryptedText = '';
    for (let i = 0; i < input.length; i++) {
        encryptedText += String.fromCharCode(input.charCodeAt(i) + 3);
    }
    outputText.textContent = encryptedText;
}

// Función para descifrar
function decrypt() {
    const input = inputText.value;

    if (/[A-Z]/.test(input) || /[^a-zA-Z0-9\s]/.test(input)) {
        validationMessage.textContent = 'No se aceptan mayúsculas ni caracteres especiales';
        outputText.textContent = '';
        return;
    } else {
        validationMessage.textContent = '';
    }

    let decryptedText = '';
    for (let i = 0; i < input.length; i++) {
        decryptedText += String.fromCharCode(input.charCodeAt(i) - 3);
    }
    outputText.textContent = decryptedText;
}

// Función para copiar texto al portapapeles
function copyText() {
    const output = outputText.textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

// Conectar funciones a los botones
encryptButton.addEventListener('click', encrypt);
decryptButton.addEventListener('click', decrypt);
copyButton.addEventListener('click', copyText);
