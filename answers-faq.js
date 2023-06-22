const questions = document.querySelectorAll('#faq h1');

questions.forEach((question) => {
  question.addEventListener('mouseover', () => {
    const answer = question.nextElementSibling;
    answer.classList.add('show');
  });

  question.addEventListener('mouseout', () => {
    const answer = question.nextElementSibling;
    answer.classList.remove('show');
  });
});