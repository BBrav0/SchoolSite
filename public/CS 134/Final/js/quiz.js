// Password Knowledge Quiz Functionality

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('quizResults');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    const retakeBtn = document.getElementById('retakeBtn');
    
    // Correct answers
    const answers = {
        q1: 'c', // Which is strongest password
        q2: 'true', // Should use different passwords
        q3: 'false', // Common words good idea
        q4: ['length', 'complexity', 'unique'], // What makes password strong (checkboxes)
        q5: 'b', // How often change passwords (dropdown)
        q6: 'b', // What is 2FA
        q7: ['urgent', 'sender', 'grammar', 'links'], // Signs of phishing (checkboxes)
        q8: 'c', // What to do with suspicious text
        q9: 'b', // Password manager benefit
        q10: 'b' // Legitimate URL
    };
    
    // Submit quiz
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        let totalQuestions = 10;
        
        // Question 1 (radio)
        const q1Answer = document.querySelector('input[name="q1"]:checked');
        if (q1Answer && q1Answer.value === answers.q1) {
            score++;
        }
        
        // Question 2 (radio)
        const q2Answer = document.querySelector('input[name="q2"]:checked');
        if (q2Answer && q2Answer.value === answers.q2) {
            score++;
        }
        
        // Question 3 (radio)
        const q3Answer = document.querySelector('input[name="q3"]:checked');
        if (q3Answer && q3Answer.value === answers.q3) {
            score++;
        }
        
        // Question 4 (checkboxes - must select all correct ones)
        const q4Answers = Array.from(document.querySelectorAll('input[name="q4"]:checked'))
            .map(cb => cb.value);
        const q4Correct = answers.q4.every(ans => q4Answers.includes(ans)) && 
                         q4Answers.length === answers.q4.length;
        if (q4Correct) {
            score++;
        }
        
        // Question 5 (dropdown)
        const q5Answer = document.querySelector('select[name="q5"]').value;
        if (q5Answer === answers.q5) {
            score++;
        }
        
        // Question 6 (radio)
        const q6Answer = document.querySelector('input[name="q6"]:checked');
        if (q6Answer && q6Answer.value === answers.q6) {
            score++;
        }
        
        // Question 7 (checkboxes - must select all correct ones)
        const q7Answers = Array.from(document.querySelectorAll('input[name="q7"]:checked'))
            .map(cb => cb.value);
        const q7Correct = answers.q7.every(ans => q7Answers.includes(ans)) && 
                         q7Answers.length === answers.q7.length;
        if (q7Correct) {
            score++;
        }
        
        // Question 8 (dropdown)
        const q8Answer = document.querySelector('select[name="q8"]').value;
        if (q8Answer === answers.q8) {
            score++;
        }
        
        // Question 9 (radio)
        const q9Answer = document.querySelector('input[name="q9"]:checked');
        if (q9Answer && q9Answer.value === answers.q9) {
            score++;
        }
        
        // Question 10 (radio)
        const q10Answer = document.querySelector('input[name="q10"]:checked');
        if (q10Answer && q10Answer.value === answers.q10) {
            score++;
        }
        
        // Calculate percentage
        const percentage = Math.round((score / totalQuestions) * 100);
        
        // Display results
        scoreDisplay.textContent = `${score} / ${totalQuestions} (${percentage}%)`;
        
        // Provide feedback based on score
        let feedback = '';
        if (percentage >= 80) {
            feedback = '🎉 Excellent! You have a strong understanding of password security. Keep up the good practices!';
        } else if (percentage >= 60) {
            feedback = '👍 Good job! You have a decent grasp of password basics, but there\'s room for improvement.';
        } else if (percentage >= 40) {
            feedback = '📚 Not bad, but you should review the password basics and security tips sections to strengthen your knowledge.';
        } else {
            feedback = '⚠️ You might want to spend more time learning about password security. Check out our educational pages!';
        }
        
        feedbackDisplay.textContent = feedback;
        
        // Show results and hide form
        resultsDiv.classList.add('show');
        quizForm.style.display = 'none';
        
        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    // Retake quiz
    retakeBtn.addEventListener('click', function() {
        // Reset form
        quizForm.reset();
        
        // Hide results and show form
        resultsDiv.classList.remove('show');
        quizForm.style.display = 'block';
        
        // Scroll to top of form
        quizForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

