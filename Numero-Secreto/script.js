let drawnNumbersList = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function displayTextOnScreen(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
  responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
}

function displayInitialMessage() {
  displayTextOnScreen('h1', 'Jogo do número secreto');
  displayTextOnScreen('p', 'Escolha um número entre 1 e 10');
}

displayInitialMessage();

function checkGuess() {
  let guess = document.querySelector('input').value;
  
  if (guess == secretNumber) {
    displayTextOnScreen('h1', 'Acertou!');
    let attemptWord = attempts > 1 ? 'tentativas' : 'tentativa';
    let attemptsMessage = `Você descobriu o número secreto com ${attempts} ${attemptWord}!`;
    displayTextOnScreen('p', attemptsMessage);
    document.getElementById('restart').removeAttribute('disabled');
  } else {
    if (guess > secretNumber) {
      displayTextOnScreen('p', 'O número secreto é menor');
    } else {
      displayTextOnScreen('p', 'O número secreto é maior');
    }
    attempts++;
    clearField();
  }
}

function generateRandomNumber() {
  let chosenNumber = parseInt(Math.random() * limitNumber + 1);
  let listLength = drawnNumbersList.length;

  if (listLength == limitNumber) {
    drawnNumbersList = [];
  }
  if (drawnNumbersList.includes(chosenNumber)) {
    return generateRandomNumber();
  } else {
    drawnNumbersList.push(chosenNumber);
    return chosenNumber;
  }
}

function clearField() {
  let guessField = document.querySelector('input');
  guessField.value = '';
}

function restartGame() {
  secretNumber = generateRandomNumber();
  clearField();
  attempts = 1;
  displayInitialMessage();
  document.getElementById('restart').setAttribute('disabled', true);
}