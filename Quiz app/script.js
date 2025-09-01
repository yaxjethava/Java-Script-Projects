const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: "<script>"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const quizBox = document.getElementById("quiz-box");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(val => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = val;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(button, val);
    
        
        li.appendChild(button);
        optionsEl.appendChild(li);
    });
    console.log(optionsEl);
    
    nextBtn.style.display = "none"; // hide Next until answer chosen
}

function checkAnswer(button, selected) 
{
    console.log(button,selected);
    const allButtons = document.querySelectorAll(".option-btn");

    // disable all buttons
    allButtons.forEach(btn => btn.disabled = true);

    // check answer
    if (selected === quizData[currentQuestion].answer) {
        score++;
        button.style.backgroundColor = "#4ade80"; // green
        button.style.color = "white";
    } else {
        button.style.backgroundColor = "#f87171"; // red
        button.style.color = "white";

        // highlight correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === quizData[currentQuestion].answer) {
                btn.style.backgroundColor = "#4ade80";
                btn.style.color = "white";
            }
        });
    }

    nextBtn.style.display = "block"; // show Next button
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
}

// Shuffle questions
quizData.sort(()=>Math.random()-0.5);
console.log(Math.random() - 0.5);


loadQuestion();
