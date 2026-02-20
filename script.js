let currentIdx = 0;
let userAnswers = {};
let timeLeft = 2400; // 40 minutes

// Shuffle Function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Timer
const timer = setInterval(() => {
    timeLeft--;
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    document.getElementById('timer-display').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
    if (timeLeft <= 0) { clearInterval(timer); showResults(); }
}, 1000);

function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById('question-text').innerText = `${currentIdx + 1}. ${q.q}`;
    document.getElementById('q-progress').innerText = `Question ${currentIdx + 1}/${questions.length}`;
    document.getElementById('progress-fill').style.width = `${((currentIdx + 1) / questions.length) * 100}%`;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    // Shuffle options for this question
    let options = [...q.opts];
    
    options.forEach(opt => {
        const div = document.createElement('div');
        div.className = `option ${userAnswers[currentIdx] === opt ? 'selected' : ''}`;
        div.innerText = opt;
        div.onclick = () => { userAnswers[currentIdx] = opt; loadQuestion(); };
        container.appendChild(div);
    });

    document.getElementById('prev-btn').disabled = currentIdx === 0;
    document.getElementById('next-btn').classList.toggle('hide', currentIdx === questions.length - 1);
    document.getElementById('submit-btn').classList.toggle('hide', currentIdx !== questions.length - 1);
}

function changeQuestion(step) {
    currentIdx += step;
    loadQuestion();
}

function showResults() {
    clearInterval(timer);
    document.getElementById('question-view').classList.add('hide');
    document.getElementById('results-view').classList.remove('hide');
    
    let score = 0;
    let html = '';
    
    questions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.a;
        if (isCorrect) score++;
        html += `
            <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                <p><strong>${i+1}. ${q.q}</strong></p>
                <p style="color: ${isCorrect ? 'green' : 'red'}">Your Answer: ${userAnswers[i] || 'Skipped'}</p>
                ${!isCorrect ? `<p style="color: green">Correct Answer: ${q.a}</p>` : ''}
            </div>`;
    });
    document.getElementById('score-summary').innerHTML = `<h2>Score: ${score}/${questions.length}</h2>`;
    document.getElementById('review-section').innerHTML = html;
}

// Initial Shuffle and Start
shuffle(questions);
loadQuestion();
