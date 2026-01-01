document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    
    let score = 0;
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9']; // List of question names
    
    questions.forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected) {
            score += parseInt(selected.value);
        }
    });
    
    // Display results
    const resultsDiv = document.getElementById('results');
    const scoreText = document.getElementById('score-text');
    
    if (score <= 4) {
        scoreText.textContent = `Your score: ${score}. Minimal symptoms.`;
    } else if (score <= 9) {
        scoreText.textContent = `Your score: ${score}. Mild symptoms. Consider monitoring.`;
    } else if (score <= 14) {
        scoreText.textContent = `Your score: ${score}. Moderate symptoms. Talk to a professional.`;
    } else {
        scoreText.textContent = `Your score: ${score}. Severe symptoms. Seek immediate help.`;
    }
    
    resultsDiv.style.display = 'block';
});