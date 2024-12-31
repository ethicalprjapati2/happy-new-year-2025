document.getElementById('submitQuiz').addEventListener('click', () => {
    const answers = {
      q1: "blue", // Example correct answer for question 1
      q2: "beach trip", // Example correct answer for question 2
      q3: "pizza" // Example correct answer for question 3
    };
  
    const userAnswers = {
      q1: document.getElementById('q1').value.toLowerCase(),
      q2: document.getElementById('q2').value.toLowerCase(),
      q3: document.getElementById('q3').value.toLowerCase()
    };
  
    let score = 0;
    Object.keys(answers).forEach((key) => {
      if (userAnswers[key] === answers[key]) score++;
    });
  
    const result = document.getElementById('quizResult');
    result.innerText = `You got ${score}/3 correct! 🎉`;
    result.style.color = score === 3 ? "limegreen" : "orange";
  });
  