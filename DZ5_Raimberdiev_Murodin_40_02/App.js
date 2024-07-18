function bodyMassScale() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    if (height && weight) {
        const bodyIndex = (weight / ((height / 100) ** 2)).toFixed(2);
        let result = `Ваш Результат: ${bodyIndex} - `;
        if (bodyIndex < 18.5) {
            result += 'Недостаточный вес';
        } else if (bodyIndex < 24.9) {
            result += 'Вес в норме';
        } else if (bodyIndex < 29.9) {
            result += 'Избыточный вес';
        } else {
            result += 'Ожирение';
        }
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = 'Пожалуйста, введите рост и вес';
    }
}
