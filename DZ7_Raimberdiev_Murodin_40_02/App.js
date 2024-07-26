function generateRandom(maxLimit = 100) { 
    let rand = Math.random() * maxLimit; 
    rand = Math.floor(rand) + 1;
    return rand;
}

let number1 = generateRandom();
let number2 = generateRandom();

document.getElementById('number1').textContent = number1;
document.getElementById('number2').textContent = number2;

document.getElementById('check').addEventListener('click', function() {
    let userAnswer = document.getElementById('Answer').value;
    let correctAnswer = number1 * number2;
    
    let resultDiv = document.getElementById('result');
    if (userAnswer == correctAnswer) {
        resultDiv.textContent = "Правильно!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
        resultDiv.style.color = "red";
    }

    number1 = generateRandom();
    number2 = generateRandom();
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
    document.getElementById('Answer').value = '';
});
