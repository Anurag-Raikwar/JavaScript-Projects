const questions = [
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Antarctica",correct:false},
            {text:"Sahara",correct:true}
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:true},
            {text:"Australia",correct:false},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ]
    },
    {
        question:"Which is the longest river in the world?",
        answers:[
            {text:"Amazon",correct:false},
            {text:"Ganga",correct:false},
            {text:"Nile",correct:true},
            {text:"Thames",correct:false}
        ]
    }
];

const questionElememt = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElememt.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = none;
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');

    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct == 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElememt.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again !!!";
    nextButton.style.display = 'block';
    // resetState();
}
function handleNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener('click',(e)=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();