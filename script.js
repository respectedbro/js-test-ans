const startBtn = document.querySelector('.test__start-btn');
const questions = document.querySelector('.questions');
const answers = document.querySelectorAll('.questions__item button');
const questionsCountElement = document.querySelector('.questions__count');
const correctAnswerElement = document.querySelector('.correct');
const incorrectAnswerElement = document.querySelector('.incorrect');

let questionsCount = 0;
let answerSelected = false;
let correctAnswer = 0;
let incorrectAnswer = 0;


startBtn.addEventListener('click', () => {
    questions.style.display = 'flex';
    startBtn.style.display = 'none';
});

answers.forEach((item) => {
    item.addEventListener('click', () => {
        if (answerSelected) {
            return;
        }
        answerSelected = true;

        if (item.classList.contains('right-answer')) {
            item.classList.add('true');
            correctAnswer += 1;
            correctAnswerElement.textContent = correctAnswer;
        } else {
            item.classList.add('false');
            incorrectAnswer += 1;
            incorrectAnswerElement.textContent = incorrectAnswer;
        }


        questionsCount += 1;
        questionsCountElement.textContent = questionsCount;
        console.log(questionsCount);
    });
});







