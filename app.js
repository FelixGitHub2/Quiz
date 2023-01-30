let quizForm = document.querySelector("form");
let finishedScreen = document.querySelector(".finished");
let pointsLabel = document.querySelector(".points-label");
let sendButton = document.querySelector(".send-button");


sendButton.addEventListener("click", handleForm);

function handleForm() {
    let points = 0;
    let answers = document.querySelectorAll("input:checked");
    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt(answers[answer].value, 10);
    }
    pointsLabel.innerHTML = points;
}