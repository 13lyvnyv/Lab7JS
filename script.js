let startGameBtn = document.getElementById('startGameBtn');
let userInput = document.getElementById('userInput');
let submitGameBtn = document.getElementById('submitGameBtn');

startGameBtn.addEventListener('click', startGame);
submitGameBtn.addEventListener('click', submitGuess);

let y; 
let guess = 5; 

function startGame() {
    startGameBtn.style.display = 'none';
    userInput.style.display = 'block';
    submitGameBtn.style.display = 'block';
    y = Math.floor(Math.random() * 10 + 1); 
}

function endGame() {
    guess = 5;
    startGameBtn.style.display = 'block';
    userInput.style.display = 'none';
    submitGameBtn.style.display = 'none';
}

function submitGuess() {
    let x = parseInt(userInput.value);

    if (isNaN(x) || x < 1 || x > 10) {
        alert('Пожалуйста, введите число от 1 до 10.');
    }
    if (x === y) {
        alert(`Вы угадали! Загаданное число: ${y}`);
        endGame();
    } else if (x > y) {
        guess--;
        alert(`Загаданное число меньше. Осталось попыток: ${guess}`);
    } else if (x < y) {
        guess--;
        alert(`Загаданное число больше. Осталось попыток: ${guess}`);
    }

    if (guess === 0) {
        alert('Вы проиграли!');
        endGame();
    }
}
