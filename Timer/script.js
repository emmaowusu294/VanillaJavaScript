let timerInterval;
let timeLeft = 15;
const timerEl = document.getElementById('timer');


function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    updateTimerDisplay();
  
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        checkAnswer(-1); // -1 means time ran out
      }
    }, 1000);
  
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
  
    q.options.forEach((option, index) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.addEventListener('click', () => {
        clearInterval(timerInterval); // stop timer if user answers
        checkAnswer(index);
      });
      li.appendChild(btn);
      optionsEl.appendChild(li);
    });
  }
  


  function updateTimerDisplay() {
    timerEl.textContent = `Time Left: ${timeLeft}s`;
  }
  



  function showScore() {
    questionEl.classList.add('hidden');
    optionsEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
    timerEl.classList.add('hidden');
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
    scoreEl.classList.remove('hidden');
  }
  