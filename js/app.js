// script.js

// Funciones de encriptación y desencriptación simples
function encrypt(word) {
    return btoa(word); // Base64
}

function decrypt(word) {
    return atob(word); // Base64
}

// Elementos del DOM
const startGameButton = document.getElementById('startGame');
const shareButton = document.getElementById('shareButton');
const wordInput = document.getElementById('word');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const hiddenWordDisplay = document.getElementById('hiddenWord');

// Iniciar el juego (para el mismo usuario)
startGameButton.addEventListener('click', function () {
    const word = wordInput.value.trim();
    if (word) {
        screen1.classList.remove('active');
        screen2.classList.add('active');
        hiddenWordDisplay.textContent = `Palabra oculta: ${word}`;
    }
});

// Compartir la palabra
shareButton.addEventListener('click', function () {
    const word = wordInput.value.trim();
    if (word) {
        const encryptedWord = encrypt(word);
        const url = `${window.location.href.split('?')[0]}?word=${encryptedWord}`;
        alert(`Comparte este enlace: ${url}`);
    }
});

// Si hay una palabra en la URL, cargar el juego
const params = new URLSearchParams(window.location.search);
const encryptedWord = params.get('word');
if (encryptedWord) {
    const word = decrypt(encryptedWord);
    screen1.classList.remove('active');
    screen2.classList.add('active');
    hiddenWordDisplay.textContent = `Palabra oculta: ${word}`;
}
