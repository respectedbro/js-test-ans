const startBtn = document.querySelector('.test__start-btn');
const questions = document.querySelector('.test__questions');
const nextBtn = document.querySelector('.test__btn-next');
const againBtn = document.querySelector('.again');

const questionsCountElement = document.querySelector('.questions__count');
const correctAnswerElement = document.querySelector('.correct');
const incorrectAnswerElement = document.querySelector('.incorrect');
const questionElements = document.querySelectorAll('.questions__elem');
const results = document.querySelector('.test__results');

let questionIndex = 0;
let answerSelected = false;
let correctAnswer = 0;
let incorrectAnswer = 0;

const showElems = (elem) => {
  startBtn.style.display = 'none';
  questions.style.display = 'none';
  nextBtn.style.display = 'none';
  results.style.display = 'none';
  againBtn.style.display = 'none';

  if (elem.includes('startBtn')) startBtn.style.display = 'block';
  if (elem.includes('questions')) questions.style.display = 'flex';
  if (elem.includes('nextBtn')) nextBtn.style.display = 'block';
  if (elem.includes('results')) results.style.display = 'flex';
  if (elem.includes('againBtn')) againBtn.style.display = 'block';
};

const startQuestions = () => {
  questionElements.forEach(question => {
    question.style.display = 'none';
  });
};

startQuestions();
showElems(['startBtn']);

startBtn.addEventListener('click', () => {
  startQuestions();
  showElems(['questions']);
  questionElements[0].style.display = 'flex';
  questionsCountElement.textContent = '1';
});

questionElements.forEach(question => {
  const inputAnswers = document.querySelectorAll('.question__input');
  const answers = question.querySelectorAll('.questions__item button');

  answers.forEach(answer => {
    answer.addEventListener('click', () => {
      if (answerSelected) {
        return;
      }
      answerSelected = true;

      answers.forEach(btn => {
        btn.style.pointerEvents = 'none';
      });

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

      showElems(['questions', 'nextBtn']);
    });
  });

  inputAnswers.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !answerSelected) {
        answerSelected = true;
        // input.readOnly = true;

        const corrAnswer = input.dataset.correct;
        const userAnswer = input.value.toLowerCase().trim();

        if (userAnswer.toLowerCase() === corrAnswer.toLowerCase()) {
          input.classList.add('true');
          correctAnswer++;
          correctAnswerElement.textContent = correctAnswer;
        } else {
          input.classList.add('false');
          incorrectAnswer++;
          incorrectAnswerElement.textContent = incorrectAnswer;
        }

        showElems(['questions', 'nextBtn']);
      }
    });
  });
});

nextBtn.addEventListener('click', () => {
  answerSelected = false;
  questionElements[questionIndex].style.display = 'none';
  questionIndex++;

  if (questionIndex < questionElements.length) {

    questionElements[questionIndex].style.display = 'flex';
    questionsCountElement.textContent = questionIndex + 1;
    showElems(['questions']);

    if (questionIndex === questionElements.length - 1) {
      nextBtn.textContent = 'Посмотреть результаты';
    }
  } else {
    showElems(['results', 'againBtn']);
  }
});

againBtn.addEventListener('click', () => {
  questionIndex = 0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  correctAnswerElement.textContent = '0';
  incorrectAnswerElement.textContent = '0';
  answerSelected = false;
  nextBtn.textContent = 'Следующий вопрос';

  questionElements.forEach(question => {
    question.style.display = 'none';
    const buttons = question.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.classList.remove('true', 'false');
      btn.style.pointerEvents = 'auto';
    });

    const inputs = question.querySelectorAll('.question__input');
    inputs.forEach(input => {
      input.classList.remove('true', 'false');
      input.value = '';
    });
  });

  showElems(['questions']);
  questionElements[0].style.display = 'flex';
  questionsCountElement.textContent = '1';
});






