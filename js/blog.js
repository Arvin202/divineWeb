const answerBtn = document.querySelector('.answerBtn');
const answer = document.querySelector('.answer');
answerBtn.addEventListener('click', () => {
  answer.classList.remove("answerBlock");
});
