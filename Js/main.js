
function processPurchase() {
    const price = parseFloat(document.getElementById('price').value);
    const clientMoney = parseFloat(document.getElementById('clientMoney').value);
    const resultElement = document.getElementById('result1');

    if (isNaN(price) || isNaN(clientMoney) || price < 0 || clientMoney < 0) {
        resultElement.textContent = "Неверный формат ввода. Введите положительные числа.";
    } else if (price === clientMoney) {
        resultElement.textContent = "Покупка совершена.";
    } else if (price > clientMoney) {
        resultElement.textContent = `Для покупки не хватает ${price - clientMoney} р.`;
    } else {
        resultElement.textContent = `Покупка совершена. Сдача ${clientMoney - price} р.`;
    }
}


function checkNumber() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result2');

    if (isNaN(number)) {
        resultElement.textContent = "Неверный формат ввода.";
    } else {
        const result = number > 0 ? 1 : (number < 0 ? -1 : 0);
        resultElement.textContent = `Результат: ${result}`;
    }
}


let a = 1, b = 2; 
let result3 = (a + b < 4) ? 'Мало' : 'Много';
document.getElementById('result3').textContent = `Результат: ${result3}`;


function loginPrompt() {
    const login = prompt("Введите логин:", "");

    if (login === 'Админ') {
        const password = prompt("Введите пароль:", "");
        if (password === 'Я главный') {
            alert('Здравствуйте!');
            document.getElementById('result4').textContent = 'Здравствуйте!';
        } else if (password === null || password === '') {
            alert('Отменено');
            document.getElementById('result4').textContent = 'Отменено';
        } else {
            alert('Неверный пароль');
            document.getElementById('result4').textContent = 'Неверный пароль';
        }
    } else if (login === null || login === '') {
        alert('Отменено');
        document.getElementById('result4').textContent = 'Отменено';
    } else {
        alert('Я вас не знаю');
        document.getElementById('result4').textContent = 'Я вас не знаю';
    }
}
