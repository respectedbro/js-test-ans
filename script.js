const startBtn = document.querySelector('.test__start-btn');
const questions = document.querySelector('.test__questions');
const nextBtn = document.querySelector('.test__btn-next');

const questionsCountElement = document.querySelector('.questions__count');
const correctAnswerElement = document.querySelector('.correct');
const incorrectAnswerElement = document.querySelector('.incorrect');
const questionElements = document.querySelectorAll('.questions__elem');
const results = document.querySelector('.test__results');

let questionIndex = 0;
let answerSelected = false;
let correctAnswer = 0;
let incorrectAnswer = 0;


questions.style.display = 'none';
nextBtn.style.display = 'none';
// results.style.display = 'none';
questionElements.forEach(question => {
    question.style.display = 'none';
});

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    questions.style.display = 'flex';
    questionElements[0].style.display = 'flex';
    questionsCountElement.textContent = '1';
});

questionElements.forEach(question => {
    const answers = question.querySelectorAll('.questions__item button');
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answerSelected) {
                return;
            }
            answerSelected = true;

            if (answer.classList.contains('right-answer')) {
                answer.classList.add('true');
                correctAnswer++;
                correctAnswerElement.textContent = correctAnswer;
            } else {
                answer.classList.add('false');
                incorrectAnswer++;
                incorrectAnswerElement.textContent = incorrectAnswer;

                const correctAnswerBtn = question.querySelector('.right-answer');
                correctAnswerBtn.classList.add('true');
            }

            nextBtn.style.display = 'block';
        });
    });
});

nextBtn.addEventListener('click', () => {
    answerSelected = false;
    nextBtn.style.display = 'none';

    questionElements[questionIndex].style.display = 'none';

    questionIndex++;

    if (questionIndex < questionElements.length) {

        questionElements[questionIndex].style.display = 'flex';
        questionsCountElement.textContent = questionIndex + 1;
    } else {

        questions.style.display = 'none';
        results.style.display = 'flex';
    }
});






