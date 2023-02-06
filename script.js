const quizData = [{
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which HTML tag is used for declare internal css?",
        a: "<style>",
        b: "<link>",
        c: "<script>",
        d: "None of above",
        correct: "a",
    },
    {
        question: "Which CSS property is used to specify different border styles?",
        a: "border-style",
        b: "border",
        c: "Both A & B",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following are valid CSS position property values?",
        a: "static",
        b: "relative",
        c: "fixed",
        d: "All of above",
        correct: "d",
    },
    {
        question: "Which of the following are parts of the CSS box model?",
        a: "Margins",
        b: "Borders",
        c: "Padding",
        d: "All of above",
        correct: "d",

    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

const Submit = () => {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const TryAgain = () => {
    location.reload()
}

const Clear = () => {
    reset();
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="last">
        <h3 style = "text-align: center; font-size:20px; color: black; padding-bottom:25px;padding-top:20px"> Thank You For Answering </h3>
        <h3 class = "result">Total Questions :  ${total} </h3>
        <h3 class = "result">Correct :  ${correct} </h3>
        <h3 class = "result">Wrong :  ${incorrect} </h3>
    </div>
    <button class ="try_again" onclick="TryAgain()"   >Try Again</button>
`
}
loadQuestion(index);