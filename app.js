const correctAnswers = ['B', 'A', 'A', "B"];

const form = document.querySelector('.quiz-form');

const showScore = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // scroll to the top when the score is displayed
    scrollTo(0,0);
    showScore.classList.remove('d-none');
    console.log("Score: ", score);

    //score animation
    let output = 0;
    const timer = setInterval(() => {
        showScore.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output += 1;
        }

    }, 10);
});