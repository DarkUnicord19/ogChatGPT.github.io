document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const idkBtn = document.getElementById("idk-btn");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result");
    const restartBtn = document.getElementById("restart-btn");
    const squidwardContainer = document.getElementById("squidward-container");
    const questionText = document.querySelector("#squidward-container .question");
    
    const questions = [
        "Would you like to go on a date with me?",
        "Do you enjoy fine art like interpretive dance?",
        "Would you be interested in listening to clarinet music together?",
        "Do you think my nose is too big?",
        "Are you a fan of Krabby Patties?"
    ];
    
    let currentQuestionIndex = 0;

    function askQuestion() {
        if (currentQuestionIndex < questions.length) {
            questionText.textContent = questions[currentQuestionIndex];
        } else {
            showResult();
        }
    }

    function showResult() {
        squidwardContainer.style.display = "none";
        resultContainer.style.display = "block";

        let result = "Sorry, I don't think we're compatible.";

        if (currentQuestionIndex >= 3) {
            result = "Congratulations! You've won my heart!";
        }

        resultText.textContent = result;
    }

    function restartGame() {
        currentQuestionIndex = 0;
        squidwardContainer.style.display = "block";
        resultContainer.style.display = "none";
        askQuestion();
    }

    askQuestion();

    yesBtn.addEventListener("click", function() {
        currentQuestionIndex++;
        askQuestion();
    });

    noBtn.addEventListener("click", function() {
        currentQuestionIndex++;
        askQuestion();
    });

    idkBtn.addEventListener("click", function() {
        currentQuestionIndex++;
        askQuestion();
    });

    restartBtn.addEventListener("click", restartGame);
});
