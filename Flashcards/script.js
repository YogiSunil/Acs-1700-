// Define multiple sets of questions
const questionSets = {
    set1: [
        {
            q: "The scientific name for cat is?",
            a: "Felis catus"
        },
        {
            q: "People who make cats their hobby are known as?",
            a: "Cat fanciers"
        },
        {
            q: "The latin word for cat?",
            a: "cattus"
        }
    ],
    set2: [
        {
            q: "What is the capital of France?",
            a: "The capital is Paris."
        },
        {
            q: "What is the capital of Spain?",
            a: "The capital is Madrid."
        },
        {
            q: "What is the capital of Italy?",
            a: "The capital is Rome."
        }
    ]
};

// Variables to track the current question index and the current question set
let currentQuestionSet = 'set1';
let currentQuestionIndex = 0;

// Getting references to the elements
const questionContainer = document.getElementById('flip-card');
const scoreDisplay = document.getElementById('score');
const questionText = document.querySelector('#q-card p');
const answerText = document.querySelector('#a-card p');


function loadQuestions(set) {
    currentQuestionSet = set;
    currentQuestionIndex = 0; 
    showCurrentQuestion(); 
}

// Function to show the current question
function showCurrentQuestion() {
    const currentQuestion = questionSets[currentQuestionSet][currentQuestionIndex];
    questionText.textContent = currentQuestion.q; 
    answerText.textContent = currentQuestion.a; 
    scoreDisplay.textContent = `Question ${currentQuestionIndex + 1}/${questionSets[currentQuestionSet].length}`;
}

// Event listener for switching question sets
document.getElementById('button-container').addEventListener('click', e => {
    if (e.target.matches('#set1-button')) {
        loadQuestions('set1');
    } else if (e.target.matches('#set2-button')) {
        loadQuestions('set2');
    }
});

// Event listener for handling clicks
document.body.addEventListener('click', e => {
    console.log(e)
    if (e.target.matches('#answer-button')) {
        questionContainer.classList.add('flip');
    } else if (e.target.matches('#question-button')) {
        questionContainer.classList.remove('flip'); 
    } else if (e.target.matches('#next-button')) {
        questionContainer.classList.remove('flip'); 
        currentQuestionIndex = (currentQuestionIndex + 1) % questionSets[currentQuestionSet].length; 
        showCurrentQuestion(); 
    }
});


showCurrentQuestion();
