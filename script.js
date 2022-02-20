"use strict";
let rightNumber = Math.floor(Math.random() * 20) + 1;
console.log(rightNumber); //Рандомное число от 1 до 20;
const CheckButton = document.querySelector(".btn.check");
const againButton = document.querySelector(".btn.again");
const infoMessage = document.querySelector(".guess-message");
const question = document.querySelector(".question");
const h1 = document.querySelector("h1");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
const header = document.querySelector("header");
const ValueTAg = document.querySelector(".number-input");

//Начальные значения
let step = 20;
let calcScore = 20;
let bestScore = 0;

//Старт Игры
function startPlay() {
  const ValueInput = Number(document.querySelector(".number-input").value);

  if (ValueInput == 0 || ValueInput >= 21) {
    infoMessage.textContent = "Введите число от 1 до 20";
  }

  if (ValueInput > 0 && ValueInput <= 20) {
    if (ValueInput != rightNumber) {
      // Если ответ не верный

      if (ValueInput < rightNumber) {
        infoMessage.textContent = "Маловато";
      } else {
        infoMessage.textContent = "Многовато";
      }

      calcScore--;
      step--;
      ValueTAg.value = "";
      score.innerHTML = calcScore;
    }

    if (ValueInput === rightNumber) {
      //Если ответ верный
      h1.textContent = "ПОЗДРАВЛЯЕМ!";
      infoMessage.textContent = "Верно!";
      header.classList.add("you_have_right");
      question.classList.add("you_have_right");
      question.textContent = rightNumber;

      if (bestScore < calcScore) {
        bestScore = calcScore;
        highscore.textContent = bestScore;
      }

      step = -1;
    }
  }

  if (calcScore == 0) {
    h1.textContent = "Хотети попробовать снова? Нажмите кнопку 'Сначала!' ";
    infoMessage.textContent = "Попытки закончились";
    question.textContent = rightNumber;
    step = -1;
    console.log(`Step = 0, Игра закончена`);
  }
}
//Слушает кнопку для начла игры
CheckButton.addEventListener("click", startPlay);

//Перезапуск Игры
function restartGame() {
  step = 20;
  calcScore = 20;
  score.innerHTML = calcScore;
  rightNumber = Math.floor(Math.random() * 20) + 1;
  h1.textContent = "Угадай Число!";
  question.textContent = "???";
  ValueTAg.value = "";
  header.classList.remove("you_have_right");
  question.classList.remove("you_have_right");
  infoMessage.textContent = "Начни угадывать";
}
//Слушает кнопку для перезапуска игры
againButton.addEventListener("click", restartGame);
