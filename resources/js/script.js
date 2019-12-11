$(document).ready(function() {
    var quizContainer = $(".question-slide");
    var resultsContainer = $(".answer");
    var slide = $(".slide");

    function correctAnswer() {
        console.log("bingo");
    }
    function incorrectAnswer() {
        console.log("boo");
    }

    function buildQuiz(){
        questions.forEach(function(currentQuestion) {
            var questionText = $("<p>").text(currentQuestion.title);            
            quizContainer.append(questionText);

            currentQuestion.choices.forEach(function(choice) {
                var choiceButton = $("<button>");
                choiceButton.text(choice);
                choiceButton.on("click", function() {
                    if (choice === currentQuestion.answer) {
                        correctAnswer()
                    } else {
                        incorrectAnswer()
                    }
                });
                quizContainer.append(choiceButton);
            });
        });
    };

    $("#start-button").on("click", function() {
        $("#landing").hide();
        buildQuiz();
    });

});