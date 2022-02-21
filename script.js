"use strict";
let rightNumber = Math.floor(Math.random() * 20) + 1;
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
    WritesMessage(infoMessage, "Введите число от 1 до 20");
  }

  //Игра продолжается
  if (ValueInput > 0 && ValueInput <= 20) {
    // Если ответ не верный
    if (ValueInput != rightNumber) {
      ValueInput < rightNumber
        ? WritesMessage(infoMessage, "Маловато")
        : WritesMessage(infoMessage, "Многовато");

      calcScore--;
      step--;
      ValueTAg.value = "";
      score.innerHTML = calcScore;
    }

    //Если ответ верный
    if (ValueInput === rightNumber) {
      WritesMessage(h1, "ПОЗДРАВЛЯЕМ!");
      WritesMessage(infoMessage, "Верно!");

      header.classList.add("you_have_right");
      question.classList.add("you_have_right");
      question.textContent = rightNumber;

      if (bestScore < calcScore) {
        bestScore = calcScore;
        highscore.textContent = bestScore;
      }
    }
  }

  //Игрок проиграл, закончились попытки
  if (calcScore == 0) {
    WritesMessage(h1, "Хотети попробовать снова? Нажмите кнопку 'Сначала!' ");
    WritesMessage(infoMessage, "Попытки закончились");

    question.textContent = rightNumber;
    step = -1;
  }
}
//Слушает кнопку для начaла игры
CheckButton.addEventListener("click", startPlay);

//Перезапуск Игры
function restartGame() {
  step = 20;
  calcScore = 20;
  score.innerHTML = calcScore;
  rightNumber = Math.floor(Math.random() * 20) + 1;

  WritesMessage(h1, "Угадай Число!");
  WritesMessage(question, "???");
  WritesMessage(infoMessage, "Начни угадывать");

  ValueTAg.value = "";
  header.classList.remove("you_have_right");
  question.classList.remove("you_have_right");
}
//Слушает кнопку для перезапуска игры
againButton.addEventListener("click", restartGame);

//Слушает Кнопки для сравнения введённого числа и для обнуления игры
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    startPlay();
  }

  if (e.key == "Escape") {
    restartGame();
  }
});

//Ф-ция пишет текст
function WritesMessage(variable, message) {
  variable.textContent = message;
}
