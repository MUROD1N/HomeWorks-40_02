const textInput = document.getElementById('text-input');
const totalChars = document.getElementById('total-chars');
const remainingChars = document.getElementById('remaining-chars');
const maxChars = 50;

textInput.addEventListener('input', () => {
    const textLength = textInput.value.length;
    totalChars.textContent = textLength;
    remainingChars.textContent = maxChars - textLength;
});