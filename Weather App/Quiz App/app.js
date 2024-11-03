let questions = [
    {
        q: "What is the capital city of Australia?",
        op1: "Sydney",
        op2: "Melbourne",
        op3: "Canberra",
        op4: "Brisbane",
        correct: "Canberra"
    },
    {
        q: "Who was the first president of the United States?",
        op1: "Thomas Jefferson",
        op2: "Abraham Lincoln",
        op3: "George Washington",
        op4: "John Adams",
        correct: "George Washington"
    },
    {
        q: "What is the chemical symbol for gold?",
        op1: "Au",
        op2: "Ag",
        op3: "Pb",
        op4: "Fe",
        correct: "Au"
    },
    {
        q: 'Who wrote the play "Romeo and Juliet"?',
        op1: "Charles Dickens",
        op2: "Jane Austen",
        op3: "William Shakespeare",
        op4: "Mark Twain",
        correct: "William Shakespeare"
    }
];

let question = document.querySelector("h3");
let options = document.querySelectorAll(".block");
let startbtn = document.querySelector(".ready");
let opt1 = document.querySelector(".option-1");
let opt2 = document.querySelector(".option-2");
let opt3 = document.querySelector(".option-3");
let opt4 = document.querySelector(".option-4");
let container = document.querySelector(".container");
let container2 = document.querySelector(".start");
let nxtbtn = document.querySelector(".nextbtn");
let scorebox = document.querySelector(".score");
let scoredisplay = document.querySelector(".sre");
let resetbtn = document.querySelector(".Restart");
let i = 0;
let score = 0;


function resetOptions() {
    options.forEach((option) => {
        option.style.backgroundColor = "";
        option.classList.remove("disabled");
    });
    nxtbtn.style.display = "none";
}


function showQuestion(qno) {
    question.innerText = questions[qno].q;
    opt1.innerText = questions[qno].op1;
    opt2.innerText = questions[qno].op2;
    opt3.innerText = questions[qno].op3;
    opt4.innerText = questions[qno].op4;
    resetOptions();
}


startbtn.addEventListener("click", () => {
    container2.style.display = "none";
    container.style.display = "initial";
    showQuestion(i);
});


function disableOptions() {
    options.forEach((option) => {
        option.classList.add("disabled");
    });
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        if (!option.classList.contains("disabled")) {
            if (option.innerText === questions[i].correct) {
                score++;
                option.style.backgroundColor = "green";
            } else {
                option.style.backgroundColor = "red";
            }
            disableOptions();  
            nxtbtn.style.display = "initial";
        }
    });
});


nxtbtn.addEventListener("click", () => {
    i++;
    if (i < questions.length) {
        showQuestion(i);
    } else {
        container.style.display = "none";
        scorebox.style.display = "initial";
        scoredisplay.innerText = `Your score is ${score} out of ${questions.length}`;
    }
});

resetbtn.addEventListener("click", () => {
    resetQuiz();
});

function resetQuiz() {
    i = 0;
    score = 0;
    container.style.display = "none";
    scorebox.style.display = "none";
    container2.style.display = "initial";
}
